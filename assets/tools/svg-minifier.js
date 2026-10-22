// /tools/svg-minifier/
import { minifySvg, looksLikeSvg, byteLength } from './lib/svgmin.js';

const $ = (id) => document.getElementById(id);
const input = $('sm-in'), output = $('sm-out');
const precision = $('sm-precision'), meta = $('sm-meta'), comments = $('sm-comments');
const stats = $('sm-stats'), status = $('sm-status');

const SAMPLE = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Exported by a design tool -->
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape">
  <metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description>demo</rdf:Description></rdf:RDF></metadata>
  <title>Card icon</title>
  <g inkscape:label="Layer 1" data-name="card" fill="none" stroke="#2563eb" stroke-width="4.0000" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14.0000" y="22.00000" width="92.0000" height="76.0000" rx="12.0000"/>
    <path d="M 14.0000 46.0000 L 106.0000 46.0000"/>
    <circle cx="30.0000" cy="34.0000" r="3.5000" fill="#2563eb"/>
  </g>
  <text x="60" y="112" font-size="9.5" text-anchor="middle">1.2345 demo</text>
</svg>`;

function run() {
  const src = input.value;
  if (!src.trim()) {
    status.textContent = 'Paste some SVG first, or load the sample.';
    status.className = 'status bad';
    output.value = '';
    stats.innerHTML = '';
    return;
  }
  if (!looksLikeSvg(src)) {
    status.textContent = 'That does not parse as a balanced SVG document — check for an unclosed element.';
    status.className = 'status bad';
    return;
  }
  const res = minifySvg(src, {
    precision: Number(precision.value),
    metadata: meta.checked,
    comments: comments.checked
  });
  output.value = res.out;
  stats.innerHTML = `
    <dl class="readout">
      <div><dt>Before</dt><dd>${fmt(res.inBytes)}</dd></div>
      <div><dt>After</dt><dd>${fmt(res.outBytes)}</dd></div>
      <div><dt>Saved</dt><dd>${fmt(res.saved)} · ${res.percent}%</dd></div>
    </dl>
    ${res.notes.length ? `<ul class="note" style="padding-left:18px">${res.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>` : ''}`;
  status.textContent = 'The output still parses as SVG. Preview it before shipping: removing <title>/<desc> also removes the accessible name.';
  status.className = 'status ok';
}

function fmt(bytes) {
  return bytes < 1024 ? `${bytes} B` : `${(bytes / 1024).toFixed(1)} kB`;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

if (input && output) {
  input.value = SAMPLE;
  $('sm-sample')?.addEventListener('click', () => { input.value = SAMPLE; run(); });
  $('sm-run')?.addEventListener('click', run);
  $('sm-download')?.addEventListener('click', () => {
    if (!output.value) return;
    const blob = new Blob([output.value], { type: 'image/svg+xml' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'minified.svg';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });
  $('sm-copy')?.addEventListener('click', () => {
    const text = output.value;
    if (!text) return;
    const btn = $('sm-copy');
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => { status.textContent = `Copied ${byteLength(text)} bytes.`; status.className = 'status ok'; });
    }
    return false;
  });
  run();
}
