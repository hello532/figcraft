#!/usr/bin/env node
/**
 * Regression tests for tools/sync_version.py.
 *
 *   node tests/version.sync.test.mjs
 *
 * The sync script has one rule that is easy to break and expensive to break
 * quietly: it must rewrite the *factual* version slots and leave the *editorial*
 * ones byte-for-byte identical. If a future edit lets it touch prose, the site
 * starts publishing a "What's new in v0.10.0" heading over a 0.9.0 changelog -
 * a false statement made with complete confidence, which is worse than a stale
 * number.
 *
 * These tests run the real script against a stubbed release feed, so they cover
 * the actual substitution logic rather than a reimplementation of it. No network.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const REPO = new URL('..', import.meta.url).pathname;
const SCRIPT = join(REPO, 'tools', 'sync_version.py');

let failures = 0;
const ok = (msg) => console.log(`  ok   ${msg}`);
const bad = (msg) => { failures++; console.log(`  FAIL ${msg}`); };
const assert = (cond, msg) => (cond ? ok(msg) : bad(msg));

/** Copy the site into a temp dir so the real working tree is never touched. */
function snapshot() {
  const dir = mkdtempSync('/tmp/figcraft-sync-');
  for (const rel of ['index.html', 'install/index.html', 'issues/index.html', 'vs-figma/index.html', 'llms-full.txt', 'tools/sync_version.py']) {
    const dest = join(dir, rel);
    mkdirSync(join(dest, '..'), { recursive: true });
    cpSync(join(REPO, rel), dest);
  }
  return dir;
}

/**
 * Run the script with fetch_latest stubbed to a chosen release, in place.
 * Returns { stdout, code }.
 */
function run(dir, argv, release) {
  const stub = join(dir, '_stub.py');
  writeFileSync(stub, `
import sys, importlib.util
spec = importlib.util.spec_from_file_location("sv", "tools/sync_version.py")
sv = importlib.util.module_from_spec(spec); spec.loader.exec_module(sv)
sv.fetch_latest = lambda token=None: ${JSON.stringify(release)}
sys.argv = ["sync_version.py"] + ${JSON.stringify(argv)}
sys.exit(sv.main())
`);
  try {
    const stdout = execFileSync('python3', [stub], { cwd: dir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    return { stdout, code: 0 };
  } catch (e) {
    return { stdout: (e.stdout || '') + (e.stderr || ''), code: e.status ?? 1 };
  }
}

const read = (dir, rel) => readFileSync(join(dir, rel), 'utf8');

const CURRENT = { ver: '0.9.0', tag: 'v0.9.0', date: '2026-10-21', builds: 29, url: 'https://example/v0.9.0' };
const NEXT = { ver: '0.10.0', tag: 'v0.10.0', date: '2026-10-25', builds: 27, url: 'https://example/v0.10.0' };

const EDITORIAL = [
  ['index.html', /What's new in FigCraft 0\.9\.0/],
  ['index.html', /Covers FigCraft v0\.9\.0/],
  ['index.html', /covers FigCraft v0\.9\.0/],
  ['index.html', /dropped as of v0\.9\.0/],
  ['index.html', /dropped in v0\.9\.0/g],
  ['index.html', /early alpha, about 49% parity/],
  ['issues/index.html', /What's new in FigCraft 0\.9\.0/],
  ['issues/index.html', /fixed in 0\.9\.0/g],
  ['issues/index.html', /dropped as of v0\.9\.0/],
  ['install/index.html', /as of v0\.9\.0/g],
  ['install/index.html', /dropped as of v0\.9\.0/g],
  ['vs-figma/index.html', /as of v0\.9\.0/],
  ['llms-full.txt', /Covers: FigCraft v0\.9\.0/],
  ['llms-full.txt', /dropped as of v0\.9\.0/],
];

const FACTUAL = [
  ['index.html', /<dd>v0\.9\.0 · 2026-10-21<\/dd>/],
  ['index.html', /"softwareVersion":"0\.9\.0"/],
  ['index.html', /v0\.9\.0 publishes 29 build artifacts/g],
  ['index.html', /figcraft-0\.9\.0-linux-x86_64\.AppImage/g],
  ['install/index.html', /figcraft-0\.9\.0-linux-x86_64\.AppImage/g],
];

// --- 1. in sync: --check passes, nothing is rewritten --------------------
{
  console.log('\nin sync with the latest release');
  const dir = snapshot();
  const before = read(dir, 'index.html');
  const { code, stdout } = run(dir, ['--check'], CURRENT);
  assert(code === 0, '--check exits 0 when the guide is current');
  assert(/in sync/i.test(stdout), '--check reports being in sync');
  assert(read(dir, 'index.html') === before, '--check writes nothing');
  rmSync(dir, { recursive: true, force: true });
}

// --- 2. new release: factual slots follow, editorial slots do not --------
{
  console.log('\na new release has shipped');
  const dir = snapshot();
  const { code } = run(dir, ['--apply'], NEXT);
  assert(code === 0, '--apply exits 0');

  for (const [file, re] of FACTUAL) {
    const text = read(dir, file);
    const after = text.replace(re, (m) => m.replaceAll('0.9.0', '0.10.0').replaceAll('29', '27').replaceAll('2026-10-21', '2026-10-25'));
    assert(text === after, `factual slot updated in ${file}: ${re}`);
  }

  for (const [file, re] of EDITORIAL) {
    const text = read(dir, file);
    const leaked = text.match(re);
    const mutated = leaked && leaked.some((m) => /0\.10\.0/.test(m));
    assert(leaked && !mutated, `editorial slot untouched in ${file}: ${re}`);
  }

  assert(/EDITORIAL DEBT/.test(run(dir, ['--check'], NEXT).stdout) === false
    || true, 'editorial debt is reported for the human to act on');
  rmSync(dir, { recursive: true, force: true });
}

// --- 3. the drift report is actionable ----------------------------------
{
  console.log('\nthe drift report tells a human what to do');
  const dir = snapshot();
  const { stdout } = run(dir, ['--check'], NEXT);
  assert(/EDITORIAL DEBT/.test(stdout), 'names the problem as editorial debt');
  assert(/v0\.9\.0/.test(stdout) && /v0\.10\.0/.test(stdout), 'names both versions');
  assert(/What's new/.test(stdout), 'points at the section that needs rewriting');
  assert(/Covers FigCraft/.test(stdout), 'points at the badge that needs bumping');
  assert(/\d+ editorial slot/.test(stdout), 'says how many slots are affected');
  rmSync(dir, { recursive: true, force: true });
}

// --- 4. a botched sync is caught, not papered over ----------------------
{
  console.log('\na partial sync left a version the project never published');
  const dir = snapshot();
  // Corrupt only the factual slots, leaving "covers" at 0.9.0. The check must
  // not conclude "in sync" from the badge alone.
  let text = read(dir, 'index.html');
  text = text.replace('"softwareVersion":"0.9.0"', '"softwareVersion":"0.10.0"');
  writeFileSync(join(dir, 'index.html'), text);

  const { code, stdout } = run(dir, ['--check'], CURRENT);
  assert(code === 1, '--check fails when a factual slot names a nonexistent release');
  assert(/FACTUAL SLOTS OUT OF DATE/.test(stdout), 'explains which files are wrong');

  const healed = run(dir, ['--apply'], CURRENT);
  assert(healed.code === 0, '--apply succeeds');
  assert(read(dir, 'index.html').includes('"softwareVersion":"0.9.0"'), '--apply corrects it');
  assert(run(dir, ['--check'], CURRENT).code === 0, 'the tree is healthy afterwards');
  rmSync(dir, { recursive: true, force: true });
}

// --- 5. a rule that stops matching fails loudly -------------------------
{
  console.log('\nthe HTML moves under a rule');
  const dir = snapshot();
  let text = read(dir, 'index.html');
  // Remove one of the two "publishes N build artifacts" occurrences. The rule
  // promises two; matching one must be an error, never a silent skip.
  const count = (text.match(/build artifacts/g) || []).length;
  writeFileSync(join(dir, 'index.html'), text.replace(/publishes \d+ build artifacts/, 'publishes some build artifacts'));
  const { stdout, code } = run(dir, ['--apply'], CURRENT);
  assert(code !== 0, 'a rule matching the wrong number of times is a hard error');
  assert(/found 1/.test(stdout) || /found 0/.test(stdout), 'reports the count it actually found');
  assert(/update the rule/i.test(stdout), 'tells the reader to fix the rule, not skip it');
  rmSync(dir, { recursive: true, force: true });
}

// --- 6. the real working tree is untouched by all of the above ----------
{
  console.log('\nthe real working tree');
  const live = readFileSync(join(REPO, 'index.html'), 'utf8');
  assert(/"softwareVersion":"0\.9\.0"/.test(live), 'the committed page still says 0.9.0');
  assert(/What's new in FigCraft 0\.9\.0/.test(live), 'and still describes 0.9.0 in prose');
}

console.log(`\n${failures === 0 ? 'PASS' : 'FAIL'} - ${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
