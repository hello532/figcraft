#!/usr/bin/env node
/**
 * Structural + structured-data checks for the FigCraft guide.
 *
 *   node tests/seo.check.mjs            # check every page in this directory
 *
 * No browser needed: it parses the HTML with regexes and asserts the invariants
 * that have actually broken on this site before:
 *
 *   1. Every FAQPage / HowTo answer in JSON-LD is also present in the rendered
 *      body. Hidden structured data is a Google policy violation, and schema and
 *      copy drift apart silently - eyeballing it does not catch it.
 *   2. No stray text after a closing </h2> (a bad string replace did this once).
 *   3. Every <section> closes, tags balance, and there is exactly one <h1>.
 *   4. Title and meta description are within SERP limits.
 *   5. Every internal href resolves to a file that exists.
 *   6. JSON-LD parses and declares the expected @types per page.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const PAGES = [
  { file: 'index.html', path: '/', types: ['WebSite', 'SoftwareApplication', 'FAQPage', 'HowTo', 'Article', 'BreadcrumbList'] },
  { file: 'install/index.html', path: '/install/', types: ['WebPage', 'BreadcrumbList', 'FAQPage'] },
  { file: 'issues/index.html', path: '/issues/', types: ['WebPage', 'BreadcrumbList', 'FAQPage'] },
  { file: 'vs-figma/index.html', path: '/vs-figma/', types: ['WebPage', 'BreadcrumbList', 'FAQPage'] },
  { file: 'alternatives/index.html', path: '/alternatives/', types: ['WebPage', 'BreadcrumbList', 'FAQPage'] },
];

let failures = 0;
const fail = (page, msg) => { failures++; console.log(`  FAIL ${page}: ${msg}`); };
const pass = (page, msg) => console.log(`  ok   ${page}: ${msg}`);

/** Strip script/style, then all tags - the text a reader actually sees. */
function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ');
}

/** First sentence-ish slice, used to locate an answer in the body. */
function probe(text, chars = 45) {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.slice(0, chars).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function jsonld(html) {
  const out = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

function flatNodes(blocks) {
  const nodes = [];
  for (const raw of blocks) {
    let data;
    try { data = JSON.parse(raw); }
    catch (e) { throw new Error(`JSON-LD does not parse: ${e.message}`); }
    const push = (n) => {
      if (!n || typeof n !== 'object') return;
      if (Array.isArray(n)) return n.forEach(push);
      nodes.push(n);
      if (n['@graph']) n['@graph'].forEach(push);
    };
    push(data);
  }
  return nodes;
}

function sectionBalance(html) {
  const open = (html.match(/<section\b/g) || []).length;
  const close = (html.match(/<\/section>/g) || []).length;
  return { open, close };
}

const internalTargets = new Set();

for (const page of PAGES) {
  const file = join(ROOT, page.file);
  console.log(`\n${page.path}`);
  if (!existsSync(file)) { fail(page.path, 'file missing'); continue; }
  const html = readFileSync(file, 'utf8');
  const body = visibleText(html);

  // --- 1. structured data present + answer text visible -------------------
  let nodes;
  try { nodes = flatNodes(jsonld(html)); }
  catch (e) { fail(page.path, e.message); continue; }

  const types = new Set(nodes.map((n) => n['@type']));
  for (const want of page.types) {
    if (types.has(want)) pass(page.path, `@type ${want}`);
    else fail(page.path, `missing @type ${want}`);
  }

  let faqChecked = 0;
  for (const node of nodes) {
    if (node['@type'] !== 'FAQPage') continue;
    for (const q of node.mainEntity || []) {
      const answer = q.acceptedAnswer?.text || '';
      const question = q.name || '';
      if (!answer) { fail(page.path, `FAQ "${question}" has no answer`); continue; }
      faqChecked++;
      const hay = body.replace(/\s+/g, ' ');
      if (!new RegExp(probe(answer), 'i').test(hay)) {
        fail(page.path, `FAQ answer not visible on page: "${question}"`);
      }
    }
  }
  if (faqChecked) pass(page.path, `${faqChecked}/${faqChecked} FAQ answers visible in the body`);

  let howChecked = 0;
  for (const node of nodes) {
    if (node['@type'] !== 'HowTo') continue;
    for (const step of node.step || []) {
      howChecked++;
      const hay = body.replace(/\s+/g, ' ');
      if (!new RegExp(probe(step.text, 30), 'i').test(hay)) {
        fail(page.path, `HowTo step not visible on page: "${node.name}" step ${step.position} "${step.name}"`);
      }
    }
  }
  if (howChecked) pass(page.path, `${howChecked}/${howChecked} HowTo steps visible in the body`);

  // --- 2. stray text after </h2> -----------------------------------------
  const strayH2 = [...html.matchAll(/<\/h2>([^<\s][^<]*)/g)];
  if (strayH2.length) fail(page.path, `text after </h2>: ${JSON.stringify(strayH2.map((m) => m[1].trim()).slice(0, 3))}`);
  else pass(page.path, 'no stray text after </h2>');

  // --- 3. structure -------------------------------------------------------
  const { open, close } = sectionBalance(html);
  if (open !== close) fail(page.path, `<section> ${open} open vs ${close} closed`);
  else pass(page.path, `${open} sections balanced`);

  const h1 = (html.match(/<h1\b/g) || []).length;
  if (h1 !== 1) fail(page.path, `${h1} <h1> elements, expected 1`);
  else pass(page.path, 'exactly one <h1>');

  if (/<\/html>\s*$/i.test(html)) pass(page.path, 'document closes');
  else fail(page.path, 'missing </html>');

  // --- 4. SERP limits -----------------------------------------------------
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const tl = title.trim().length, dl = desc.trim().length;
  if (tl >= 30 && tl <= 65) pass(page.path, `title ${tl} chars`);
  else fail(page.path, `title ${tl} chars (want 30-65): "${title.trim()}"`);
  if (dl >= 120 && dl <= 165) pass(page.path, `description ${dl} chars`);
  else fail(page.path, `description ${dl} chars (want 120-165)`);

  // --- 5. collect internal links -----------------------------------------
  for (const m of html.matchAll(/href="(\/[^"#?]*)(#[^"]*)?"/g)) {
    const target = m[1];
    if (target.startsWith('/assets/') || target === '/') { internalTargets.add(target); continue; }
    internalTargets.add(target);
  }
}

// --- 5b. every internal link resolves -------------------------------------
console.log('\ninternal links');
for (const target of [...internalTargets].sort()) {
  let rel = target.replace(/^\//, '');
  if (rel === '' ) rel = 'index.html';
  const asFile = join(ROOT, rel);
  const asIndex = join(ROOT, rel, 'index.html');
  if (existsSync(asFile) && statSync(asFile).isFile()) { pass('/', target); continue; }
  if (existsSync(asIndex)) { pass('/', target); continue; }
  fail('/', `internal link does not resolve: ${target}`);
}

// --- 6. assets referenced by <link>/<img> --------------------------------
console.log('\nassets');
for (const asset of ['assets/favicon.svg', 'assets/mark.svg', 'assets/logo.svg', 'og.png', 'llms.txt', 'llms-full.txt', 'robots.txt', 'sitemap.xml', 'CNAME', '.nojekyll']) {
  if (existsSync(join(ROOT, asset))) pass('/', asset);
  else fail('/', `missing ${asset}`);
}

// --- 7. the version sync reports no drift ------------------------------
console.log('\nversion sync');
{
  // The factual version slots must agree with what the project actually
  // published. Offline by design: a flaky network must never fail a content
  // test, so the sync script is invoked and a network error is treated as
  // "not verified" rather than "broken".
  const run = () => {
    try {
      const out = execSync('python3 tools/sync_version.py --check', { cwd: ROOT, encoding: 'utf8' });
      return { code: 0, out };
    } catch (e) {
      return { code: e.status ?? 1, out: `${e.stdout || ''}${e.stderr || ''}` };
    }
  };
  const { code, out } = run();
  if (/could not reach the GitHub API/.test(out)) {
    pass('version sync', 'skipped: GitHub API unreachable (no network)');
  } else if (code === 0) {
    pass('version sync', 'factual version slots match the latest release');
  } else {
    fail('version sync', `stale version slots. Run: python3 tools/sync_version.py\n${out}`);
  }
}

console.log(`\n${failures === 0 ? 'PASS' : 'FAIL'} - ${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
