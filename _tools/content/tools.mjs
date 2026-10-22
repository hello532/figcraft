// One page, five tools. Every tool here runs entirely in the browser: no upload,
// no account, no server. The DOM ids are the contract with assets/tools/*.js and
// the tab markup is the contract with assets/tools/tabs.js — five tabs, five
// panels, data-tab and data-panel values that match the redirect hashes.

const UPDATED = '2026-10-22';

export const PAGES = [
  {
    path: 'tools/',
    group: 'tools',
    type: 'tool',
    title: 'Five Free Design Tools: Contrast, Palette, SVG, Sizes, Text',
    description:
      'Five browser tools on one page: WCAG 2.2 contrast checker, OKLCH colour ramp, SVG minifier, viewport size sheet and placeholder text. No signup, no upload.',
    h1: 'Five design tools, one page, nothing uploaded',
    eyebrow: 'Free tools',
    lede:
      'Contrast, colour ramp, SVG minifier, viewport sizes and placeholder text — the five checks that sit between a design being drawn and a design being handed off. Each one runs locally in this page and keeps its state in the URL.',
    reading: '4 min',
    appDescription:
      'Five browser-based design utilities in one page: WCAG 2.2 contrast checker, OKLCH 11-step palette generator, SVG minifier, viewport size reference and placeholder text generator.',
    cta: [
      { label: 'Open the studio', href: '/#demo', primary: true },
      { label: 'Download FigCraft', href: '/install/' }
    ],
    scripts: ['tabs.js', 'contrast.js', 'palette.js', 'svg-minifier.js', 'screen-sizes.js', 'lorem-ipsum.js'],
    body: `
      <section id="tools">
        <h2>Pick a tool</h2>
        <p class="sub">Everything below runs in this page: no account, no upload, no network call after the files load. Switch tabs freely — a panel is hidden, not rebuilt, so a half-typed hex or a pasted SVG is still there when you come back.</p>

        <div class="tabs" role="tablist" aria-label="Tools">
          <button class="tab" type="button" role="tab" id="tab-contrast" aria-controls="panel-contrast" aria-selected="true" data-tab="contrast">Contrast</button>
          <button class="tab" type="button" role="tab" id="tab-palette" aria-controls="panel-palette" aria-selected="false" data-tab="palette">Palette</button>
          <button class="tab" type="button" role="tab" id="tab-svg" aria-controls="panel-svg" aria-selected="false" data-tab="svg">SVG</button>
          <button class="tab" type="button" role="tab" id="tab-sizes" aria-controls="panel-sizes" aria-selected="false" data-tab="sizes">Sizes</button>
          <button class="tab" type="button" role="tab" id="tab-text" aria-controls="panel-text" aria-selected="false" data-tab="text">Text</button>
        </div>

        <div class="tab-panel" id="panel-contrast" role="tabpanel" aria-labelledby="tab-contrast" data-panel="contrast">
          <p>Type or pick two colours and get the WCAG 2.2 ratio, every level threshold as a pass or fail pill, and — when the pair fails — the nearest colour that passes with hue and saturation untouched. Text size and bold are separate settings because AA wants 4.5:1 for body copy and 3:1 for large text, and the tool reports the 3:1 non-text threshold alongside them. It measures two flat colours and nothing else: no gradients, no text over photographs, no colour-blindness simulation, and no APCA.</p>
          <div class="tool">
            <div class="tool-head"><h2>Contrast checker</h2><span class="hint">WCAG 2.2 · runs locally · nothing uploaded</span></div>
            <div class="tool-body tool-grid">
              <form class="tool-form" autocomplete="off" onsubmit="return false">
                <div class="field">
                  <label for="ct-fg">Text colour</label>
                  <div class="row"><input type="color" id="ct-fg-pick" value="#1a1a1a" aria-label="Pick text colour"><input type="text" id="ct-fg" value="#1A1A1A" spellcheck="false" aria-label="Text colour hex"></div>
                </div>
                <div class="field">
                  <label for="ct-bg">Background colour</label>
                  <div class="row"><input type="color" id="ct-bg-pick" value="#FFFFFF" aria-label="Pick background colour"><input type="text" id="ct-bg" value="#FFFFFF" spellcheck="false" aria-label="Background colour hex"></div>
                </div>
                <div class="field">
                  <label for="ct-size">Text size</label>
                  <select id="ct-size">
                    <option value="body">Body text — under 18pt (24px)</option>
                    <option value="large">Large text — 18pt+, or 14pt bold</option>
                  </select>
                </div>
                <label class="check"><input type="checkbox" id="ct-bold"> Bold weight (14pt bold counts as large)</label>
                <div class="btn-row">
                  <button class="btn ghost sm" type="button" id="ct-swap">Swap colours</button>
                  <button class="btn ghost sm" type="button" id="ct-share" data-share>Share result</button>
                </div>
                <p class="status" id="ct-status" data-copy-status></p>
              </form>
              <div class="result" id="ct-out" aria-live="polite"></div>
            </div>
          </div>
          <p class="note">Click a suggested colour to copy its hex. The URL carries the pair and the text size, so a shared link reproduces the exact check.</p>
        </div>

        <div class="tab-panel" id="panel-palette" role="tabpanel" aria-labelledby="tab-palette" data-panel="palette" hidden>
          <p>One base colour becomes an eleven-step 50–950 ramp in OKLCH, with the hue held constant and chroma tapered at both ends so the extremes do not turn to mud — the reason a ramp built in HSL produces uneven steps and a grey middle. Name the token, then export as CSS custom properties, a Tailwind theme, SCSS or JSON tokens. It does not choose semantic colours, does not build a dark theme, and does not promise that any pair of steps passes contrast.</p>
          <div class="tool">
            <div class="tool-head"><h2>Palette generator</h2><span class="hint">OKLCH · 11 steps · runs locally</span></div>
            <div class="tool-body tool-grid">
              <form class="tool-form" autocomplete="off" onsubmit="return false">
                <div class="field">
                  <label for="pl-base">Base colour</label>
                  <div class="row"><input type="color" id="pl-pick" value="#2563EB" aria-label="Pick base colour"><input type="text" id="pl-base" value="#2563EB" spellcheck="false" aria-label="Base colour hex"></div>
                </div>
                <div class="field">
                  <label for="pl-name">Token name</label>
                  <input type="text" id="pl-name" value="brand" spellcheck="false" aria-label="Token name">
                </div>
                <div class="field">
                  <label for="pl-format">Export format</label>
                  <select id="pl-format">
                    <option value="css">CSS custom properties</option>
                    <option value="tailwind">Tailwind theme</option>
                    <option value="scss">SCSS variables</option>
                    <option value="json">JSON tokens</option>
                  </select>
                </div>
                <div class="btn-row">
                  <button class="btn ghost sm" type="button" id="pl-sample">Try another colour</button>
                  <button class="btn ghost sm" type="button" id="pl-share" data-share>Share result</button>
                </div>
                <p class="status" id="pl-status"></p>
              </form>
              <div class="result">
                <div class="swatches" id="pl-swatches"></div>
                <pre><code id="pl-code" style="display:block;white-space:pre-wrap"></code></pre>
              </div>
            </div>
          </div>
          <p class="note">Click a swatch to copy its hex. The URL keeps the base colour and token name; the export format is a local choice.</p>
        </div>

        <div class="tab-panel" id="panel-svg" role="tabpanel" aria-labelledby="tab-svg" data-panel="svg" hidden>
          <p>Paste a design-tool export and the minifier removes the XML declaration, comments, metadata, editor namespaces and float noise, then reports the bytes before and after rather than a promised percentage. Numbers inside text elements are left byte-identical — rounding visible copy would be a correctness bug, not an optimisation — and id attributes are never removed, because gradients, masks, clip paths and use references point at them. It does not rewrite paths, merge shapes or deduplicate definitions, so a dedicated optimiser still wins on artwork.</p>
          <div class="tool">
            <div class="tool-head"><h2>SVG minifier</h2><span class="hint">local only · output is re-parsed before it is offered</span></div>
            <div class="tool-body">
              <div class="tool-grid">
                <div>
                  <div class="field"><label for="sm-in">Input SVG</label><textarea id="sm-in" rows="14" spellcheck="false" style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px"></textarea></div>
                  <div class="field">
                    <label for="sm-precision">Decimal precision</label>
                    <select id="sm-precision"><option value="0">0 — integers</option><option value="1">1 decimal</option><option value="2" selected>2 decimals</option><option value="3">3 decimals</option></select>
                  </div>
                  <label class="check"><input type="checkbox" id="sm-meta" checked> Remove metadata, title, desc and editor namespaces</label>
                  <label class="check"><input type="checkbox" id="sm-comments" checked> Remove comments</label>
                  <div class="btn-row" style="margin-top:12px">
                    <button class="btn primary sm" type="button" id="sm-run">Minify</button>
                    <button class="btn ghost sm" type="button" id="sm-sample">Load sample</button>
                    <button class="btn ghost sm" type="button" id="sm-download">Download</button>
                  </div>
                  <p class="status" id="sm-status"></p>
                </div>
                <div>
                  <div class="field"><label for="sm-out">Output</label><textarea id="sm-out" rows="14" spellcheck="false" style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px"></textarea></div>
                  <div id="sm-stats"></div>
                  <div class="btn-row" style="margin-top:12px"><button class="btn ghost sm" type="button" id="sm-copy">Copy output</button></div>
                </div>
              </div>
            </div>
          </div>
          <p class="note">Two decimals is a sensible default for UI icons; use three for large illustrations and zero only for pixel-aligned shapes.</p>
        </div>

        <div class="tab-panel" id="panel-sizes" role="tabpanel" aria-labelledby="tab-sizes" data-panel="sizes" hidden>
          <p>Logical viewport sizes for phones, tablets, laptops and desktops in CSS pixels, each with a copyable size, a copyable media query and a link that opens this site's canvas at that exact width and height — the studio accepts w and h in the query string. Filter by name or width, or narrow to one device class. It is a reference, not a spec sheet: browser chrome changes the usable height, and the breakpoint list below is a starting set rather than a strategy.</p>
          <div class="tool">
            <div class="tool-head"><h2>Device viewports</h2><span class="hint">CSS logical pixels · portrait</span></div>
            <div class="tool-body">
              <div class="grid two" style="margin-bottom:14px">
                <div class="field"><label for="ss-filter">Filter</label><input type="search" id="ss-filter" placeholder="iPhone, 390, iPad…"></div>
                <div class="field"><label for="ss-class">Category</label>
                  <select id="ss-class"><option value="all">All devices</option><option value="phone">Phones</option><option value="tablet">Tablets</option><option value="laptop">Laptops</option><option value="desktop">Desktops</option></select>
                </div>
              </div>
              <div class="table-wrap">
                <table>
                  <thead><tr><th scope="col">Device</th><th scope="col">Viewport</th><th scope="col">DPR</th><th scope="col">Size</th><th scope="col">Query</th><th scope="col">Canvas</th></tr></thead>
                  <tbody id="ss-rows"></tbody>
                </table>
              </div>
              <p class="note">Portrait values; for landscape, swap width and height. “Open in studio” presets this site's demo canvas, not the real FigCraft editor.</p>
            </div>
          </div>
          <h3>Breakpoints to design against</h3>
          <ul class="list" id="bp-list"></ul>
        </div>

        <div class="tab-panel" id="panel-text" role="tabpanel" aria-labelledby="tab-text" data-panel="text" hidden>
          <p>Generate placeholder copy in paragraphs, sentences or words, with live word, character and line counts so you can match a real string budget instead of guessing. The presets cover the shapes that break layouts: a six-word button label, a card sentence, a forty-word empty state, a long article. English lorem only — no RTL, no CJK — and it is filler, not a copywriting shortcut: replace every block before launch, because shipping lorem ipsum is a content failure rather than a design one.</p>
          <div class="tool">
            <div class="tool-head"><h2>Text generator</h2><span class="hint">local · no network after load</span></div>
            <div class="tool-body tool-grid">
              <form class="tool-form" autocomplete="off" onsubmit="return false">
                <div class="field">
                  <label for="li-preset">Preset</label>
                  <select id="li-preset">
                    <option value="paragraphs:3">Three body paragraphs</option>
                    <option value="sentences:4">Four sentences (card copy)</option>
                    <option value="words:6">Six words (button label)</option>
                    <option value="sentences:12">Twelve sentences (long article)</option>
                    <option value="words:40">Forty words (empty state)</option>
                  </select>
                </div>
                <div class="field">
                  <label for="li-format">Unit</label>
                  <select id="li-format"><option value="paragraphs">Paragraphs</option><option value="sentences">Sentences</option><option value="words">Words</option></select>
                </div>
                <div class="field">
                  <label for="li-count">How many</label>
                  <input type="number" id="li-count" value="3" min="1" max="50" inputmode="numeric">
                </div>
                <label class="check"><input type="checkbox" id="li-start" checked> Start with “Lorem ipsum dolor sit amet”</label>
                <div class="btn-row">
                  <button class="btn primary sm" type="button" id="li-again">Regenerate</button>
                  <button class="btn ghost sm" type="button" id="li-copy">Copy</button>
                  <button class="btn ghost sm" type="button" id="li-download">Download .txt</button>
                </div>
                <p class="status" id="li-status"></p>
              </form>
              <div class="result">
                <pre><code id="li-out" style="display:block;white-space:pre-wrap;min-height:180px"></code></pre>
              </div>
            </div>
          </div>
          <p class="note">The status line reports words, characters and approximate lines at a 60-character measure.</p>
        </div>
      </section>

      <section id="why">
        <h2>Why these five</h2>
        <p class="sub">They are the checks that come up between a design being drawn and a design being handed off, and they are small enough to run in one page instead of five. Each is also a page a design tool vendor tends to publish, so a decent design tool site now ships working utilities rather than screenshots of utilities.</p>
        <div class="grid">
          <div class="card"><span class="k">Check</span><h3>Contrast before review</h3><p>Text and background pairs fail review, not design. A ratio takes seconds, and the fix suggestion moves lightness while keeping the hue, so a failing blue becomes a darker blue rather than a muddy black.</p></div>
          <div class="card"><span class="k">Build</span><h3>Ramps before tokens</h3><p>A ramp with a held hue gives eleven names you can paste into variables instead of inventing a shade per component. Name the steps, not the jobs: brand-600 survives a redesign and brand-button does not.</p></div>
          <div class="card"><span class="k">Ship</span><h3>Weight before deploy</h3><p>Design-tool SVG exports carry an XML declaration, editor namespaces, metadata and four decimal places. Removing the overhead is free bytes, as long as ids stay where the references expect them and no number inside a text element is rounded.</p></div>
        </div>
        <p class="note">FigCraft is an open-source Figma alternative in Rust, early alpha at roughly 49% parity by its own estimate. None of these tools depends on it: they work if you use Figma, Penpot, Sketch or nothing at all. Where a result maps onto FigCraft, a ramp becomes local styles and variables, and a canvas size opens the browser studio at /#demo with w and h set.</p>
      </section>

      <section id="limits">
        <h2>What none of them do</h2>
        <p class="sub">One honest line per tool, because a utility that hides its edges is worse than no utility.</p>
        <ul class="list">
          <li><strong>Contrast — no simulation, no APCA</strong><span>It compares two flat colours. Two colours can pass 4.5:1 and still be indistinguishable with deuteranopia; gradients, text over images and the WCAG 3 APCA model are out of scope.</span></li>
          <li><strong>Palette — no semantic or dark-mode colours</strong><span>Success, warning and danger need their own hues, and a 950 step is not automatically the dark-mode version of 50. The output is sRGB hex, so P3 and print need another pipeline.</span></li>
          <li><strong>SVG — no path rewriting</strong><span>Primitives are not converted to paths, shapes are not merged, duplicate gradients are not deduplicated and curve precision is not reduced with an error bound.</span></li>
          <li><strong>Sizes — not a spec sheet</strong><span>Vendors do not publish a guaranteed CSS viewport per model, fold and zoom are not modelled, and one frame per device is not a responsive strategy.</span></li>
          <li><strong>Text — English lorem only</strong><span>Line counts assume a 60-character measure and a Latin word list. For RTL, CJK or accented-language testing, use real strings from that language.</span></li>
        </ul>
      </section>

      <section id="notes">
        <h2>Where your state lives</h2>
        <p>Nothing is uploaded. The contrast checker writes fg, bg and size into the URL; the palette generator writes base and name; the other three keep their input in the page only. Switching tabs does not lose what you typed, because a panel is hidden rather than rebuilt — a pasted SVG and a half-typed hex are both still there when you come back. Reloading restores contrast and palette state from the URL and starts the rest fresh.</p>
      </section>
    `,
    faq: [
      { q: 'Do these tools send my colours, SVG files or text anywhere?', a: 'No. All five are static JavaScript served from this domain, with no API call after the page loads and nothing written to a server. The minifier parses and rewrites in the page; the Download button writes a local file through a blob URL.' },
      { q: 'Why are five tools on one page instead of five pages?', a: 'Because they are five small utilities used in the same sitting, and five separate pages meant five sets of near-identical prose around a small form. One page keeps the tools as the main event. Every old address still works: the retired URLs redirect to the matching tab.' },
      { q: 'Can I link directly to one tool?', a: 'Yes. The tab is in the hash — /tools/#contrast, /tools/#palette, /tools/#svg, /tools/#sizes, /tools/#text — and arrow keys move between tabs once one has focus. The contrast checker and the palette generator additionally carry their values in the query string, so a link can reproduce an exact pair or ramp.' },
      { q: 'Are these the same tools Figma ships?', a: 'No. They are independent implementations of the same jobs. Figma publishes a colour contrast checker, a colour palette generator and a lorem ipsum generator; these are separate versions with the same inputs and no account requirement.' },
      { q: 'Can I use the output commercially?', a: 'Colour values, SVG markup and placeholder text are not copyrightable in the way code is, and the tools impose no licence on their output. Your own text and artwork remain yours.' },
      { q: 'Do the tools work offline?', a: 'Once the page and its scripts have loaded, yes — nothing further is fetched. A hard reload without a network connection will not work, because the page itself is served from this domain.' }
    ],
    related: ['templates/', 'learn/', 'alternatives/'],
    crumbs: [{ name: 'Tools', path: 'tools/' }],
    priority: '0.9',
    changefreq: 'monthly',
    updated: UPDATED
  }
];
