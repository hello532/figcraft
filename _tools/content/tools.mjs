// Tool pages. Every tool in this file runs entirely in the browser: no upload,
// no account, no server. The DOM ids here are the contract with assets/tools/*.js.

const UPDATED = '2026-10-22';

export const PAGES = [
  {
    path: 'tools/',
    group: 'tools',
    type: 'hub',
    title: 'Free Design Tools for Figma and FigCraft Workflows',
    description:
      'Five browser tools for design work: WCAG contrast checker, OKLCH palette generator, SVG minifier, screen-size sheet and text generator. No signup.',
    h1: 'Free design tools that run in the browser',
    eyebrow: 'Tools',
    lede:
      'Five small tools built for the boring parts of interface design: checking contrast, building a colour ramp, shrinking an SVG, picking a canvas size, filling a layout with placeholder copy. Every one runs locally in the page.',
    reading: '3 min',
    cta: [
      { label: 'Open the studio', href: '/#demo', primary: true },
      { label: 'Download FigCraft', href: '/install/' }
    ],
    body: `
      <section>
        <h2>Pick a tool</h2>
        <p class="sub">No account, no upload, no network call after the page loads. Each tool keeps its result in the URL so you can send someone the exact state you are looking at.</p>
        <div class="grid">
          <a class="card" href="/tools/contrast-checker/"><span class="k">Accessibility</span><h3>Contrast checker</h3><p>WCAG 2.2 AA and AAA against any two colours, plus the nearest passing colour when a pair fails.</p></a>
          <a class="card" href="/tools/palette-generator/"><span class="k">Colour</span><h3>Palette generator</h3><p>An 11-step 50–950 ramp from one base colour, in OKLCH, exported as CSS, Tailwind, SCSS or JSON.</p></a>
          <a class="card" href="/tools/svg-minifier/"><span class="k">Export</span><h3>SVG minifier</h3><p>Strip the XML preamble, metadata and float noise from a design-tool export without breaking references.</p></a>
          <a class="card" href="/tools/screen-sizes/"><span class="k">Layout</span><h3>Screen sizes</h3><p>Logical viewport sizes for phones, tablets and laptops, with copyable media queries and a studio handoff.</p></a>
          <a class="card" href="/tools/lorem-ipsum/"><span class="k">Copy</span><h3>Text generator</h3><p>Placeholder paragraphs sized for real UI strings, with word and character counts.</p></a>
          <a class="card" href="/#demo"><span class="k">Editor</span><h3>The canvas studio</h3><p>A small browser canvas with frames, text, layers and PNG/SVG/JSON export. Not the full editor.</p></a>
        </div>
      </section>

      <section>
        <h2>Why these five</h2>
        <p class="sub">They are the checks that come up between a design being drawn and a design being handed off. Each one is also a page that a design tool vendor tends to publish — Figma ships its own colour contrast checker, palette generator and lorem ipsum generator — so the floor for a decent design tool site now includes working utilities rather than screenshots of utilities.</p>
        <div class="grid three">
          <div class="card"><span class="k">Check</span><h3>Contrast before review</h3><p>Text/background pairs fail review, not design. Checking a pair takes seconds and the fix suggestion keeps the hue.</p></div>
          <div class="card"><span class="k">Build</span><h3>Ramps before tokens</h3><p>A ramp with a held hue gives you 50–950 names you can paste into variables instead of inventing shades per component.</p></div>
          <div class="card"><span class="k">Ship</span><h3>Weight before deploy</h3><p>Design-tool SVG exports carry editor namespaces and four decimal places. Removing them is free bytes.</p></div>
        </div>
      </section>

      <section>
        <h2>How the tools relate to FigCraft</h2>
        <p class="sub">FigCraft is an open-source design app written in Rust, currently early alpha at roughly 49% parity by the project's own estimate. These tools do not depend on it: they work if you use Figma, Penpot, Sketch or nothing at all. Where a result maps onto FigCraft, the page says how — a ramp becomes local styles and variables, a canvas size opens in the <a href="/#demo">browser studio</a>, a minified SVG lands in the same file you exported it from.</p>
        <p class="note">This site is independent. It is not affiliated with Figma, Penpot, Sketch or ArtCraft, and none of these tools uploads your files anywhere.</p>
      </section>
    `,
    faq: [
      { q: 'Do these tools send my colours or SVG files anywhere?', a: 'No. The contrast checker, palette generator, minifier, size sheet and text generator are static JavaScript served from this domain. There is no API call after the page loads, and nothing is written to a server.' },
      { q: 'Can I use the output commercially?', a: 'Colour values, SVG markup and placeholder text are not copyrightable in the way code is, and the tools impose no licence on their output. Your own text and artwork remain yours.' },
      { q: 'Are these the same tools Figma ships?', a: 'No. They are independent implementations of the same jobs. Figma publishes a colour contrast checker, a colour palette generator and a lorem ipsum generator; this page publishes its own versions with the same inputs and no account requirement.' },
      { q: 'Why do the tools put state in the URL?', a: 'So a result is linkable. If you find a failing pair, the URL carries the two colours and the text size, which makes a bug report or a design review comment self-contained.' }
    ],
    items: [
      { name: 'Contrast checker', path: 'tools/contrast-checker/' },
      { name: 'Palette generator', path: 'tools/palette-generator/' },
      { name: 'SVG minifier', path: 'tools/svg-minifier/' },
      { name: 'Screen sizes', path: 'tools/screen-sizes/' },
      { name: 'Text generator', path: 'tools/lorem-ipsum/' }
    ],
    related: ['tools/contrast-checker/', 'tools/palette-generator/', 'tools/svg-minifier/', 'tools/screen-sizes/', 'learn/keyboard-shortcuts/'],
    crumbs: [{ name: 'Tools', path: 'tools/' }],
    priority: '0.9',
    changefreq: 'monthly',
    updated: UPDATED
  },

  {
    path: 'tools/contrast-checker/',
    group: 'tools',
    type: 'tool',
    script: 'contrast.js',
    title: 'Contrast Checker — WCAG AA/AAA With Fix Suggestions',
    description:
      'Check any text/background pair against WCAG 2.2 AA and AAA, and get the nearest passing colour that keeps the hue. Runs locally, no signup.',
    h1: 'Contrast checker with a fix, not just a verdict',
    eyebrow: 'Free tool',
    lede:
      'Paste two colours and see the exact WCAG 2.2 ratio, which levels pass, and the closest colour that would pass while keeping the hue and saturation. Everything runs in this page.',
    reading: '5 min',
    appDescription: 'Browser-based WCAG 2.2 contrast ratio calculator with nearest-passing-colour suggestions.',
    cta: [
      { label: 'Open the studio', href: '/#demo', primary: true },
      { label: 'Download FigCraft', href: '/install/' }
    ],
    body: `
      <section id="check">
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
        <p class="note">Click any suggested colour to copy its hex. The URL updates as you type, so the link you share reproduces the exact pair and text size.</p>
      </section>

      <section id="math">
        <h2>How the ratio is calculated</h2>
        <p class="sub">WCAG 2.2 defines contrast on relative luminance, not on perceived lightness. The arithmetic is short enough to check by hand:</p>
        <div class="prose">
          <pre><code>c_linear = c/12.92                     if c &lt;= 0.04045
c_linear = ((c + 0.055)/1.055) ^ 2.4   otherwise     (c = channel / 255)

L = 0.2126·R_linear + 0.7152·G_linear + 0.0722·B_linear

ratio = (L_light + 0.05) / (L_dark + 0.05)          range 1:1 to 21:1</code></pre>
          <p>Two consequences worth knowing. First, the ratio is symmetric: swapping text and background gives the same number. Second, the +0.05 means dark colours compress — the difference between <code>#000</code> and <code>#111</code> matters far less than between <code>#EEE</code> and <code>#FFF</code>.</p>
        </div>
        <div class="table-wrap" style="margin-top:16px">
          <table>
            <thead><tr><th>Level</th><th>Normal text</th><th>Large text</th><th>Applies to</th></tr></thead>
            <tbody>
              <tr><th scope="row">AA (1.4.3)</th><td>4.5:1</td><td>3:1</td><td>Body copy, labels, links</td></tr>
              <tr><th scope="row">AAA (1.4.6)</th><td>7:1</td><td>4.5:1</td><td>Long-form reading, low-vision audiences</td></tr>
              <tr><th scope="row">Non-text (1.4.11)</th><td>3:1</td><td>3:1</td><td>Input borders, icons, focus rings, chart strokes</td></tr>
            </tbody>
          </table>
        </div>
        <p class="note">Large text is at least 18pt (24px), or 14pt (about 18.66px) when bold. The checkbox above switches which threshold the verdict uses; the individual level pills always show all of them.</p>
      </section>

      <section id="workflow">
        <h2>Where this fits in a real design file</h2>
        <div class="grid">
          <div class="card"><span class="k">01</span><h3>Check the pair, not the swatch</h3><p>A brand colour can be fine on white and fail on your grey surface. Check the pair you actually ship: text token against surface token, in both themes.</p></div>
          <div class="card"><span class="k">02</span><h3>Keep the hue when you fix</h3><p>The suggestion moves lightness only. A blue that fails becomes a darker blue, not a muddy black — which is what usually happens when someone nudges a colour picker at random.</p></div>
          <div class="card"><span class="k">03</span><h3>Store the pair in variables</h3><p>In FigCraft, local styles and variables with modes let one name hold light and dark values. The contrast rule then lives in the token pair rather than in a comment.</p></div>
        </div>
        <div class="cta" style="margin-top:24px">
          <a class="btn primary" href="/tools/palette-generator/">Build a ramp from a passing colour</a>
          <a class="btn ghost" href="/tools/svg-minifier/">Minify an export</a>
        </div>
      </section>

      <section id="limits">
        <h2>What it does not do</h2>
        <p class="sub">A ratio is one axis of accessibility, not the whole test.</p>
        <ul class="list">
          <li><strong>No colour-blindness simulation</strong><span>Two colours can pass 4.5:1 and still be indistinguishable to a reader with deuteranopia. Pair colour with shape, label or position.</span></li>
          <li><strong>No background images or gradients</strong><span>The tool compares two flat colours. For text over a photo, check the worst pixel behind the glyphs.</span></li>
          <li><strong>Not APCA</strong><span>WCAG 3 is still a draft and its APCA model produces different numbers. This page implements WCAG 2.2, which is what audits currently cite.</span></li>
          <li><strong>Not a full audit</strong><span>Focus visibility, target size, reflow and semantics are separate success criteria. This checks 1.4.3, 1.4.6 and the colour half of 1.4.11.</span></li>
        </ul>
      </section>
    `,
    faq: [
      { q: 'Why does my colour pass in Figma but fail here?', a: 'Usually because a different pair is being measured: a text fill against a frame fill, versus the same fill against a semi-transparent surface above it. Blend the transparency into the background colour first, then check the flattened pair.' },
      { q: 'What does "nearest passing colour" change?', a: 'Only HSL lightness. Hue and saturation stay where they were and the tool searches for the smallest lightness move that reaches the required ratio. If no lightness on that hue can pass, no suggestion is offered.' },
      { q: 'Is 3:1 enough for large text?', a: 'For WCAG 2.2 AA, yes: large text needs 3:1. AAA still wants 4.5:1 for large text, and body text needs 4.5:1 (AA) or 7:1 (AAA).' },
      { q: 'Does this check UI components too?', a: 'It reports the 3:1 non-text threshold, which is the colour requirement in 1.4.11. It cannot tell you whether a focus indicator is large enough or whether a control is distinguishable without colour — those need manual checks.' },
      { q: 'Can I link a specific check?', a: 'Yes. The URL carries fg, bg and size, for example /tools/contrast-checker/?fg=5f6368&bg=ffffff&size=body. The Share result button copies the current URL.' }
    ],
    related: ['tools/palette-generator/', 'tools/svg-minifier/', 'tools/screen-sizes/', 'vs-figma/'],
    crumbs: [{ name: 'Tools', path: 'tools/' }, { name: 'Contrast checker', path: 'tools/contrast-checker/' }],
    priority: '0.9',
    changefreq: 'monthly',
    updated: UPDATED
  },

  {
    path: 'tools/palette-generator/',
    group: 'tools',
    type: 'tool',
    script: 'palette.js',
    title: 'Colour Palette Generator — 11-Step Ramp, CSS & Tailwind',
    description:
      'Turn one base colour into an 11-step 50–950 ramp in OKLCH. Copy CSS variables, Tailwind config, SCSS or JSON. No signup, runs locally.',
    h1: 'Palette generator: one colour in, eleven steps out',
    eyebrow: 'Free tool',
    lede:
      'Give it a brand colour. It holds the hue, walks lightness in even perceptual steps, and gives you a named ramp you can paste into CSS variables, a Tailwind config or FigCraft local styles.',
    reading: '5 min',
    appDescription: 'OKLCH-based 11-step colour ramp generator exporting CSS variables, Tailwind config, SCSS and JSON.',
    cta: [
      { label: 'Open the studio', href: '/#demo', primary: true },
      { label: 'Check contrast', href: '/tools/contrast-checker/' }
    ],
    body: `
      <section id="generate">
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
              <p class="note">Click a swatch to copy its hex. The ramp updates as you type; the URL keeps the base colour and token name.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="oklch">
        <h2>Why OKLCH instead of HSL</h2>
        <p class="sub">HSL lightness is not perceptual. Two HSL colours with the same <code>L</code> can look wildly different in brightness — pure yellow at 50% is far lighter than pure blue at 50%. A ramp built in HSL produces uneven steps and a muddy middle.</p>
        <div class="prose">
          <p>OKLCH splits a colour into perceptual lightness (<code>L</code>), chroma (<code>C</code>) and hue (<code>h</code>). Changing only <code>L</code> keeps the hue and the "colourfulness" feeling constant, which is exactly what a design-system ramp needs.</p>
          <ul>
            <li><strong>Hue is held constant</strong> — the 11 steps are one colour family, not a gradient that drifts toward grey or purple.</li>
            <li><strong>Chroma tapers at the ends</strong> — near white and near black there is less room for saturation. Each step's chroma is scaled down as it moves away from the base lightness, so 50 and 950 do not turn into muddy pastels.</li>
            <li><strong>Out-of-gamut colours lose chroma, not hue</strong> — if a step cannot be shown in sRGB, the generator reduces chroma until it fits instead of clipping a channel and shifting the hue.</li>
          </ul>
        </div>
      </section>

      <section id="use">
        <h2>Using the ramp in a file</h2>
        <ol class="steps">
          <li><strong>Pick the base.</strong> Start from your brand colour rather than a mid-grey; the generator will place it near its natural lightness in the ramp.</li>
          <li><strong>Copy the output.</strong> CSS for a stylesheet, Tailwind for a config, SCSS for a legacy build, JSON for a token pipeline.</li>
          <li><strong>Name the steps, not the jobs.</strong> <code>brand-600</code> survives a redesign; <code>brand-button</code> does not. Semantic names belong in a second layer that points at ramp steps.</li>
          <li><strong>Check the pairs you will ship.</strong> A ramp is not an accessibility pass. Run the text/background pairs through the <a href="/tools/contrast-checker/">contrast checker</a> before you commit tokens.</li>
        </ol>
        <p class="note">In FigCraft, local styles and variables take these values directly: one variable per step, modes for light and dark. The app is early alpha, so verify that variables round-trip through export before you depend on it for a team library.</p>
      </section>

      <section id="limits">
        <h2>What the generator does not decide</h2>
        <ul class="list">
          <li><strong>Semantic colours</strong><span>Success, warning and danger need their own hues. Deriving them from the brand ramp produces reds that read as brown and greens that read as teal.</span></li>
          <li><strong>Dark-mode inversion</strong><span>A 950 step is not automatically the dark-mode version of 50. Dark themes usually need their own lightness targets and slightly lower chroma.</span></li>
          <li><strong>Contrast guarantees</strong><span>Steps are perceptual, not compliance-checked. 600-on-50 passes far more often than 500-on-100, but the pair is what counts.</span></li>
          <li><strong>Print and wide-gamut</strong><span>The output is sRGB hex. P3 or CMYK work needs a colour-managed pipeline.</span></li>
        </ul>
      </section>
    `,
    faq: [
      { q: 'Why eleven steps and not five?', a: 'Eleven is enough to cover surfaces, borders, text and accents without inventing one-off shades, and it matches the 50–950 convention most Tailwind-based systems already use. Fewer steps forces compromises at the extremes; more steps invites near-duplicates.' },
      { q: 'Does the base colour appear exactly in the ramp?', a: 'Not always. The base sets the hue and the chroma scale, and the nearest step is usually within a few percent of it. If you need the exact brand hex, keep it as a separate token and treat the ramp as the scale around it.' },
      { q: 'Can I get the same ramp in Figma or Penpot?', a: 'Yes — copy the hex list. The output is plain sRGB, so it pastes into any tool. In FigCraft the values map onto local styles and variables; in Penpot they map onto colour assets.' },
      { q: 'Why do two steps look closer than others?', a: 'Perceptual lightness is not linear in hex values. The 50–200 range covers a small numeric span but a large visual one near white. The steps are even in OKLCH L, not in RGB.' }
    ],
    related: ['tools/contrast-checker/', 'tools/svg-minifier/', 'tools/screen-sizes/', 'templates/design-system/'],
    crumbs: [{ name: 'Tools', path: 'tools/' }, { name: 'Palette generator', path: 'tools/palette-generator/' }],
    priority: '0.9',
    changefreq: 'monthly',
    updated: UPDATED
  },

  {
    path: 'tools/svg-minifier/',
    group: 'tools',
    type: 'tool',
    script: 'svg-minifier.js',
    title: 'SVG Minifier — Shrink Figma Exports Without Breaking Them',
    description:
      'Cut the XML preamble, metadata, editor namespaces and float noise from design-tool SVG exports. Keeps ids, text and references intact. Runs locally.',
    h1: 'SVG minifier that leaves your references alone',
    eyebrow: 'Free tool',
    lede:
      'Design tools export SVG with an XML declaration, editor namespaces, metadata blocks and four decimal places. This strips the overhead and reports exactly what it removed — without touching ids, text content or gradient references.',
    reading: '5 min',
    appDescription: 'Browser-based SVG minifier for design-tool exports with a structural validity check and byte report.',
    cta: [
      { label: 'Open the studio', href: '/#demo', primary: true },
      { label: 'Download FigCraft', href: '/install/' }
    ],
    body: `
      <section id="minify">
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
      </section>

      <section id="what">
        <h2>What is actually in a design-tool SVG</h2>
        <p class="sub">Export the same icon from three tools and you get three different files. Most of the difference is not artwork.</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Part</th><th>Typical cost</th><th>Safe to remove?</th></tr></thead>
            <tbody>
              <tr><th scope="row">XML declaration + DOCTYPE</th><td>~60–120 bytes</td><td>Yes for inline SVG and for <code>&lt;img&gt;</code> use; harmless either way.</td></tr>
              <tr><th scope="row">Comments</th><td>Variable, can be huge</td><td>Yes, unless you keep licence comments. Check the licence first.</td></tr>
              <tr><th scope="row"><code>&lt;metadata&gt;</code>, editor namespaces</th><td>200 bytes–5 kB</td><td>Yes. No renderer reads it.</td></tr>
              <tr><th scope="row"><code>&lt;title&gt;</code> / <code>&lt;desc&gt;</code></th><td>Small</td><td>Only if nothing depends on them — they are the accessible name for an inline SVG.</td></tr>
              <tr><th scope="row">Float noise (<code>12.000000</code>)</th><td>2–6 bytes per number</td><td>Yes, to the precision you actually render at.</td></tr>
              <tr><th scope="row"><code>id</code> attributes</th><td>Small</td><td>No. Gradients, masks, clip paths and <code>&lt;use&gt;</code> reference them; removing an id can silently break the file.</td></tr>
            </tbody>
          </table>
        </div>
        <p class="note">This tool removes the first five and never removes <code>id</code>. Numbers are only rewritten inside tags, so <code>&lt;text&gt;1.2345&lt;/text&gt;</code> stays byte-identical — rounding visible text would be a correctness bug, not an optimisation.</p>
      </section>

      <section id="limits">
        <h2>Where a real optimiser still wins</h2>
        <ul class="list">
          <li><strong>Path rewriting</strong><span>Dedicated optimisers convert primitives to paths, merge shapes and reduce curve precision with error bounds. This tool does none of that; it only removes overhead and float noise.</span></li>
          <li><strong>Duplicate definitions</strong><span>Repeated gradients and clip paths are not deduplicated here.</span></li>
          <li><strong>Responsive cleanup</strong><span><code>width</code>/<code>height</code> versus <code>viewBox</code> is a design decision. The tool leaves both alone rather than guessing.</span></li>
          <li><strong>Verification</strong><span>The tool re-parses the output for balanced tags and a root <code>&lt;svg&gt;</code> before showing it. That catches structural breakage, not visual regressions — render the file once before shipping.</span></li>
        </ul>
        <p class="note">Figma, FigCraft and most editors export with more precision than a screen can show. Two decimals is a sensible default for UI icons; use three for large illustrations and zero only for pixel-aligned shapes.</p>
      </section>
    `,
    faq: [
      { q: 'Will this break gradients or masks?', a: 'It should not: ids are preserved, so url(#id) references and <use href="#id"> keep resolving. The output is re-parsed for tag balance before it is shown. Still render the file once — structural validity is not visual equivalence.' },
      { q: 'Why does removing <title> matter?', a: 'An inline SVG uses <title> as its accessible name. Removing it can turn a meaningful icon into an unlabelled graphic for screen readers. Keep titles on icons that carry meaning; drop them on purely decorative shapes.' },
      { q: 'How much smaller will my file get?', a: 'It depends on the exporter. Files dominated by float noise and editor metadata shrink the most; hand-written SVG with none of that overhead barely changes. The tool reports exact bytes before and after rather than a promised percentage.' },
      { q: 'Does it upload my SVG anywhere?', a: 'No. Parsing, rewriting and the byte report all happen in this page. The Download button writes a local file through a blob URL.' },
      { q: 'Can I minify a whole folder?', a: 'Not here — this page handles one file at a time. For a batch, run a dedicated optimiser in a build step so the transformation is reproducible and reviewed.' }
    ],
    related: ['tools/palette-generator/', 'tools/contrast-checker/', 'learn/export-svg/', 'issues/'],
    crumbs: [{ name: 'Tools', path: 'tools/' }, { name: 'SVG minifier', path: 'tools/svg-minifier/' }],
    priority: '0.85',
    changefreq: 'monthly',
    updated: UPDATED
  },

  {
    path: 'tools/screen-sizes/',
    group: 'tools',
    type: 'tool',
    script: 'screen-sizes.js',
    title: 'Screen Sizes Cheat Sheet — CSS Pixels and Media Queries',
    description:
      'Logical viewport sizes for phones, tablets and laptops, with copyable media queries and one-click handoff to a matching canvas size.',
    h1: 'Screen sizes, in CSS pixels, with the queries attached',
    eyebrow: 'Free tool',
    lede:
      'A working sheet of logical viewport sizes and breakpoints. Copy a size, copy the media query, or open the canvas studio at that exact size and start drawing.',
    reading: '3 min',
    appDescription: 'Reference table of logical viewport sizes with copyable media queries and canvas handoff.',
    cta: [
      { label: 'Open the studio', href: '/#demo', primary: true },
      { label: 'Download FigCraft', href: '/install/' }
    ],
    body: `
      <section id="devices">
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
            <p class="note">Portrait values. For landscape, swap width and height. “Open in studio” presets the canvas on this site's demo canvas; it does not open the real FigCraft editor.</p>
          </div>
        </div>
      </section>

      <section id="breakpoints">
        <h2>Breakpoints to design against</h2>
        <p class="sub">A breakpoint is where your layout changes, not where a device is. Pick the smallest set that keeps the layout sane, then test at the edges.</p>
        <ul class="list" id="bp-list"></ul>
      </section>

      <section id="units">
        <h2>Logical pixels, physical pixels and the 100vh problem</h2>
        <div class="prose">
          <p>A phone with a 1179×2556 panel reports a 393×852 viewport because the browser maps CSS pixels to several device pixels. That is the DPR column above: at DPR 3, one CSS pixel covers a 3×3 block. Design at logical pixels, export raster assets at 2× or 3×.</p>
          <p>Viewport height is the number that bites. Mobile browser chrome collapses as you scroll, so <code>100vh</code> is larger than what the user sees. The viewport units <code>svh</code> (small), <code>lvh</code> (large) and <code>dvh</code> (dynamic) exist for exactly this; a full-height layout should usually use <code>100svh</code> as the floor and <code>100dvh</code> where resizing is acceptable.</p>
          <h3>Safe areas</h3>
          <p>Notches and home indicators are handled with <code>env(safe-area-inset-*)</code> plus <code>viewport-fit=cover</code>. A design that pins content to the bottom edge needs about 34px of clearance on current iPhones; keep that in the spec, not in a comment.</p>
        </div>
      </section>

      <section id="limits">
        <h2>Accuracy and limits</h2>
        <ul class="list">
          <li><strong>Not an official spec sheet</strong><span>These are the logical viewports commonly reported for each device class. Vendors do not guarantee a CSS viewport per model, and browser chrome changes the usable height.</span></li>
          <li><strong>Not a breakpoint strategy</strong><span>Designing one frame per device leads to five layouts nobody maintains. Design the content, then find where it breaks.</span></li>
          <li><strong>No fold or zoom modelling</strong><span>Users zoom, use large text settings, and rotate. Test at 200% zoom and at 320px width before declaring a layout responsive.</span></li>
        </ul>
      </section>
    `,
    faq: [
      { q: 'Why does my iPhone show a different height than this table?', a: 'Because browser chrome is part of the viewport story. Safari reports a shorter visible height with its toolbars showing, which is why dvh and svh exist. The numbers here are the full-screen logical viewport, the size you design an artboard at.' },
      { q: 'Should I design at 375, 390 or 393?', a: 'Pick one phone width for your base artboard and let layout adapt below and above it. 390 is the most common modern reference; 375 still covers older and smaller phones. What matters is that the layout survives 320–430 without clipping.' },
      { q: 'What does “Open in studio” do?', a: 'It loads this site’s browser canvas demo with the width and height already set, so you can sketch a frame at that size. It is an independent demo, not the real FigCraft editor, and nothing is saved to an account.' },
      { q: 'Do I need a separate tablet breakpoint?', a: 'Only if the layout needs one. Many responsive designs jump from a single mobile column to a two-column desktop layout at 768–1024px. Adding a tablet breakpoint that changes nothing is pure maintenance cost.' }
    ],
    related: ['tools/contrast-checker/', 'tools/lorem-ipsum/', 'templates/social-post-sizes/', 'learn/export-svg/'],
    crumbs: [{ name: 'Tools', path: 'tools/' }, { name: 'Screen sizes', path: 'tools/screen-sizes/' }],
    priority: '0.85',
    changefreq: 'monthly',
    updated: UPDATED
  },

  {
    path: 'tools/lorem-ipsum/',
    group: 'tools',
    type: 'tool',
    script: 'lorem-ipsum.js',
    title: 'Lorem Ipsum Generator — Text Sized for Real UI Copy',
    description:
      'Generate placeholder paragraphs, sentences or words with live word and character counts, sized so a layout is tested with realistic copy lengths.',
    h1: 'Placeholder text sized for the layout it fills',
    eyebrow: 'Free tool',
    lede:
      'Two words break a button; forty words break a card. Generate placeholder copy in the shape your UI actually needs, with the word and character counts shown so you can match a real string budget.',
    reading: '4 min',
    appDescription: 'Placeholder text generator with paragraph, sentence and word modes plus length statistics.',
    cta: [
      { label: 'Open the studio', href: '/#demo', primary: true },
      { label: 'Check contrast', href: '/tools/contrast-checker/' }
    ],
    body: `
      <section id="generate">
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
      </section>

      <section id="why">
        <h2>Why the length matters more than the words</h2>
        <p class="sub">Placeholder copy that is always the same length hides every layout problem you are trying to find.</p>
        <div class="grid">
          <div class="card"><span class="k">Buttons</span><h3>Two words minimum, always</h3><p>Design with the longest label you expect, not the shortest. “Save” fits everywhere; “Save and continue” is the string that breaks the row.</p></div>
          <div class="card"><span class="k">Cards</span><h3>Titles wrap differently</h3><p>A 40-character title wraps to two lines on mobile and one on desktop. Test both, or your grid will jump when real content arrives.</p></div>
          <div class="card"><span class="k">Translation</span><h3>Plan for +30%</h3><p>German and Finnish strings routinely run 30% longer than English; CJK runs shorter but needs different line-height. A layout that only fits one language is not localised, it is translated.</p></div>
        </div>
        <p class="note">Lorem ipsum is public-domain pseudo-Latin derived from Cicero's <em>De finibus bonorum et malorum</em>. It is fine as filler and poor as a test of comprehension — usability testing with lorem text measures nothing about your copy.</p>
      </section>

      <section id="limits">
        <h2>Honest limits</h2>
        <ul class="list">
          <li><strong>Line estimates are approximate</strong><span>The tool reports a 60-character line width as a rough guide. Real line breaks depend on font, size, tracking and container width.</span></li>
          <li><strong>English only</strong><span>All output is Latin filler. For RTL, CJK or accented-language testing, use a real string set from that language.</span></li>
          <li><strong>Not a copywriting shortcut</strong><span>Shipping lorem ipsum to production is a content failure, not a design one. Replace every block before launch.</span></li>
        </ul>
      </section>
    `,
    faq: [
      { q: 'What are the words actually from?', a: 'The standard passage is a scrambled excerpt of Cicero’s De finibus bonorum et malorum, in use as typesetting filler since the 1500s. It is public domain. This generator reassembles common lorem words rather than quoting a fixed paragraph.' },
      { q: 'Can I get exactly 120 characters for a meta description?', a: 'Use word mode and regenerate until the count lands near your target, or paste the output into an editor and trim. The character count updates live under the box.' },
      { q: 'Should I design with lorem ipsum?', a: 'For layout exploration, yes. For anything a stakeholder will approve or a user will test, use realistic copy — placeholder text makes bad hierarchy look acceptable.' },
      { q: 'Does the generator send anything to a server?', a: 'No. The word list is embedded in the page and generation runs in your browser.' }
    ],
    related: ['tools/screen-sizes/', 'tools/contrast-checker/', 'templates/landing-page/', 'templates/wireframe-kit/'],
    crumbs: [{ name: 'Tools', path: 'tools/' }, { name: 'Text generator', path: 'tools/lorem-ipsum/' }],
    priority: '0.8',
    changefreq: 'monthly',
    updated: UPDATED
  }
];
