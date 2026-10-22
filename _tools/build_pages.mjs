#!/usr/bin/env node
/**
 * Builds every page in _tools/content/*.mjs into static HTML at its path,
 * and keeps sitemap.xml + llms.txt in step with what was built.
 *
 *   node _tools/build_pages.mjs           # write pages, sitemap, llms.txt
 *   node _tools/build_pages.mjs --check   # verify the tree is up to date, no writes
 *
 * The five hand-written pages (/, /install/, /issues/, /vs-figma/, /alternatives/)
 * are NOT touched here. They are deployed as authored; this build only adds the
 * tool, template, comparison and guide families around them.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES } from './content/index.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://figcraft.rerivo.com';
const DEFAULT_UPDATED = '2026-10-22';
const CHECK = process.argv.includes('--check');
const REPO = 'https://github.com/storytold/figcraft';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const NAV = [
  { label: 'Tools', href: '/tools/', group: 'tools' },
  { label: 'Templates', href: '/templates/', group: 'templates' },
  { label: 'Compare', href: '/alternatives/', group: 'compare' },
  { label: 'Learn', href: '/learn/', group: 'learn' }
];

const byPath = new Map(PAGES.map((p) => [p.path, p]));

/* ---------------------------------------------------------------- validation */

const problems = [];
const seen = new Set(['', 'install/', 'issues/', 'vs-figma/', 'alternatives/']);
for (const p of PAGES) {
  if (!/^[a-z0-9][a-z0-9\-/]*\/$/.test(p.path)) problems.push(`bad path "${p.path}" (lowercase, trailing slash)`);
  if (seen.has(p.path)) problems.push(`duplicate path "${p.path}"`);
  seen.add(p.path);
  for (const key of ['title', 'h1', 'description', 'body', 'group', 'type']) {
    if (!p[key]) problems.push(`${p.path}: missing ${key}`);
  }
  if (p.description && (p.description.length < 120 || p.description.length > 165)) problems.push(`${p.path}: description is ${p.description.length} chars (want 120-165)`);
  if (p.title && (p.title.length < 30 || p.title.length > 65)) problems.push(`${p.path}: title is ${p.title.length} chars (want 30-65)`);
  if (/<h1\b|<header\b|<footer\b|<main\b/i.test(p.body)) problems.push(`${p.path}: body must not contain h1/header/footer/main`);
  for (const rel of p.related || []) {
    if (!seen.has(rel) && !PAGES.some((x) => x.path === rel)) problems.push(`${p.path}: related target "${rel}" does not exist`);
  }
}
if (problems.length) {
  console.error('content errors:\n  ' + problems.join('\n  '));
  process.exit(1);
}

/* ---------------------------------------------------------------- fragments */

function head(page) {
  const url = `${SITE}/${page.path}`;
  const updated = page.updated || DEFAULT_UPDATED;
  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${url}#page`,
      url,
      name: page.h1,
      description: page.description,
      isPartOf: { '@type': 'WebSite', name: 'FigCraft Guide', url: `${SITE}/` },
      inLanguage: 'en',
      dateModified: updated,
      datePublished: page.published || updated
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: (page.crumbs || []).map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: `${SITE}/${c.path || ''}`
      }))
    }
  ];

  if (page.type === 'tool') {
    graph.push({
      '@type': 'WebApplication',
      '@id': `${url}#app`,
      name: page.h1,
      url,
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any (browser)',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: page.appDescription || page.description,
      publisher: { '@type': 'Organization', name: 'FigCraft Guide', url: `${SITE}/` }
    });
  }
  if (page.type === 'guide' || page.type === 'compare' || page.type === 'pricing') {
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: page.h1,
      description: page.description,
      datePublished: page.published || updated,
      dateModified: updated,
      author: { '@type': 'Organization', name: 'FigCraft Guide', url: `${SITE}/` },
      publisher: { '@type': 'Organization', name: 'FigCraft Guide', url: `${SITE}/` },
      mainEntityOfPage: { '@id': `${url}#page` },
      about: { '@type': 'SoftwareApplication', name: 'FigCraft', applicationCategory: 'DesignApplication', operatingSystem: 'macOS, Windows, Linux, FreeBSD, Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
    });
  }
  if (page.type === 'hub') {
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${url}#collection`,
      name: page.h1,
      description: page.description,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: (page.items || []).map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: `${SITE}/${it.path}` }))
      }
    });
  }
  if (page.terms) {
    graph.push({
      '@type': 'DefinedTermSet',
      '@id': `${url}#terms`,
      name: 'Figma and design-tool glossary',
      hasDefinedTerm: page.terms.map((t) => ({ '@type': 'DefinedTerm', name: t.term, description: t.def }))
    });
  }
  if (page.faq && page.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: page.faq.map((f) => ({
        '@type': 'Question',
        name: plain(f.q),
        acceptedAnswer: { '@type': 'Answer', text: plain(f.a) }
      }))
    });
  }

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="author" content="FigCraft Guide">
<meta name="theme-color" content="#2563eb">
<link rel="canonical" href="${url}">
<link rel="alternate" type="text/plain" href="${SITE}/llms.txt" title="LLMs.txt">
<link rel="alternate" type="text/plain" href="${SITE}/llms-full.txt" title="LLMs full guide">
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
<link rel="stylesheet" href="/assets/site.css">
<script src="/assets/site.js" defer></script>${page.script ? `\n<script type="module" src="/assets/tools/${page.script}" defer></script>` : ''}
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="FigCraft — a Figma alternative written in pure Rust">
<meta property="article:modified_time" content="${updated}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${SITE}/og.png">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header>
  <div class="wrap nav">
    <a class="brand" href="/"><img class="mark-img" src="/assets/mark.svg" alt="" width="28" height="28">FigCraft Guide</a>
    <nav aria-label="Primary">${NAV.map((n) => `<a href="${n.href}"${page.group === n.group ? ' aria-current="page"' : ''}>${n.label}</a>`).join('')}<a href="${REPO}" rel="noopener">GitHub</a><a class="nav-cta" href="/install/">Download</a></nav>
    <div class="nav-tools">
      <button class="nav-icon" type="button" data-theme-toggle aria-label="Toggle theme">☾</button>
      <button class="nav-icon nav-menu-btn" type="button" data-nav-toggle aria-label="Menu" aria-expanded="false" aria-controls="mobile-nav">≡</button>
    </div>
  </div>
  <div class="mobile-nav" id="mobile-nav">${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join('')}<a href="${REPO}" rel="noopener">GitHub</a><a class="nav-cta" href="/install/">Download FigCraft</a></div>
</header>
<main id="main">
  <div class="wrap">
    <div class="hero">
      <ul class="crumbs">${(page.crumbs || []).map((c, i, a) => `<li>${i === a.length - 1 ? `<span>${esc(c.name)}</span>` : `<a href="/${c.path || ''}">${esc(c.name)}</a>`}</li>`).join('')}</ul>
      <p class="eyebrow">${esc(page.eyebrow || '')}</p>
      <h1>${esc(page.h1)}</h1>
      <p class="lede">${page.lede}</p>
      <div class="meta-line"><span>Independent guide</span><span>·</span><span>Updated ${updated}</span><span>·</span><span>Covers FigCraft v0.9.0</span>${page.reading ? `<span>·</span><span>${page.reading} read</span>` : ''}</div>
      <div class="cta">${(page.cta || defaultCta()).map((c) => `<a class="btn ${c.primary ? 'primary' : 'ghost'}" href="${c.href}"${c.external ? ' rel="noopener"' : ''}>${esc(c.label)}</a>`).join('')}</div>
    </div>
${page.body}
${faqBlock(page)}${relatedBlock(page)}
  </div>
</main>
<footer>
  <div class="wrap foot">
    <div>
      <strong>FigCraft Guide</strong> — an independent guide and browser studio. Not affiliated with ArtCraft.
      <div class="note">Last updated ${DEFAULT_UPDATED} · covers FigCraft v0.9.0 · corrections welcome via the source repository.</div>
    </div>
    <nav aria-label="Footer">
      <a href="/tools/">Tools</a>
      <a href="/templates/">Templates</a>
      <a href="/pricing/">Pricing</a>
      <a href="/learn/">Learn</a>
      <a href="/glossary/">Glossary</a>
      <a href="/issues/">Known issues</a>
      <a href="/install/">Install</a>
      <a href="${REPO}" rel="noopener">Source</a>
    </nav>
  </div>
</footer>
</body>
</html>
`;
}

function defaultCta() {
  return [
    { label: 'Download FigCraft', href: '/install/', primary: true },
    { label: 'Open the studio', href: '/#demo' }
  ];
}

function faqBlock(page) {
  if (!page.faq || !page.faq.length) return '';
  return `
    <section id="faq">
      <h2>Questions this page answers</h2>
      <p class="sub">Straight answers, with the limits stated. Every claim here is checkable against the sources linked above.</p>
      ${page.faq.map((f) => `<details><summary>${esc(f.q)}</summary><p>${f.a}</p></details>`).join('\n      ')}
    </section>`;
}

function relatedBlock(page) {
  const rel = (page.related || []).filter((p) => byPath.has(p));
  if (!rel.length) return '';
  return `
    <section class="related" id="related">
      <h2>Keep going</h2>
      <div class="grid">
        ${rel.map((p) => {
          const q = byPath.get(p);
          return `<a class="card" href="/${q.path}"><span class="k">${esc(q.eyebrow || q.type)}</span><h3>${esc(q.h1)}</h3><p>${esc(stripTags(q.lede))}</p></a>`;
        }).join('\n        ')}
      </div>
    </section>`;
}

const stripTags = (s) => String(s).replace(/<[^>]+>/g, '');
// Mirrors how a browser flattens markup: block boundaries become spaces,
// inline tags vanish, so "template</strong>." stays "template." not "template .".
const BLOCK_TAG = /<\/?(?:p|div|section|article|li|ul|ol|h[1-6]|tr|td|th|thead|tbody|summary|details|pre|blockquote|br|table)\b[^>]*>/gi;
const plain = (s) =>
  String(s)
    .replace(BLOCK_TAG, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/* ---------------------------------------------------------------- outputs */

const outputs = new Map();

for (const page of PAGES) {
  const file = join(ROOT, page.path, 'index.html');
  outputs.set(file, head(page));
}

// sitemap: the five hand-written pages keep their entries, generated pages follow.
const pinned = [
  { loc: '', priority: '1.0', changefreq: 'weekly', lastmod: DEFAULT_UPDATED, image: true },
  { loc: 'issues/', priority: '0.9', changefreq: 'weekly', lastmod: DEFAULT_UPDATED },
  { loc: 'install/', priority: '0.8', changefreq: 'monthly', lastmod: DEFAULT_UPDATED },
  { loc: 'vs-figma/', priority: '0.8', changefreq: 'monthly', lastmod: DEFAULT_UPDATED },
  { loc: 'alternatives/', priority: '0.7', changefreq: 'monthly', lastmod: DEFAULT_UPDATED }
];

const entries = [
  ...pinned.map(
    (p) => `  <url>
    <loc>${SITE}/${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>${p.image ? `
    <image:image>
      <image:loc>${SITE}/og.png</image:loc>
      <image:title>FigCraft — a Figma alternative written in pure Rust</image:title>
    </image:image>` : ''}
  </url>`
  ),
  ...PAGES.map(
    (p) => `  <url>
    <loc>${SITE}/${p.path}</loc>
    <lastmod>${p.updated || DEFAULT_UPDATED}</lastmod>
    <changefreq>${p.changefreq || 'monthly'}</changefreq>
    <priority>${p.priority || '0.7'}</priority>
  </url>`
  )
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`;
outputs.set(join(ROOT, 'sitemap.xml'), sitemap);

// llms.txt: page groups, so answer engines can find the new families.
const groups = [
  ['Tools (run in the browser, no signup)', 'tools'],
  ['Templates', 'templates'],
  ['Comparisons and pricing', 'compare'],
  ['Guides', 'learn']
];
const llms = `# FigCraft Guide

> An independent guide, known-issue tracker summary, and customizable browser canvas studio for FigCraft, an open-source Figma alternative written in pure Rust.

## Full source for answer engines

- [llms-full.txt](${SITE}/llms-full.txt): facts, known issues, comparisons, install steps, studio capabilities and citation.

## Pages

- [FigCraft Guide](${SITE}/): what FigCraft is, a FigCraft vs Figma comparison, known issues from the GitHub tracker, how to run it (prebuilt download matrix or a Cargo build with \`craft-fonts\`), a no-signup canvas studio, and an FAQ covering \`.fig\` import, fonts and multiplayer.
- [Known issues](${SITE}/issues/): large \`.fig\` imports and the grid-auto-layout data loss, instance-swap overrides, missing font fallback, macOS 27/M1 launch crash, Windows DX12 blur, 1440p UI scale, web file access and CLI path roots, with links to the source issues.
- [Install](${SITE}/install/): system requirements, which download to pick (Linux AppImage/.deb/.rpm/flatpak/.pkg.tar.zst, Windows, macOS universal, FreeBSD x86_64, Web), or build from source with Cargo and \`craft-fonts\`.
- [FigCraft vs Figma](${SITE}/vs-figma/): license, platform, account, file format, collaboration, Dev Mode, maturity and price compared side by side, plus what a \`.fig\` import actually loses and which team should pick which.
- [FigCraft alternatives](${SITE}/alternatives/): Penpot, Plasmic and Figma, and which open-source option fits which team.
- [Studio](${SITE}/#demo): a browser canvas with size presets, custom width/height, background, transparency, grid, zoom, layers, properties, undo/redo and PNG/JSON export.

${groups
  .map(
    ([title, group]) => `## ${title}

${PAGES.filter((p) => p.group === group)
  .map((p) => `- [${p.h1}](${SITE}/${p.path}): ${stripTags(p.description)}`)
  .join('\n')}`
  )
  .join('\n\n')}

## Source project

- [storytold/figcraft](${REPO}): the open-source project this page is about.
- License: MIT OR Apache-2.0. Status: early alpha, about 49% parity by the project's own estimate.
`;
outputs.set(join(ROOT, 'llms.txt'), llms);

/* ---------------------------------------------------------------- write */

let wrote = 0;
let stale = [];
for (const [file, content] of outputs) {
  const existing = existsSync(file) ? readFileSync(file, 'utf8') : null;
  if (existing === content) continue;
  if (CHECK) {
    stale.push(file.replace(ROOT + '/', ''));
    continue;
  }
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
  wrote++;
}

if (CHECK) {
  if (stale.length) {
    console.error(`stale (${stale.length}): run node _tools/build_pages.mjs\n  ` + stale.join('\n  '));
    process.exit(1);
  }
  console.log(`OK: ${outputs.size} generated files match content (${PAGES.length} pages).`);
} else {
  console.log(`built ${PAGES.length} pages · ${wrote} file(s) changed`);
}
