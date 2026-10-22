// 11-step ramp used by /tools/palette-generator/.
import { parseHex, toHex, rgbToOklch, oklchToSrgb } from './color.js';

export const STEPS = [
  [50, 0.975], [100, 0.945], [200, 0.895], [300, 0.825], [400, 0.745],
  [500, 0.655], [600, 0.565], [700, 0.475], [800, 0.385], [900, 0.305], [950, 0.235]
];

/**
 * Holds hue, walks perceptual lightness, tapers chroma toward both ends.
 * Returns null for invalid input.
 * @param {string} baseHex
 */
export function buildRamp(baseHex) {
  const rgb = parseHex(baseHex);
  if (!rgb) return null;
  const { L: baseL, C: baseC, h } = rgbToOklch(rgb);
  return STEPS.map(([step, L]) => {
    const spread = Math.abs(L - baseL);
    const scale = Math.max(0.34, 1.08 - spread * 1.15);
    const C = baseC * scale;
    const hex = toHex(oklchToSrgb({ L, C, h }));
    return { step, hex, L, C, h };
  });
}

export function formatRamp(steps, name, format) {
  const n = name;
  if (format === 'css') {
    return `:root {\n${steps.map((s) => `  --${n}-${s.step}: ${s.hex.toLowerCase()};`).join('\n')}\n}`;
  }
  if (format === 'tailwind') {
    return `// tailwind.config.js\nexport default {\n  theme: {\n    extend: {\n      colors: {\n        ${n}: {\n${steps.map((s) => `          ${s.step}: '${s.hex.toLowerCase()}',`).join('\n')}\n        },\n      },\n    },\n  },\n};`;
  }
  if (format === 'scss') {
    return steps.map((s) => `$${n}-${s.step}: ${s.hex.toLowerCase()};`).join('\n');
  }
  return JSON.stringify({ [n]: Object.fromEntries(steps.map((s) => [s.step, s.hex.toLowerCase()])) }, null, 2);
}
