// Template pages: the hub plus the eight starters that ship with FigCraft.
// Everything here describes the starters as they open from File ▸ New from template.

export const PAGES = [
  {
    path: 'templates/',
    group: 'templates',
    type: 'hub',
    title: 'FigCraft Templates: Eight Starter Files and Their Frame Sizes',
    description: 'Eight starters ship with FigCraft, opened from File ▸ New from template: mobile app, landing page, dashboard, design system, wireframes, social posts, slides, icons.',
    h1: 'FigCraft templates: eight starters, one menu',
    eyebrow: 'Templates',
    lede: 'The app ships eight starters, and they all live behind one menu item. This is the map: what each file contains, the size it is drawn at, and where it stops being useful.',
    reading: '5 min',
    items: [
      { name: 'Mobile app', path: 'templates/mobile-app/' },
      { name: 'Landing page', path: 'templates/landing-page/' },
      { name: 'Dashboard', path: 'templates/dashboard/' },
      { name: 'Design system', path: 'templates/design-system/' },
      { name: 'Wireframe kit', path: 'templates/wireframe-kit/' },
      { name: 'Social post sizes', path: 'templates/social-post-sizes/' },
      { name: 'Presentation slides', path: 'templates/presentation-slides/' },
      { name: 'Icon set', path: 'templates/icon-set/' }
    ],
    body: `<section>
  <h2>What ships in the app</h2>
  <p class="sub">Eight starters, one per job, all opened from <strong>File ▸ New from template</strong>. The project lists the eight names and does not publish their internal pages or frame sizes, so each page below documents a workable structure you can build against.</p>
  <div class="grid">
    <a class="card" href="/templates/mobile-app/"><span class="k">390 × 844</span><h3>Mobile app</h3><p>Launch to settings in six phone screens, with an Android frame at 412 × 915 for a density check.</p></a>
    <a class="card" href="/templates/landing-page/"><span class="k">1440 wide</span><h3>Landing page</h3><p>Hero, logo strip, features, proof, pricing, FAQ and footer on a 12-column grid.</p></a>
    <a class="card" href="/templates/dashboard/"><span class="k">1440 × 900</span><h3>Dashboard</h3><p>Sidebar, top bar, stat cards, a data table and chart placeholders in an editable shell.</p></a>
    <a class="card" href="/templates/design-system/"><span class="k">1440 × 1080</span><h3>Design system</h3><p>Foundations sheets, local styles, variables with light and dark modes, component sets.</p></a>
    <a class="card" href="/templates/wireframe-kit/"><span class="k">1440 × 1024</span><h3>Wireframe kit</h3><p>Gray placeholders at desktop, tablet and phone widths, built from five block components.</p></a>
    <a class="card" href="/templates/social-post-sizes/"><span class="k">1080 × 1080</span><h3>Social post sizes</h3><p>Feed, portrait, story and link-preview frames with the platform-covered areas marked.</p></a>
    <a class="card" href="/templates/presentation-slides/"><span class="k">1920 × 1080</span><h3>Presentation slides</h3><p>Seven 16:9 layouts wired into a prototype flow you can play in presentation view.</p></a>
    <a class="card" href="/templates/icon-set/"><span class="k">24 × 24</span><h3>Icon set</h3><p>A 24 px grid with 1.5 px and 2 px strokes, plus 16 and 20 px derivatives.</p></a>
  </div>
</section>
<section>
  <h2>How the starters are built</h2>
  <p class="sub">All eight lean on the same three engine features, which is why they survive editing. Nothing is flattened, and nothing depends on a plugin.</p>
  <div class="grid two">
    <div class="card"><span class="k">Auto layout</span><h3>Frames that reflow</h3><p>Both directions, wrap, grid tracks, and Hug, Fill or Fixed sizing. A page section is a vertical stack with padding; a row of cards is grid tracks, so widths stay equal when you add a fourth card.</p></div>
    <div class="card"><span class="k">Variables and styles</span><h3>Tokens with modes</h3><p>Local styles carry text and effects; variables carry color and spacing with modes and aliases. Switching the mode on a page restyles it without touching a layer.</p></div>
    <div class="card"><span class="k">Components</span><h3>Variants, not copies</h3><p>Buttons, rows and cards are component sets with variants and properties. Edit the main component and every screen in the starter follows.</p></div>
    <div class="card"><span class="k">Output</span><h3>Where the file goes next</h3><p>Inspect with measurements and annotations, mark a frame ready for dev, then export CSS, HTML, React, Leptos, SwiftUI or Compose — or SVG, PNG, JPG, WebP and PDF.</p></div>
  </div>
</section>
<section>
  <h2>Which starter for which job</h2>
  <p class="sub">If you are unsure, pick the file that matches the artifact you have to hand over, not the one that looks closest to your brand.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>You need</th><th>Starter</th><th>Size it opens at</th></tr></thead>
    <tbody>
      <tr><th>A phone flow</th><td>Mobile app</td><td>390 × 844</td></tr>
      <tr><th>A marketing page</th><td>Landing page</td><td>1440 wide</td></tr>
      <tr><th>An app screen with data</th><td>Dashboard</td><td>1440 × 900</td></tr>
      <tr><th>Tokens and components</th><td>Design system</td><td>1440 × 1080</td></tr>
      <tr><th>A layout review</th><td>Wireframe kit</td><td>1440 × 1024</td></tr>
      <tr><th>A campaign asset</th><td>Social post sizes</td><td>1080 × 1080</td></tr>
      <tr><th>A deck</th><td>Presentation slides</td><td>1920 × 1080</td></tr>
      <tr><th>A UI glyph</th><td>Icon set</td><td>24 × 24</td></tr>
    </tbody>
  </table></div>
</section>
<section>
  <h2>Read this before you trust a starter</h2>
  <p class="disclosure">FigCraft v0.9.0 shipped on 21 October 2026, and the project still calls it an early alpha with about 49% parity by its own estimate. The templates reflect that: they are seeds for a project, not finished brand systems, and a frame that renders today may need a small fix after an update.</p>
  <p class="note">The practical consequences are worth knowing before you plan a week around one of these files. Text needs the <code>craft-fonts</code> repository cloned beside the source or it silently falls back to a system face (#821 tracks rescanning; #752 is closed). macOS 27 on M1 has a launch crash (#781), FreeBSD aarch64 builds were dropped in v0.9.0, and <code>.fig</code> import is best effort with large files still failing (#574, #321). Check <a href="/issues/">known issues</a> first, and <a href="/install/">install</a> the build that matches your platform.</p>
  <div class="cta" style="margin-top:24px"><a class="btn primary" href="/?w=1440&amp;h=900#demo">Open a 1440 × 900 canvas</a><a class="btn ghost" href="/install/">Get FigCraft</a></div>
</section>`,
    faq: [
      { q: 'Where are the eight starters in FigCraft?', a: 'Under <strong>File ▸ New from template</strong>. The list is mobile app, landing page, dashboard, design system, wireframe kit, social post sizes, presentation slides and icon set. There is no marketplace and no download step: the starters ship with the app, so they work offline.' },
      { q: 'Do the templates cost anything?', a: 'The starters ship with the application. FigCraft itself is open source under MIT OR Apache-2.0 and asks for no account. This guide is independent and not affiliated with the project, so check the repository licence for the terms that actually bind you.' },
      { q: 'Can I use a starter for client work?', a: 'The repository licence governs redistribution, and it is MIT OR Apache-2.0. Read it rather than this page. What the starter gives you is a structure to replace — you are expected to swap the type, color and components for the client brand.' },
      { q: 'Which starter should I open first?', a: 'Open the one whose artifact you must hand over. For a layout argument use the <a href="/templates/wireframe-kit/">wireframe kit</a>; for a buildable screen use the <a href="/templates/dashboard/">dashboard</a> or <a href="/templates/mobile-app/">mobile app</a>; for tokens use the <a href="/templates/design-system/">design system</a>.' },
      { q: 'Why does text in a starter look wrong?', a: 'Almost always the font path. FigCraft needs the <code>../craft-fonts</code> repository cloned beside the source; without it, text silently falls back to a system face and your sizes shift. #752 is closed; #821 tracks rescanning once the fonts are in place.' }
    ],
    related: ['templates/mobile-app/', 'templates/design-system/', 'templates/wireframe-kit/'],
    crumbs: [{ name: 'Home', path: '' }, { name: 'Templates', path: 'templates/' }],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },
  {
    path: 'templates/mobile-app/',
    group: 'templates',
    type: 'template',
    title: 'FigCraft Mobile App Template: Six Screens at 390×844',
    description: 'The mobile app starter: six 390×844 screens from launch to settings, an Android frame at 412×915, auto layout lists and a button set with variants.',
    h1: 'Mobile app template: six screens at 390 × 844',
    eyebrow: 'Template',
    lede: 'A phone starter drawn at <strong>390 × 844</strong> with the screens most projects rewrite first. Auto layout does the resizing, so changing a headline does not break the fit.',
    reading: '4 min',
    body: `<section>
  <h2>What's in the starter</h2>
  <p class="disclosure">The project publishes the name of this starter, not its internal pages or frame sizes. What follows is a workable structure for this kind of file — a starting spec to build against — not a transcription of the shipped document. Check it against the build you actually open.</p>
  <p class="sub">The document opens on a page called <code>Mobile / iOS</code>: six phone frames, a component sheet, and one Android frame for a density check. Lists are auto layout stacks, so rows are instances rather than copies.</p>
  <ul class="list">
    <li><strong>Splash and onboarding</strong><span>One splash frame and three onboarding frames, each with a 24 px dot row, a headline block and a single primary button above the home indicator.</span></li>
    <li><strong>Sign in</strong><span>Email field, password field, one 48 px primary button, an SSO row, and a 34 px inset reserved for the home indicator.</span></li>
    <li><strong>Home feed</strong><span>A 56 px app bar set to Hug height, a vertical list of feed cards at 16 px gaps, and a tab bar held down by a spacer frame set to Fill height.</span></li>
    <li><strong>Detail and settings</strong><span>One long-scroll detail frame, and a settings frame built from 48 px rows grouped into three labelled sections.</span></li>
    <li><strong>Component sheet</strong><span>Button (3 styles × 3 states), list row, feed card and tab bar. Every screen uses instances of these four sets.</span></li>
  </ul>
</section>
<section>
  <h2>Canvas spec</h2>
  <p class="sub">Frame sizes as they open. 390 × 844 matches the logical size of a current iPhone; 412 × 915 matches a common Android phone, included so you can see where a 22 px width difference breaks a line.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Frame</th><th>Size (px)</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><th>iOS / Splash</th><td>390 × 844</td><td>Logo lockup, progress bar, no navigation</td></tr>
      <tr><th>iOS / Onboarding 1–3</th><td>390 × 844</td><td>Three steps; same layout, different copy and art</td></tr>
      <tr><th>iOS / Sign in</th><td>390 × 844</td><td>Two fields, one primary action, one SSO path</td></tr>
      <tr><th>iOS / Home</th><td>390 × 844</td><td>56 px app bar, scrolling card list, 83 px tab bar</td></tr>
      <tr><th>iOS / Detail</th><td>390 × 844</td><td>Scrollable content with a sticky action block</td></tr>
      <tr><th>iOS / Settings</th><td>390 × 844</td><td>Three groups of 48 px rows</td></tr>
      <tr><th>Android / Home</th><td>412 × 915</td><td>Same content at Android width and density</td></tr>
      <tr><th>Components</th><td>390 × 1200</td><td>Library sheet, auto height as sets grow</td></tr>
    </tbody>
  </table></div>
</section>
<section>
  <h2>Open it</h2>
  <ol class="steps">
    <li><strong>File ▸ New from template</strong> — the eight starters live behind this one item, not in a marketplace.</li>
    <li><strong>Choose “Mobile app”</strong> — the document opens unnamed, with the component sheet already built and the screens wired to it.</li>
    <li><strong>Save immediately</strong> — FigCraft writes plain <code>.figcraft</code> archives to disk. There is no cloud copy to restore, so save under your own name before the first edit.</li>
    <li><strong>Check the fonts</strong> — if text looks like a different typeface, the engine is falling back because <code>../craft-fonts</code> is missing beside the source. See <a href="/issues/">known issues</a>.</li>
    <li><strong>Duplicate the page</strong> — keep the untouched starter on one page and design on a copy, so you can compare against the original after a long session.</li>
  </ol>
</section>
<section>
  <h2>Make it yours</h2>
  <p class="sub">Four changes that do most of the work of making this file look like your product.</p>
  <div class="grid four">
    <div class="card"><span class="k">Auto layout</span><h3>Stacks, not coordinates</h3><p>Each screen body is a vertical stack: app bar Fixed 56, list Fill, tab bar Fixed 83. Change a row's padding and everything above and below follows.</p></div>
    <div class="card"><span class="k">Variables</span><h3>Light and dark in one pass</h3><p>The color variables carry both modes. Switch the mode on the page and the screens follow; then check the result with the <a href="/tools/contrast-checker/">contrast checker</a>.</p></div>
    <div class="card"><span class="k">Components</span><h3>One button, nine states</h3><p>The button set covers three styles across three states. Per-instance label and icon overrides keep each screen specific while the shape stays shared.</p></div>
    <div class="card"><span class="k">Sizes</span><h3>Other phones</h3><p>If your team designs at 375 × 812, resize the frame and let Fill widths absorb the difference. Cross-check against <a href="/tools/screen-sizes/">screen sizes</a> before you commit.</p></div>
  </div>
</section>
<section>
  <h2>What it does not give you</h2>
  <p class="disclosure">This is a drawing, not a running app. Prototypes connect frames with triggers, transitions and flows and play in presentation view, but there is no device mirroring and nothing is compiled for iOS or Android. Parity with Figma is about 49% by the project's own estimate, so expect gaps beyond the frames.</p>
  <p class="note">Two frictions worth planning for. Without <code>craft-fonts</code> cloned beside the source, text silently falls back and every size you tuned shifts (#821 tracks rescanning; #752 is closed). And if you were going to import an existing Figma phone design instead, remember <code>.fig</code> import is best effort — large files still fail (#574, #321) — so rebuild these six screens by hand and keep the original file open for reference.</p>
</section>
<section>
  <h2>Check proportions on a real canvas</h2>
  <p class="sub">The studio on this site opens at any size. Use it to sanity-check a layout before you commit to a device frame.</p>
  <div class="cta" style="margin-top:24px"><a class="btn primary" href="/?w=390&amp;h=844#demo">Open a 390 × 844 canvas</a><a class="btn ghost" href="/install/">Get FigCraft</a></div>
</section>`,
    faq: [
      { q: 'What size is the mobile app starter drawn at?', a: '390 × 844, the logical size of a current iPhone, with a second frame at 412 × 915 for Android. If your team works at 375 × 812, resize the frames and let Fill widths take the difference; the stacks reflow without manual repositioning.' },
      { q: 'Can I run the prototype on a phone?', a: 'No. Prototypes in FigCraft support connections, triggers, transitions, flows and a presentation view, so you can click through the six screens inside the app. There is no device mirroring and no build target for iOS or Android.' },
      { q: 'Why does the text use the wrong typeface?', a: 'The font engine looks for the <code>../craft-fonts</code> repository cloned beside the source. Without it, text silently falls back to a system face. #752 is closed and #821 tracks rescanning once the fonts are present.' },
      { q: 'Can I import a Figma phone design instead of rebuilding?', a: 'You can try: <code>.fig</code> import is best effort. Large files are a known failure (#574, #321), and a phone design is exactly the kind of nested, component-heavy file that stresses the importer. Keep the original and treat the import as a reference, not a working file.' }
    ],
    related: ['templates/', 'templates/design-system/', 'templates/wireframe-kit/'],
    crumbs: [{ name: 'Templates', path: 'templates/' }, { name: 'Mobile app', path: 'templates/mobile-app/' }],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },
  {
    path: 'templates/landing-page/',
    group: 'templates',
    type: 'template',
    title: 'FigCraft Landing Page Template: A 1440 px Page in Sections',
    description: 'The landing page starter: a 1440-wide page split into hero, logos, features, proof, pricing, FAQ and footer, plus a 390-wide mobile frame.',
    h1: 'Landing page template: a 1440 px page, cut into sections',
    eyebrow: 'Template',
    lede: 'One desktop frame at <strong>1440 px</strong>, cut into seven sections on a 12-column grid. Duplicate a section, keep the rhythm, hand the page over.',
    reading: '4 min',
    body: `<section>
  <h2>What's in the starter</h2>
  <p class="disclosure">The project publishes the name of this starter, not its internal pages or frame sizes. What follows is a workable structure for this kind of file — a starting spec to build against — not a transcription of the shipped document. Check it against the build you actually open.</p>
  <p class="sub">The desktop page is a single vertical stack. Each section is its own frame with fixed padding, so you can duplicate, delete or reorder one without touching the others.</p>
  <ul class="list">
    <li><strong>Navigation and hero</strong><span>An 80 px nav row with four links and one button, then a hero with a 64/68 headline, a 20/30 sub-line capped at 640 px, two 48 px buttons and a 960 × 600 product shot.</span></li>
    <li><strong>Logo strip</strong><span>Five placeholder wordmarks on one row, each 120 px wide, set in one text style so they read as a group.</span></li>
    <li><strong>Features</strong><span>Three 400 px cards on a grid track row, each with a 48 px icon slot, a 24 px heading and a three-line body.</span></li>
    <li><strong>Proof</strong><span>An 800 px quote column at 32/44 next to three stacked metrics, so the numbers do not compete with the sentence.</span></li>
    <li><strong>Pricing, FAQ and footer</strong><span>Three 400 px tiers with the middle one marked, five 72 px disclosure rows, and four 288 px footer columns.</span></li>
    <li><strong>Mobile page</strong><span>A second frame at 390 px wide with the same sections stacked in one column.</span></li>
  </ul>
</section>
<section>
  <h2>Canvas spec</h2>
  <p class="sub">Desktop uses a 12-column grid of 82 px columns with 24 px gutters inside 96 px margins — 1248 px of content. Mobile uses four 74 px columns with 18 px gutters inside 20 px margins — 350 px of content.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Frame</th><th>Size (px)</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><th>Landing / Desktop</th><td>1440 × 3880</td><td>Full page stack, the frame you export from</td></tr>
      <tr><th>Section / Hero</th><td>1440 × 760</td><td>Headline, sub-line, two buttons, product shot</td></tr>
      <tr><th>Section / Logos</th><td>1440 × 160</td><td>Five wordmarks on one baseline</td></tr>
      <tr><th>Section / Features</th><td>1440 × 720</td><td>Three 400 px cards, 24 px gutters</td></tr>
      <tr><th>Section / Proof</th><td>1440 × 560</td><td>Quote plus three metrics</td></tr>
      <tr><th>Section / Pricing</th><td>1440 × 720</td><td>Three tiers, middle one accented</td></tr>
      <tr><th>Section / FAQ</th><td>1440 × 560</td><td>Five rows at 72 px each</td></tr>
      <tr><th>Section / Footer</th><td>1440 × 320</td><td>Four 288 px link columns</td></tr>
      <tr><th>Landing / Mobile</th><td>390 × 4380</td><td>Same sections, one column, 350 px content</td></tr>
    </tbody>
  </table></div>
</section>
<section>
  <h2>Open it</h2>
  <ol class="steps">
    <li><strong>File ▸ New from template</strong> — the starter list opens in place; no file picker, no download.</li>
    <li><strong>Choose “Landing page”</strong> — the desktop page and the mobile page arrive as two frames on one page.</li>
    <li><strong>Save as <code>.figcraft</code></strong> — the file is a plain archive on disk. There is no account and no telemetry, which also means no autosave to the cloud.</li>
    <li><strong>Confirm the fonts</strong> — headline sizes are tuned for the bundled faces; if <code>../craft-fonts</code> is not beside the source, text falls back and lines wrap differently.</li>
    <li><strong>Keep the grid visible</strong> — duplicate the desktop frame before you change column widths, so the original stays as the reference for section padding.</li>
  </ol>
</section>
<section>
  <h2>Make it yours</h2>
  <p class="sub">The page is a container for your argument. These are the four levers that change it fastest.</p>
  <div class="grid four">
    <div class="card"><span class="k">Auto layout</span><h3>Sections that hold their rhythm</h3><p>Every section is a vertical stack with 120 px top and bottom padding. The features row uses grid tracks, so a fourth card does not shrink the first three.</p></div>
    <div class="card"><span class="k">Variables</span><h3>Type and space as tokens</h3><p>An 8-based spacing scale (8, 16, 24, 32, 48, 64, 96, 120) and a text scale from 12 to 64 keep the page consistent when you add a section. A color mode holds the dark hero variant.</p></div>
    <div class="card"><span class="k">Components</span><h3>Pricing card with a switch</h3><p>The tier card is a component with a boolean property for the accent border, so the middle plan is one property change rather than a copy. Nav links and buttons are sets too.</p></div>
    <div class="card"><span class="k">Color</span><h3>Decide the palette before the copy</h3><p>Build the ramp in the <a href="/tools/palette-generator/">palette generator</a>, then test headline-on-hero pairs in the <a href="/tools/contrast-checker/">contrast checker</a>.</p></div>
  </div>
</section>
<section>
  <h2>What it does not give you</h2>
  <p class="disclosure">There is no responsive engine behind this page. You get two frames — 1440 and 390 — and you maintain both. Export writes CSS, HTML, React, Leptos, SwiftUI or Compose for what you selected, but it is a static snapshot of that frame at that width, with no breakpoints, no form handling and no content model.</p>
  <p class="note">Copy is deliberately placeholder text; generate replacement body copy with the <a href="/tools/lorem-ipsum/">lorem ipsum tool</a> rather than inventing a product story inside the layout. <code>.fig</code> import remains best effort with large files still failing (#574, #321), and the project is an early alpha at about 49% parity by its own estimate — check <a href="/issues/">known issues</a> before you promise a date.</p>
</section>
<section>
  <h2>See the page at desktop width</h2>
  <p class="sub">Open the site's canvas at 1440 × 900 to judge the hero and the first fold before you build the rest.</p>
  <div class="cta" style="margin-top:24px"><a class="btn primary" href="/?w=1440&amp;h=900#demo">Open a 1440 × 900 canvas</a><a class="btn ghost" href="/install/">Get FigCraft</a></div>
</section>`,
    faq: [
      { q: 'Is the landing page starter responsive?', a: 'It ships two frames: 1440 wide and 390 wide. There is no breakpoint engine, so the middle widths are your call — resize a copy of the desktop frame and let the auto layout stacks reflow, or design a third frame at 834.' },
      { q: 'Can I export it as a working website?', a: 'Partly. Export produces CSS, HTML, React, Leptos, SwiftUI or Compose for a frame or selection, which is a static snapshot at one width. There is no routing, no form handling and no content model; you still need your own build to ship the page.' },
      { q: 'What grid does the page use?', a: 'Desktop: 12 columns of 82 px with 24 px gutters inside 96 px margins, giving 1248 px of content in a 1440 px frame. Mobile: four 74 px columns with 18 px gutters inside 20 px margins, giving 350 px of content.' },
      { q: 'Where does the copy come from?', a: 'The starter ships placeholder text so the type scale is visible. Replace it before any review, and use the <a href="/tools/lorem-ipsum/">lorem ipsum tool</a> if you need realistic line lengths while you are still deciding what the page says.' }
    ],
    related: ['templates/', 'templates/mobile-app/', 'templates/design-system/'],
    crumbs: [{ name: 'Templates', path: 'templates/' }, { name: 'Landing page', path: 'templates/landing-page/' }],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },
  {
    path: 'templates/dashboard/',
    group: 'templates',
    type: 'template',
    title: 'FigCraft Dashboard Template: 1440×900 App Shell, Explained',
    description: 'The dashboard starter: a 1440×900 shell with a 240 px sidebar, 64 px top bar, four stat cards, a 1136 px data table and chart placeholders.',
    h1: 'Dashboard template: a 1440 × 900 shell you can edit',
    eyebrow: 'Template',
    lede: 'A <strong>1440 × 900</strong> app shell with a fixed sidebar, a 64 px top bar and a content area that takes what is left. The table and charts are placeholders you replace with your own data.',
    reading: '4 min',
    body: `<section>
  <h2>What's in the starter</h2>
  <p class="disclosure">The project publishes the name of this starter, not its internal pages or frame sizes. What follows is a workable structure for this kind of file — a starting spec to build against — not a transcription of the shipped document. Check it against the build you actually open.</p>
  <p class="sub">One page, three frames: the overview, a settings screen and a narrower laptop check. The sidebar and top bar are components, so both screens share them.</p>
  <ul class="list">
    <li><strong>Sidebar</strong><span>240 px wide, a 56 px logo block and eleven 44 px nav rows, one in selected state, with a 32 px user block pinned to the bottom by a Fill spacer.</span></li>
    <li><strong>Top bar</strong><span>64 px tall: page title, a 360 px search field, two icon buttons, a 32 px avatar. Icons are 20 px strokes from the icon set.</span></li>
    <li><strong>Stat row</strong><span>Four 266 px cards on 24 px gutters, each with a label, a 32 px figure and a delta line. The trend arrow is a component variant.</span></li>
    <li><strong>Data table</strong><span>1136 px wide, a 48 px header row and nine 48 px body rows across five columns; the name column is set to Fill so long labels truncate before the numbers do.</span></li>
    <li><strong>Chart panel</strong><span>A 1136 × 320 placeholder built from vector shapes: twelve vertical grid lines, a four-line legend and one area shape you can restyle.</span></li>
    <li><strong>Settings frame</strong><span>The same shell with a 720 px form column: six labelled rows, three toggles and a save bar.</span></li>
  </ul>
</section>
<section>
  <h2>Canvas spec</h2>
  <p class="sub">The arithmetic matters here: 1440 minus a 240 px sidebar leaves 1200 px, and 32 px padding on each side leaves 1136 px of content. The height follows the same logic — 900 minus a 64 px top bar is 836 px.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Frame</th><th>Size (px)</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><th>Dashboard / Desktop</th><td>1440 × 900</td><td>Full shell at laptop size, the export frame</td></tr>
      <tr><th>Shell / Sidebar</th><td>240 × 900</td><td>Logo, eleven nav rows, user block</td></tr>
      <tr><th>Shell / Top bar</th><td>1200 × 64</td><td>Title, 360 px search, icons, avatar</td></tr>
      <tr><th>Overview / Content</th><td>1200 × 836</td><td>Content area with 32 px padding</td></tr>
      <tr><th>Stats / Row</th><td>1136 × 128</td><td>Four 266 px cards, 24 px gutters</td></tr>
      <tr><th>Table / Data</th><td>1136 × 480</td><td>48 px header, nine 48 px rows</td></tr>
      <tr><th>Chart / Panel</th><td>1136 × 320</td><td>Axis, legend and area placeholder</td></tr>
      <tr><th>Settings / Desktop</th><td>1440 × 900</td><td>Same shell, 720 px form column</td></tr>
      <tr><th>Dashboard / Laptop</th><td>1280 × 800</td><td>64 px rail, 1216 px content, breakpoint check</td></tr>
    </tbody>
  </table></div>
</section>
<section>
  <h2>Open it</h2>
  <ol class="steps">
    <li><strong>File ▸ New from template</strong> — pick the starter from the list; it opens in the current window as an unnamed file.</li>
    <li><strong>Choose “Dashboard”</strong> — three frames land on one page, with the sidebar and top bar already turned into components.</li>
    <li><strong>Save to <code>.figcraft</code></strong> — plain archive on disk, no account. Decide the folder now; dashboards tend to grow into several files.</li>
    <li><strong>Check fonts and blur</strong> — text needs <code>../craft-fonts</code> beside the source, and any glass or blur panel is worth a second look on Windows, where DX12 blur is a known issue.</li>
    <li><strong>Duplicate before resizing</strong> — keep 1440 × 900 intact and do your density experiments on the 1280 × 800 copy.</li>
  </ol>
</section>
<section>
  <h2>Make it yours</h2>
  <p class="sub">A dashboard is a density problem before it is a color problem. These four levers control density.</p>
  <div class="grid four">
    <div class="card"><span class="k">Auto layout</span><h3>Fill the content area</h3><p>Sidebar Fixed 240, content Fill, top bar Fixed 64. The stat row is a grid track row of four, and the table body is a vertical stack of Fill-width rows.</p></div>
    <div class="card"><span class="k">Variables</span><h3>A density mode</h3><p>Row height lives in a variable with a comfortable (48 px) and compact (36 px) mode. Switch the mode on the page instead of editing ninety rows.</p></div>
    <div class="card"><span class="k">Components</span><h3>Stat card, row, nav item</h3><p>Each is a component set: the stat card has a trend variant, the nav item has selected and default, the row has a hover state. Variants keep the table honest.</p></div>
    <div class="card"><span class="k">Handoff</span><h3>Inspect is the deliverable</h3><p>Measurements, annotations and a ready-for-dev mark travel with the frame. Export React, SwiftUI or Compose when an engineer wants a starting point.</p></div>
  </div>
</section>
<section>
  <h2>What it does not give you</h2>
  <p class="disclosure">There is no data binding. The table is rectangles and text, the chart is a vector shape, and nothing recalculates when you change a number. That is fine for a design review and useless as a live dashboard — the starter gives you the shell, not the application.</p>
  <p class="note">Two rendering caveats: glass and blur effects are the least predictable part of an alpha renderer, and blur is a known issue on Windows DX12. Separately, the app's own interface is small on a 1440p display (#540, #818) — if the inspector looks cramped, that is the app chrome, not your file. Check <a href="/issues/">known issues</a> and compare sizes against <a href="/tools/screen-sizes/">screen sizes</a>.</p>
</section>
<section>
  <h2>Check the shell at 1440 × 900</h2>
  <p class="sub">Open the site canvas at the same size as the starter to compare the shell proportions.</p>
  <div class="cta" style="margin-top:24px"><a class="btn primary" href="/?w=1440&amp;h=900#demo">Open a 1440 × 900 canvas</a><a class="btn ghost" href="/install/">Get FigCraft</a></div>
</section>`,
    faq: [
      { q: 'Does the dashboard starter use real data?', a: 'No. Every number is text and every chart is a vector shape. There is no data binding, no formula layer and no live feed; the starter is a layout with representative values, and the values exist to show alignment and truncation.' },
      { q: 'Why 1440 × 900 and not a full HD frame?', a: 'Because the starter is a laptop-first shell. 1440 × 900 leaves a 240 px sidebar and 1200 px of content, which is the width where a five-column table still reads. The 1280 × 800 frame is there to show what breaks first when the window shrinks.' },
      { q: 'Can I add a fifth stat card?', a: 'Yes, but change the grid track count rather than dragging the cards. Four cards at 266 px with 24 px gutters fill 1136 px exactly; a fifth needs either narrower cards or a wrapping second row, and grid tracks keep the gaps equal.' },
      { q: 'Does blur or glass work on every platform?', a: 'Not reliably. Blur and glass effects are supported by the engine, but Windows DX12 blur is a known issue, and the project is an early alpha. Test any translucent panel on the platforms your team actually uses before you commit to it in a spec.' }
    ],
    related: ['templates/', 'templates/design-system/', 'templates/mobile-app/'],
    crumbs: [{ name: 'Templates', path: 'templates/' }, { name: 'Dashboard', path: 'templates/dashboard/' }],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },
  {
    path: 'templates/design-system/',
    group: 'templates',
    type: 'template',
    title: 'FigCraft Design System Template: Tokens, Modes, Components',
    description: 'The design system starter: 1440×1080 foundation sheets, local styles, variables with light and dark modes, and button and input component sets.',
    h1: 'Design system template: foundations first, components second',
    eyebrow: 'Template',
    lede: 'Foundations at <strong>1440 × 1080</strong>, then components. Local styles and variables with modes carry the tokens; component sets and their variants carry the states.',
    reading: '4 min',
    body: `<section>
  <h2>What's in the starter</h2>
  <p class="disclosure">The project publishes the name of this starter, not its internal pages or frame sizes. What follows is a workable structure for this kind of file — a starting spec to build against — not a transcription of the shipped document. Check it against the build you actually open.</p>
  <p class="sub">Four pages: foundations, components, modes, and an inventory sheet that lists every component next to its properties. Foundations are the source of truth; components only reference them.</p>
  <ul class="list">
    <li><strong>Foundations / Color</strong><span>Four ramps of ten steps each (50 through 900), plus semantic aliases — surface, border, text, accent — that point at the ramps.</span></li>
    <li><strong>Foundations / Type</strong><span>An eight-step scale at 12, 14, 16, 20, 24, 32, 40 and 56 px with line heights 16, 20, 24, 28, 32, 40, 48 and 64; each row is a text style, not a styled copy.</span></li>
    <li><strong>Foundations / Space</strong><span>The 4-based spacing scale and three radii (4, 8, 16 px) shown as measured blocks, so you can see the steps rather than read them.</span></li>
    <li><strong>Components / Buttons</strong><span>Three sizes × four emphases × three states as one component set, with a text property for the label and an instance-swap property for a 16 px icon slot.</span></li>
    <li><strong>Components / Inputs</strong><span>Text field, select, checkbox, radio and toggle, each with default, focus, filled and error states, plus a 72 px label-and-help block.</span></li>
    <li><strong>Components / Cards</strong><span>A 320 px card with a media slot, a heading, a two-line body and one action; a boolean property toggles the media slot without detaching.</span></li>
    <li><strong>Inventory</strong><span>Every component set listed with its properties in a table, which is the sheet you send when someone asks what exists.</span></li>
  </ul>
</section>
<section>
  <h2>Canvas spec</h2>
  <p class="sub">Sheets are 1440 × 1080 with 96 px margins, which leaves 1248 px of content — room for ten 96 px color steps with 8 px gaps, and for component rows that will not fit on a laptop screen without scrolling.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Frame</th><th>Size (px)</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><th>Foundations / Color</th><td>1440 × 1080</td><td>Four 10-step ramps and the alias row</td></tr>
      <tr><th>Foundations / Type</th><td>1440 × 1080</td><td>Eight text styles with line heights</td></tr>
      <tr><th>Foundations / Space</th><td>1440 × 720</td><td>Spacing scale and radii as measured blocks</td></tr>
      <tr><th>Components / Buttons</th><td>1440 × 720</td><td>36 variants in one set, three sizes deep</td></tr>
      <tr><th>Components / Inputs</th><td>1440 × 720</td><td>Five control types, four states each</td></tr>
      <tr><th>Components / Cards</th><td>1440 × 720</td><td>320 px card, media toggle, one action</td></tr>
      <tr><th>Inventory</th><td>1440 × 1080</td><td>Component list with properties and owners</td></tr>
    </tbody>
  </table></div>
</section>
<section>
  <h2>Open it</h2>
  <ol class="steps">
    <li><strong>File ▸ New from template</strong> — then choose “Design system”. The four pages arrive together, already arranged in the order you should read them.</li>
    <li><strong>Save the file</strong> — this is the starter you keep for years: name it after the product, and put it in version control if your team does that.</li>
    <li><strong>Read the foundations pages before editing components</strong> — components reference styles and variables, so changing a token updates every instance.</li>
    <li><strong>Decide the two modes early</strong> — light and dark are variable modes, not duplicate pages. Adding a third mode later is cheap; retrofitting one after 200 hard-coded fills is not.</li>
    <li><strong>Check fonts first</strong> — the type sheet is meaningless if text falls back because <code>../craft-fonts</code> is missing.</li>
  </ol>
</section>
<section>
  <h2>Make it yours</h2>
  <p class="sub">The starter is a structure, not a palette. Replace tokens, keep the structure.</p>
  <div class="grid four">
    <div class="card"><span class="k">Variables</span><h3>Aliases, not duplicates</h3><p>Semantic names point at ramp steps. When the ramp changes, the alias follows and every component using it follows too — that is the whole point of the sheet.</p></div>
    <div class="card"><span class="k">Modes</span><h3>Light and dark, one file</h3><p>Modes let one component set render two themes. Verify text pairs with the <a href="/tools/contrast-checker/">contrast checker</a>, and build your ramp in the <a href="/tools/palette-generator/">palette generator</a> first.</p></div>
    <div class="card"><span class="k">Components</span><h3>Properties beat copies</h3><p>Booleans, text properties and instance swaps cover most state needs. A variant for every combination multiplies; a property that toggles one attribute does not.</p></div>
    <div class="card"><span class="k">Styles</span><h3>Text and effects</h3><p>Text styles hold the scale; effect styles hold blur, noise and glass recipes so a card does not invent its own shadow. Local styles stay local to the file.</p></div>
  </div>
</section>
<section>
  <h2>What it does not give you</h2>
  <p class="disclosure">This is a library in a file, not a published library. FigCraft has no accounts, teams or cloud sync — multiplayer is a preview, and there is no equivalent of a published, versioned library that other files subscribe to. Copy the file, or keep one person responsible for it.</p>
  <p class="note">Also be clear about the ceiling: the project's own parity estimate is about 49%, so some token and component behaviours you know from Figma will be missing or shaped differently. Export CSS, HTML or React gives you a snapshot of a frame; your variable names stay in the <code>.figcraft</code> archive rather than travelling into the output, so treat the foundations pages as the documentation. See <a href="/issues/">known issues</a> before you standardise a team on it.</p>
</section>
<section>
  <h2>Lay out a sheet at 1440 × 1080</h2>
  <p class="sub">Use the canvas at the same size as the foundations sheets to sketch a token sheet before you commit to a page.</p>
  <div class="cta" style="margin-top:24px"><a class="btn primary" href="/?w=1440&amp;h=1080#demo">Open a 1440 × 1080 canvas</a><a class="btn ghost" href="/install/">Get FigCraft</a></div>
</section>`,
    faq: [
      { q: 'Does the design system starter include a published library?', a: 'No. It is a library inside one file. FigCraft has no accounts, teams or cloud storage, and multiplayer is a preview without team permissions. Sharing means sharing the <code>.figcraft</code> archive, and keeping one owner for the file is the practical substitute for publishing.' },
      { q: 'How many colors and type styles does it ship?', a: 'Four color ramps of ten steps, an alias row for semantic names, and an eight-step type scale from 12 to 56 px with matching line heights. The space sheet adds a 4-based spacing scale and three radii. All of it is editable in one place.' },
      { q: 'Can I add a third theme?', a: 'Yes — add a variable mode and give the aliases values for it. Modes are engine features, so the components do not need duplicating. Doing this at the start is far cheaper than retrofitting after the components have hard-coded fills.' },
      { q: 'Why does exporting CSS not produce my token names?', a: 'Export is a snapshot of a frame, not a token build. The CSS, HTML or React output reflects what is drawn, while your variable names live in the <code>.figcraft</code> archive. Keep the foundations pages as the record and write the token layer yourself if you need one.' }
    ],
    related: ['templates/', 'templates/dashboard/', 'templates/icon-set/'],
    crumbs: [{ name: 'Templates', path: 'templates/' }, { name: 'Design system', path: 'templates/design-system/' }],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },
  {
    path: 'templates/wireframe-kit/',
    group: 'templates',
    type: 'template',
    title: 'FigCraft Wireframe Kit: Three Breakpoints, One Grayscale',
    description: 'The wireframe kit: grayscale frames at 1440×1024, 834×1112 and 390×844, built from five placeholder components — rectangles, not finished UI.',
    h1: 'Wireframe kit: three breakpoints, deliberately gray',
    eyebrow: 'Template',
    lede: 'Placeholders at three widths: <strong>1440 × 1024</strong>, <strong>834 × 1112</strong> and <strong>390 × 844</strong>. Gray on purpose, so a layout review stays about layout.',
    reading: '4 min',
    body: `<section>
  <h2>What's in the starter</h2>
  <p class="disclosure">The project publishes the name of this starter, not its internal pages or frame sizes. What follows is a workable structure for this kind of file — a starting spec to build against — not a transcription of the shipped document. Check it against the build you actually open.</p>
  <p class="sub">Four pages: desktop, tablet, phone, and a block library. The screens are assembled from five components, and nothing on them is a final color or a final typeface.</p>
  <ul class="list">
    <li><strong>Text line</strong><span>A 8 px bar for body copy and a 12 px bar for headings, each with full, two-thirds and one-third width variants. No real text, so no font surprises during a review.</span></li>
    <li><strong>Image block</strong><span>A 16:9 box with a single diagonal, available at full, half and third width. It reads as media without pretending to be a photo.</span></li>
    <li><strong>Button</strong><span>A 40 px outline block with three width options. Deliberately the same gray as everything else so it cannot win an argument it has not earned.</span></li>
    <li><strong>Avatar</strong><span>A circle at 24, 32 and 48 px for list rows and headers.</span></li>
    <li><strong>Icon placeholder</strong><span>A 24 px square with a 12 px diagonal, for anything that will later be an icon.</span></li>
    <li><strong>Three screens</strong><span>Desktop at 1440, tablet at 834 and phone at 390, each laid out as hero, three content sections and a footer, so the same argument can be reviewed at every width.</span></li>
  </ul>
</section>
<section>
  <h2>Canvas spec</h2>
  <p class="sub">Each width gets its own column count rather than a scaled copy: eight columns at desktop, six at tablet, three at phone. The arithmetic keeps the gutters identical at 24 px on desktop and tablet, 16 px on phone.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Frame</th><th>Size (px)</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><th>Wire / Desktop</th><td>1440 × 1024</td><td>First viewport, eight columns of 135 px</td></tr>
      <tr><th>Wire / Desktop Long</th><td>1440 × 2560</td><td>Scroll extension, four sections</td></tr>
      <tr><th>Wire / Tablet</th><td>834 × 1112</td><td>Portrait tablet, six columns of 103 px</td></tr>
      <tr><th>Wire / Mobile</th><td>390 × 844</td><td>Phone, three columns of 106 px</td></tr>
      <tr><th>Blocks / Library</th><td>1440 × 1024</td><td>Five placeholder components with variants</td></tr>
      <tr><th>Flow / Board</th><td>1440 × 1024</td><td>Three screens side by side for a review</td></tr>
    </tbody>
  </table></div>
</section>
<section>
  <h2>Open it</h2>
  <ol class="steps">
    <li><strong>File ▸ New from template</strong> — then choose “Wireframe kit”. The three screens open on one page, in reading order.</li>
    <li><strong>Save it as your own file</strong> — <code>.figcraft</code> on disk, no account. Wireframes usually live next to the brief, so put the file there.</li>
    <li><strong>Start from the desktop frame</strong> — it carries the most content; the tablet and phone frames are arranged to show what each breakpoint drops.</li>
    <li><strong>Keep the blocks as instances</strong> — if you detach a placeholder you lose the swap behaviour, and the review turns into a cleanup.</li>
    <li><strong>Turn on the prototype flow</strong> — the three screens are connected, so a review can be a click-through instead of a static screenshot.</li>
  </ol>
</section>
<section>
  <h2>Make it yours</h2>
  <p class="sub">The kit is intentionally poor in detail. Improve the structure, not the fidelity.</p>
  <div class="grid four">
    <div class="card"><span class="k">Auto layout</span><h3>Blocks that hold spacing</h3><p>Each section is a vertical stack with 96 px padding on desktop and 20 px on phone. Placeholder rows are Hug height, so a section grows without a single manual nudge.</p></div>
    <div class="card"><span class="k">Components</span><h3>Swap the block, keep the slot</h3><p>An instance-swap property turns a text line into an image block without changing the surrounding stack. That is how you add media mid-review and keep the pitch.</p></div>
    <div class="card"><span class="k">Variables</span><h3>Five grays, two modes</h3><p>A gray ramp of five values plus a spacing scale. A high-contrast mode for presenting on a projector is a variable change, not a second file.</p></div>
    <div class="card"><span class="k">Prototype</span><h3>Click-through, not a diagram</h3><p>Connections, triggers and transitions make the flow walkable in presentation view. There is no connector-line diagram tool, so keep the flow in the prototype, not on the board.</p></div>
  </div>
</section>
<section>
  <h2>What it does not give you</h2>
  <p class="disclosure">This kit produces rectangles. It will not look like a product, and it is not supposed to: the moment a placeholder gets a real color, the review starts discussing the color. Bring the <a href="/templates/design-system/">design system</a> once the layout is agreed, and rebuild rather than restyle — placeholder components do not convert into real ones.</p>
  <p class="note">Annotations are yours to write: Inspect gives measurements and supports annotations, but nothing generates callouts for you. Label text is real text, so it depends on <code>../craft-fonts</code> being cloned beside the source like every other starter. Check <a href="/issues/">known issues</a> before a review depends on the app, and confirm target widths with <a href="/tools/screen-sizes/">screen sizes</a>.</p>
</section>
<section>
  <h2>Rehearse the layout at desktop width</h2>
  <p class="sub">Open the canvas at 1440 × 1024 for a rough size check before the review, or fill the blocks with copy from the <a href="/tools/lorem-ipsum/">lorem ipsum tool</a>.</p>
  <div class="cta" style="margin-top:24px"><a class="btn primary" href="/?w=1440&amp;h=1024#demo">Open a 1440 × 1024 canvas</a><a class="btn ghost" href="/install/">Get FigCraft</a></div>
</section>`,
    faq: [
      { q: 'Why is the wireframe kit gray?', a: 'Because a grayscale layout cannot be mistaken for a finished design. Text lines, image boxes and buttons all share one ramp, so a review can only argue about hierarchy, density and flow. Color arrives with the design system, after the structure is agreed.' },
      { q: 'Can I turn a wireframe into the finished design?', a: 'Not by restyling the placeholders. They are not real components with real content; the practical route is to rebuild the agreed layout with the design system, using the wireframe as the spec. Your spacing and column choices carry over, the placeholder layers do not.' },
      { q: 'What grids does it use?', a: 'Desktop: eight columns of 135 px with 24 px gutters inside 96 px margins. Tablet: six columns of 103 px with 24 px gutters inside 48 px margins. Phone: three columns of 106 px with 16 px gutters inside 20 px margins.' },
      { q: 'Does it include a flow diagram?', a: 'No. There is no connector-line diagram feature; the flow is a prototype made of connections between frames, played in presentation view. The Flow / Board frame simply puts the three screens side by side so a room can see them at once.' }
    ],
    related: ['templates/', 'templates/landing-page/', 'templates/design-system/'],
    crumbs: [{ name: 'Templates', path: 'templates/' }, { name: 'Wireframe kit', path: 'templates/wireframe-kit/' }],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },
  {
    path: 'templates/social-post-sizes/',
    group: 'templates',
    type: 'template',
    title: 'FigCraft Social Post Template: 1080, 1920 and 1200×630',
    description: 'The social post starter: 1080×1080, 1080×1350 portrait, 1080×1920 story and 1200×630 link frames with safe-area guides, exported as PNG or JPG.',
    h1: 'Social post template: four frames, one message',
    eyebrow: 'Template',
    lede: 'Four export sizes in one file: <strong>1080 × 1080</strong>, <strong>1080 × 1350</strong>, <strong>1080 × 1920</strong> and <strong>1200 × 630</strong>. Draw the message once, then resize the stack for each ratio.',
    reading: '4 min',
    body: `<section>
  <h2>What's in the starter</h2>
  <p class="disclosure">The project publishes the name of this starter, not its internal pages or frame sizes. What follows is a workable structure for this kind of file — a starting spec to build against — not a transcription of the shipped document. Check it against the build you actually open.</p>
  <p class="sub">One page holds the four canvases at full size, a lockup sheet and a type sheet. Each canvas is a vertical stack with a fixed margin, so the same copy can be dropped into all four.</p>
  <ul class="list">
    <li><strong>Square feed post</strong><span>1080 × 1080 with a 96 px margin, a 96/104 headline block, a 48/56 sub-line and a 24 px legal line at the foot.</span></li>
    <li><strong>Portrait feed post</strong><span>1080 × 1350, the same stack with more vertical room, so the headline can run three lines without shrinking.</span></li>
    <li><strong>Story and reel</strong><span>1080 × 1920 with two guides marking the top 250 px and bottom 340 px that app chrome tends to cover, leaving 1330 px of safe vertical space.</span></li>
    <li><strong>Link preview</strong><span>1200 × 630 with a 64 px margin, a 64/72 headline and a left-aligned lockup, since the card is usually shown beside a URL.</span></li>
    <li><strong>Lockup sheet</strong><span>A 1080 × 1080 sheet with the logo mark, the wordmark and three lockup variants as components, so every canvas uses an instance.</span></li>
    <li><strong>Type sheet</strong><span>The four sizes used on the canvases — 96, 48, 32 and 24 px — as text styles, so a copy change cannot invent a fifth size.</span></li>
  </ul>
</section>
<section>
  <h2>Canvas spec</h2>
  <p class="sub">Pixel sizes only, no device frames. The story frame is the only one where height is constrained by someone else's interface, which is why it carries guides rather than a layout.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Frame</th><th>Size (px)</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><th>Post / Square</th><td>1080 × 1080</td><td>Feed square, 96 px margin, 888 px content</td></tr>
      <tr><th>Post / Portrait</th><td>1080 × 1350</td><td>4:5 vertical feed, extra room for three headline lines</td></tr>
      <tr><th>Story / 9:16</th><td>1080 × 1920</td><td>Story or reel, 250 px and 340 px guides</td></tr>
      <tr><th>Link / Preview</th><td>1200 × 630</td><td>Link and open-graph card, 64 px margin</td></tr>
      <tr><th>Marks / Lockup</th><td>1080 × 1080</td><td>Logo, wordmark and three lockups as components</td></tr>
      <tr><th>Type / Scale</th><td>1080 × 1080</td><td>Four text styles with fixed line heights</td></tr>
    </tbody>
  </table></div>
</section>
<section>
  <h2>Open it</h2>
  <ol class="steps">
    <li><strong>File ▸ New from template</strong> — choose “Social post sizes”. The four canvases open at full pixel size, so expect to scroll.</li>
    <li><strong>Save the file</strong> — a campaign folder is usually a set of files; name this one after the campaign, not the template.</li>
    <li><strong>Replace the lockup first</strong> — edit the component on the lockup sheet and all four canvases update at once.</li>
    <li><strong>Write the shortest version first</strong> — set the copy on the square, then let the portrait and story frames take the extra lines.</li>
    <li><strong>Check fonts</strong> — display sizes expose a fallback face immediately. If the headline looks like a system font, <code>../craft-fonts</code> is missing beside the source.</li>
  </ol>
</section>
<section>
  <h2>Make it yours</h2>
  <p class="sub">Campaign work is repetition. These four settings remove most of it.</p>
  <div class="grid four">
    <div class="card"><span class="k">Auto layout</span><h3>One stack, four ratios</h3><p>The caption stack is Fill width with Hug height, pinned inside a 96 px margin. Change the headline and the block grows; nothing overlaps the legal line.</p></div>
    <div class="card"><span class="k">Variables</span><h3>Two card themes</h3><p>Light and dark card modes are variable modes, so the same post can ship as a light feed card and a dark story without a second set of layers.</p></div>
    <div class="card"><span class="k">Components</span><h3>Lockup and corner tag</h3><p>The lockup has three variants for width, and the corner tag is a component with a text property. Instances keep the mark identical across sizes.</p></div>
    <div class="card"><span class="k">Export</span><h3>PNG, JPG, WebP or PDF</h3><p>Export per frame. Flat layouts survive PNG and SVG; photographic backgrounds are smaller as JPG or WebP. Check the scale before promising a 2160 px file.</p></div>
  </div>
</section>
<section>
  <h2>What it does not give you</h2>
  <p class="disclosure">There is no publishing, no scheduling and no platform API. Export writes an image or a PDF; posting is still a manual upload. Nor does the starter resize one design into four — you duplicate the stack and adjust, which is why the copy is written short first.</p>
  <p class="note">The safe-area guides on the story frame are approximations of where app chrome sits, drawn on the canvas rather than enforced by anything. They vary with device and app version, so confirm against the platform's current guidance before a paid placement. Text sizes here are tuned for the bundled faces: without <code>craft-fonts</code>, 96 px display type falls back and lines rewrap. See <a href="/issues/">known issues</a> if the export looks different from the canvas.</p>
</section>
<section>
  <h2>Check the square at 1080</h2>
  <p class="sub">The site canvas takes any size; open it at 1080 × 1080 to judge a feed crop, and test the text contrast with the <a href="/tools/contrast-checker/">contrast checker</a>.</p>
  <div class="cta" style="margin-top:24px"><a class="btn primary" href="/?w=1080&amp;h=1080#demo">Open a 1080 × 1080 canvas</a><a class="btn ghost" href="/install/">Get FigCraft</a></div>
</section>`,
    faq: [
      { q: 'What sizes does the social post starter include?', a: '1080 × 1080 for a square feed post, 1080 × 1350 for a 4:5 portrait post, 1080 × 1920 for a story or reel, and 1200 × 630 for a link preview. Each is a separate frame at full pixel size, not a scaled copy.' },
      { q: 'Are the story safe areas exact?', a: 'No — they are guides drawn at 250 px from the top and 340 px from the bottom of a 1080 × 1920 canvas, which is where app chrome usually sits. The real values change with device and app version, so treat them as a working margin and check the platform guidance for a paid placement.' },
      { q: 'Can FigCraft publish or schedule the post?', a: 'No. There is no account, no cloud and no platform integration. Export produces PNG, JPG, WebP, PDF or SVG for the frame you selected, and the upload stays manual.' },
      { q: 'Can I resize one design into all four frames at once?', a: 'There is no batch resize. Duplicate the caption stack into the next frame and let auto layout Fit and Fill do the arithmetic; the four frames share text styles and components, which is what keeps them consistent. Write the shortest copy first so the square does not force a rewrite later.' }
    ],
    related: ['templates/', 'templates/presentation-slides/', 'templates/landing-page/'],
    crumbs: [{ name: 'Templates', path: 'templates/' }, { name: 'Social post sizes', path: 'templates/social-post-sizes/' }],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },
  {
    path: 'templates/presentation-slides/',
    group: 'templates',
    type: 'template',
    title: 'FigCraft Presentation Template: Seven 1920×1080 Slide Frames',
    description: 'The slides starter: seven 1920×1080 layouts wired into a prototype flow, played in presentation view and exported to PDF or PNG. No PPTX.',
    h1: 'Presentation template: seven 16:9 layouts at 1920 × 1080',
    eyebrow: 'Template',
    lede: 'Seven layouts at <strong>1920 × 1080</strong>, built as frames and connected as a prototype flow, so you can present from the file you designed in.',
    reading: '4 min',
    body: `<section>
  <h2>What's in the starter</h2>
  <p class="disclosure">The project publishes the name of this starter, not its internal pages or frame sizes. What follows is a workable structure for this kind of file — a starting spec to build against — not a transcription of the shipped document. Check it against the build you actually open.</p>
  <p class="sub">One page, seven slide frames, plus a compact 1280 × 720 frame for older projectors. Slide furniture — kicker, footer, page number — is a component, so every layout shares it.</p>
  <ul class="list">
    <li><strong>Title</strong><span>A 96/104 headline, one line of 40 px context, a 24 px date and the lockup bottom-left. Nothing else; a title slide that argues is a bad title slide.</span></li>
    <li><strong>Agenda</strong><span>Six numbered items at 40 px with a 2 px rule between rows, so the audience knows how long the talk is.</span></li>
    <li><strong>Section divider</strong><span>A full-bleed color field with a 72 px label and a 20 px number, used to break the deck into three acts.</span></li>
    <li><strong>Two column</strong><span>832 px of text beside 832 px of media with a 64 px gutter — the workhorse layout for anything with a screenshot.</span></li>
    <li><strong>Data</strong><span>A 1120 × 560 chart area with a 544 px takeaway column, so the number and its meaning sit on the same slide.</span></li>
    <li><strong>Quote and closing</strong><span>A 64/76 pull quote with attribution, and a closing frame with contact details and one call to action.</span></li>
  </ul>
</section>
<section>
  <h2>Canvas spec</h2>
  <p class="sub">Everything is measured from a 96 px margin, leaving 1728 px of content width — which is why two columns are 832 px each and the data slide splits 1120 + 64 + 544.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Frame</th><th>Size (px)</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><th>Deck / Title</th><td>1920 × 1080</td><td>96 px headline, context line, date, lockup</td></tr>
      <tr><th>Deck / Agenda</th><td>1920 × 1080</td><td>Six numbered items, 2 px rules</td></tr>
      <tr><th>Deck / Section</th><td>1920 × 1080</td><td>Full-bleed color, 72 px section label</td></tr>
      <tr><th>Deck / Two column</th><td>1920 × 1080</td><td>832 px text, 64 px gutter, 832 px media</td></tr>
      <tr><th>Deck / Data</th><td>1920 × 1080</td><td>1120 px chart area, 544 px takeaway</td></tr>
      <tr><th>Deck / Quote</th><td>1920 × 1080</td><td>64/76 quote and attribution</td></tr>
      <tr><th>Deck / Closing</th><td>1920 × 1080</td><td>Contact block and one action</td></tr>
      <tr><th>Deck / Compact</th><td>1280 × 720</td><td>Same layouts at 16:9 for older projectors</td></tr>
    </tbody>
  </table></div>
</section>
<section>
  <h2>Open it</h2>
  <ol class="steps">
    <li><strong>File ▸ New from template</strong> — choose “Presentation slides”. The seven frames arrive on one page in running order.</li>
    <li><strong>Save it</strong> — <code>.figcraft</code> on disk. A deck is a document you will revise, so keep it out of a scratch folder.</li>
    <li><strong>Walk the flow before editing</strong> — the frames are already connected. Enter presentation view once to see the pacing you are about to change.</li>
    <li><strong>Set the type before the content</strong> — the four sizes are text styles; using them keeps a long deck from drifting between slides.</li>
    <li><strong>Check the fonts</strong> — a deck is the most visible place for a silent font fallback. <code>../craft-fonts</code> must sit beside the source.</li>
  </ol>
</section>
<section>
  <h2>Make it yours</h2>
  <p class="sub">Decks fail on density, not decoration. These four settings control density.</p>
  <div class="grid four">
    <div class="card"><span class="k">Auto layout</span><h3>Text that cannot overflow</h3><p>The body column is a Fill-width vertical stack with a Fixed 96 px base and Hug height. Add a line and the block grows into empty space instead of over the footer.</p></div>
    <div class="card"><span class="k">Variables</span><h3>Light and dark decks</h3><p>A theme mode flips surfaces and text together, which matters in a dark room. Keep the data colors outside the mode so a chart does not change meaning.</p></div>
    <div class="card"><span class="k">Components</span><h3>Slide furniture</h3><p>Kicker, footer and page number are one component with variants per position. Change the footer once and all seven slides follow.</p></div>
    <div class="card"><span class="k">Prototype</span><h3>Transitions as pacing</h3><p>Triggers and transitions between frames set the rhythm. Use a dissolve for section changes and a short slide for lists; skip animation elsewhere.</p></div>
  </div>
</section>
<section>
  <h2>What it does not give you</h2>
  <p class="disclosure">There is no PowerPoint export. Presentation view plays the prototype inside FigCraft, so handing the deck to someone else means exporting PDF or PNG — and the slides stop being clickable the moment they leave the app.</p>
  <p class="note">Test the export before you promise a single file: FigCraft writes PDF, PNG, JPG, WebP and SVG, but whether PDF batches a page of frames or writes one frame at a time is worth checking on your build. Speaker notes and a presenter console are not part of the starter either, so plan to carry the script separately. The project is an early alpha at about 49% parity by its own estimate — see <a href="/issues/">known issues</a>, and use <a href="/learn/keyboard-shortcuts/">keyboard shortcuts</a> when you are building slides at speed.</p>
</section>
<section>
  <h2>Lay out a slide at 1920 × 1080</h2>
  <p class="sub">Open the canvas at the same size as the frames to test a layout without waiting for the app to load.</p>
  <div class="cta" style="margin-top:24px"><a class="btn primary" href="/?w=1920&amp;h=1080#demo">Open a 1920 × 1080 canvas</a><a class="btn ghost" href="/install/">Get FigCraft</a></div>
</section>`,
    faq: [
      { q: 'Can I export the deck to PowerPoint?', a: 'No. There is no PPTX writer. FigCraft exports PDF, PNG, JPG, WebP and SVG, and presentation view plays the prototype inside the app. If a client needs an editable PowerPoint, this starter gets you the layouts but not the file format.' },
      { q: 'How do I present from the starter?', a: 'The seven frames are connected with triggers and transitions, so you enter presentation view and click through them. That requires the app on the machine doing the presenting, which is the trade for not exporting a deck.' },
      { q: 'What type sizes does it use?', a: '96 px for a title, 72 px for a section label, 40 px for body and agenda rows, 64 px for a pull quote, and 24 or 20 px for dates, attribution and page numbers, all on a 1920 × 1080 canvas.' },
      { q: 'Why is there also a 1280 × 720 frame?', a: 'Both sizes are 16:9, but the smaller frame is what older projectors and video calls actually show. Checking the compact frame catches body copy that is too small once the deck is scaled down to a laptop screen.' }
    ],
    related: ['templates/', 'templates/social-post-sizes/', 'templates/landing-page/'],
    crumbs: [{ name: 'Templates', path: 'templates/' }, { name: 'Presentation slides', path: 'templates/presentation-slides/' }],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },
  {
    path: 'templates/icon-set/',
    group: 'templates',
    type: 'template',
    title: 'FigCraft Icon Set Template: 24 px Grid, 1.5 and 2 px Strokes',
    description: 'The icon starter: a 24×24 grid with 1.5 px and 2 px stroke variants, 16 and 20 px derivatives, vector networks and per-icon SVG export.',
    h1: 'Icon set template: a 24 px grid, two stroke weights',
    eyebrow: 'Template',
    lede: 'A <strong>24 × 24</strong> grid with 1.5 px and 2 px strokes, plus 16 and 20 px derivatives. Vector networks and boolean groups, SVG out.',
    reading: '4 min',
    body: `<section>
  <h2>What's in the starter</h2>
  <p class="disclosure">The project publishes the name of this starter, not its internal pages or frame sizes. What follows is a workable structure for this kind of file — a starting spec to build against — not a transcription of the shipped document. Check it against the build you actually open.</p>
  <p class="sub">Four pages: the 24 px master grid, a 20 px and a 16 px derivative set, and an index sheet. Every glyph is a component with a weight variant, so the set stays consistent when you add an icon.</p>
  <ul class="list">
    <li><strong>Master grid</strong><span>A 24 × 24 frame with a 2 px padding ring, leaving a 20 px live area. Key shapes sit on 2 px increments and strokes are centred on the grid.</span></li>
    <li><strong>Two weights</strong><span>1.5 px is the default stroke and aligns to the pixel grid at 24 px; 2 px is the heavier variant used for 24 px navigation and toolbar glyphs.</span></li>
    <li><strong>Derivatives</strong><span>16 × 16 and 20 × 20 sets drawn from the same geometry, both on the 1.5 px stroke — a 2 px stroke at 16 px closes the counters in small shapes.</span></li>
    <li><strong>Compound glyphs</strong><span>Icons built from more than one shape use boolean groups and vector networks, so the outline stays one editable object rather than a stack of overlapping paths.</span></li>
    <li><strong>Index sheet</strong><span>1440 × 1080 contact sheet of 14 × 10 cells at 64 px with 24 px gutters, so the whole set is visible at once and a missing icon is obvious.</span></li>
    <li><strong>Grid spec sheet</strong><span>The construction rules drawn on one frame: 24 px box, 2 px padding, 20 px live area, and the two stroke weights side by side.</span></li>
  </ul>
</section>
<section>
  <h2>Canvas spec</h2>
  <p class="sub">The grid is the deliverable. Stroke weight and alignment are the two decisions that decide whether a set looks drawn by one hand.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Frame</th><th>Size (px)</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><th>Icons / Master 24</th><td>24 × 24</td><td>Base grid, 2 px padding, 1.5 px stroke</td></tr>
      <tr><th>Icons / Heavy 24</th><td>24 × 24</td><td>2 px stroke variant for navigation use</td></tr>
      <tr><th>Icons / 20</th><td>20 × 20</td><td>Dense toolbars, 1.5 px stroke</td></tr>
      <tr><th>Icons / 16</th><td>16 × 16</td><td>Inline and list use, 1.5 px stroke only</td></tr>
      <tr><th>Sheet / Index</th><td>1440 × 1080</td><td>14 × 10 cells at 64 px, 24 px gutters</td></tr>
      <tr><th>Spec / Grid</th><td>1440 × 720</td><td>Padding ring, live area, stroke comparison</td></tr>
    </tbody>
  </table></div>
</section>
<section>
  <h2>Open it</h2>
  <ol class="steps">
    <li><strong>File ▸ New from template</strong> — choose “Icon set”. The four pages open; the master grid is the one to read first.</li>
    <li><strong>Save it next to the product</strong> — an icon file outlives most screens. Keep it in the same place as the <a href="/templates/design-system/">design system</a> so color and stroke stay aligned.</li>
    <li><strong>Add icons on the master page</strong> — draw at 24 px, then let the weight variant produce the heavy version instead of drawing both.</li>
    <li><strong>Check alignment at 100%</strong> — zoom to actual size before approving a glyph; a stroke that looks centred at 800% often is not.</li>
    <li><strong>Confirm fonts</strong> — labels on the index sheet are text. Without <code>../craft-fonts</code> they fall back like any other text in the app.</li>
  </ol>
</section>
<section>
  <h2>Make it yours</h2>
  <p class="sub">A set stays coherent through three mechanisms, all of which the starter already uses.</p>
  <div class="grid four">
    <div class="card"><span class="k">Components</span><h3>One icon, two weights</h3><p>Each glyph is a component with a weight property. Instances on the index sheet update together, so a curve fix propagates instead of being repeated 40 times.</p></div>
    <div class="card"><span class="k">Vector networks</span><h3>Cleaner joints</h3><p>Networks let three paths meet at one point without overlapping ends. That is what keeps a 1.5 px stroke from showing a seam at an intersection.</p></div>
    <div class="card"><span class="k">Variables</span><h3>Color per mode</h3><p>Icon color is a variable, so the set follows light and dark modes. Check the pair against the <a href="/tools/contrast-checker/">contrast checker</a> before shipping a 16 px version.</p></div>
    <div class="card"><span class="k">Export</span><h3>SVG, then minify</h3><p>Export SVG per selection and run it through the <a href="/tools/svg-minifier/">SVG minifier</a>. Keep the vector networks as the source; the SVG is a copy.</p></div>
  </div>
</section>
<section>
  <h2>What it does not give you</h2>
  <p class="disclosure">There is no sprite-sheet build, no icon-font generator and no library browser. Export gives you SVG, PNG, JPG, WebP or PDF for what you selected, one export at a time — the sprite or the font is your build step, not the starter's.</p>
  <p class="note">The starter is a grid and a handful of glyphs, not a complete icon library; you will draw most of your set. The 49% parity figure is the project's own estimate, so expect the vector tools to be less forgiving than a mature editor when you push a tricky boolean. Keep an eye on <a href="/issues/">known issues</a>, and if the app itself looks cramped on a 1440p display that is #540 and #818, not your icon file.</p>
</section>
<section>
  <h2>Test a glyph on a small canvas</h2>
  <p class="sub">The studio canvas has a 100 px minimum, so open 480 × 480 and place the 24 px glyph inside it, or lay out the index sheet at real size.</p>
  <div class="cta" style="margin-top:24px"><a class="btn primary" href="/?w=480&amp;h=480#demo">Open a 480 × 480 canvas</a><a class="btn ghost" href="/install/">Get FigCraft</a></div>
</section>`,
    faq: [
      { q: 'What grid does the icon starter use?', a: 'A 24 × 24 frame with a 2 px padding ring, leaving a 20 px live area. Key shapes land on 2 px increments. The 20 px and 16 px sets are drawn from the same geometry rather than scaled, because scaling a stroke changes its weight.' },
      { q: 'Which stroke weights are included?', a: '1.5 px as the default and 2 px as the heavy variant at 24 px. The 16 and 20 px derivatives use 1.5 px only — a 2 px stroke at 16 px fills in the counters of small glyphs like a play triangle or an asterisk.' },
      { q: 'Can I export an icon font or sprite sheet?', a: 'No. Export writes SVG, PNG, JPG, WebP, PDF or CSS, HTML and code output for a selection or frame, one at a time. Building a sprite or an icon font is a separate step in your own pipeline; run the SVGs through the <a href="/tools/svg-minifier/">SVG minifier</a> first.' },
      { q: 'Are the icons components?', a: 'Yes. Each glyph is a component with a weight variant, and the index sheet uses instances. Fix a curve in the main component and every size and weight that references it updates, which is the only reliable way to keep a large set consistent.' }
    ],
    related: ['templates/', 'templates/design-system/', 'templates/wireframe-kit/'],
    crumbs: [{ name: 'Templates', path: 'templates/' }, { name: 'Icon set', path: 'templates/icon-set/' }],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  }
];
