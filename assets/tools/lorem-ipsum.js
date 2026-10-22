// /tools/lorem-ipsum/ — placeholder text sized for real UI strings.
import { generate, stats } from './lib/lorem.js';

const $ = (id) => document.getElementById(id);
const out = $('li-out'), count = $('li-count'), format = $('li-format');
const startLorem = $('li-start'), status = $('li-status');

function render() {
  const text = generate({
    format: format.value,
    count: Number(count.value),
    startLorem: startLorem.checked
  });
  out.textContent = text;
  const s = stats(text);
  status.textContent = `${s.words} words · ${s.chars} characters · ${s.lines} lines at 60 characters`;
  status.className = 'status';
}

function download() {
  const blob = new Blob([out.textContent], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'placeholder.txt';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

if (out) {
  [count, format, startLorem].forEach((el) => el.addEventListener('input', render));
  $('li-again')?.addEventListener('click', render);
  $('li-download')?.addEventListener('click', download);
  $('li-copy')?.addEventListener('click', () => {
    const text = out.textContent;
    if (!text) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        status.textContent = 'Copied — paste it straight into a text layer.';
        status.className = 'status ok';
      });
    }
  });
  $('li-preset')?.addEventListener('change', (e) => {
    const [fmt, n] = e.target.value.split(':');
    if (fmt) format.value = fmt;
    if (n) count.value = n;
    render();
  });
  render();
}
