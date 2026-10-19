#!/usr/bin/env node
/** Advanced checks: inline text, snapping, copy/paste, shortcuts, SVG, zoom, save. */
const CDP = process.env.CDP || 'http://127.0.0.1:9333';
const PAGE = process.env.STUDIO_URL || 'http://127.0.0.1:8799/';
const list = await (await fetch(`${CDP}/json/list`)).json();
const target = list.find((t) => t.type === 'page' && (t.url || '').startsWith(PAGE));
if (!target) { console.error(`No page at ${PAGE}`); process.exit(2); }
const ws = new WebSocket(target.webSocketDebuggerUrl);
let seq = 0; const pending = new Map(); const checks = [];
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.reject(new Error(m.error.message)) : p.resolve(m.result); } };
const send = (method, params = {}) => new Promise((resolve, reject) => { const id = ++seq; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })); });
const ev = async (expression) => { const r = await send('Runtime.evaluate', { expression, returnByValue: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text); return r.result?.value; };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const check = (name, ok, detail = '') => { checks.push({ name, ok }); if (!ok) throw new Error(`${name} ${detail}`); };
const reload = async () => { await send('Page.reload', { ignoreCache: true }); await wait(900); };
const reset = async () => { await reload(); await ev('localStorage.clear()'); await reload(); await ev('(()=>{window.confirm=()=>true;document.querySelector("#reset").click();return 1})()'); await wait(150); };
const addRect = async (x = 200, y = 150) => { await ev(`(()=>{document.querySelector('[data-tool="rect"]').click();const c=document.querySelector('#canvas'),r=c.getBoundingClientRect();c.dispatchEvent(new PointerEvent('pointerdown',{clientX:r.left+${x},clientY:r.top+${y},bubbles:true}));return 1})()`); await wait(100); };
const props = async () => JSON.parse(await ev(`(()=>{const q=p=>Number(document.querySelector('#props input[data-prop="'+p+'"]')?.value);return JSON.stringify({x:q('x'),y:q('y'),w:q('w'),h:q('h')})})()`));
const drag = async (fromX, fromY, toX, toY, opts = {}) => { await ev(`(()=>{const c=document.querySelector('#canvas'),r=c.getBoundingClientRect();const ev=(t,x,y,o={})=>c.dispatchEvent(new PointerEvent(t,{clientX:x,clientY:y,bubbles:true,...o}));ev('pointerdown',r.left+${fromX},r.top+${fromY},${JSON.stringify(opts)});ev('pointermove',r.left+${toX},r.top+${toY},${JSON.stringify(opts)});ev('pointerup',r.left+${toX},r.top+${toY},${JSON.stringify(opts)});return 1})()`); await wait(100); };

ws.onopen = async () => {
  try {
    await send('Page.enable'); await send('Runtime.enable');
    // Inline text
    await reset();
    await ev(`(()=>{document.querySelector('[data-tool="text"]').click();const c=document.querySelector('#canvas'),r=c.getBoundingClientRect();c.dispatchEvent(new PointerEvent('pointerdown',{clientX:r.left+100,clientY:r.top+80,bubbles:true}));return 1})()`);
    await wait(200);
    check('inline textarea appears', await ev(`!!document.querySelector('.text-editor')`));
    await ev(`(()=>{const t=document.querySelector('.text-editor');t.value='Hello smooth studio';t.dispatchEvent(new Event('input',{bubbles:true}));t.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));return 1})()`);
    await wait(200);
    check('inline text commits', await ev(`!document.querySelector('.text-editor') && document.querySelector('.layer .lname').textContent.includes('Hello')`));

    // Grid snap
    await reset(); await addRect(203, 151);
    let p0 = await props();
    await drag(p0.x + p0.w / 2, p0.y + p0.h / 2, p0.x + p0.w / 2 + 3, p0.y + p0.h / 2 + 3);
    let p1 = await props();
    check('grid snap on move', p1.x % 8 === 0 && p1.y % 8 === 0, JSON.stringify(p1));
    await reset(); await addRect(203, 151);
    p0 = await props();
    await drag(p0.x + p0.w / 2, p0.y + p0.h / 2, p0.x + p0.w / 2 + 3, p0.y + p0.h / 2 + 3, { altKey: true });
    p1 = await props();
    check('Alt disables snapping', p1.x === p0.x + 3 && p1.y === p0.y + 3, JSON.stringify([p0, p1]));

    // Aspect ratio
    await reset(); await addRect();
    p0 = await props();
    await ev(`(()=>{const c=document.querySelector('#canvas'),r=c.getBoundingClientRect();const bw=Number(document.querySelector('#board-w').value),s=r.width/bw;const x=r.left+(${p0.x}+${p0.w})*s,y=r.top+(${p0.y}+${p0.h})*s;const ev=(t,cx,cy,o)=>c.dispatchEvent(new PointerEvent(t,{clientX:cx,clientY:cy,bubbles:true,...o}));ev('pointerdown',x,y,{});ev('pointermove',x+40,y,{shiftKey:true});ev('pointerup',x+40,y,{shiftKey:true});return 1})()`);
    p1 = await props();
    check('Shift keeps aspect ratio', Math.abs(p1.w / p1.h - p0.w / p0.h) < 0.02, JSON.stringify([p0, p1]));

    // Layer filter + zoom to selection
    await reset(); await addRect(160, 120); await addRect(340, 250);
    await ev(`(()=>{const q=document.querySelector('#layer-search');q.value='Rectangle 2';q.dispatchEvent(new Event('input',{bubbles:true}));return 1})()`);
    check('layer filter narrows list', await ev(`document.querySelectorAll('.layer').length===1 && document.querySelector('#layer-count').textContent==='1/2'`));
    await ev(`(()=>{const q=document.querySelector('#layer-search');q.value='';q.dispatchEvent(new Event('input',{bubbles:true}));return 1})()`);
    await ev(`document.querySelector('[data-opt="zoomSelection"]').click()`); await wait(200);
    check('zoom to selection', await ev(`document.querySelector('#zoom').value==='custom'`));

    // Tool options: align, ratio lock, stroke
    await reset(); await addRect();
    await ev(`document.querySelector('[data-align="left"]').click()`);
    let aligned = await props();
    check('align left', aligned.x === 0, JSON.stringify(aligned));
    await ev(`document.querySelector('[data-opt="center"]').click()`);
    aligned = await props();
    check('center on canvas', aligned.x === (720 - aligned.w) / 2, JSON.stringify(aligned));
    await ev(`(()=>{const r=document.querySelector('#opt-ratio');r.checked=true;r.dispatchEvent(new Event('change',{bubbles:true}));const w=document.querySelector('#props input[data-prop="w"]');w.value='240';w.dispatchEvent(new Event('input',{bubbles:true}));return 1})()`);
    const ratioProps = await props();
    check('ratio lock keeps 120:72', Math.abs(ratioProps.h - 144) < 0.6, JSON.stringify(ratioProps));
    await ev(`(()=>{const sw=document.querySelector('#props input[data-prop="strokeWidth"]');sw.value='4';sw.dispatchEvent(new Event('input',{bubbles:true}));const sh=document.querySelector('#props input[data-prop="strokeHex"]');sh.value='#FF0000';sh.dispatchEvent(new Event('input',{bubbles:true}));window.__svg='';HTMLAnchorElement.prototype.click=function(){if(this.download&&this.download.endsWith('.svg'))fetch(this.href).then(r=>r.text()).then(t=>window.__svg=t)};document.querySelector('#export-svg').click();return 1})()`);
    await wait(400);
    check('stroke exported to SVG', await ev(`(window.__svg||'').includes('stroke="#ff0000"')`));

    // Copy/paste
    await reset(); await addRect();
    await ev(`document.body.dispatchEvent(new KeyboardEvent('keydown',{key:'c',metaKey:true,bubbles:true}));document.body.dispatchEvent(new KeyboardEvent('keydown',{key:'v',metaKey:true,bubbles:true}));1`);
    await wait(150);
    check('copy + paste adds layer', await ev(`document.querySelectorAll('.layer').length===2`));

    // Layer drag reorder
    await reset(); await addRect(180, 140); await addRect(320, 240);
    const orderBefore = await ev(`JSON.stringify([...document.querySelectorAll('.layer .lname')].map(x=>x.textContent))`);
    await ev(`(()=>{const rows=[...document.querySelectorAll('.layer')];const dt=new DataTransfer();rows[0].dispatchEvent(new DragEvent('dragstart',{bubbles:true,dataTransfer:dt}));rows[1].dispatchEvent(new DragEvent('dragover',{bubbles:true,cancelable:true,dataTransfer:dt}));rows[1].dispatchEvent(new DragEvent('drop',{bubbles:true,cancelable:true,dataTransfer:dt}));return 1})()`);
    await wait(150);
    const orderAfter = await ev(`JSON.stringify([...document.querySelectorAll('.layer .lname')].map(x=>x.textContent))`);
    check('layer drag reorders', orderBefore !== orderAfter, `${orderBefore} -> ${orderAfter}`);

    // Icon library
    await reset();
    const iconCount = await ev(`document.querySelectorAll('#icon-grid [data-icon]').length`);
    check('60+ icons available', iconCount >= 60, String(iconCount));
    await ev(`document.querySelector('[data-icon="ios-phone"]').click()`); await wait(150);
    check('iOS icon inserts a layer', await ev(`document.querySelectorAll('.layer').length===1 && document.querySelector('#props').innerText.includes('Phone')`));
    await ev(`(()=>{window.__svg='';HTMLAnchorElement.prototype.click=function(){if(this.download&&this.download.endsWith('.svg'))fetch(this.href).then(r=>r.text()).then(t=>window.__svg=t)};document.querySelector('#export-svg').click();return 1})()`);
    await wait(400);
    check('SVG includes icon gradient', await ev(`(window.__svg||'').includes('linearGradient') && (window.__svg||'').includes('<path')`));

    // Page chrome: jump links + theme toggle
    check('jump nav present', await ev(`document.querySelectorAll('#jump a').length>=7`));
    const beforeTheme = await ev(`document.documentElement.dataset.theme || 'auto'`);
    await ev(`document.querySelector('#theme-toggle').click()`); await wait(100);
    const afterTheme = await ev(`document.documentElement.dataset.theme`);
    check('theme toggle switches', afterTheme && afterTheme !== beforeTheme, `${beforeTheme} -> ${afterTheme}`);

    // Shortcuts dialog
    await ev(`document.body.dispatchEvent(new KeyboardEvent('keydown',{key:'?',bubbles:true}));1`); await wait(100);
    check('? opens shortcuts', await ev(`document.querySelector('#shortcuts').hidden===false`));
    await ev(`document.querySelector('#shortcuts-close').click()`);
    check('shortcuts closes', await ev(`document.querySelector('#shortcuts').hidden===true`));

    // SVG export + save status
    await reset(); await addRect();
    await ev(`(()=>{window.__dl=0;HTMLAnchorElement.prototype.click=function(){window.__dl++};document.querySelector('#export-svg').click();return 1})()`); await wait(200);
    check('SVG export triggers', await ev(`window.__dl>=1`));
    let saved = false;
    for (let i = 0; i < 20 && !saved; i++) { await wait(100); saved = await ev(`document.querySelector('#save-state').textContent==='saved'`); }
    check('save status settles', saved);

    // Wheel zoom
    await reset();
    const before = await ev(`document.querySelector('#canvas').getBoundingClientRect().width`);
    await ev(`(()=>{const v=document.querySelector('#viewport');v.dispatchEvent(new WheelEvent('wheel',{deltaY:-120,ctrlKey:true,bubbles:true,cancelable:true}));return 1})()`);
    await wait(150);
    check('Ctrl/Cmd+wheel zooms', await ev(`document.querySelector('#zoom').value==='custom'`));
    const after = await ev(`document.querySelector('#canvas').getBoundingClientRect().width`);
    check('zoom changes canvas size', after > before, `${before} -> ${after}`);

    console.log(`${checks.length} advanced checks passed`);
    process.exit(0);
  } catch (e) {
    console.error('FAILED', e.message);
    console.error(JSON.stringify(checks.slice(-5), null, 2));
    process.exit(1);
  } finally { ws.close(); }
};
