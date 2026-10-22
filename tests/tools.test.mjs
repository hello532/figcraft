#!/usr/bin/env node
/**
 * Tool maths: WCAG contrast, OKLCH ramps, SVG minification, placeholder text.
 * Runs against the same modules the browser loads. No DOM, no network.
 */
import { contrastRatio, parseHex, toHex, rgbToOklch, oklchToSrgb, nearestPassing, rgbToHsl } from '../assets/tools/lib/color.js';
import { buildRamp, formatRamp, STEPS } from '../assets/tools/lib/ramp.js';
import { minifySvg, looksLikeSvg, byteLength } from '../assets/tools/lib/svgmin.js';
import { generate, stats } from '../assets/tools/lib/lorem.js';

let failures = 0;
let checks = 0;
const ok = (cond, msg, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL ${msg}${detail ? ' — ' + detail : ''}`); }
  else console.log(`  ok   ${msg}`);
};
const near = (a, b, eps, msg) => ok(Math.abs(a - b) <= eps, msg, `${a} vs ${b} (eps ${eps})`);

console.log('\ncolour + contrast');
ok(contrastRatio('#000000', '#ffffff') === 21, 'black on white is exactly 21:1');
ok(contrastRatio('#ffffff', '#000000') === 21, 'the ratio is symmetric');
near(contrastRatio('#2563eb', '#ffffff'), 5.17, 0.01, '#2563eb on white is about 5.17:1');
near(contrastRatio('#777777', '#ffffff'), 4.48, 0.01, '#777777 on white is about 4.48:1');
ok(contrastRatio('nope', '#fff') === null, 'invalid hex returns null');
ok(parseHex('#abc').r === 170 && parseHex('abc').b === 204, '3-digit hex expands');
ok(parseHex('#2563EBFF').b === 235, '8-digit hex drops alpha');

console.log('\noklab round trip');
const blue = parseHex('#2563EB');
const lch = rgbToOklch(blue);
near(lch.L, 0.546, 0.002, 'blue L is about 0.546');
ok(toHex(oklchToSrgb(lch)) === '#2563eb', 'oklch -> srgb round-trips to the same hex');

console.log('\nnearest passing colour');
const fix = nearestPassing('#ffffff', '#5f6368', 4.5);
ok(fix && fix.ratio >= 4.5, 'suggestion reaches 4.5:1', fix && `${fix.hex} ${fix.ratio.toFixed(2)}`);
{
  const before = rgbToHsl(parseHex('#5f6368')).h;
  const after = rgbToHsl(parseHex(fix.hex)).h;
  ok(Math.min(Math.abs(after - before), 360 - Math.abs(after - before)) <= 2, 'hue is preserved within 2 degrees');
}
ok(nearestPassing('#ffffff', '#0f7b4f', 4.5).hex === '#0f7b4f', 'an already-passing pair is returned unchanged');
{
  const lifted = nearestPassing('#000000', '#1a1a1a', 4.5);
  ok(lifted && lifted.ratio >= 4.5, 'dark text on black lightens to a passing step', lifted && `${lifted.hex} ${lifted.ratio.toFixed(2)}`);
  ok(rgbToHsl(parseHex(lifted.hex)).l > rgbToHsl(parseHex('#1a1a1a')).l, 'the lifted colour is lighter than the input');
}

console.log('\npalette ramp');
const ramp = buildRamp('#2563EB');
ok(ramp.length === 11, 'eleven steps');
ok(ramp[0].step === 50 && ramp[10].step === 950, 'steps run 50 to 950');
ok(ramp.every((s) => parseHex(s.hex)), 'every step is a valid hex');
ok(ramp.every((s, i) => i === 0 || s.L < ramp[i - 1].L), 'perceptual lightness decreases monotonically');
{
  const hues = ramp.map((s) => rgbToOklch(parseHex(s.hex)).h);
  const drift = Math.max(...hues.map((h) => Math.min(Math.abs(h - hues[0]), 360 - Math.abs(h - hues[0]))));
  ok(drift < 6, 'hue stays within 6 degrees across the ramp', `max drift ${drift.toFixed(2)}`);
}
ok(ramp[0].hex.toLowerCase() !== ramp[10].hex.toLowerCase(), 'extremes differ');
ok(buildRamp('zzz') === null, 'invalid base returns null');
for (const [fmt, probe] of [['css', '--brand-500'], ['tailwind', 'brand: {'], ['scss', '$brand-500'], ['json', '"brand"']]) {
  const out = formatRamp(ramp, 'brand', fmt);
  ok(out.includes(probe), `${fmt} export contains ${probe}`);
}

console.log('\noklch gamut handling');
{
  // A chroma that cannot exist in sRGB at this lightness must lose chroma, not lightness.
  const hostile = oklchToSrgb({ L: 0.7, C: 0.4, h: 150 });
  ok(hostile.r >= 0 && hostile.r <= 255 && hostile.g >= 0 && hostile.g <= 255 && hostile.b >= 0 && hostile.b <= 255, 'clamped colour stays in range');
  const back = rgbToOklch({ r: hostile.r, g: hostile.g, b: hostile.b });
  near(back.L, 0.7, 0.02, 'clamping preserves lightness');
}

console.log('\nsvg minifier');
const sample = `<?xml version="1.0" encoding="UTF-8"?>
<!-- exported -->
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape">
  <metadata><x>junk</x></metadata>
  <title>Card</title>
  <defs><linearGradient id="g1"><stop offset="0" stop-color="#fff"/></linearGradient></defs>
  <g inkscape:label="Layer" data-name="card"><path d="M 1.23456 2.34567 L 3.45678 4.56789" fill="url(#g1)"/><text>1.2345</text></g>
</svg>`;
{
  const r = minifySvg(sample, { precision: 2 });
  ok(looksLikeSvg(sample), 'input parses');
  ok(looksLikeSvg(r.out), 'output still parses');
  ok(r.outBytes < r.inBytes, 'output is smaller', `${r.inBytes} -> ${r.outBytes}`);
  ok(!r.out.includes('<!--'), 'comments removed');
  ok(!r.out.includes('<metadata'), 'metadata removed');
  ok(!r.out.includes('inkscape'), 'editor namespace removed');
  ok(r.out.includes('id="g1"'), 'gradient id preserved');
  ok(r.out.includes('url(#g1)'), 'gradient reference preserved');
  ok(r.out.includes('<text>1.2345</text>'), 'text content is byte-identical');
  ok(r.out.includes('1.23') && r.out.includes('2.35'), 'path numbers rounded to 2 decimals');
  ok(r.notes.length >= 4, 'notes explain what was removed', r.notes.join(' | '));
}
{
  const r = minifySvg(sample, { precision: 0, metadata: false, comments: false });
  ok(r.out.includes('<!-- exported -->'), 'comments kept when asked');
  ok(r.out.includes('<metadata>'), 'metadata kept when asked');
  ok(r.out.includes('id="g1"'), 'id kept even with metadata removal on');
}
ok(!looksLikeSvg('<svg><g></svg>'), 'unbalanced markup is rejected');
ok(!looksLikeSvg('<div>hi</div>'), 'non-svg markup is rejected');
ok(byteLength('é') === 2, 'byte length counts UTF-8 bytes');

console.log('\nplaceholder text');
{
  let seed = 1;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const one = generate({ format: 'sentences', count: 3, rand });
  seed = 1;
  const two = generate({ format: 'sentences', count: 3, rand });
  ok(one === two, 'deterministic for a fixed random source');
  ok(one.split('. ').length >= 3, 'three sentences produced');
  const p = generate({ format: 'paragraphs', count: 2, startLorem: true, rand });
  ok(p.startsWith('Lorem ipsum dolor sit amet'), 'paragraph mode can start with the classic line');
  ok(p.split('\n\n').length === 2, 'paragraph count honoured');
  const w = generate({ format: 'words', count: 6, rand });
  ok(w.split(' ').length === 6, 'word count honoured');
  ok(generate({ format: 'words', count: 999, rand }).split(' ').length === 50, 'count is clamped to 50');
  const s = stats('one two three');
  ok(s.words === 3 && s.chars === 13, 'stats count words and characters');
}

console.log(`\n${failures === 0 ? 'PASS' : 'FAIL'} — ${checks} checks, ${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
