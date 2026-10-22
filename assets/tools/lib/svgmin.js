// SVG minifier used by /tools/svg-minifier/. Pure string work: no DOM needed,
// so the same code runs in the browser and in tests.

/**
 * @param {string} src raw SVG markup
 * @param {{precision?: number, metadata?: boolean, comments?: boolean, whitespace?: boolean}} opts
 * @returns {{out: string, notes: string[]}}
 */
export function minifySvg(src, opts = {}) {
  const precision = Number.isInteger(opts.precision) ? opts.precision : 2;
  const dropMetadata = opts.metadata !== false;
  const dropComments = opts.comments !== false;
  const collapse = opts.whitespace !== false;
  const notes = [];
  let out = String(src).replace(/^\uFEFF/, '');
  const before = byteLength(out);

  const strip = (re, note) => {
    const next = out.replace(re, '');
    if (next !== out) notes.push(note);
    out = next;
  };

  strip(/<\?xml[\s\S]*?\?>/g, 'removed the XML declaration');
  strip(/<!DOCTYPE[\s\S]*?>/gi, 'removed the DOCTYPE');
  if (dropComments) strip(/<!--[\s\S]*?-->/g, 'removed comments');
  if (dropMetadata) {
    strip(/<metadata[\s\S]*?<\/metadata>/gi, 'removed <metadata>');
    strip(/<title[\s\S]*?<\/title>/gi, 'removed <title> (skip this if the file needs an accessible name)');
    strip(/<desc[\s\S]*?<\/desc>/gi, 'removed <desc>');
    strip(/\s(?:inkscape|sodipodi|xmlns:(?:inkscape|sodipodi|serif|dc|cc|rdf))(?::[\w-]+)?="[^"]*"/gi, 'removed editor namespaces');
    strip(/\s(?:data-name|data-testid)="[^"]*"/g, 'removed data-name/data-testid attributes');
  }
  if (collapse) {
    const tightened = out.replace(/>\s+</g, '><');
    if (tightened !== out) notes.push('collapsed whitespace between tags');
    out = tightened;
  }

  // Numbers are only rewritten inside tags, so text content stays byte-identical.
  out = out.replace(/(<[^>]*>)|([^<]+)/g, (whole, tag, text) => {
    if (text) return text;
    return tag.replace(/-?\d*\.\d+/g, (num) => {
      const rounded = Number(num).toFixed(precision);
      const trimmed = rounded.replace(/\.?0+$/, '');
      return trimmed === '' || trimmed === '-' ? '0' : trimmed;
    });
  });

  if (collapse) {
    out = out
      .replace(/\s{2,}/g, ' ')
      .replace(/\s*([{};])\s*/g, '$1')
      .replace(/;\}/g, '}')
      .replace(/:\s+/g, ':')
      .replace(/\s*\/>/g, '/>')
      .replace(/\s*>/g, '>')
      .trim();
  }

  const after = byteLength(out);
  return {
    out,
    notes,
    inBytes: before,
    outBytes: after,
    saved: Math.max(0, before - after),
    percent: before ? Math.round((1 - after / before) * 1000) / 10 : 0
  };
}

export function byteLength(s) {
  if (typeof TextEncoder !== 'undefined') return new TextEncoder().encode(s).length;
  return unescape(encodeURIComponent(s)).length;
}

/** Cheap structural sanity check: tag stack balance + a root <svg> element. */
export function looksLikeSvg(src) {
  const stripped = String(src)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<!\[CDATA\[[\s\S]*?\]\]>/g, '')
    .replace(/<\?[\s\S]*?\?>/g, '')
    .replace(/<!DOCTYPE[^>]*>/gi, '');
  if (!/<svg[\s>]/i.test(stripped)) return false;
  const stack = [];
  const re = /<(\/?)([a-zA-Z][\w:-]*)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?)>/g;
  let m;
  while ((m = re.exec(stripped))) {
    const [, close, name, , selfClose] = m;
    const tag = name.toLowerCase();
    if (selfClose) continue;
    if (close) {
      if (stack.pop() !== tag) return false;
    } else {
      stack.push(tag);
    }
  }
  return stack.length === 0;
}
