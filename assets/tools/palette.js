// /tools/palette-generator/ — 11-step ramp from one base colour.
import { parseHex, toHex } from './lib/color.js';
import { buildRamp, formatRamp } from './lib/ramp.js';

const $ = (id) => document.getElementById(id);
const base = $('pl-base'), pick = $('pl-pick'), name = $('pl-name');
const format = $('pl-format'), swatches = $('pl-swatches'), code = $('pl-code');
const status = $('pl-status');

function token() {
  return (name.value || 'brand').trim().toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '') || 'brand';
}

function render() {
  const steps = buildRamp(base.value);
  if (!steps) {
    swatches.innerHTML = '<p class="status bad">Enter a 6-digit hex colour.</p>';
    return;
  }
  const n = token();
  swatches.innerHTML = steps
    .map((s) => `<button class="swatch" type="button" data-copy="${s.hex}" title="Copy ${s.hex}"><span class="chip" style="background:${s.hex}"></span><span class="meta"><b>${n}-${s.step}</b><span>${s.hex.toUpperCase()}</span></span></button>`)
    .join('');

  code.textContent = formatRamp(steps, n, format.value);

  const url = new URL(location.href);
  url.searchParams.set('base', base.value.replace('#', ''));
  url.searchParams.set('name', n);
  history.replaceState(null, '', url);
  const share = $('pl-share');
  if (share) share.dataset.share = url.href;
  if (status) status.textContent = `${steps.length} steps · hue ${Math.round(steps[0].h)}° held constant · chroma tapered at both ends`;
}

function loadFromUrl() {
  const p = new URLSearchParams(location.search);
  const b = p.get('base'), n = p.get('name');
  if (b && parseHex(b)) { base.value = '#' + b.replace('#', ''); pick.value = base.value; }
  if (n) name.value = n.slice(0, 24);
}

if (base && pick && swatches) {
  base.addEventListener('input', () => {
    const rgb = parseHex(base.value);
    if (rgb) pick.value = toHex(rgb);
    render();
  });
  pick.addEventListener('input', () => { base.value = pick.value.toUpperCase(); render(); });
  name.addEventListener('input', render);
  format.addEventListener('change', render);
  $('pl-sample')?.addEventListener('click', () => {
    const demo = ['#2563EB', '#0F7B4F', '#B45309', '#7C3AED', '#E11D48'];
    const next = demo[Math.floor(Math.random() * demo.length)];
    base.value = next; pick.value = next; render();
  });
  loadFromUrl();
  render();
}
