#!/usr/bin/env node
/** Edge checks: 8 resize handles, keyboard shortcuts, rename, custom board. */
const CDP = process.env.CDP || 'http://127.0.0.1:9333';
const PAGE = process.env.STUDIO_URL || 'http://127.0.0.1:8799/';
const list = await (await fetch(`${CDP}/json/list`)).json();
const target = list.find((t) => t.type === 'page' && (t.url || '').startsWith(PAGE));
if (!target) { console.error(`No page at ${PAGE}`); process.exit(2); }
const ws = new WebSocket(target.webSocketDebuggerUrl);
let seq=0; const pending=new Map(); let dialogText='Renamed';
ws.onmessage=(e)=>{const m=JSON.parse(e.data);
  if(m.method==='Page.javascriptDialogOpening'){ws.send(JSON.stringify({id:++seq,method:'Page.handleJavaScriptDialog',params:{accept:true,promptText:dialogText}}));return;}
  if(m.id&&pending.has(m.id)){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(new Error(m.error.message)):p.resolve(m.result);}
};
const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
const ev=async(expression)=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result?.value;};
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const checks=[];const check=(n,ok,d='')=>{checks.push({n,ok});if(!ok)throw new Error(`${n} ${d}`);};
const reload=async()=>{await send('Page.reload',{ignoreCache:true});await wait(900);};
const props=async()=>JSON.parse(await ev(`(()=>{const q=p=>Number(document.querySelector('#props input[data-prop="'+p+'"]')?.value);return JSON.stringify({x:q('x'),y:q('y'),w:q('w'),h:q('h')})})()`));
async function reset(){await ev('localStorage.clear()');await reload();await ev('(()=>{window.confirm=()=>true;document.querySelector("#reset").click();return 1})()');await wait(150);}
async function addRect(){await ev(`(()=>{document.querySelector('[data-tool="rect"]').click();const c=document.querySelector('#canvas'),r=c.getBoundingClientRect();c.dispatchEvent(new PointerEvent('pointerdown',{clientX:r.left+200,clientY:r.top+150,bubbles:true}));return 1})()`);await wait(100);}
async function dragHandle(name,dx,dy){await ev(`(()=>{const c=document.querySelector('#canvas'),r=c.getBoundingClientRect();const bw=Number(document.querySelector('#board-w').value),s=r.width/bw;const q=p=>Number(document.querySelector('#props input[data-prop="'+p+'"]').value);const H={nw:[q('x'),q('y')],n:[q('x')+q('w')/2,q('y')],ne:[q('x')+q('w'),q('y')],e:[q('x')+q('w'),q('y')+q('h')/2],se:[q('x')+q('w'),q('y')+q('h')],s:[q('x')+q('w')/2,q('y')+q('h')],sw:[q('x'),q('y')+q('h')],w:[q('x'),q('y')+q('h')/2]};const [hx,hy]=H['${name}'];const x=r.left+hx*s,y=r.top+hy*s;const fire=(t,cx,cy)=>c.dispatchEvent(new PointerEvent(t,{clientX:cx,clientY:cy,bubbles:true}));fire('pointerdown',x,y);fire('pointermove',x+${dx},y+${dy});fire('pointerup',x+${dx},y+${dy});return 1})()`);await wait(80);}
ws.onopen=async()=>{try{
  await send('Page.enable');await send('Runtime.enable');
  await reset();await addRect();
  const base=await props();
  const cases={nw:[-30,-20,1,1,1,1],n:[0,-20,0,1,0,1],ne:[30,-20,0,1,1,1],e:[30,0,0,0,1,0],se:[30,20,0,0,1,1],s:[0,20,0,0,0,1],sw:[-30,20,1,0,1,1],w:[-30,0,1,0,1,0]};
  for(const [h,[dx,dy,dxo,dyo,gw,gh]] of Object.entries(cases)){
    await reset();await addRect();const b=await props();await dragHandle(h,dx,dy);const a=await props();
    if(dxo) check(`${h} moves x`,a.x<b.x,JSON.stringify([b,a]));
    if(dyo) check(`${h} moves y`,a.y<b.y,JSON.stringify([b,a]));
    if(gw) check(`${h} grows width`,a.w>b.w,JSON.stringify([b,a]));
    if(gh) check(`${h} grows height`,a.h>b.h,JSON.stringify([b,a]));
  }
  // keyboard shortcuts
  await reset();await addRect();const k0=await props();
  await ev(`document.body.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}));1`);
  const k1=await props();check('ArrowRight moves 1px',k1.x===k0.x+1,JSON.stringify([k0,k1]));
  await ev(`document.body.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',shiftKey:true,bubbles:true}));1`);
  const k2=await props();check('Shift+ArrowRight moves 10px',k2.x===k1.x+10,JSON.stringify([k1,k2]));
  await ev(`document.body.dispatchEvent(new KeyboardEvent('keydown',{key:'d',metaKey:true,bubbles:true}));1`);
  check('Cmd+D duplicates',await ev(`document.querySelectorAll('.layer').length===2`));
  await ev(`document.body.dispatchEvent(new KeyboardEvent('keydown',{key:'Delete',bubbles:true}));1`);
  check('Delete removes selected',await ev(`document.querySelectorAll('.layer').length===1`));
  // rename layer via dialog
  dialogText='Hero renamed';
  await ev(`(()=>{const l=document.querySelector('.layer');l.dispatchEvent(new MouseEvent('dblclick',{bubbles:true}));return 1})()`);await wait(250);
  check('layer rename',await ev(`document.querySelector('.layer .lname').textContent==='Hero renamed'`));
  // custom board
  await ev(`(()=>{const w=document.querySelector('#board-w');w.value='600';w.dispatchEvent(new Event('change',{bubbles:true}));const h=document.querySelector('#board-h');h.value='400';h.dispatchEvent(new Event('change',{bubbles:true}));return 1})()`);await wait(150);
  const board=JSON.parse(await ev(`JSON.stringify({w:Number(document.querySelector('#board-w').value),h:Number(document.querySelector('#board-h').value),preset:document.querySelector('#preset').value,sw:document.documentElement.scrollWidth,iw:innerWidth})`));
  check('custom 600x400',board.w===600&&board.h===400&&board.preset==='custom',JSON.stringify(board));
  console.log(`${checks.length} edge checks passed`);process.exit(0);
}catch(e){console.error('FAILED',e.message);console.error(JSON.stringify(checks.slice(-5),null,2));process.exit(1);}finally{ws.close();}};
