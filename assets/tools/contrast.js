// /tools/contrast-checker/
import { contrastRatio, parseHex, toHex, nearestPassing, rgbToHsl } from './lib/color.js';

const $ = (id) => document.getElementById(id);
const fg = $('ct-fg'), bg = $('ct-bg');
const fgPick = $('ct-fg-pick'), bgPick = $('ct-bg-pick');
const size = $('ct-size'), bold = $('ct-bold');
const out = $('ct-out'), status = $('ct-status');

function normalise(input) {
  const rgb = parseHex(input);
  return rgb ? toHex(rgb) : null;
}

function syncPairs() {
  for (const [text, pick] of [[fg, fgPick], [bg, bgPick]]) {
    text.addEventListener('input', () => {
      const v = normalise(text.value);
      if (v) pick.value = v;
      render();
    });
    pick.addEventListener('input', () => {
      text.value = pick.value.toUpperCase();
      render();
    });
  }
  size.addEventListener('change', render);
  bold.addEventListener('change', render);
}

function render() {
  const a = normalise(fg.value), b = normalise(bg.value);
  if (!a || !b) {
    out.innerHTML = '<p class="status bad">Enter two 6-digit hex colours, e.g. #1A1A1A.</p>';
    return;
  }
  const ratio = contrastRatio(a, b);
  const large = size.value === 'large';
  const checks = [
    { label: 'AA normal (4.5:1)', min: 4.5, ok: ratio >= 4.5 },
    { label: 'AA large (3:1)', min: 3, ok: ratio >= 3 },
    { label: 'AAA normal (7:1)', min: 7, ok: ratio >= 7 },
    { label: 'AAA large (4.5:1)', min: 4.5, ok: ratio >= 4.5 },
    { label: 'UI components (3:1)', min: 3, ok: ratio >= 3 }
  ];
  const required = large ? 3 : 4.5;
  const pass = ratio >= required;
  const fix = pass ? null : nearestPassing(b, a, required);
  const bgFix = pass ? null : nearestPassing(a, b, required);

  const previewSize = large ? '28px' : '16px';
  const previewWeight = bold.checked ? '700' : '400';

  out.innerHTML = `
    <div class="preview-box" style="background:${b};color:${a}">
      <p style="margin:0;font-size:${previewSize};font-weight:${previewWeight};line-height:1.45">The quick brown fox jumps over the lazy dog — 0123456789</p>
    </div>
    <dl class="readout">
      <div><dt>Contrast</dt><dd>${ratio.toFixed(2)}:1</dd></div>
      <div><dt>Required for this setting</dt><dd>${required}:1</dd></div>
      <div><dt>Verdict</dt><dd style="color:${pass ? 'var(--ok)' : 'var(--bad)'}">${pass ? 'Pass' : 'Fail'}</dd></div>
    </dl>
    <div class="verdict">${checks.map((c) => `<span class="pill ${c.ok ? 'pass' : 'fail'}">${c.label}: ${c.ok ? 'pass' : 'fail'}</span>`).join('')}</div>
    ${fix ? `<div class="disclosure"><strong>Nearest passing text colour:</strong>
      <button class="btn ghost sm" data-copy="${fix.hex}" type="button">${fix.hex} · ${fix.ratio.toFixed(2)}:1</button>
      ${bgFix ? `<br><strong style="display:inline-block;margin-top:8px">Nearest passing background:</strong> <button class="btn ghost sm" data-copy="${bgFix.hex}" type="button">${bgFix.hex} · ${bgFix.ratio.toFixed(2)}:1</button>` : ''}
      <br><span class="note" style="margin:0">Lightness moved, hue and saturation kept. Copy a value to use it in your file.</span></div>`
    : `<p class="note">No adjustment needed at this setting. Check the pills above for stricter levels.</p>`}
    <p class="note">WCAG 2.2 relative luminance: sRGB channels linearised, then weighted 0.2126 R / 0.7152 G / 0.0722 B. Large text means at least 18pt, or 14pt bold.</p>
  `;

  if (status) status.textContent = '';
  const url = new URL(location.href);
  url.searchParams.set('fg', a.replace('#', ''));
  url.searchParams.set('bg', b.replace('#', ''));
  url.searchParams.set('size', size.value);
  history.replaceState(null, '', url);
  const share = $('ct-share');
  if (share) share.dataset.share = url.href;
}

function loadFromUrl() {
  const p = new URLSearchParams(location.search);
  const f = p.get('fg'), b = p.get('bg'), sz = p.get('size');
  if (f && parseHex(f)) { fg.value = '#' + f.replace('#', ''); fgPick.value = normalise(fg.value); }
  if (b && parseHex(b)) { bg.value = '#' + b.replace('#', ''); bgPick.value = normalise(bg.value); }
  if (sz === 'large' || sz === 'body') size.value = sz;
}

if (fg && bg && out) {
  syncPairs();
  loadFromUrl();
  $('ct-swap')?.addEventListener('click', () => {
    const t = fg.value; fg.value = bg.value; bg.value = t;
    fgPick.value = normalise(fg.value);
    bgPick.value = normalise(bg.value);
    render();
  });
  render();
}
