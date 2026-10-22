// /tools/screen-sizes/ — logical viewport sizes with copy + studio handoff.
const DEVICES = [
  { name: 'iPhone SE (2nd/3rd gen)', w: 375, h: 667, dpr: '2', cls: 'phone' },
  { name: 'iPhone 13 mini', w: 375, h: 812, dpr: '3', cls: 'phone' },
  { name: 'iPhone 14 / 15 / 16', w: 393, h: 852, dpr: '3', cls: 'phone' },
  { name: 'iPhone 15 / 16 Plus', w: 428, h: 926, dpr: '3', cls: 'phone' },
  { name: 'iPhone 16 Pro', w: 402, h: 874, dpr: '3', cls: 'phone' },
  { name: 'iPhone 16 Pro Max', w: 440, h: 956, dpr: '3', cls: 'phone' },
  { name: 'Pixel 7 / 8', w: 412, h: 915, dpr: '2.625', cls: 'phone' },
  { name: 'Galaxy S23 / S24', w: 360, h: 780, dpr: '3', cls: 'phone' },
  { name: 'iPad mini', w: 744, h: 1133, dpr: '2', cls: 'tablet' },
  { name: 'iPad Air', w: 820, h: 1180, dpr: '2', cls: 'tablet' },
  { name: 'iPad Pro 11"', w: 834, h: 1194, dpr: '2', cls: 'tablet' },
  { name: 'iPad Pro 13"', w: 1024, h: 1366, dpr: '2', cls: 'tablet' },
  { name: 'MacBook Air 13"', w: 1470, h: 956, dpr: '2', cls: 'laptop' },
  { name: 'MacBook Pro 14"', w: 1512, h: 982, dpr: '2', cls: 'laptop' },
  { name: 'MacBook Pro 16"', w: 1728, h: 1117, dpr: '2', cls: 'laptop' },
  { name: 'Desktop HD', w: 1280, h: 720, dpr: '1', cls: 'desktop' },
  { name: 'Desktop HD+', w: 1366, h: 768, dpr: '1', cls: 'desktop' },
  { name: 'Desktop WXGA+', w: 1440, h: 900, dpr: '1', cls: 'desktop' },
  { name: 'Desktop QHD', w: 1920, h: 1080, dpr: '1', cls: 'desktop' },
  { name: 'Desktop 1440p', w: 2560, h: 1440, dpr: '1', cls: 'desktop' }
];

const BREAKPOINTS = [
  { name: 'Small phone', w: 320, note: 'iPhone SE 1st gen, small Android' },
  { name: 'Phone', w: 375, note: 'iPhone SE 2/3, iPhone 13 mini' },
  { name: 'Phone (modern)', w: 390, note: 'iPhone 14/15/16 class' },
  { name: 'Large phone', w: 430, note: 'Plus and Pro Max' },
  { name: 'Tablet portrait', w: 768, note: 'iPad portrait' },
  { name: 'Tablet landscape', w: 1024, note: 'iPad Pro 13" portrait' },
  { name: 'Laptop', w: 1280, note: 'Common minimum for a two-column layout' },
  { name: 'Desktop', w: 1440, note: 'MacBook Pro 14/16, most laptops' },
  { name: 'Wide desktop', w: 1920, note: 'Full HD' }
];

const $ = (id) => document.getElementById(id);
const tbody = $('ss-rows');

function row(d) {
  return `<tr>
    <th scope="row">${d.name}</th>
    <td class="num">${d.w} × ${d.h}</td>
    <td class="num">${d.dpr}×</td>
    <td><button class="btn ghost sm" type="button" data-copy="${d.w} × ${d.h}">Copy size</button></td>
    <td><button class="btn ghost sm" type="button" data-copy="@media (max-width: ${d.w}px) and (min-height: ${d.h}px) { /* ${d.name} */ }">Copy query</button></td>
    <td><a class="btn ghost sm" href="/?w=${d.w}&amp;h=${d.h}#demo">Open in studio</a></td>
  </tr>`;
}

function render() {
  const q = ($('ss-filter').value || '').trim().toLowerCase();
  const cls = $('ss-class').value;
  const list = DEVICES.filter((d) => (cls === 'all' || d.cls === cls) && (!q || d.name.toLowerCase().includes(q) || String(d.w).includes(q)));
  tbody.innerHTML = list.length ? list.map(row).join('') : '<tr><td colspan="6">No device matches that filter.</td></tr>';
}

if (tbody) {
  $('ss-filter').addEventListener('input', render);
  $('ss-class').addEventListener('change', render);
  $('bp-list').innerHTML = BREAKPOINTS.map(
    (b) => `<li><strong>${b.name} — ${b.w}px</strong><span>${b.note}</span>
      <div class="btn-row" style="margin-top:8px">
        <button class="btn ghost sm" type="button" data-copy="@media (min-width: ${b.w}px) { /* ${b.name} */ }">Copy min-width query</button>
        <a class="btn ghost sm" href="/?w=${b.w}&amp;h=${Math.round(b.w * 0.62)}#demo">Open ${b.w}px canvas</a>
      </div></li>`
  ).join('');
  render();
}
