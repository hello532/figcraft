#!/usr/bin/env node
/**
 * 10-round browser test for the FigCraft studio.
 *
 *   python3 -m http.server 8799 --bind 127.0.0.1   # in the site directory
 *   node tests/studio.test.mjs
 *
 * It drives the page over the Chrome DevTools Protocol (port 9333 by default),
 * so a Chromium browser with --remote-debugging-port=9333 must be running.
 * Env: CDP=http://127.0.0.1:9333  STUDIO_URL=http://127.0.0.1:8799/
 */
const CDP = process.env.CDP || 'http://127.0.0.1:9333';
const PAGE = process.env.STUDIO_URL || 'http://127.0.0.1:8799/';
const ROUNDS = Number(process.env.ROUNDS || 10);
const PRESETS = ['720x460', '1440x900', '1280x800', '834x1112', '390x844', '1080x1080'];
const COLORS = ['#0f172a', '#fef3c7', '#e0f2fe', '#111827', '#ffffff', '#1e1b4b'];

const list = await (await fetch(`${CDP}/json/list`)).json();
const target = list.find((t) => t.type === 'page' && (t.url || '').startsWith(PAGE));
if (!target) {
  console.error(`No page at ${PAGE}. Open it first (or start the preview server).`);
  process.exit(2);
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
let seq = 0;
const pending = new Map();
const exceptions = [];
let round = 0;

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.method === 'Page.javascriptDialogOpening') {
    ws.send(JSON.stringify({ id: ++seq, method: 'Page.handleJavaScriptDialog', params: { accept: true, promptText: `Round ${round} text` } }));
    return;
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    const d = msg.params.exceptionDetails;
    exceptions.push(d.exception?.description || d.text || 'exception');
    return;
  }
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(msg.error.message));
    else resolve(msg.result);
  }
};
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++seq;
  pending.set(id, { resolve, reject });
  ws.send(JSON.stringify({ id, method, params }));
});
const evaluate = async (expression, awaitPromise = false) => {
  let last;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise });
      if (res.exceptionDetails) throw new Error(res.exceptionDetails.exception?.description || res.exceptionDetails.text);
      return res.result?.value;
    } catch (err) {
      last = err;
      if (!/navigated|closed|destroyed|context/i.test(err.message)) throw err;
      await wait(250);
    }
  }
  throw last;
};
const json = async (expression) => {
  const value = await evaluate(expression);
  return typeof value === 'string' ? JSON.parse(value) : value;
};
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const waitFor = async (expression, timeout = 4000) => {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      if (await evaluate(expression)) return true;
    } catch (err) {
      if (!/navigated|closed|destroyed|context/i.test(err.message)) throw err;
    }
    await wait(100);
  }
  throw new Error(`timeout: ${expression}`);
};
const reload = async () => {
  await send('Page.reload', { ignoreCache: true });
  await wait(400);
  await waitFor('!!document.querySelector("#canvas")');
  await wait(250);
};
const checks = [];
const check = (name, ok, detail = '') => {
  checks.push({ round, name, ok: !!ok, detail });
  if (!ok) throw new Error(`round ${round}: ${name} ${detail}`);
};

async function runRound(i) {
  round = i;
  exceptions.length = 0;
  await reload();
  await evaluate('localStorage.clear()');
  await reload();
  await evaluate('(() => { window.confirm = () => true; document.querySelector("#reset").click(); return 1; })()');
  await wait(150);

  const preset = PRESETS[i % PRESETS.length];
  const bg = COLORS[i % COLORS.length];
  const alpha = i % 3 === 0;
  const grid = !alpha && i % 2 === 0;
  await evaluate(`(() => {
    const p = document.querySelector('#preset');
    p.value = ${JSON.stringify(preset)};
    p.dispatchEvent(new Event('change', { bubbles: true }));
    const bg = document.querySelector('#board-bg');
    bg.value = ${JSON.stringify(bg)};
    bg.dispatchEvent(new Event('input', { bubbles: true }));
    const a = document.querySelector('#board-alpha');
    a.checked = ${alpha};
    a.dispatchEvent(new Event('change', { bubbles: true }));
    const g = document.querySelector('#grid-on');
    g.checked = ${grid};
    g.dispatchEvent(new Event('change', { bubbles: true }));
    const z = document.querySelector('#zoom');
    z.value = 'fit';
    z.dispatchEvent(new Event('change', { bubbles: true }));
    return 1;
  })()`);

  let board = await json(`(() => {
    const c = document.querySelector('#canvas').getBoundingClientRect();
    return { w: Number(document.querySelector('#board-w').value), h: Number(document.querySelector('#board-h').value), cw: c.width, ch: c.height, zoom: document.querySelector('#zoom').value };
  })()`);
  const [pw, ph] = preset.split('x').map(Number);
  check('preset applied', board.w === pw && board.h === ph, `${board.w}x${board.h}`);
  check('canvas fits viewport', board.cw <= 1000 && board.ch <= 1000, `${board.cw}x${board.ch}`);
  check('fit zoom selected', board.zoom === 'fit', board.zoom);

  // Add a rectangle.
  const pos = { x: 180 + (i % 4) * 30, y: 140 + (i % 3) * 28 };
  await evaluate(`(() => {
    document.querySelector('[data-tool="rect"]').click();
    const c = document.querySelector('#canvas'), r = c.getBoundingClientRect();
    c.dispatchEvent(new PointerEvent('pointerdown', { clientX: r.left + ${pos.x}, clientY: r.top + ${pos.y}, bubbles: true }));
    return 1;
  })()`);
  let props = await json(`(() => {
    const q = (p) => Number(document.querySelector('#props input[data-prop="' + p + '"]')?.value);
    return { layers: document.querySelectorAll('.layer').length, x: q('x'), y: q('y'), w: q('w'), h: q('h') };
  })()`);
  check('rect added and selected', props.layers === 1 && props.w === 120 && props.h === 72, JSON.stringify(props));
  check('tool returns to select', await evaluate(`document.querySelector('[data-tool="select"]').getAttribute('aria-pressed') === 'true'`));

  // Resize from the SE handle by 40 CSS px.
  await evaluate(`(() => {
    const c = document.querySelector('#canvas'), r = c.getBoundingClientRect();
    const bw = Number(document.querySelector('#board-w').value);
    const s = r.width / bw;
    const x = r.left + (${props.x} + ${props.w}) * s, y = r.top + (${props.y} + ${props.h}) * s;
    const ev = (t, cx, cy) => c.dispatchEvent(new PointerEvent(t, { clientX: cx, clientY: cy, bubbles: true }));
    ev('pointerdown', x, y); ev('pointermove', x + 40, y + 24); ev('pointerup', x + 40, y + 24);
    return 1;
  })()`);
  let resized = await json(`(() => {
    const q = (p) => Number(document.querySelector('#props input[data-prop="' + p + '"]')?.value);
    return { x: q('x'), y: q('y'), w: q('w'), h: q('h') };
  })()`);
  check('SE resize grows both axes', resized.w > props.w && resized.h > props.h, JSON.stringify(resized));

  // Move by 24 CSS px.
  await evaluate(`(() => {
    const c = document.querySelector('#canvas'), r = c.getBoundingClientRect();
    const bw = Number(document.querySelector('#board-w').value), s = r.width / bw;
    const x = r.left + (${resized.x} + ${resized.w} / 2) * s, y = r.top + (${resized.y} + ${resized.h} / 2) * s;
    const ev = (t, cx, cy) => c.dispatchEvent(new PointerEvent(t, { clientX: cx, clientY: cy, bubbles: true }));
    ev('pointerdown', x, y); ev('pointermove', x + 24, y + 16); ev('pointerup', x + 24, y + 16);
    return 1;
  })()`);
  let moved = await json(`(() => {
    const q = (p) => Number(document.querySelector('#props input[data-prop="' + p + '"]')?.value);
    return { x: q('x'), y: q('y') };
  })()`);
  check('drag moves layer', moved.x > resized.x && moved.y > resized.y, JSON.stringify(moved));

  // Undo and redo the move.
  await evaluate(`document.querySelector('#undo').click()`);
  let undone = await json(`(() => { const q = (p) => Number(document.querySelector('#props input[data-prop="' + p + '"]')?.value); return { x: q('x'), y: q('y') }; })()`);
  check('undo restores position', undone.x === resized.x && undone.y === resized.y, JSON.stringify(undone));
  await evaluate(`document.querySelector('#redo').click()`);
  let redone = await json(`(() => { const q = (p) => Number(document.querySelector('#props input[data-prop="' + p + '"]')?.value); return { x: q('x'), y: q('y') }; })()`);
  check('redo restores move', redone.x === moved.x && redone.y === moved.y, JSON.stringify(redone));

  // Duplicate and delete.
  await evaluate(`document.querySelector('#duplicate').click()`);
  check('duplicate adds a layer', await evaluate(`document.querySelectorAll('.layer').length === 2`));
  await evaluate(`document.querySelector('#delete').click()`);
  check('delete removes the selected layer', await evaluate(`document.querySelectorAll('.layer').length === 1`));

  // Hide and show.
  await evaluate(`document.querySelector('[data-eye]').click()`);
  check('eye hides layer', await evaluate(`document.querySelector('[data-eye]').textContent.trim() === '◌'`));
  await evaluate(`document.querySelector('[data-eye]').click()`);
  check('eye shows layer', await evaluate(`document.querySelector('[data-eye]').textContent.trim() === '●'`));

  // Add a text layer through the dialog.
  await evaluate(`(() => {
    document.querySelector('[data-tool="text"]').click();
    const c = document.querySelector('#canvas'), r = c.getBoundingClientRect();
    c.dispatchEvent(new PointerEvent('pointerdown', { clientX: r.left + 90, clientY: r.top + 70, bubbles: true }));
    return 1;
  })()`);
  await wait(250);
  check('text layer added', await evaluate(`document.querySelectorAll('.layer').length === 2`));

  // Export hook: count downloads, do not write test files.
  await evaluate(`(() => { window.__dl = 0; const old = HTMLAnchorElement.prototype.click; HTMLAnchorElement.prototype.click = function(){ window.__dl++; }; window.__oldClick = old; return 1; })()`);
  await evaluate(`document.querySelector('#export-json').click()`);
  await wait(250);
  await evaluate(`document.querySelector('#export-png').click()`);
  await wait(2200);
  check('JSON + PNG export triggered', await evaluate(`window.__dl >= 2`), String(await evaluate(`window.__dl`)));

  // Persistence across a reload.
  const before = await json(`(() => ({ layers: document.querySelectorAll('.layer').length, w: Number(document.querySelector('#board-w').value), h: Number(document.querySelector('#board-h').value), bg: document.querySelector('#board-bg').value }))()`);
  await reload();
  const after = await json(`(() => ({ layers: document.querySelectorAll('.layer').length, w: Number(document.querySelector('#board-w').value), h: Number(document.querySelector('#board-h').value), bg: document.querySelector('#board-bg').value }))()`);
  check('localStorage persists board and layers', JSON.stringify(before) === JSON.stringify(after), `${JSON.stringify(before)} != ${JSON.stringify(after)}`);

  check('no uncaught JS exceptions', exceptions.length === 0, exceptions.join(' | '));
  return { round, preset, bg, alpha, grid, layers: after.layers, board: `${after.w}x${after.h}`, checks: checks.filter((c) => c.round === round) };
}

ws.onopen = async () => {
  try {
    await send('Page.enable');
    await send('Runtime.enable');
    const results = [];
    for (let i = 1; i <= ROUNDS; i++) {
      const r = await runRound(i);
      results.push(r);
      console.log(`round ${i}/${ROUNDS} PASS — ${r.preset}, ${r.board}, ${r.layers} layers`);
    }
    const failed = checks.filter((c) => !c.ok);
    console.log(`\n${ROUNDS} rounds, ${checks.length} checks, ${failed.length} failed`);
    if (failed.length) throw new Error(`${failed.length} checks failed`);
    process.exit(0);
  } catch (err) {
    console.error(`FAILED: ${err.message}`);
    const failed = checks.filter((c) => !c.ok);
    if (failed.length) console.error(JSON.stringify(failed.slice(-5), null, 2));
    process.exit(1);
  } finally {
    ws.close();
  }
};
