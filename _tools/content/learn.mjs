/**
 * Learn family: the hub, eight how-to guides and the glossary.
 *
 * Every command in these pages is taken from the project's own documentation
 * (docs/cli.md, docs/mcp.md, docs/control-protocol.md) so it can be pasted as
 * written. Where a behaviour could not be checked against a running build, the
 * page says "unverified" rather than filling the gap.
 *
 * The studio at /#demo is an independent canvas on this site, not the FigCraft
 * app. Its shortcuts and export formats are labelled as the demo's throughout.
 */

export const PAGES = [
  /* ------------------------------------------------------------------ hub */
  {
    path: 'learn/',
    group: 'learn',
    type: 'hub',
    title: 'FigCraft Guides: Import, Export, CLI and Offline Work',
    description:
      'Eight task-level FigCraft guides and a glossary: opening .fig files, SVG export, offline files, keyboard shortcuts, MCP, CLI automation, Linux and Figma migration.',
    h1: 'FigCraft guides for the work that actually breaks',
    eyebrow: 'Learn',
    lede:
      'Task-level guides for the parts of FigCraft that catch people out: import, export, automation and the move off Figma. Each one says what is checked for v0.9.0 and where the checking stops.',
    reading: '4 min',
    body: `<section class="prose">
      <h2>How to use this section</h2>
      <p>FigCraft is an early alpha at roughly 49% parity with Figma, by the project's own estimate. That number is not the useful question. The useful questions are narrower: will my file open, what does the exporter actually write, can I drive this from a script, and what does it cost to leave Figma. There is one guide per question.</p>
      <p>Every page is written against v0.9.0, released 2026-10-21. The project moves quickly, so where a behaviour is still in flux the page links the tracking issue instead of promising an outcome.</p>
    </section>
    <section>
      <h2>The eight guides</h2>
      <div class="grid">
        <a class="card" href="/learn/open-fig-file/"><span class="k">Import</span><h3>Open a .fig file</h3><p>Check a .fig before the UI touches it, convert it to .figcraft, and decide what to rebuild.</p></a>
        <a class="card" href="/learn/export-svg/"><span class="k">Export</span><h3>Export SVG</h3><p>What the real exporter writes, what the demo studio writes, and why they are not the same file.</p></a>
        <a class="card" href="/learn/keyboard-shortcuts/"><span class="k">Keys</span><h3>Keyboard shortcuts</h3><p>The demo's shortcut list, and how to dump the real app's keymap instead of guessing at it.</p></a>
        <a class="card" href="/learn/offline-design/"><span class="k">Files</span><h3>Design offline</h3><p>Local .figcraft archives, no account, and the backup duty that comes with that.</p></a>
        <a class="card" href="/learn/mcp-server/"><span class="k">Agents</span><h3>The MCP server</h3><p>Headless or attached, client configuration, and the file roots that keep an agent in its lane.</p></a>
        <a class="card" href="/learn/cli-automation/"><span class="k">Automation</span><h3>CLI automation</h3><p>info, export, convert, render, and command scripts that are all-or-nothing.</p></a>
        <a class="card" href="/learn/install-linux/"><span class="k">Install</span><h3>Install on Linux</h3><p>AppImage, deb, rpm, flatpak, Arch package and tarball, per architecture.</p></a>
        <a class="card" href="/learn/migrate-from-figma/"><span class="k">Migration</span><h3>Migrate from Figma</h3><p>An honest order of operations, and the four things that usually break.</p></a>
      </div>
      <p class="note">Platform installers live on <a href="/install/">install</a>, the bug list on <a href="/issues/">known issues</a>, and the head-to-head on <a href="/vs-figma/">FigCraft vs Figma</a>. If you came for a reference rather than a task, start with the <a href="/glossary/">glossary</a>.</p>
    </section>
    <section>
      <h2>Match the guide to the symptom</h2>
      <ul class="list">
        <li><strong>A .fig file hangs, or arrives with pieces missing</strong><span>Start with <a href="/learn/open-fig-file/">open a .fig file</a>, then read <a href="https://github.com/storytold/figcraft/issues/574" rel="noopener">#574</a> and the umbrella <a href="https://github.com/storytold/figcraft/issues/321" rel="noopener">#321</a>.</span></li>
        <li><strong>An exported SVG looks nothing like the canvas</strong><span>Read <a href="/learn/export-svg/">export SVG</a> before blaming the renderer. Text kept as text and fonts the viewer does not have explain most of it.</span></li>
        <li><strong>The keys you learned on the demo do nothing in the app</strong><span>They were never the app's keys. <a href="/learn/keyboard-shortcuts/">Keyboard shortcuts</a> separates the two lists.</span></li>
        <li><strong>You need to build 300 screens overnight</strong><span>That is a script, not a UI session. See <a href="/learn/cli-automation/">CLI automation</a> and the <a href="/learn/mcp-server/">MCP server</a>.</span></li>
        <li><strong>The AppImage will not start, or you are on ARM</strong><span><a href="/learn/install-linux/">Install on Linux</a> has the format matrix, including where the architecture coverage stops.</span></li>
      </ul>
    </section>
    <section>
      <h2>Where the demo studio fits</h2>
      <div class="disclosure"><strong>The canvas at <a href="/#demo">/#demo</a> is not the FigCraft app.</strong> It is this site's own studio, built to demonstrate a design workflow in the browser. Its shortcuts and its export formats are the studio's own, and every guide below marks the line where the two can be confused.</div>
      <p>Use the demo for quick mockups, a colour or spacing sanity check, or to see how the interaction model feels. Use FigCraft for anything you intend to keep: only it writes <code>.figcraft</code>, runs the 400+ command engine, and opens <code>.fig</code>.</p>
      <p>The reference tools are the exception — they measure rather than design, so they work either way: <a href="/tools/screen-sizes/">screen sizes</a>, <a href="/tools/svg-minifier/">SVG minifier</a> and <a href="/tools/contrast-checker/">contrast checker</a>. Ready-made starting files are on <a href="/templates/">templates</a>.</p>
    </section>`,
    faq: [
      {
        q: 'Is FigCraft ready for a production design team?',
        a: 'Not as a replacement for a hosted team tool. It is an early alpha at about 49% parity by the project\'s own estimate, with no accounts, teams or cloud. It is ready for solo interface work on local files, and for developers who want the same command engine in a script and in a UI.'
      },
      {
        q: 'Which version do these guides cover?',
        a: 'v0.9.0, released 2026-10-21, on macOS, Windows, Linux, FreeBSD and the WebAssembly build. Commands come from the project\'s own CLI, MCP and control-protocol documentation for that release.'
      },
      {
        q: 'Do these guides apply to the browser studio on this site?',
        a: 'Only where a page says so. The studio at /#demo is an independent canvas, not the FigCraft app: different renderer, different shortcuts, different export set. The pages that touch either one label it.'
      },
      {
        q: 'Where do I report a bug or check whether mine is known?',
        a: 'The tracker at github.com/storytold/figcraft/issues. This guide links the issues it can verify, and the curated shortlist is on <a href="/issues/">known issues</a>.'
      },
      {
        q: 'Is this an official FigCraft site?',
        a: 'No. It is an independent guide. The project\'s repository and release notes are the primary sources, and this site links them rather than paraphrasing them away.'
      }
    ],
    items: [
      { name: 'Open a .fig file', path: 'learn/open-fig-file/' },
      { name: 'Export SVG', path: 'learn/export-svg/' },
      { name: 'Keyboard shortcuts', path: 'learn/keyboard-shortcuts/' },
      { name: 'Design offline', path: 'learn/offline-design/' },
      { name: 'The MCP server', path: 'learn/mcp-server/' },
      { name: 'CLI automation', path: 'learn/cli-automation/' },
      { name: 'Install on Linux', path: 'learn/install-linux/' },
      { name: 'Migrate from Figma', path: 'learn/migrate-from-figma/' },
      { name: 'Glossary', path: 'glossary/' }
    ],
    related: ['install/', 'issues/', 'vs-figma/'],
    crumbs: [{ name: 'Learn', path: 'learn/' }],
    priority: '0.9',
    changefreq: 'weekly',
    updated: '2026-10-22'
  },

  /* ------------------------------------------------------ open a .fig file */
  {
    path: 'learn/open-fig-file/',
    group: 'learn',
    type: 'guide',
    title: 'Open a .fig File in FigCraft Without Losing the Original',
    description:
      'Open a Figma .fig file in FigCraft: check it with figcraft-cli info, convert to .figcraft, and know which parts of a large or complex file will need rebuilding.',
    h1: 'Opening a .fig file in FigCraft',
    eyebrow: 'Guide',
    lede:
      'Import is best effort, not a migration guarantee. This is the order of operations that keeps your original file untouched and tells you what survived before you start editing.',
    reading: '7 min',
    body: `<section class="prose">
      <h2>What "best effort" actually means</h2>
      <p>FigCraft reads <code>.fig</code> files and turns them into its own document model, then writes <code>.figcraft</code>. The import is explicitly best effort: where a Figma feature has no equivalent in FigCraft's model, the importer drops it. Large files are the known weak point — a big <code>.fig</code> can fail outright or take a very long time (<a href="https://github.com/storytold/figcraft/issues/574" rel="noopener">#574</a>, umbrella <a href="https://github.com/storytold/figcraft/issues/321" rel="noopener">#321</a>). Opening very large files was improved in <a href="https://github.com/storytold/figcraft/issues/315" rel="noopener">#315</a>, which is a real improvement and not a fix for every file.</p>
      <p>So treat the import as a read-only survey. Keep the <code>.fig</code>. Save a fresh <code>.figcraft</code>. Rebuild the parts that matter, and do not plan to round-trip back to Figma from FigCraft.</p>
    </section>
    <section>
      <h2>Step by step</h2>
      <ol class="steps">
        <li><strong>Freeze the original.</strong> Copy it and take a checksum, so you can prove later that the source was never rewritten.
          <pre><code>cp brand-source.fig brand-source.fig.keep
shasum -a 256 brand-source.fig.keep   # sha256sum on Linux</code></pre>
        </li>
        <li><strong>Get the CLI before the UI.</strong> A prebuilt macOS CLI is attached to the release as <code>figcraft-cli-0.9.0-macos-universal.zip</code>; the Linux AppImage bundles it; otherwise build it.
          <pre><code>cargo build --release -p figcraft-cli
./target/release/figcraft-cli --help</code></pre>
        </li>
        <li><strong>Survey the file without opening a window.</strong> <code>info</code> prints pages, node counts, top-level frames, style and variable counts, and pushes anything it could not import to stderr as <code>note:</code> lines.
          <pre><code>./target/release/figcraft-cli info brand-source.fig
./target/release/figcraft-cli info brand-source.fig --json &gt; import-report.json</code></pre>
          It also lists missing fonts as <code>missing font</code> lines, which is the fastest way to learn that half your text will render in a fallback.
        </li>
        <li><strong>Open a copy, not the source.</strong> Launch the app and open <code>brand-source.fig.keep</code> — or keep the copy separate and open the copy. The app opens <code>.fig</code> through its normal open path (the <code>file.open</code> command, listed by <code>figcraft-cli commands --filter open</code>).</li>
        <li><strong>Save as .figcraft immediately.</strong> Do not keep editing the import in memory: the native format is what autosave, recovery and every later script will use.
          <pre><code>./target/release/figcraft-cli convert brand-source.fig brand.figcraft</code></pre>
        </li>
        <li><strong>If it stalls, slice by frame.</strong> Export the worst frames from Figma as SVG and import each one as its own document. SVG arrives as an editable frame — groups, shapes, text, gradients, masks and effects — rather than as a flat picture.
          <pre><code>./target/release/figcraft-cli convert home.svg home.figcraft
./target/release/figcraft-cli convert settings.svg settings.figcraft</code></pre>
        </li>
        <li><strong>Diff the report against what you expected.</strong> Compare the <code>--json</code> node counts with the layer count in Figma. A large gap is your rebuild list, and it is much cheaper to find it now than after a day of editing.</li>
      </ol>
    </section>
    <section>
      <h2>What does not survive, as far as the tracker states</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Feature</th><th>What happens on import</th><th>Issue</th></tr></thead>
          <tbody>
            <tr><td>Grid auto layout</td><td>Comes in without tracks or cell anchors, so the layout collapses on the first edit</td><td><a href="https://github.com/storytold/figcraft/issues/465" rel="noopener">#465</a></td></tr>
            <tr><td>Instance-swap overrides</td><td>Dropped silently; the instance falls back to the main component's default</td><td><a href="https://github.com/storytold/figcraft/issues/464" rel="noopener">#464</a></td></tr>
            <tr><td>Import warnings</td><td>The import does not report everything it discarded, so the report is a floor, not a full list</td><td><a href="https://github.com/storytold/figcraft/issues/467" rel="noopener">#467</a></td></tr>
            <tr><td>Large files</td><td>Can fail or take a very long time; improvement landed in v0.9.0's cycle</td><td><a href="https://github.com/storytold/figcraft/issues/574" rel="noopener">#574</a>, <a href="https://github.com/storytold/figcraft/issues/315" rel="noopener">#315</a></td></tr>
            <tr><td>Fonts</td><td>Text in a font that is not installed renders in a fallback, and the fallback used to be silent</td><td><a href="https://github.com/storytold/figcraft/issues/752" rel="noopener">#752</a>, <a href="https://github.com/storytold/figcraft/issues/821" rel="noopener">#821</a></td></tr>
          </tbody>
        </table>
      </div>
      <p>What is <em>not</em> in that table is the honest answer to the common question: there is no published, exhaustive list of what the importer preserves. Test with your own file, and read <code>info</code> output rather than a feature matrix.</p>
    </section>
    <section>
      <h2>What can go wrong</h2>
      <ul class="list">
        <li><strong>The app opens nothing for a minute, then gives up</strong><span>Large-file import (<a href="https://github.com/storytold/figcraft/issues/574" rel="noopener">#574</a>). Check the file with <code>info</code> first, then split it.</span></li>
        <li><strong>Every text layer is in the wrong typeface</strong><span>The document names fonts this machine does not have (<a href="https://github.com/storytold/figcraft/issues/752" rel="noopener">#752</a>). Install them, or load them with <code>text.loadFont</code> over MCP; <a href="https://github.com/storytold/figcraft/issues/821" rel="noopener">#821</a> added rescan and refit.</span></li>
        <li><strong>The import "worked" but the component grid fell apart</strong><span>Grid auto layout arrived without tracks (<a href="https://github.com/storytold/figcraft/issues/465" rel="noopener">#465</a>). Rebuild the track list; do not re-drag every cell.</span></li>
        <li><strong>An instance lost its swapped content</strong><span>Overrides are dropped (<a href="https://github.com/storytold/figcraft/issues/464" rel="noopener">#464</a>). Re-apply the swap; check the overrides list, not just the canvas.</span></li>
      </ul>
      <p class="note">Unverified: how much of any particular file survives. The importer's coverage is file-dependent and <a href="https://github.com/storytold/figcraft/issues/467" rel="noopener">#467</a> says the report can omit losses. This page did not benchmark import times, and the split-by-SVG route changes what you get — SVG import is a different importer with its own limits.</p>
    </section>`,
    faq: [
      {
        q: 'Can FigCraft open a Figma .fig file?',
        a: 'Yes, on a best-effort basis: .fig import is implemented and improves between releases, but features without an equivalent in FigCraft\'s model are dropped. Large files are a known failure mode (#574). Check the file with <code>figcraft-cli info</code> before opening it in the UI.'
      },
      {
        q: 'Is .fig import lossless?',
        a: 'No. Grid auto layout loses tracks and cell anchors (#465), instance-swap overrides fall back to the main component (#464), and the import does not report everything it discards (#467). Keep the original .fig and treat the import as a starting point.'
      },
      {
        q: 'Do I need Figma installed to open a .fig file?',
        a: 'No. FigCraft reads the file itself. You need Figma only if you want to export frames as SVG to work around an import that will not finish.'
      },
      {
        q: 'Should I keep the original .fig after converting?',
        a: 'Yes. Keep it, and keep a checksum. Export from FigCraft writes .fig experimentally, but the reliable round trip is Figma to .fig to .figcraft, one way.'
      },
      {
        q: 'Why does my text look wrong after import?',
        a: 'The file names fonts that are not installed on this machine, so text is laid out in a fallback. Install the families, or load them into the running session; missing fonts are listed by <code>figcraft-cli info</code>.'
      }
    ],
    related: ['learn/migrate-from-figma/', 'learn/export-svg/', 'install/', 'issues/'],
    crumbs: [
      { name: 'Learn', path: 'learn/' },
      { name: 'Open a .fig file', path: 'learn/open-fig-file/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  /* ----------------------------------------------------------- export SVG */
  {
    path: 'learn/export-svg/',
    group: 'learn',
    type: 'guide',
    title: 'Export SVG from FigCraft: App, CLI and Demo Studio',
    description:
      'Export SVG from the FigCraft app or its CLI, and see why the browser demo writes a different file. Covers text, fonts, batch export and the deep-nesting limit.',
    h1: 'Exporting SVG from FigCraft',
    eyebrow: 'Guide',
    lede:
      'Two exporters share the word "SVG" here, and only one of them is FigCraft. This page covers the real exporter first, then the demo studio, and keeps them apart.',
    reading: '6 min',
    body: `<section class="prose">
      <h2>Two exporters, one name</h2>
      <p>The FigCraft app exports SVG, PNG, JPG, WebP and PDF from its own Rust engine. The same engine is reachable from the CLI with the <code>export</code>, <code>convert</code> and <code>render</code> subcommands, which is what you want in a build script: identical output, no window, no clicking.</p>
      <p>The studio at <a href="/#demo">/#demo</a> on this site is a separate canvas and writes its own SVG. It is fine for a quick mockup, but it is not the app's exporter and it does not read <code>.figcraft</code>. If the file will be committed, minified and shipped, produce it from the app or the CLI.</p>
    </section>
    <section>
      <h2>What each exporter can write</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>FigCraft app and figcraft-cli</th><th>Demo studio (this site)</th></tr></thead>
          <tbody>
            <tr><td>Vector output</td><td>SVG, PDF</td><td>SVG</td></tr>
            <tr><td>Raster output</td><td>PNG, JPG, WebP, with <code>--scale</code> up to 64</td><td>PNG at 1x, 2x or 3x</td></tr>
            <tr><td>Structured output</td><td>Code handoff: CSS, HTML, React, Leptos, SwiftUI, Compose (from Inspect)</td><td>JSON layer tree</td></tr>
            <tr><td>Input</td><td><code>.figcraft</code>, <code>.fig</code>, JSON, SVG, images</td><td>The studio's own layer model</td></tr>
            <tr><td>Repeatable from a script</td><td>Yes, headless</td><td>No</td></tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>Step by step</h2>
      <ol class="steps">
        <li><strong>Build or find the CLI.</strong> The Linux AppImage bundles it as a subcommand, so the same command works without a separate binary.
          <pre><code>cargo build --release -p figcraft-cli
./target/release/figcraft-cli --help</code></pre>
        </li>
        <li><strong>Confirm what you are about to export.</strong> Get the layer name and page name exactly right — both <code>--node</code> and <code>--page</code> accept a name or an id.
          <pre><code>./target/release/figcraft-cli info app.figcraft</code></pre>
        </li>
        <li><strong>Export one layer to one file.</strong> An output path with an extension means one file, and <code>--node</code> picks what goes in it.
          <pre><code>./target/release/figcraft-cli export app.figcraft -o hero.svg --node "Hero"</code></pre>
        </li>
        <li><strong>Export every top-level frame.</strong> An output directory gets one file per frame, named after the frame. With a directory there is no extension to infer from, so pass the format.
          <pre><code>mkdir -p exports
./target/release/figcraft-cli export app.figcraft -o exports/ --format svg</code></pre>
          Keep frame names filesystem-safe: when layers are exported through stored export settings, a slash in a name becomes a folder.
        </li>
        <li><strong>Raster versions from the same source.</strong> <code>--scale</code> applies to raster formats only, so a 2x context does not silently change your SVG.
          <pre><code>./target/release/figcraft-cli export app.figcraft -o exports/ --scale 2
./target/release/figcraft-cli render app.figcraft -o page.png --scale 2</code></pre>
        </li>
        <li><strong>Convert a whole document when you want one file, not a set.</strong> <code>convert</code> writes the current page as SVG; for print, PDF keeps frames as separate pages.
          <pre><code>./target/release/figcraft-cli convert app.figcraft app.svg
./target/release/figcraft-cli export app.figcraft -o screens.pdf --page "Screens"</code></pre>
        </li>
        <li><strong>Shrink the result before shipping it.</strong> The <a href="/tools/svg-minifier/">SVG minifier</a> on this site strips whitespace and metadata in the browser, so the file never leaves your machine.</li>
      </ol>
    </section>
    <section>
      <h2>Text stays text — which is both the feature and the trap</h2>
      <p>SVG export keeps <code>&lt;text&gt;</code> elements by default: the file is editable and selectable, and its fonts are whatever the viewer has. That is why an exported SVG can look perfect in your browser and wrong on a colleague's laptop. If the text must look identical everywhere, outline it — the automation <code>export</code> takes <code>svgOutlineText</code>, and the same options can be stored per layer in export settings (<code>export.add</code>). The alternative is to accept that the SVG depends on a font stack you do not control.</p>
      <p>Missing fonts are a separate failure: if the document names a family that is not installed, FigCraft lays that text out in a fallback before export, so the SVG records the wrong metrics rather than a missing font (<a href="https://github.com/storytold/figcraft/issues/752" rel="noopener">#752</a>). The rescan and load commands that fix a running session are covered by <a href="https://github.com/storytold/figcraft/issues/821" rel="noopener">#821</a>.</p>
    </section>
    <section>
      <h2>What can go wrong</h2>
      <ul class="list">
        <li><strong>The command errors instead of writing a file</strong><span>SVG and PDF export refuse documents with visible descendants more than 256 levels below the exported root, rather than writing a truncated file. Select an inner layer with <code>--node</code>, or flatten the nesting.</span></li>
        <li><strong>Your old destination file is still there</strong><span>On that nesting failure the existing destination is kept. Check the exit code, not the timestamp.</span></li>
        <li><strong>The text is in the wrong font in the browser</strong><span>Missing source font (<a href="https://github.com/storytold/figcraft/issues/752" rel="noopener">#752</a>), or a viewer without the family. Outline the text for fixed output.</span></li>
        <li><strong>Nothing matches the demo</strong><span>The demo's SVG comes from a different renderer. See the table above; do not diff the two files and expect parity.</span></li>
      </ul>
      <p class="note">Unverified: byte-level fidelity across viewers, and whether a given SVG survives every downstream tool. This page checked command syntax against the project's CLI documentation, not the visual output of a specific file.</p>
    </section>`,
    faq: [
      {
        q: 'Does FigCraft export SVG?',
        a: 'Yes. The app exports SVG, PNG, JPG, WebP and PDF, and the CLI writes the same formats headless with <code>figcraft-cli export</code>, <code>convert</code> and <code>render</code>. Inspect additionally generates CSS, HTML, React, Leptos, SwiftUI and Compose for handoff.'
      },
      {
        q: 'Is the SVG from the demo studio the same as the app\'s SVG?',
        a: 'No. The studio at /#demo is an independent canvas on this site with its own renderer and its own export set (PNG 1x/2x/3x, SVG, JSON layer tree). It cannot open .figcraft and it is not a substitute for the app\'s exporter.'
      },
      {
        q: 'Why is my exported text not selectable?',
        a: 'It was outlined. SVG export keeps <code>&lt;text&gt;</code> unless you ask for outlines, so selectable text is the default; if yours is paths, an outline option was set on the layer or in the export call.'
      },
      {
        q: 'Why does SVG export fail on a deeply nested design?',
        a: 'Exports with visible descendants more than 256 levels below the exported root fail on purpose instead of writing an incomplete file, and an existing destination file is left untouched. Export an inner layer with <code>--node</code> or reduce the nesting.'
      },
      {
        q: 'Can I export all frames at once?',
        a: 'Yes. Point <code>-o</code> at a directory with <code>--format svg</code> and you get one file per top-level frame, named after the frame. For PDF, frames become separate pages.'
      }
    ],
    related: ['learn/open-fig-file/', 'learn/cli-automation/', 'install/', 'issues/'],
    crumbs: [
      { name: 'Learn', path: 'learn/' },
      { name: 'Export SVG', path: 'learn/export-svg/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  /* --------------------------------------------------- keyboard shortcuts */
  {
    path: 'learn/keyboard-shortcuts/',
    group: 'learn',
    type: 'guide',
    title: 'FigCraft Keyboard Shortcuts: Demo Studio vs the Real App',
    description:
      'The demo studio\'s shortcuts are documented here, the real FigCraft app\'s keymap is not. How to tell them apart, and how to dump the app\'s bindings from the CLI.',
    h1: 'FigCraft keyboard shortcuts, split honestly',
    eyebrow: 'Guide',
    lede:
      'There are two keymaps in play on this site and only one of them is documented here. This page lists the demo studio\'s shortcuts, then shows how to read the real app\'s bindings instead of assuming they match.',
    reading: '6 min',
    body: `<section class="prose">
      <h2>Two keymaps, one of them documented</h2>
      <p>The studio at <a href="/#demo">/#demo</a> is an independent canvas built for this site. Its shortcuts are fixed, small, documented below, and shown in its own <code>?</code> dialog. They are the studio's, not FigCraft's.</p>
      <p>The real app has its own default keymap, held in one table in the engine (<code>figcraft_engine::keymap</code>) and grouped the way the project's shortcut reference is grouped. This guide does not reproduce that table: it changes between releases, macOS and Windows/Linux differ, and a copied list would be stale in a way you cannot see. Read it from the build you are running instead — the commands are further down.</p>
    </section>
    <section>
      <h2>Demo studio shortcuts (documented)</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Keys</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td><code>V</code> / <code>F</code> / <code>R</code> / <code>T</code></td><td>Select, Frame, Rectangle, Text tool</td></tr>
            <tr><td>Drag / handle drag</td><td>Move a layer, resize a layer</td></tr>
            <tr><td><code>Alt</code> + drag</td><td>Disable grid and guide snapping</td></tr>
            <tr><td><code>Shift</code> + drag</td><td>Keep the aspect ratio while resizing</td></tr>
            <tr><td><code>Cmd</code>/<code>Ctrl</code> + <code>Z</code></td><td>Undo; add <code>Shift</code> to redo</td></tr>
            <tr><td><code>Cmd</code>/<code>Ctrl</code> + <code>D</code></td><td>Duplicate the selected layer</td></tr>
            <tr><td><code>Cmd</code>/<code>Ctrl</code> + <code>C</code> / <code>V</code></td><td>Copy and paste a layer</td></tr>
            <tr><td><code>Delete</code> or <code>Backspace</code></td><td>Delete the selected layer</td></tr>
            <tr><td>Arrows</td><td>Nudge 1 px; <code>Shift</code> 10 px; <code>Alt</code> 0.001 px</td></tr>
            <tr><td><code>Cmd</code>/<code>Ctrl</code> + arrows</td><td>Resize instead of moving</td></tr>
            <tr><td><code>Space</code> + drag</td><td>Pan the canvas</td></tr>
            <tr><td><code>Cmd</code>/<code>Ctrl</code> + wheel</td><td>Zoom around the pointer</td></tr>
            <tr><td><code>Esc</code></td><td>Close a dialog, drop the icon drawer, deselect</td></tr>
            <tr><td><code>?</code></td><td>Open the shortcut dialog</td></tr>
          </tbody>
        </table>
      </div>
      <p>Three details worth knowing. The nudge has a sub-pixel tier — <code>Alt</code> moves 0.001 px, which is only visible at high zoom and is there for aligning to a grid you do not want to disturb. Holding <code>Cmd</code>/<code>Ctrl</code> with the arrows converts the same gesture into a resize. And a run of arrow presses collapses into one undo step, so undo does not walk back 40 individual nudges.</p>
    </section>
    <section>
      <h2>The real app's keymap (not documented in this guide)</h2>
      <p>What this guide can tell you is where the answer lives. The app's shortcuts are entries on commands: every menu action is a command, and each command may carry a shortcut. The CLI prints that table, which makes it the authoritative, version-accurate list for the build you have.</p>
      <ol class="steps">
        <li><strong>Open the demo and its own dialog.</strong> Go to <a href="/#demo">/#demo</a> and press <code>?</code>. What appears is the table above, with the studio's own wording.</li>
        <li><strong>List every command with its shortcut.</strong> The <code>commands</code> subcommand prints label, shortcut and an undoable marker; <code>--filter</code> narrows it, <code>--json</code> makes it machine-readable.
          <pre><code>./target/release/figcraft-cli commands --filter export
./target/release/figcraft-cli commands --json &gt; commands.json</code></pre>
        </li>
        <li><strong>Read the platform-specific binding.</strong> <code>list_commands</code> over MCP reports each command's first key for the platform the server runs on, so the same dump looks different on macOS and on Linux. Run it on the machine you care about.</li>
        <li><strong>Check an ambiguous key by its command, not by memory.</strong> Some bindings differ by platform; the project's own documentation gives Use as mask as <code>Ctrl+Cmd+M</code> on macOS and <code>Ctrl+Alt+M</code> elsewhere, and Bring to front as <code>Alt+Cmd+]</code> and <code>Ctrl+Shift+]</code>. Assume nothing you have not printed.</li>
        <li><strong>Drive the app with a key you have verified.</strong> Over MCP, <code>key</code> resolves keys the way the canvas does, and <code>run_command</code> reaches the command behind the shortcut directly — usually the better choice for automation, because it does not depend on a keymap at all.</li>
      </ol>
      <p class="note">Unverified in this guide: the complete real-app keymap. There is no official list here to check against, and this page deliberately does not invent one. If a published shortcut reference disagrees with your build, the build is right.</p>
    </section>
    <section>
      <h2>What can go wrong</h2>
      <ul class="list">
        <li><strong>Demo keys do nothing in the app</strong><span>Expected. The studio's <code>V</code>/<code>F</code>/<code>R</code>/<code>T</code> bindings are the studio's. Print the app's table with <code>figcraft-cli commands</code>.</span></li>
        <li><strong>A shortcut types a character instead of running</strong><span>You are editing text. While a text layer is being edited, text shortcuts and text editing keys take precedence over canvas commands.</span></li>
        <li><strong>You cannot read the shortcut labels at all</strong><span>The UI is small on a 1440p display (<a href="https://github.com/storytold/figcraft/issues/540" rel="noopener">#540</a>); the interface-size preference was added under <a href="https://github.com/storytold/figcraft/issues/818" rel="noopener">#818</a>. Set it before blaming the keymap.</span></li>
        <li><strong>The list you found online is wrong</strong><span>It is probably from another version or another platform. Regenerate it from your own build.</span></li>
      </ul>
    </section>`,
    faq: [
      {
        q: 'Are the demo studio shortcuts the same as FigCraft\'s shortcuts?',
        a: 'No. The studio at /#demo is an independent canvas with its own small fixed keymap. This guide documents that keymap only, and states plainly that the real app\'s keymap is not documented here.'
      },
      {
        q: 'How do I find FigCraft\'s real keyboard shortcuts?',
        a: 'Print them from your build: <code>figcraft-cli commands</code> lists every command with its shortcut, and <code>--json --filter</code> narrows the result. Over MCP, <code>list_commands</code> reports each command\'s first key for the platform the server runs on.'
      },
      {
        q: 'Why do Windows and macOS shortcuts differ?',
        a: 'The engine keymap carries macOS keys and, where they differ, the Windows and Linux keys — for example Use as mask is Ctrl+Cmd+M on macOS and Ctrl+Alt+M elsewhere. The dump you print reflects the platform it ran on.'
      },
      {
        q: 'Can I run a command without knowing its shortcut?',
        a: 'Yes, and for automation you should. Every menu action is a command reachable by id through the CLI, the control channel and MCP, so <code>run_command</code> with the command id does not depend on a key binding at all.'
      }
    ],
    related: ['learn/offline-design/', 'learn/cli-automation/', 'install/', 'issues/'],
    crumbs: [
      { name: 'Learn', path: 'learn/' },
      { name: 'Keyboard shortcuts', path: 'learn/keyboard-shortcuts/' }
    ],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  /* --------------------------------------------------------- offline design */
  {
    path: 'learn/offline-design/',
    group: 'learn',
    type: 'guide',
    title: 'Designing Offline in FigCraft: Local Files, No Account',
    description:
      'How FigCraft\'s offline model works: .figcraft files on disk, no account or telemetry, the optional local collaboration server, and the backup duty you take on.',
    h1: 'Designing offline with FigCraft',
    eyebrow: 'Guide',
    lede:
      'FigCraft stores documents as <code>.figcraft</code> archives on your disk, with no account and no telemetry. That is a real trade: total ownership of the file, and total responsibility for it.',
    reading: '6 min',
    body: `<section class="prose">
      <h2>The model in one paragraph</h2>
      <p>A FigCraft document is a <code>.figcraft</code> archive on your filesystem. There is no sign-in, no workspace, no server component in the loop, and no telemetry — nothing leaves the machine unless you share it deliberately. The app is native Rust on macOS, Windows, Linux and FreeBSD, so the same document opens on any of them without a network round trip.</p>
      <p>This is the part of the project that is genuinely finished, not a preview: local editing is the primary workflow, not a fallback. Collaboration is the preview.</p>
    </section>
    <section>
      <h2>What stays local, and what leaves</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Thing</th><th>Where it lives</th></tr></thead>
          <tbody>
            <tr><td>Document content and history</td><td>The <code>.figcraft</code> file you saved; undo history is in the session</td></tr>
            <tr><td>Account, team, workspace</td><td>Does not exist</td></tr>
            <tr><td>Telemetry</td><td>None</td></tr>
            <tr><td>Fonts</td><td>Built into the app plus your system fonts; a source build also needs the <code>craft-fonts</code> checkout</td></tr>
            <tr><td>A live session</td><td>Leaves only when you host, join or publish one on a collaboration server</td></tr>
            <tr><td>Exports you upload</td><td>Leave when you upload them; the exporter itself writes to disk or returns bytes</td></tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>Step by step: an offline setup that survives</h2>
      <ol class="steps">
        <li><strong>Use a native build, not the web build.</strong> The WebAssembly build is the editor in a tab; a desktop build is the one that owns files on disk.
          <pre><code># macOS
open figcraft-0.9.0-macos-universal.dmg
# Linux, no install step
chmod +x figcraft-0.9.0-linux-x86_64.AppImage &amp;&amp; ./figcraft-0.9.0-linux-x86_64.AppImage</code></pre>
        </li>
        <li><strong>Keep one file per product, saved as .figcraft.</strong> Import once, then work in the native format. Converting on demand keeps the archive authoritative:
          <pre><code># build the CLI once, or use the AppImage's cli subcommand
cargo build --release -p figcraft-cli
./target/release/figcraft-cli convert brand-source.fig brand.figcraft</code></pre>
        </li>
        <li><strong>Put the file under version control.</strong> A <code>.figcraft</code> is a binary archive, so history is snapshot-based rather than line-based — but a commit per milestone is still the cheapest undo you will ever get.
          <pre><code>mkdir -p ~/work/brand &amp;&amp; cd ~/work/brand
git init
cp ~/Downloads/brand.figcraft .
git add brand.figcraft
git commit -m "brand: first .figcraft import from v0.9.0"</code></pre>
        </li>
        <li><strong>Keep a second copy off the machine.</strong> With no cloud there is no server-side history. A nightly <code>rsync</code> to another disk is the whole backup strategy:
          <pre><code>rsync -a --delete ~/work/brand/ /Volumes/Backup/brand/</code></pre>
        </li>
        <li><strong>Share deliberately, if at all.</strong> The collaboration server is a separate optional binary, and live sessions are a preview with no accounts or teams. Self-host it rather than trusting a public instance:
          <pre><code>cargo run --release -p figcraft-server</code></pre>
        </li>
        <li><strong>Check the claim yourself.</strong> With the app open and a document loaded, watch outbound traffic for a minute. Nothing should be initiating connections: there is no account, so there is nothing to phone home about.</li>
      </ol>
    </section>
    <section>
      <h2>What can go wrong</h2>
      <ul class="list">
        <li><strong>The file is gone and there is no cloud copy</strong><span>This is the model. A launch crash on macOS 27.0.1 with an M1 machine (<a href="https://github.com/storytold/figcraft/issues/781" rel="noopener">#781</a>) is a work-stopping event precisely because nothing is stored elsewhere for you. Keep the off-machine copy before you need it.</span></li>
        <li><strong>You assumed the live session encrypted everything</strong><span>The optional server is not end-to-end encrypted on a public instance. Self-host it, or do not use it for material you would not post.</span></li>
        <li><strong>Your fonts are wrong on the second machine</strong><span>Fonts are local. A missing family falls back silently in the document (<a href="https://github.com/storytold/figcraft/issues/752" rel="noopener">#752</a>), so the same file can look different on two laptops. Install the families on both.</span></li>
        <li><strong>You edited the import and never saved a .figcraft</strong><span>Recovery is a local file, not a server snapshot. Save to the native format before you invest an hour in edits.</span></li>
      </ul>
      <p class="note">Unverified: the absence of telemetry was not packet-inspected for this page; it is the project's stated design and the reason there is no account system. Backup commands shown are generic shell, not FigCraft features.</p>
    </section>`,
    faq: [
      {
        q: 'Does FigCraft work offline?',
        a: 'Yes, by design. Documents are .figcraft archives on your disk, there is no account and no telemetry, and nothing leaves the machine unless you explicitly share it or join a live session.'
      },
      {
        q: 'Where are my files stored?',
        a: 'Wherever you saved them: a .figcraft archive on the local filesystem. There is no server-side copy, so the file you saved is the only copy unless you make another.'
      },
      {
        q: 'Does FigCraft have cloud sync or version history?',
        a: 'No cloud and no accounts. Undo history lives in the session, and the practical substitute for cloud history is putting the .figcraft file in git and keeping an off-machine backup.'
      },
      {
        q: 'Is the collaboration server private?',
        a: 'Only as private as where you run it. figcraft-server is optional and self-hostable; live sessions are a preview with no accounts or teams, and the public server is not end-to-end encrypted.'
      },
      {
        q: 'Can I open the same file on macOS and Linux?',
        a: 'Yes. The native format is the same and builds exist for macOS, Windows, Linux and FreeBSD. Fonts are the caveat: they come from the machine, so install the same families on both.'
      }
    ],
    related: ['learn/open-fig-file/', 'learn/migrate-from-figma/', 'install/', 'issues/'],
    crumbs: [
      { name: 'Learn', path: 'learn/' },
      { name: 'Design offline', path: 'learn/offline-design/' }
    ],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  /* ------------------------------------------------------------ MCP server */
  {
    path: 'learn/mcp-server/',
    group: 'learn',
    type: 'guide',
    title: 'Connect an AI Agent to FigCraft with the MCP Server',
    description:
      'Run figcraft-cli mcp headless or attach it to the running app, configure Claude Code or Claude Desktop, confine file access, and verify what the agent changed.',
    h1: 'The FigCraft MCP server',
    eyebrow: 'Guide',
    lede:
      'FigCraft ships a Model Context Protocol server, so an agent can create layers, run any command, inspect the document as JSON and look at it as a PNG. The difference between headless and attached is the first thing to get right.',
    reading: '7 min',
    body: `<section class="prose">
      <h2>Two backends, chosen at launch</h2>
      <p>The server speaks newline-delimited JSON-RPC 2.0 over stdio and lives in <code>crates/mcp</code>; the CLI starts it. In headless mode it runs an in-process engine session with one untitled document and no window, rendering with the CPU renderer. In attached mode it drives a running app over the app's loopback control channel, so you watch every change happen.</p>
      <p>The command surface is the same 400+ commands the UI uses. That is the point: an agent calling <code>run_command</code> is not using a reduced API, it is using the menu.</p>
    </section>
    <section>
      <h2>Step by step</h2>
      <ol class="steps">
        <li><strong>Build the CLI.</strong> Use the absolute path to the binary in every client config; relative paths break when the client starts in another directory.
          <pre><code>cargo build --release -p figcraft-cli
./target/release/figcraft-cli --help</code></pre>
        </li>
        <li><strong>Start it headless</strong> for scripted or batch work. Nothing appears on screen, and the session is a single untitled document.
          <pre><code>./target/release/figcraft-cli mcp</code></pre>
        </li>
        <li><strong>Or attach to a running app</strong> when you want to see the edits. Start the app with a control port first — the channel listens on <code>127.0.0.1</code> only.
          <pre><code>figcraft --control 7979
./target/release/figcraft-cli mcp --attach 7979</code></pre>
          <code>--attach</code> also accepts <code>host:port</code>. From a source checkout the same app start is <code>cargo run -p figcraft -- --control 7979</code>.
        </li>
        <li><strong>Register it with Claude Code.</strong>
          <pre><code>claude mcp add figcraft -- /absolute/path/to/target/release/figcraft-cli mcp
claude mcp add figcraft-app -- /absolute/path/to/target/release/figcraft-cli mcp --attach 7979</code></pre>
        </li>
        <li><strong>Or write the JSON config.</strong> The same shape works in a project's <code>.mcp.json</code> and in Claude Desktop's <code>claude_desktop_config.json</code> (Settings, Developer, Edit Config).
          <pre><code>{
  "mcpServers": {
    "figcraft": { "command": "/path/to/figcraft-cli", "args": ["mcp"] }
  }
}</code></pre>
        </li>
        <li><strong>Confine what it can touch.</strong> Both flags are repeatable, and the folders must already exist.
          <pre><code>./target/release/figcraft-cli mcp --automation-read-root /work/project --automation-write-root /work/project/out</code></pre>
          A write outside the roots is refused with a readable tool error and nothing is written. With only a read root, the agent cannot write at all. Combining either flag with <code>--attach</code> is a usage error: the app runs the commands, so start the app with the flags instead.
        </li>
        <li><strong>Verify the result, do not trust the transcript.</strong> Every mutation is one undo step, and a failing command leaves the document as it was. Read the numbers back with <code>inspect_document</code> or <code>get_node</code>, then render <code>screenshot</code> and look at it.
          <pre><code>{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"run_command","arguments":{"command":"file.newFromTemplate","params":{"template":"dashboard"}}}}
{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"export","arguments":{"format":"png","path":"dashboard.png"}}}</code></pre>
        </li>
      </ol>
    </section>
    <section>
      <h2>The tools an agent actually uses</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Tool</th><th>What it does</th></tr></thead>
          <tbody>
            <tr><td><code>list_commands</code></td><td>Every command with label, menu, shortcut, undoability and parameter docs</td></tr>
            <tr><td><code>run_command</code></td><td>Run any single command, for example <code>layout.add</code> or <code>inspect.code</code></td></tr>
            <tr><td><code>batch</code></td><td>Several commands as one undo step, all-or-nothing, with <code>{"$step": n}</code> references</td></tr>
            <tr><td><code>create_node</code> / <code>set_properties</code></td><td>Create layers, then set geometry, fills, layout, text and constraints</td></tr>
            <tr><td><code>inspect_document</code> / <code>get_node</code></td><td>The document or one layer as JSON, including resolved bounds</td></tr>
            <tr><td><code>export</code> / <code>screenshot</code></td><td>PNG, JPG, SVG, WebP, PDF, or an experimental <code>.fig</code>; plus a PNG view of the page</td></tr>
            <tr><td><code>open_file</code> / <code>save_file</code></td><td>Open <code>.figcraft</code>, JSON, <code>.fig</code> or SVG; save as <code>.figcraft</code></td></tr>
            <tr><td><code>pointer</code> / <code>key</code> / <code>type_text</code></td><td>The canvas gestures and keystrokes a UI-only task would need</td></tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>What can go wrong</h2>
      <ul class="list">
        <li><strong>The session dies after one huge request</strong><span>A line is limited to 32 MiB before the newline. An oversized or unterminated frame returns JSON-RPC error <code>-32600</code> and closes the session without dispatching later requests.</span></li>
        <li><strong>An edit failed and you are not sure whether it applied</strong><span>Attached calls are never replayed after a transport failure, because the app may have applied the request before the reply was lost. Inspect before retrying.</span></li>
        <li><strong>Your roots are rejected at startup even attached</strong><span>The flags and <code>--attach</code> cannot be combined. Start the app with the roots: <code>figcraft --control 7979 --automation-read-root ... --automation-write-root ...</code>.</span></li>
        <li><strong>The agent reports success and the canvas disagrees</strong><span>Known rough edges in the current MCP surface: open reports include <a href="https://github.com/storytold/figcraft/issues/927" rel="noopener">#927</a> and <a href="https://github.com/storytold/figcraft/issues/967" rel="noopener">#967</a>. Verify every run with <code>inspect_document</code>.</span></li>
        <li><strong>Text sizes on the server differ from the app</strong><span>The headless server indexes system fonts on first text layout. For CI-stable renders use <code>--no-system-fonts</code> or <code>FIGCRAFT_NO_SYSTEM_FONTS=1</code>.</span></li>
      </ul>
      <p class="note">Unverified: which third-party MCP clients work end-to-end. The configuration shapes and tool list come from the project's documentation; this page did not run a client against a v0.9.0 server.</p>
    </section>`,
    faq: [
      {
        q: 'Does FigCraft have an MCP server?',
        a: 'Yes. It ships as part of the project and is started by the CLI: <code>figcraft-cli mcp</code> for a headless session, <code>figcraft-cli mcp --attach PORT</code> to drive a running app. It speaks newline-delimited JSON-RPC 2.0 over stdio.'
      },
      {
        q: 'What is the difference between headless and attached mode?',
        a: 'Headless is an in-process engine session with one untitled document, no window and a CPU renderer. Attached drives the running app over its loopback control channel, so the user sees every change live — and attached calls are never replayed after a transport failure.'
      },
      {
        q: 'How do I stop an agent from touching the rest of my disk?',
        a: 'Start it with <code>--automation-read-root</code> and <code>--automation-write-root</code>. Reads must fall inside a read or write root, writes only inside a write root, and a refused path returns a tool error without writing. The folders must exist at startup.'
      },
      {
        q: 'Can an agent open my Figma files?',
        a: 'It can call <code>open_file</code> on a .fig, which is the same best-effort import the UI uses, and on .svg, JSON and .figcraft. Complex .fig files may import partially; see the .fig guide.'
      },
      {
        q: 'How do I check what the agent did?',
        a: 'Read it back with <code>inspect_document</code> or <code>get_node</code>, and render a <code>screenshot</code>. Every mutation is one undo step, a failing command leaves the document unchanged, and programmatic calls never open dialogs.'
      }
    ],
    related: ['learn/cli-automation/', 'learn/open-fig-file/', 'install/', 'issues/'],
    crumbs: [
      { name: 'Learn', path: 'learn/' },
      { name: 'The MCP server', path: 'learn/mcp-server/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  /* --------------------------------------------------------- CLI automation */
  {
    path: 'learn/cli-automation/',
    group: 'learn',
    type: 'guide',
    title: 'FigCraft CLI Automation: Export, Convert and Script Runs',
    description:
      'Script FigCraft with figcraft-cli: info, export, convert, render, all-or-nothing command scripts, and the automation roots that confine a run to chosen folders.',
    h1: 'Automating FigCraft with the CLI',
    eyebrow: 'Guide',
    lede:
      'The CLI is the same engine without a window: inspect, export, convert, render, run command scripts, and report the command table. Everything here is repeatable in CI.',
    reading: '8 min',
    body: `<section class="prose">
      <h2>One engine, no window</h2>
      <p><code>figcraft-cli</code> runs the same 400+ command layer as the UI, so a script is not a second implementation with its own bugs. Bad arguments print usage and exit 2; failures exit 1; the CLI does not panic on input. On Linux the AppImage bundles it, so <code>./figcraft-0.9.0-linux-x86_64.AppImage cli ...</code> is the same tool wherever <code>figcraft-cli ...</code> appears below.</p>
    </section>
    <section>
      <h2>Step by step</h2>
      <ol class="steps">
        <li><strong>Build it once.</strong>
          <pre><code>cargo build --release -p figcraft-cli
./target/release/figcraft-cli --help</code></pre>
        </li>
        <li><strong>Inspect before you export.</strong> <code>info</code> prints pages, node counts, top-level frames, styles, variables and images, and lists missing fonts. <code>--json</code> gives the same as a machine-readable document for a build check.
          <pre><code>./target/release/figcraft-cli info app.figcraft
./target/release/figcraft-cli info app.figcraft --json &gt; report.json</code></pre>
        </li>
        <li><strong>Export deterministically.</strong> A directory output gives one file per top-level frame; an extension output gives one file, chosen with <code>--node</code>.
          <pre><code>mkdir -p exports
./target/release/figcraft-cli export app.figcraft -o exports/ --scale 2
./target/release/figcraft-cli export app.figcraft -o hero.svg --node "Hero"
./target/release/figcraft-cli export app.figcraft -o screens.pdf --page "Screens"</code></pre>
        </li>
        <li><strong>Convert between formats.</strong> The format follows the extensions: <code>.figcraft</code>, <code>.json</code>, <code>.fig</code>, <code>.svg</code>, images, and outputs of the same families.
          <pre><code>./target/release/figcraft-cli convert app.figcraft app.svg
./target/release/figcraft-cli convert home.svg home.figcraft</code></pre>
        </li>
        <li><strong>Run a command script.</strong> A script is a JSON array of command/params pairs, an object with a <code>commands</code> array, or JSON lines. It runs in a headless session and, once it is through, prints one JSON line per step. The whole script is one undo step — and all-or-nothing.
          <pre><code>[
  {"command": "frame.create", "params": {"preset": "iPhone 16", "x": 0, "y": 0, "name": "Home"}},
  {"command": "node.create", "params": {"type": "text", "parent": 2, "x": 24, "y": 64, "text": "Welcome", "props": {"fontSize": 32}}},
  {"command": "layout.add", "params": {"ids": [2], "direction": "vertical"}}
]</code></pre>
          Save that as <code>start.json</code>, then run it:
          <pre><code>./target/release/figcraft-cli run start.json --out dashboard.figcraft</code></pre>
          In a new document the first page is id 1, so the first layer is id 2. A later step can refer to an earlier step's result with <code>{"$step": n}</code>.
        </li>
        <li><strong>Start from a template instead of an empty page.</strong> <code>template.list</code> names the built-in starters; <code>file.newFromTemplate</code> opens one as the document the following steps act on.
          <pre><code>echo '[{"command": "file.newFromTemplate", "params": {"template": "dashboard"}}]' &gt; start.json
./target/release/figcraft-cli run start.json --out dashboard.figcraft
./target/release/figcraft-cli export dashboard.figcraft -o dashboard.png</code></pre>
        </li>
        <li><strong>Confine the run.</strong> Both root flags are repeatable and confine every file the subcommand touches. A path outside them is refused, and the output is otherwise identical.
          <pre><code>./target/release/figcraft-cli render in/doc.figcraft -o out/ok.png --automation-read-root in --automation-write-root out</code></pre>
        </li>
        <li><strong>Print the command table instead of guessing.</strong> Use it when a script needs a command id you have not used before.
          <pre><code>./target/release/figcraft-cli commands --filter layout
./target/release/figcraft-cli commands --json --filter export</code></pre>
        </li>
      </ol>
    </section>
    <section>
      <h2>Subcommands worth knowing</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Subcommand</th><th>Use it for</th></tr></thead>
          <tbody>
            <tr><td><code>info</code></td><td>Node counts, styles, variables, missing fonts, import notes</td></tr>
            <tr><td><code>export</code></td><td>Frames or a single layer to png, jpg, svg, webp, pdf, or an experimental fig</td></tr>
            <tr><td><code>convert</code></td><td>Format to format, including SVG and image import</td></tr>
            <tr><td><code>render</code></td><td>The whole page as one raster, scaled to fit 16384 px</td></tr>
            <tr><td><code>run</code></td><td>A JSON command script, all-or-nothing</td></tr>
            <tr><td><code>commands</code></td><td>Every command with label, shortcut and parameter docs</td></tr>
            <tr><td><code>mcp</code></td><td>The MCP server, headless or attached</td></tr>
            <tr><td><code>perf</code></td><td>Synthetic documents and a Markdown table of hot paths</td></tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>What can go wrong</h2>
      <ul class="list">
        <li><strong>Exit 1 and no output file</strong><span>A step failed and the script rolled back: nothing was written, the session's documents are as they were, and the failing line carries <code>"rolledBack": true</code>. Fix the step; do not retry blindly.</span></li>
        <li><strong>A later step cannot find the layer an earlier step made</strong><span>Reference the returned id with <code>{"$step": n}</code> rather than hard-coding an id you guessed.</span></li>
        <li><strong>SVG or PDF export refuses a document</strong><span>Visible descendants more than 256 levels below the exported root fail by design. Use <code>--node</code> on an inner layer or reduce nesting.</span></li>
        <li><strong>Renders differ between machines</strong><span>System fonts differ. Add <code>--no-system-fonts</code> or set <code>FIGCRAFT_NO_SYSTEM_FONTS=1</code> to use only the built-in fonts.</span></li>
        <li><strong>A path outside the roots is refused</strong><span>That is the confinement working; it landed for these subcommands in <a href="https://github.com/storytold/figcraft/issues/839" rel="noopener">#839</a>. Widen the root, do not work around it.</span></li>
      </ul>
      <p class="note">Unverified: wall-clock timings for export or script runs on your documents. The 16384 px render cap, the exit codes and the rollback behaviour come from the project's CLI documentation, not from timings measured here.</p>
    </section>`,
    faq: [
      {
        q: 'Is there a FigCraft command line tool?',
        a: 'Yes: <code>figcraft-cli</code>, built with <code>cargo build --release -p figcraft-cli</code> or bundled in the Linux AppImage as a <code>cli</code> subcommand. It exposes info, export, convert, render, run, commands, mcp, plugin publish and perf.'
      },
      {
        q: 'Can the CLI run FigCraft menu commands?',
        a: 'Yes. <code>run</code> executes a JSON script of command ids and params in a headless session, printing one JSON line per step. The whole script is one undo step and is all-or-nothing, the same guarantee the MCP <code>batch</code> tool gives.'
      },
      {
        q: 'How do I find a command id?',
        a: 'Run <code>figcraft-cli commands</code> for the human-readable table, or <code>figcraft-cli commands --json --filter layout</code> for machine-readable output. The same list is available over MCP as <code>list_commands</code>.'
      },
      {
        q: 'Can I limit what a script may read and write?',
        a: 'Yes. <code>--automation-read-root</code> and <code>--automation-write-root</code> confine info, export, convert, render and run. Each is repeatable, each folder must exist, and reads are allowed inside either root while writes need a write root.'
      },
      {
        q: 'What happens if a step in my script fails?',
        a: 'The script stops, prints a line with <code>"ok": false</code> and <code>"rolledBack": true</code>, writes nothing including <code>--out</code>, restores the session documents, and exits 1.'
      }
    ],
    related: ['learn/mcp-server/', 'learn/export-svg/', 'learn/install-linux/', 'install/'],
    crumbs: [
      { name: 'Learn', path: 'learn/' },
      { name: 'CLI automation', path: 'learn/cli-automation/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  /* ---------------------------------------------------------- install Linux */
  {
    path: 'learn/install-linux/',
    group: 'learn',
    type: 'guide',
    title: 'Install FigCraft on Linux: AppImage, deb, rpm, flatpak',
    description:
      'Pick the right FigCraft Linux build, run the AppImage with chmod +x, install the deb, rpm, flatpak or Arch package, and know the FreeBSD x86_64-only caveat.',
    h1: 'Installing FigCraft on Linux',
    eyebrow: 'Guide',
    lede:
      'There is no installer wizard and no system-wide step for the AppImage: download, <code>chmod +x</code>, run. The package formats exist for people who prefer their distro to own the binary.',
    reading: '6 min',
    body: `<section class="prose">
      <h2>Which file do I want?</h2>
      <p>v0.9.0 attaches 29 build artifacts plus <code>SHA256SUMS.txt</code>. Linux builds follow the name <code>figcraft-0.9.0-linux-ARCH.FORMAT</code>, so the filename tells you the architecture and the package type before you download it. Match the architecture first: an aarch64 build will not start on an x86_64 machine, and that is the most common first-run failure.</p>
    </section>
    <section>
      <h2>Linux formats per architecture</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Architecture</th><th>Formats in v0.9.0</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>x86_64</td><td><code>.AppImage</code>, <code>.deb</code>, <code>.rpm</code>, <code>.flatpak</code>, <code>.pkg.tar.zst</code>, <code>.tar.gz</code></td><td>Everything. The AppImage also carries a <code>.zsync</code> file for delta updates</td></tr>
            <tr><td>aarch64</td><td>Same set as x86_64</td><td>For ARM servers and ARM laptops running a full desktop</td></tr>
            <tr><td>riscv64</td><td><code>.deb</code>, <code>.rpm</code>, <code>.tar.gz</code></td><td>No AppImage and no flatpak in this release; use the tarball or a distro package</td></tr>
            <tr><td>FreeBSD</td><td><code>.tar.gz</code></td><td><strong>x86_64 only</strong> — aarch64 was dropped in v0.9.0 because it could not build inside the 5-hour CI limit</td></tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>Step by step</h2>
      <ol class="steps">
        <li><strong>Download from the release page</strong>, then verify against the checksum file that ships beside the builds.
          <pre><code>sha256sum -c SHA256SUMS.txt --ignore-missing</code></pre>
        </li>
        <li><strong>AppImage: make it executable and run it.</strong> There is no install step and no dependency resolution; the file is the application.
          <pre><code>chmod +x figcraft-0.9.0-linux-x86_64.AppImage
./figcraft-0.9.0-linux-x86_64.AppImage</code></pre>
          The AppImage bundles the CLI too, so automation works without a second download:
          <pre><code>./figcraft-0.9.0-linux-x86_64.AppImage cli info app.figcraft</code></pre>
        </li>
        <li><strong>Debian or Ubuntu: install the deb.</strong> <code>apt</code> resolves the dependencies of a local file when you give it a path.
          <pre><code>sudo apt install ./figcraft-0.9.0-linux-x86_64.deb</code></pre>
        </li>
        <li><strong>Fedora or RHEL: install the rpm.</strong>
          <pre><code>sudo dnf install ./figcraft-0.9.0-linux-x86_64.rpm</code></pre>
        </li>
        <li><strong>Arch: install the Arch package.</strong>
          <pre><code>sudo pacman -U figcraft-0.9.0-linux-x86_64.pkg.tar.zst</code></pre>
        </li>
        <li><strong>Flatpak, if you already run Flatpak.</strong>
          <pre><code>flatpak install ./figcraft-0.9.0-linux-x86_64.flatpak</code></pre>
        </li>
        <li><strong>Tarball: unpack and run the binary.</strong> This is also the FreeBSD path; check what the archive unpacks into before assuming the binary is in the current directory.
          <pre><code>tar -xzf figcraft-0.9.0-linux-x86_64.tar.gz
./figcraft</code></pre>
        </li>
        <li><strong>Prefer building it?</strong> You need a Rust toolchain, <code>git</code>, and <code>craft-fonts</code> cloned beside the project. A missing <code>craft-fonts</code> checkout can fall back to another font silently, so do not skip it.
          <pre><code>git clone https://github.com/storytold/figcraft
cd figcraft
git clone https://github.com/storytold/craft-fonts ../craft-fonts
cargo run --release -p figcraft</code></pre>
        </li>
      </ol>
    </section>
    <section>
      <h2>The FreeBSD caveat</h2>
      <p>FreeBSD gets a single <code>.tar.gz</code> for x86_64 and nothing else. The aarch64 FreeBSD build was dropped in v0.9.0: it could not finish inside the CI job's 5-hour limit, which is an infrastructure constraint rather than a statement about the code. If you need FreeBSD on ARM, building from source is the route, and it is not a supported artifact of this release. Everything else on this page is Linux-only and does not apply.</p>
    </section>
    <section>
      <h2>What can go wrong</h2>
      <ul class="list">
        <li><strong>The AppImage opens and immediately exits</strong><span>Usually the wrong architecture — aarch64 on x86_64 or the reverse. Check the filename against <code>uname -m</code>.</span></li>
        <li><strong>There is no AppImage for riscv64</strong><span>True for v0.9.0: that architecture ships deb, rpm and tarball only. Use the tarball.</span></li>
        <li><strong>Text renders in the wrong face</strong><span>Fonts come from the machine, and a missing family falls back silently (<a href="https://github.com/storytold/figcraft/issues/752" rel="noopener">#752</a>). Install the families the document names.</span></li>
        <li><strong>The whole interface is tiny</strong><span>A 1440p scaling problem (<a href="https://github.com/storytold/figcraft/issues/540" rel="noopener">#540</a>), addressed by the interface-size preference added under <a href="https://github.com/storytold/figcraft/issues/818" rel="noopener">#818</a>. Check that before reinstalling anything.</span></li>
        <li><strong>You installed a package and the CLI is missing</strong><span>The AppImage bundles it as a <code>cli</code> subcommand; the deb, rpm, flatpak and Arch packages are not documented as doing so. Build <code>figcraft-cli</code> separately if you need it there.</span></li>
      </ul>
      <p class="note">Unverified: distro-specific runtime dependencies for the deb, rpm and flatpak, and whether <code>pacman -U</code> upgrades cleanly over a previous version. The filenames, the format matrix and the FreeBSD caveat are checked against the v0.9.0 release assets.</p>
    </section>`,
    faq: [
      {
        q: 'How do I run FigCraft on Linux without installing it?',
        a: 'Download the AppImage for your architecture, <code>chmod +x</code> it, and run it. There is no system-wide install step and no dependency resolution; the single file is the application.'
      },
      {
        q: 'Which Linux packages does FigCraft ship?',
        a: 'For x86_64 and aarch64: AppImage, deb, rpm, flatpak, Arch package and tarball. For riscv64: deb, rpm and tarball only. All of them come from the same CI run on the GitHub release page.'
      },
      {
        q: 'Is there a FreeBSD build for ARM?',
        a: 'Not in v0.9.0. FreeBSD is x86_64 only; the aarch64 build was dropped because it could not build inside the 5-hour CI limit. Building from source is the only route on ARM.'
      },
      {
        q: 'Does the AppImage include the CLI?',
        a: 'Yes. Running the AppImage with the <code>cli</code> subcommand executes <code>figcraft-cli</code>, so <code>./figcraft-0.9.0-linux-x86_64.AppImage cli info app.figcraft</code> works without a separate build.'
      },
      {
        q: 'Do I need a Rust toolchain to install FigCraft?',
        a: 'No, not for the prebuilt packages. You need a Rust toolchain, git and the separate <code>craft-fonts</code> checkout only if you build the desktop app from source.'
      }
    ],
    related: ['learn/cli-automation/', 'learn/export-svg/', 'install/', 'issues/'],
    crumbs: [
      { name: 'Learn', path: 'learn/' },
      { name: 'Install on Linux', path: 'learn/install-linux/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  /* ------------------------------------------------------ migrate from Figma */
  {
    path: 'learn/migrate-from-figma/',
    group: 'learn',
    type: 'guide',
    title: 'Migrating from Figma to FigCraft: What Survives',
    description:
      'A realistic Figma to FigCraft migration: import the .fig first, rebuild what breaks, and expect font, variable and component-override losses. No team cloud yet.',
    h1: 'Migrating from Figma to FigCraft',
    eyebrow: 'Guide',
    lede:
      'The import gets you a document. It does not get you a working design system. This is the order that wastes the least time, and the four places the damage usually lands.',
    reading: '8 min',
    body: `<section class="prose">
      <h2>Set the expectation first</h2>
      <p>Figma is a mature hosted product with real-time team collaboration and a plugin ecosystem. FigCraft is an open-source Rust app at about 49% parity by its own estimate, offline-first, with collaboration as a preview. A migration is therefore not a switch; it is a re-platforming with a known finishing cost.</p>
      <p>Nothing here depends on the hosted side. If your team currently lives in Figma comments, libraries and multiplayer, no part of FigCraft replaces that yet: live sessions have no accounts, teams or cloud, and the optional public server is not end-to-end encrypted.</p>
    </section>
    <section>
      <h2>Step by step</h2>
      <ol class="steps">
        <li><strong>Inventory what you actually use, and build the CLI.</strong> Count components, variants, variables and modes, and list the fonts. This list is the migration's work breakdown, and it is cheaper to make it before the import than after.
          <pre><code>cargo build --release -p figcraft-cli</code></pre>
        </li>
        <li><strong>Start with the smallest file that is still representative.</strong> A one-screen marketing page tells you more per minute than a 400-frame product file. Keep the original <code>.fig</code> and a checksum.
          <pre><code>cp marketing.fig marketing.fig.keep
shasum -a 256 marketing.fig.keep   # sha256sum on Linux</code></pre>
        </li>
        <li><strong>Read the import before you open it.</strong>
          <pre><code>./target/release/figcraft-cli info marketing.fig --json &gt; import.json</code></pre>
          Missing fonts and repairs surface here, plus a <code>note:</code> line for each thing the importer could not bring in — though not for everything it drops, which is <a href="https://github.com/storytold/figcraft/issues/467" rel="noopener">#467</a>. If this hangs on a large file, that is <a href="https://github.com/storytold/figcraft/issues/574" rel="noopener">#574</a>, and the umbrella is <a href="https://github.com/storytold/figcraft/issues/321" rel="noopener">#321</a>.
        </li>
        <li><strong>Convert and own a native file immediately.</strong>
          <pre><code>./target/release/figcraft-cli convert marketing.fig marketing.figcraft</code></pre>
        </li>
        <li><strong>Rebuild variables and modes before you touch layout.</strong> Colours, spacing and radii as variables with Light and Dark modes are the part that keeps every later screen cheap. Audit the variable panel against your Figma inventory rather than assuming a one-to-one mapping: the import does not report everything it drops (<a href="https://github.com/storytold/figcraft/issues/467" rel="noopener">#467</a>).</li>
        <li><strong>Rebuild components, then instances, then overrides.</strong> In this order: a component set without its overrides is usable, while 200 instances pointing at nothing are not. Expect the instance-swap overrides to be gone (<a href="https://github.com/storytold/figcraft/issues/464" rel="noopener">#464</a>).</li>
        <li><strong>Fix fonts deliberately.</strong> Install the families on the machine, or load them into a session with <code>text.loadFont</code>. Text whose font is missing is laid out in a fallback, so every measurement you take before installing the font is wrong.</li>
        <li><strong>Re-create prototype flows.</strong> Connections, triggers and transitions exist in FigCraft, but treat imported prototype data as something to verify link by link. A flow that looks connected in the layers panel is not proof that the trigger survived.</li>
        <li><strong>Decide what stays in Figma.</strong> Comments, multiplayer review and plugin-driven workflows have no equivalent here. Splitting the work — design in FigCraft, review elsewhere — is a legitimate end state, and more honest than a half-finished all-in migration.</li>
      </ol>
    </section>
    <section>
      <h2>What survives, what usually breaks</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Area</th><th>Realistic outcome</th></tr></thead>
          <tbody>
            <tr><td>Frames, shapes, text, images</td><td>Usually arrives; text needs the right fonts to look right</td></tr>
            <tr><td>Auto layout</td><td>Often arrives; grid auto layout loses tracks and cell anchors (<a href="https://github.com/storytold/figcraft/issues/465" rel="noopener">#465</a>)</td></tr>
            <tr><td>Components and variants</td><td>Imported, but overrides on swapped instances fall back to the main default (<a href="https://github.com/storytold/figcraft/issues/464" rel="noopener">#464</a>)</td></tr>
            <tr><td>Variables, modes, aliases</td><td>Supported in FigCraft, but expect to rebuild tables rather than trust the import</td></tr>
            <tr><td>Fonts</td><td>The usual casualty: missing families fall back silently (<a href="https://github.com/storytold/figcraft/issues/752" rel="noopener">#752</a>)</td></tr>
            <tr><td>Prototype flows</td><td>Verify each link; do not assume the trigger survived</td></tr>
            <tr><td>Comments, teams, plugins</td><td>Not replaced by anything in FigCraft today</td></tr>
          </tbody>
        </table>
      </div>
      <p>The import reports less than it should: <a href="https://github.com/storytold/figcraft/issues/467" rel="noopener">#467</a> covers the case where data is dropped without a warning. That is the reason this guide keeps saying "check", and the reason the report from step 3 is worth keeping.</p>
    </section>
    <section>
      <h2>What can go wrong</h2>
      <ul class="list">
        <li><strong>The import never finishes</strong><span>Large-file import (<a href="https://github.com/storytold/figcraft/issues/574" rel="noopener">#574</a>, umbrella <a href="https://github.com/storytold/figcraft/issues/321" rel="noopener">#321</a>). Split the file by page or by frame before retrying.</span></li>
        <li><strong>Every instance looks right until you swap one</strong><span>Swap overrides are dropped (<a href="https://github.com/storytold/figcraft/issues/464" rel="noopener">#464</a>). Re-apply overrides per instance and spot-check a sample.</span></li>
        <li><strong>Your grid layouts collapse on the first edit</strong><span>Grid tracks did not import (<a href="https://github.com/storytold/figcraft/issues/465" rel="noopener">#465</a>). Rebuild the track definition once per frame.</span></li>
        <li><strong>Type is a few pixels off everywhere</strong><span>A missing font was substituted (<a href="https://github.com/storytold/figcraft/issues/752" rel="noopener">#752</a>). Install it and re-check, since auto layout will have sized around the wrong metrics.</span></li>
        <li><strong>A teammate cannot comment or co-edit</strong><span>Not a bug: no accounts, teams or cloud. Self-host <code>figcraft-server</code> for a live session, or keep review in another tool.</span></li>
      </ul>
      <p class="note">Unverified: the percentage of any real file that survives, and how long a rebuild takes. Both are file-specific. This page states the failure modes the tracker documents and does not promise that everything else is safe.</p>
    </section>`,
    faq: [
      {
        q: 'Can I open my Figma files in FigCraft?',
        a: 'Yes, through best-effort .fig import, or by exporting frames as SVG and importing those. Complex files import partially: grid auto layout, instance-swap overrides and missing fonts are the documented casualties.'
      },
      {
        q: 'What breaks most often in a Figma migration?',
        a: 'Fonts first, because a missing family is substituted and everything measured around it shifts. Then component overrides on swapped instances, grid auto-layout tracks, and prototype triggers. Rebuild variables and components in that order to contain the damage.'
      },
      {
        q: 'Can FigCraft replace Figma for a team?',
        a: 'Not today. There are no accounts, teams or cloud, live sessions are a preview, and the optional public collaboration server is not end-to-end encrypted. Solo work on local files, or a team that splits review elsewhere, is the realistic fit.'
      },
      {
        q: 'Can I go back to Figma afterwards?',
        a: 'Exporting .fig exists and is labelled experimental. Do not plan a round trip: keep the original .fig, and treat FigCraft as a one-way destination for the work you move.'
      },
      {
        q: 'How do I keep my design tokens?',
        a: 'Rebuild them as FigCraft variables with modes and aliases, then bind the layers. The concept maps, but the table is worth rebuilding by hand rather than trusting an import that does not report everything it dropped.'
      }
    ],
    related: ['learn/open-fig-file/', 'learn/offline-design/', 'vs-figma/', 'issues/'],
    crumbs: [
      { name: 'Learn', path: 'learn/' },
      { name: 'Migrate from Figma', path: 'learn/migrate-from-figma/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  /* -------------------------------------------------------------- glossary */
  {
    path: 'glossary/',
    group: 'learn',
    type: 'guide',
    title: 'Figma and Design-Tool Glossary for FigCraft Users',
    description:
      'Twenty-two terms that decide whether a Figma file survives in FigCraft: auto layout, variables and modes, vector networks, design tokens, MCP, WASM, OKLCH and more.',
    h1: 'Glossary of design-tool terms',
    eyebrow: 'Glossary',
    lede:
      'The vocabulary that makes the difference between "it imported" and "it still works" — written for someone moving a real file between tools.',
    reading: '7 min',
    body: `<section class="prose">
      <h2>How to read this list</h2>
      <p>These are definitions in the sense a working designer needs, not dictionary entries: each one says what the thing is and where it bites when a file moves between Figma and FigCraft. Where a term has a specific meaning in FigCraft's own documentation, the definition follows that usage.</p>
      <p>Two entries near the end — <code>.figcraft</code> and <code>.fig</code> — are the ones to read first if you are mid-migration, because they define what you actually own. The rest run from structure to styling to handoff to the web platform, rather than alphabetically. If you only want the task, the guides on <a href="/learn/open-fig-file/">opening a .fig file</a> and <a href="/learn/migrate-from-figma/">migrating from Figma</a> put these words to work.</p>
    </section>
    <section>
      <h2>The terms</h2>
      <div class="grid two">
        <div class="card"><h3>Auto layout</h3><p>A frame that positions its children by rules — direction, gap, padding, alignment, Hug/Fill/Fixed sizing — instead of by free coordinates. It is the first thing to check after an import, because children of an auto-layout frame are placed by the layout, not by x/y.</p></div>
        <div class="card"><h3>Component</h3><p>A reusable master layer. Editing the component updates its instances; FigCraft supports components, sets, properties and detaching, and the engine treats all of it as ordinary commands.</p></div>
        <div class="card"><h3>Instance</h3><p>A copy linked to a component. It inherits the master's properties and can carry overrides of its own. Overrides on swapped instances are a known import casualty, so verify them by hand.</p></div>
        <div class="card"><h3>Variant</h3><p>One named state of a component — size, tone, state — selected through properties rather than by swapping files. Variants live inside a component set and are addressed by property values.</p></div>
        <div class="card"><h3>Component set</h3><p>The container that groups variants of one component and defines the properties used to switch between them. A set is the unit you publish and the unit a designer picks from.</p></div>
        <div class="card"><h3>Variable</h3><p>A named value — colour, number, string, boolean — that layers bind to instead of holding a literal. Change the variable and every bound field follows, which is what makes themes and density switches practical.</p></div>
        <div class="card"><h3>Mode</h3><p>One value set of a variable collection: Light and Dark, or Comfortable and Compact. A layer follows the mode in force; the first mode in a collection is the default.</p></div>
        <div class="card"><h3>Alias</h3><p>A variable whose value is another variable rather than a literal. Aliases build the token hierarchy — brand blue to surface to button — so a change at the top propagates without touching the middle.</p></div>
        <div class="card"><h3>Vector network</h3><p>A vector shape stored as connected points and segments rather than a fixed path. It allows editing any segment without re-drawing the shape, and it is what makes boolean operations editable afterwards.</p></div>
        <div class="card"><h3>Boolean group</h3><p>A group that combines shapes with union, subtract, intersect or exclude, keeping the operands editable. Unlike a flattened path, the inputs stay selectable and the result stays live.</p></div>
        <div class="card"><h3>Constraint</h3><p>A rule for how a child moves or resizes when its frame resizes — pin to an edge, centre, scale. Constraints apply to free-positioned children; auto-layout children are governed by the flow instead.</p></div>
        <div class="card"><h3>Prototype flow</h3><p>A named starting point plus the connections reachable from it: triggers, actions and transitions. Flows are what the presentation view plays, and what a reviewer clicks through.</p></div>
        <div class="card"><h3>Dev Mode</h3><p>The developer-facing view of a design: measurements, spacing, annotations and generated code, with a ready-for-dev status per frame. In FigCraft the equivalent surface is Inspect, fed by the same engine.</p></div>
        <div class="card"><h3>Inspect</h3><p>FigCraft's handoff panel. It reports layout, typography, fills, strokes and effects with their style and variable names, and generates CSS, HTML, React, Leptos, SwiftUI or Compose for a selection.</p></div>
        <div class="card"><h3>Design token</h3><p>A named design decision — colour, spacing, radius, type step — stored once and referenced everywhere. Tokens are a convention; variables are the mechanism FigCraft provides for them.</p></div>
        <div class="card"><h3>MCP</h3><p>The Model Context Protocol, a standard way for an AI agent to call tools. FigCraft's MCP server exposes the same 400+ commands as the UI, so an agent can create, edit, inspect and export without a private API.</p></div>
        <div class="card"><h3>WASM</h3><p>WebAssembly: the compilation target that lets the Rust engine run in a browser tab. FigCraft's web build is the same editor compiled to WASM, not a reimplementation in JavaScript.</p></div>
        <div class="card"><h3>DPR</h3><p>Device pixel ratio: how many physical pixels back one CSS pixel. A 2x export is not a DPR setting; it is a scale factor applied at export time, which is why a 2x PNG and a zoomed canvas are different things.</p></div>
        <div class="card"><h3>WCAG contrast</h3><p>The contrast ratio between text and its background, with 4.5:1 as the usual AA threshold for body text and 3:1 for large text. It is measurable before export, which is the point of a contrast checker.</p></div>
        <div class="card"><h3>OKLCH</h3><p>A perceptual colour space with lightness, chroma and hue. Editing in it keeps lightness steps visually even, unlike HSL, where equal lightness numbers look unequal. Useful for generating token ramps.</p></div>
        <div class="card"><h3>.figcraft</h3><p>FigCraft's native document: an archive stored on disk, holding the document, its styles, variables and images. It is what you own — no account, no server, no telemetry — and the format every script and export reads.</p></div>
        <div class="card"><h3>.fig</h3><p>Figma's document format. FigCraft imports it on a best-effort basis and large files are a known failure mode, so import a copy, save a <code>.figcraft</code>, and keep the original.</p></div>
      </div>
      <p class="note">Where a definition is a matter of another product's current behaviour — Figma's, or a browser's — treat it as context rather than a specification. The FigCraft-specific entries follow the project's documentation for v0.9.0.</p>
    </section>
    <section>
      <h2>Words that are easy to mix up</h2>
      <ul class="list">
        <li><strong>Variant vs mode</strong><span>A variant is a state of one component, chosen per instance. A mode is a value set of a variable collection, applied across many layers at once.</span></li>
        <li><strong>Alias vs token</strong><span>A token is the idea; an alias is how one token points at another inside the tool. You can have tokens without aliases, but not a hierarchy without them.</span></li>
        <li><strong>Component vs instance</strong><span>The component is the source of truth; the instance is a reference to it. Editing an instance's override does not edit the component.</span></li>
        <li><strong>Constraint vs auto layout</strong><span>Constraints describe how a child reacts to its frame resizing. Auto layout decides where the child sits in the first place; the two do not apply to the same child at the same time.</span></li>
      </ul>
      <p>For the measurements these terms imply, the <a href="/tools/screen-sizes/">screen-sizes reference</a> and the <a href="/tools/contrast-checker/">contrast checker</a> run in the browser, and the <a href="/templates/">templates</a> show the structure in practice.</p>
    </section>`,
    faq: [
      {
        q: 'What is the difference between a variable and a design token?',
        a: 'A token is the idea — a named design decision stored once. A variable is the mechanism a tool provides to implement it: a typed, named value that layers bind to, with modes and aliases for theming and hierarchy.'
      },
      {
        q: 'What is a variant in Figma and FigCraft terms?',
        a: 'One named state of a component inside a component set, selected through properties rather than by switching files. A component set groups the variants and defines the properties used to pick between them.'
      },
      {
        q: 'What does .figcraft contain?',
        a: 'The native document: an archive on disk with the layer tree, styles, variables and images. It needs no account or server, and it is the format the CLI, the control channel and the MCP server read and write.'
      },
      {
        q: 'What is MCP and why does a design tool have it?',
        a: 'The Model Context Protocol is a standard interface for AI agents to call tools. FigCraft exposes its existing 400+ command layer through it, so an agent uses the same commands as the menus instead of a separate, reduced API.'
      },
      {
        q: 'Why do designers care about OKLCH?',
        a: 'Because it is perceptually even: equal lightness steps look equal, which makes generated colour ramps and dark-mode palettes predictable. HSL does not behave that way, which is why hand-tuned ramps drift.'
      }
    ],
    terms: [
      { term: 'Auto layout', def: 'A frame that positions its children by rules — direction, gap, padding, alignment and Hug/Fill/Fixed sizing — instead of free coordinates. Children of an auto-layout frame are placed by the layout, not by x/y, so it is the first thing to check after an import.' },
      { term: 'Component', def: 'A reusable master layer. Editing the component updates its instances; FigCraft supports components, sets, properties and detaching, and the engine treats all of it as ordinary commands.' },
      { term: 'Instance', def: 'A copy linked to a component. It inherits the master\'s properties and can carry overrides of its own. Overrides on swapped instances are a known import casualty, so verify them by hand.' },
      { term: 'Variant', def: 'One named state of a component — size, tone, state — selected through properties rather than by swapping files. Variants live inside a component set and are addressed by property values.' },
      { term: 'Component set', def: 'The container that groups variants of one component and defines the properties used to switch between them. A set is the unit you publish and the unit a designer picks from.' },
      { term: 'Variable', def: 'A named value — colour, number, string, boolean — that layers bind to instead of holding a literal. Change the variable and every bound field follows, which is what makes themes and density switches practical.' },
      { term: 'Mode', def: 'One value set of a variable collection, such as Light and Dark or Comfortable and Compact. A layer follows the mode in force; the first mode in a collection is the default.' },
      { term: 'Alias', def: 'A variable whose value is another variable rather than a literal. Aliases build the token hierarchy — brand blue to surface to button — so a change at the top propagates without touching the middle.' },
      { term: 'Vector network', def: 'A vector shape stored as connected points and segments rather than a fixed path. It allows editing any segment without re-drawing the shape, and it is what makes boolean operations editable afterwards.' },
      { term: 'Boolean group', def: 'A group that combines shapes with union, subtract, intersect or exclude while keeping the operands editable. Unlike a flattened path, the inputs stay selectable and the result stays live.' },
      { term: 'Constraint', def: 'A rule for how a child moves or resizes when its frame resizes — pin to an edge, centre or scale. Constraints apply to free-positioned children; auto-layout children are governed by the flow instead.' },
      { term: 'Prototype flow', def: 'A named starting point plus the connections reachable from it: triggers, actions and transitions. Flows are what the presentation view plays and what a reviewer clicks through.' },
      { term: 'Dev Mode', def: 'The developer-facing view of a design: measurements, spacing, annotations and generated code, with a ready-for-dev status per frame. In FigCraft the equivalent surface is Inspect, fed by the same engine.' },
      { term: 'Inspect', def: 'FigCraft\'s handoff panel. It reports layout, typography, fills, strokes and effects with their style and variable names, and generates CSS, HTML, React, Leptos, SwiftUI or Compose for a selection.' },
      { term: 'Design token', def: 'A named design decision — colour, spacing, radius, type step — stored once and referenced everywhere. Tokens are a convention; variables are the mechanism FigCraft provides for them.' },
      { term: 'MCP', def: 'The Model Context Protocol, a standard way for an AI agent to call tools. FigCraft\'s MCP server exposes the same 400+ commands as the UI, so an agent can create, edit, inspect and export without a private API.' },
      { term: 'WASM', def: 'WebAssembly: the compilation target that lets the Rust engine run in a browser tab. FigCraft\'s web build is the same editor compiled to WASM, not a reimplementation in JavaScript.' },
      { term: 'DPR', def: 'Device pixel ratio: how many physical pixels back one CSS pixel. A 2x export is not a DPR setting but a scale factor applied at export time, which is why a 2x PNG and a zoomed canvas are different things.' },
      { term: 'WCAG contrast', def: 'The contrast ratio between text and its background, with 4.5:1 as the usual AA threshold for body text and 3:1 for large text. It is measurable before export, which is the point of a contrast checker.' },
      { term: 'OKLCH', def: 'A perceptual colour space with lightness, chroma and hue. Editing in it keeps lightness steps visually even, unlike HSL, where equal lightness numbers look unequal. Useful for generating token ramps.' },
      { term: '.figcraft', def: 'FigCraft\'s native document: an archive stored on disk, holding the document, its styles, variables and images. It is what you own — no account, no server, no telemetry — and the format every script and export reads.' },
      { term: '.fig', def: 'Figma\'s document format. FigCraft imports it on a best-effort basis and large files are a known failure mode, so import a copy, save a .figcraft, and keep the original.' }
    ],
    related: ['learn/', 'learn/open-fig-file/', 'learn/export-svg/', 'issues/'],
    crumbs: [
      { name: 'Learn', path: 'learn/' },
      { name: 'Glossary', path: 'glossary/' }
    ],
    priority: '0.7',
    changefreq: 'monthly',
    updated: '2026-10-22'
  }
];
