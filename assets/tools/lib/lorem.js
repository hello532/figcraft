// Placeholder-text generation used by /tools/lorem-ipsum/.
// `rand` is injectable so the behaviour is testable without stubbing Math.random.

export const WORDS = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
  'enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure ' +
  'in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident ' +
  'sunt culpa qui officia deserunt mollit anim id est laborum').split(' ');

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export function generate({ format = 'paragraphs', count = 3, startLorem = true, rand = Math.random } = {}) {
  const n = Math.max(1, Math.min(50, Number(count) || 1));
  const pick = () => WORDS[Math.floor(rand() * WORDS.length) % WORDS.length];
  const sentence = () => {
    const k = 8 + Math.floor(rand() * 9);
    return cap(Array.from({ length: k }, pick).join(' ')) + '.';
  };
  const paragraph = () => Array.from({ length: 3 + Math.floor(rand() * 4) }, sentence).join(' ');

  if (format === 'words') return Array.from({ length: n }, pick).join(' ');
  if (format === 'sentences') return Array.from({ length: n }, sentence).join(' ');

  const paras = Array.from({ length: n }, paragraph);
  if (startLorem) paras[0] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + paras[0];
  return paras.join('\n\n');
}

export function stats(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return { words, chars: text.length, lines: Math.max(1, Math.ceil(text.length / 60)) };
}
