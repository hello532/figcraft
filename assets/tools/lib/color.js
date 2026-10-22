// Colour maths shared by the contrast checker and the palette generator.
// Pure functions, no DOM: tested directly by tests/tools.test.mjs.

export function parseHex(input) {
  let s = String(input || '').trim().replace(/^#/, '');
  if (s.length === 3) s = s.split('').map((c) => c + c).join('');
  if (s.length === 8) s = s.slice(0, 6);
  if (!/^[0-9a-fA-F]{6}$/.test(s)) return null;
  return { r: parseInt(s.slice(0, 2), 16), g: parseInt(s.slice(2, 4), 16), b: parseInt(s.slice(4, 6), 16) };
}

export function toHex({ r, g, b }) {
  const c = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  return `#${c(r)}${c(g)}${c(b)}`;
}

const clamp01 = (v) => Math.max(0, Math.min(1, v));

/** sRGB channel 0..255 to linear-light 0..1 (WCAG 2.2 definition). */
export function srgbToLinear(channel) {
  const c = channel / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function relativeLuminance(rgb) {
  return 0.2126 * srgbToLinear(rgb.r) + 0.7152 * srgbToLinear(rgb.g) + 0.0722 * srgbToLinear(rgb.b);
}

/** WCAG contrast ratio, 1..21. Accepts hex strings or rgb objects. */
export function contrastRatio(a, b) {
  const ca = typeof a === 'string' ? parseHex(a) : a;
  const cb = typeof b === 'string' ? parseHex(b) : b;
  if (!ca || !cb) return null;
  const la = relativeLuminance(ca);
  const lb = relativeLuminance(cb);
  const hi = Math.max(la, lb);
  const lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}

export function rgbToHsl({ r, g, b }) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0));
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60;
  }
  return { h, s: s * 100, l: l * 100 };
}

export function hslToRgb({ h, s, l }) {
  const hh = ((h % 360) + 360) % 360;
  const ss = clamp01(s / 100), ll = clamp01(l / 100);
  const c = (1 - Math.abs(2 * ll - 1)) * ss;
  const x = c * (1 - Math.abs(((hh / 60) % 2) - 1));
  const m = ll - c / 2;
  let rp = 0, gp = 0, bp = 0;
  if (hh < 60) [rp, gp, bp] = [c, x, 0];
  else if (hh < 120) [rp, gp, bp] = [x, c, 0];
  else if (hh < 180) [rp, gp, bp] = [0, c, x];
  else if (hh < 240) [rp, gp, bp] = [0, x, c];
  else if (hh < 300) [rp, gp, bp] = [x, 0, c];
  else [rp, gp, bp] = [c, 0, x];
  return { r: (rp + m) * 255, g: (gp + m) * 255, b: (bp + m) * 255 };
}

/* ---------------------------------------------------------------- OKLab / OKLCH */

export function linearToOklab({ r, g, b }) {
  const lr = srgbToLinear(r), lg = srgbToLinear(g), lb = srgbToLinear(b);
  const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;
  const l_ = Math.cbrt(l), m_ = Math.cbrt(m), s_ = Math.cbrt(s);
  return {
    L: 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_
  };
}

/** Returns sRGB 0..255 plus an `inGamut` flag computed before clamping. */
export function oklabToSrgbRaw({ L, a, b }) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const l = l_ * l_ * l_, m = m_ * m_ * m_, s = s_ * s_ * s_;
  const lr = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const lg = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const lb = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;
  const enc = (v) => {
    const c = Math.max(0, Math.min(1, v));
    return (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055) * 255;
  };
  const eps = 1e-6;
  const inGamut = [lr, lg, lb].every((v) => v >= -eps && v <= 1 + eps);
  return { r: enc(lr), g: enc(lg), b: enc(lb), inGamut };
}

export function rgbToOklch(rgb) {
  const { L, a, b } = linearToOklab(rgb);
  const C = Math.sqrt(a * a + b * b);
  let h = (Math.atan2(b, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return { L, C, h };
}

/** OKLCH to an in-gamut sRGB object; reduces chroma until the colour fits. */
export function oklchToSrgb({ L, C, h }) {
  const rad = (h * Math.PI) / 180;
  let lo = 0, hi = C;
  let best = { r: 0, g: 0, b: 0 };
  const at = (c) => oklabToSrgbRaw({ L, a: Math.cos(rad) * c, b: Math.sin(rad) * c });
  const full = at(C);
  if (full.inGamut) return { r: full.r, g: full.g, b: full.b };
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    const cand = at(mid);
    if (cand.inGamut) { lo = mid; best = cand; } else { hi = mid; }
  }
  return { r: best.r, g: best.g, b: best.b };
}

/* ---------------------------------------------------------------- suggestions */

/** Nearest colour to `fg` that reaches `minRatio` on `bg`, moving lightness only. */
export function nearestPassing(bgHex, fgHex, minRatio) {
  const bg = parseHex(bgHex), fg = parseHex(fgHex);
  if (!bg || !fg) return null;
  const hsl = rgbToHsl(fg);
  const candidates = [];
  for (const target of [0, 100]) {
    let lo = hsl.l, hi = target;
    const stepAt = (l) => contrastRatio(toHex(hslToRgb({ h: hsl.h, s: hsl.s, l })), bg);
    if (stepAt(target) < minRatio) continue;
    for (let i = 0; i < 26; i++) {
      const mid = (lo + hi) / 2;
      if (stepAt(mid) >= minRatio) hi = mid; else lo = mid;
    }
    const hex = toHex(hslToRgb({ h: hsl.h, s: hsl.s, l: hi }));
    candidates.push({ hex, ratio: contrastRatio(hex, bg), delta: Math.abs(hi - hsl.l) });
  }
  if (!candidates.length) return null;
  candidates.sort((a, b) => a.delta - b.delta);
  return candidates[0];
}
