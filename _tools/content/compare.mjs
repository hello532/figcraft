// Comparison, pricing and Linux pages for the FigCraft Guide.
// Every price and feature claim is taken from vendor pages checked 2026-10-22
// (figma.com/pricing, penpot.app/pricing, sketch.com/pricing) or from the
// FigCraft project itself. Gaps are labelled "Unverified" rather than guessed.

export const PAGES = [
  {
    path: 'pricing/',
    group: 'compare',
    type: 'pricing',
    title: 'FigCraft, Figma, Penpot and Sketch pricing: what free costs',
    description:
      'What free gets you from FigCraft, Figma Starter, Penpot Professional and Sketch, plus per-seat arithmetic at 1, 5 and 20 seats on annual billing.',
    h1: 'What free actually costs: FigCraft, Figma, Penpot and Sketch',
    eyebrow: 'Pricing',
    lede:
      'Four products, four definitions of free — and four different invoices once a team grows past one person. The arithmetic below is the whole point.',
    reading: '8 min',
    body: `<section>
  <h2>Four products, four definitions of free</h2>
  <div class="prose">
    <p>Free means four things here. FigCraft is free because the source is open and you run the binary. Figma Starter is free because the vendor rents a drafts-only workspace and charges for seats. Penpot Professional is $0 with caps on members, storage and history; Unlimited removes them. Sketch is not free beyond a trial, and its $120 one-time Mac licence excludes collaboration.</p>
    <p>Everything below is arithmetic on published list prices checked 2026-10-22, using annual billing. Taxes and add-ons are excluded. The aim is to show where the meter starts running.</p>
  </div>
</section>

<section>
  <h2>The four free offers, side by side</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Free option</th><th>What you get for $0</th><th>What it withholds</th></tr></thead>
      <tbody>
        <tr><td><strong>FigCraft</strong></td><td>Whole app, MIT OR Apache-2.0 source, no account, no telemetry</td><td>Support, hosting, team accounts; early alpha</td></tr>
        <tr><td><strong>Figma Starter</strong></td><td>Unlimited drafts; 150 AI credits a day, 500 a month</td><td>Team and dev features need paid seats; free viewers inspect CSS on paid plans</td></tr>
        <tr><td><strong>Penpot Professional</strong></td><td>Free and fully featured: 8 members, unlimited viewers, 10GB, 7 days of history</td><td>More members, storage or history, which need Unlimited</td></tr>
        <tr><td><strong>Sketch</strong></td><td>No permanent free tier in the source we checked; trial terms unverified</td><td>Everything, until you pay $12, $24 or $44 per editor a month, or $120 once</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">A free Figma seat is not a free team: unlimited drafts let one designer work indefinitely, but review, libraries and handoff are what paid tiers sell. Penpot limits the workspace by headcount, storage and history instead.</p>
</section>

<section>
  <h2>The seat arithmetic</h2>
  <p>Per seat, per month, annual billing. Multiply before you compare; the totals diverge faster than the unit prices suggest.</p>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Plan</th><th>1 seat</th><th>5 seats</th><th>20 seats</th></tr></thead>
      <tbody>
        <tr><td>Figma Professional, Full</td><td>1 × $16 = $16</td><td>5 × $16 = $80</td><td>20 × $16 = $320</td></tr>
        <tr><td>Figma Organization, Full</td><td>1 × $55 = $55</td><td>5 × $55 = $275</td><td>20 × $55 = $1,100</td></tr>
        <tr><td>Figma Enterprise, Full</td><td>1 × $90 = $90</td><td>5 × $90 = $450</td><td>20 × $90 = $1,800</td></tr>
        <tr><td>Penpot Professional</td><td>1 × $0 = $0</td><td>$0, while inside 8 members</td><td>Not offered on this tier</td></tr>
        <tr><td>Penpot Unlimited</td><td>1 × $7 = $7</td><td>5 × $7 = $35</td><td>20 × $7 = $140</td></tr>
        <tr><td>Sketch Standard</td><td>1 × $12 = $12</td><td>5 × $12 = $60</td><td>20 × $12 = $240</td></tr>
        <tr><td>Sketch Mac-only licence</td><td>$120 once</td><td>5 × $120 = $600 once</td><td>20 × $120 = $2,400 once</td></tr>
        <tr><td>FigCraft</td><td>$0</td><td>$0</td><td>$0</td></tr>
      </tbody>
    </table>
  </div>
  <div class="prose">
    <p>Five people, three totals: Figma Full is 5 × $16 = $80 a month, Penpot Unlimited is 5 × $7 = $35, Sketch Standard is 5 × $12 = $60. Five people inside Penpot's eight-member free tier pay nothing, and any number of people on FigCraft pay nothing too. Penpot Unlimited is capped at $175 a month per team, which 25 editors reach at $7 each. Figma charges per seat at every level — twenty Full seats on Organization are $1,100 — and add-ons sit on top, so every figure is a floor. Dev and Collab seats cost $12 and $3 on Professional.</p>
  </div>
</section>

<section>
  <h2>What each free tier quietly excludes</h2>
  <ul class="list">
    <li><strong>Figma Starter: the handoff loop</strong><span>Unlimited drafts make solo work free, but free viewers inspect CSS on paid plans and team features sit behind seats. The boundary is collaboration.</span></li>
    <li><strong>Penpot Professional: headcount, storage, time</strong><span>Eight members, 10GB, seven days of history. A bad edit found on day eight is outside the window.</span></li>
    <li><strong>Sketch: permanence</strong><span>The $120 licence is a year of updates and no collaboration; trial terms were not verified.</span></li>
    <li><strong>FigCraft: everything operational</strong><span>No hosted service, support contract or team accounts. You supply the machine, updates and backups.</span></li>
  </ul>
</section>

<section>
  <h2>The invoice FigCraft never sends</h2>
  <p>FigCraft's price is zero and the cost is time. Fonts must sit in a sibling directory named <code>../craft-fonts</code> (<a href="https://github.com/storytold/figcraft/issues/821" rel="noopener">#821</a>), macOS 27 on M1 crashes at launch (<a href="https://github.com/storytold/figcraft/issues/781" rel="noopener">#781</a>), interface scale breaks at 1440p (<a href="https://github.com/storytold/figcraft/issues/540" rel="noopener">#540</a>, <a href="https://github.com/storytold/figcraft/issues/818" rel="noopener">#818</a>), and FreeBSD aarch64 was dropped in v0.9.0. None of that costs money; all of it costs afternoons.</p>
  <p>Run it the other way: $16 buys a mature editor with multiplayer, permissions and plugins; $7 buys a browser workspace with team features. FigCraft buys ownership, offline work, an inspectable engine and a CLI and MCP surface past 400 commands, and asks for tolerance of alpha software. <a href="/issues/">Known issues</a> is the honest test.</p>
</section>

<section>
  <h2>The honest conclusion</h2>
  <div class="prose">
    <p>If a team co-edits this quarter, the cheapest serious answer is Penpot Professional at $0 for up to eight members, then $7 per editor with a $175 ceiling. If maturity, plugins and hiring matter more, Figma's $16 seat is expensive but not overpriced. For one designer who never shares a file, $120 once for Sketch is the cheapest option that feels like a purchase.</p>
    <p>FigCraft is free in the licence sense and self-run in the operational sense. It is not production-ready for a team: multiplayer is a preview, the public collaboration server is not end-to-end encrypted, and parity is around half by the project's own estimate. Use it for local, offline, scriptable work on your own disk, and keep a paid seat elsewhere for the collaboration you cannot yet do without.</p>
  </div>
  <p class="note">Prices checked 2026-10-22 from the vendors' own pricing pages; verify before you buy. This site is independent and not affiliated with Figma, Penpot, Sketch or ArtCraft.</p>
  <ul>
    <li><a href="/vs-figma/">FigCraft vs Figma, feature by feature</a></li>
    <li><a href="/vs-penpot/">FigCraft vs Penpot</a> and <a href="/vs-sketch/">FigCraft vs Sketch</a></li>
    <li><a href="/free-figma-alternative/">Three routes that stay genuinely free</a></li>
    <li><a href="/open-source-figma-alternative/">What the open-source licences actually permit</a></li>
  </ul>
</section>`,
    faq: [
      {
        q: 'Is FigCraft really free?',
        a: 'Yes. FigCraft is open source under MIT OR Apache-2.0, runs without an account and sends no telemetry. There is no paid tier to upgrade to. The real cost is operational: you build or download it, manage fonts, take your own backups, and accept early-alpha bugs. The project estimates feature parity at roughly 49%.'
      },
      {
        q: 'What does Penpot cost for a team of five?',
        a: 'Nothing on the Professional tier, which the vendor describes as free and fully featured with 8 team members, unlimited viewers, 10GB of storage and 7 days of version history. Five editors fit inside that. Past eight members, Unlimited is $7 per editor per month, so five editors would be 5 × $7 = $35; the plan is capped at $175 per month per team.'
      },
      {
        q: 'How much does Figma cost for five Full seats?',
        a: '5 × $16 = $80 per month on Professional with annual billing. The same five seats on Organization are 5 × $55 = $275, and on Enterprise 5 × $90 = $450. Every tier is charged per seat and add-ons are extra, so those totals are a floor. Dev seats are $12 and Collab seats $3 on Professional.'
      },
      {
        q: 'Is there a free version of Sketch?',
        a: 'Not a permanent one that we could verify. Sketch sells Standard at $12, Professional at $24 and Enterprise at $44 per editor per month, billed yearly, plus a $120 one-time Mac-only licence that includes one year of updates and no collaboration. A trial exists but its length and limits were not confirmed from the pricing page we checked.'
      },
      {
        q: 'Do Figma viewers need a paid seat?',
        a: 'Free viewers can inspect and copy CSS on paid plans, so reviewing does not require a Full seat. What the free Starter tier withholds is the team workspace itself: unlimited drafts are free, but shared libraries, team permissions and the dev handoff loop are what the paid seats provide.'
      },
      {
        q: 'What is the hidden cost of FigCraft?',
        a: 'Time, not money. Fonts must live in a sibling directory named ../craft-fonts (issue #821 is open), macOS 27 on M1 has a launch crash (#781), Windows has a DX12 blur problem and 1440p interface scaling is broken (#540, #818). Multiplayer is a preview and the public server is not end-to-end encrypted, so a team still needs another tool.'
      }
    ],
    related: ['vs-figma/', 'vs-penpot/', 'free-figma-alternative/', 'open-source-figma-alternative/'],
    crumbs: [
      { name: 'Compare', path: 'alternatives/' },
      { name: 'Pricing', path: 'pricing/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  {
    path: 'vs-penpot/',
    group: 'compare',
    type: 'compare',
    title: 'FigCraft vs Penpot: local Rust files or a self-hosted workspace',
    description:
      'FigCraft keeps files on disk in Rust; Penpot runs a browser workspace you can self-host. Licence, hosting, parity and price compared, checked 2026-10-22.',
    h1: 'FigCraft vs Penpot: local files or a hosted workspace',
    eyebrow: 'Comparison',
    lede:
      'Both are open source, and they disagree about the only question that matters: where the document lives. Everything else follows from that.',
    reading: '7 min',
    body: `<section>
  <h2>Same licence family, opposite architecture</h2>
  <div class="prose">
    <p>Penpot is a web application. You open a browser, sign in to a workspace and edit a project the server holds; if you want the server to be yours, you run one. FigCraft is a native desktop program. You open a <code>.figcraft</code> file from your disk, edit it offline, and there is no account, no server and no telemetry in the loop.</p>
    <p>That difference decides most of what follows: collaboration, offline work, what a backup is, and who carries the operational risk. Where a vendor page did not settle a point, the table says so.</p>
  </div>
</section>

<section>
  <h2>The comparison that matters</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th></th><th>FigCraft</th><th>Penpot</th></tr></thead>
      <tbody>
        <tr><td>Licence</td><td>MIT OR Apache-2.0, permissive</td><td>MPL-2.0, file-level copyleft</td></tr>
        <tr><td>Platform</td><td>Native macOS, Windows, Linux, FreeBSD x86_64; WebAssembly build</td><td>Browser, web-first</td></tr>
        <tr><td>Hosting</td><td>Yours: local files, self-hosted collaboration server</td><td>Vendor cloud or self-hosted</td></tr>
        <tr><td>File format</td><td><code>.figcraft</code> files on disk</td><td>Unverified (server-side projects)</td></tr>
        <tr><td>Real-time collaboration</td><td>Preview; no accounts or permissions</td><td>Yes; members and viewers are the unit of the pricing</td></tr>
        <tr><td>Offline</td><td>Yes, by design</td><td>Unverified</td></tr>
        <tr><td>Handoff / dev mode</td><td>Inspect, annotations, ready-for-dev, CSS/HTML/React/Leptos/SwiftUI/Compose output</td><td>Unverified</td></tr>
        <tr><td>Extensibility</td><td>CLI, JSON control channel, MCP server, 400+ commands</td><td>Unverified</td></tr>
        <tr><td>Maturity</td><td>Early alpha; about 49% parity by the project's own estimate</td><td>Shipped product with paid team tiers</td></tr>
        <tr><td>Price</td><td>Free</td><td>$0 Professional; $7/editor, capped $175/team; $25/member Enterprise; $50k/yr Private Server</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Unverified means the vendor's own pricing page did not cover the point and we did not test it ourselves. We would rather show a gap than a confident guess; both products change quickly, so re-check before committing a team.</p>
</section>

<section>
  <h2>Where Penpot is ahead</h2>
  <div class="prose">
    <p>Collaboration is not a preview in Penpot; it is the product. Seats are measured in editors and viewers, and the free Professional tier includes eight members plus unlimited viewers. For two designers who need the same file this afternoon, that is the whole argument.</p>
    <p>Distribution is the second advantage. Nothing is installed, so a contractor on a locked-down laptop and a stakeholder on an iPad reach the same file with a link. Self-hosting is supported, and the vendor sells a Private Server at $50,000 a year for organisations that need it inside their own perimeter. The free tier is capped at 10GB and 7 days of history — enough to trial a migration, not enough to run a year without exports.</p>
  </div>
</section>

<section>
  <h2>Where FigCraft is ahead</h2>
  <ul class="list">
    <li><strong>The file is the document</strong><span>No account, no session, no server that can be down or repriced. A <code>.figcraft</code> file on disk can be emailed, versioned in git, or opened on a plane.</span></li>
    <li><strong>Licence terms a company can embed</strong><span>MIT OR Apache-2.0 imposes no obligation to publish modifications. MPL-2.0 keeps modified MPL-licensed files under MPL. For an internal tool the difference is academic; for a product built on top, it is not.</span></li>
    <li><strong>Automation as a first-class surface</strong><span>A CLI, a JSON control channel and an MCP server with more than 400 commands. Penpot's equivalent surface was not verified for this page, so treat the comparison as open rather than settled.</span></li>
    <li><strong>Breadth of output</strong><span>SVG, PNG, JPG, WebP and PDF export, plus handoff to CSS, HTML, React, Leptos, SwiftUI and Compose. Dev handoff is free here; in Figma it is a paid seat.</span></li>
    <li><strong>Native binaries where a browser is a poor fit</strong><span>macOS, Windows, Linux and FreeBSD, plus a WebAssembly build for when a browser is the only option.</span></li>
  </ul>
</section>

<section>
  <h2>Who should pick which</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Situation</th><th>Pick</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>Solo designer, local files, offline</td><td><strong>FigCraft</strong></td><td>Files on disk, no account, no telemetry, free.</td></tr>
        <tr><td>Three designers co-editing daily</td><td><strong>Penpot</strong></td><td>Real multiplayer today, inside the free 8-member tier.</td></tr>
        <tr><td>Team that must self-host everything</td><td><strong>Penpot</strong></td><td>Self-hosting is a supported deployment; FigCraft's server is a preview.</td></tr>
        <tr><td>Designer automating handoff or asset export</td><td><strong>FigCraft</strong></td><td>CLI, JSON channel and MCP server; code output for six targets.</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <h2>Migration, in both directions</h2>
  <p>Figma files import into FigCraft on a best-effort basis: the document renders, but features FigCraft cannot represent are dropped, and large files can fail outright (<a href="https://github.com/storytold/figcraft/issues/574" rel="noopener">#574</a>, <a href="https://github.com/storytold/figcraft/issues/321" rel="noopener">#321</a>). Penpot's Figma import path was not verified here. Migrate a small, recent file first and compare it with the original; rebuilding a live design system is usually cheaper than repairing an import.</p>
  <p>Between FigCraft and Penpot there is no import path worth relying on, because one stores projects server-side and the other stores documents as files. Treat a switch as a rebuild.</p>
  <p>The remaining objections to FigCraft are on <a href="/issues/">the known-issues list</a>: fonts need a sibling <code>../craft-fonts</code> directory (#821 is open), macOS 27 on M1 crashes on launch (#781), Windows has a DX12 blur problem, 1440p scaling is broken (#540, #818), and FreeBSD aarch64 was dropped in v0.9.0. Multiplayer is a preview and the public server is not end-to-end encrypted, so it does not replace Penpot's permissions model.</p>
</section>

<section>
  <h2>What this page does not claim</h2>
  <p>No user counts, no benchmark and no parity figure for Penpot. FigCraft's roughly 49% parity is the project's own estimate of its coverage of Figma, not a comparison against Penpot, and it should be read that way. Penpot's maturity is asserted only in the narrow sense that it ships paid team tiers; its feature set was not audited for this page.</p>
  <p class="note">Prices checked 2026-10-22 from the vendors' own pricing pages; verify before you buy. This site is independent and not affiliated with Figma, Penpot, Sketch or ArtCraft.</p>
  <p>Related: <a href="/pricing/">the full seat arithmetic</a>, <a href="/open-source-figma-alternative/">the licence comparison</a>, <a href="/figma-alternative-for-linux/">Linux options</a>, and <a href="/learn/migrate-from-figma/">the migration guide</a>.</p>
</section>`,
    faq: [
      {
        q: 'Is Penpot fully open source?',
        a: 'Penpot is open source under MPL-2.0 and is web-first and self-hostable. The paid tiers are a hosted service and support arrangement rather than a different codebase, as far as the vendor states. FigCraft takes the other route: MIT OR Apache-2.0, a native binary, and no hosted service at all.'
      },
      {
        q: 'Can FigCraft do real-time collaboration like Penpot?',
        a: 'Not at the same level. FigCraft has multiplayer as a preview, with live sessions from the app or a self-hosted server, no accounts and no permissions, and the public server is not end-to-end encrypted. Penpot treats members and viewers as the unit of its pricing, which is a fair signal that collaboration is the product rather than a preview.'
      },
      {
        q: 'Which is cheaper for a small studio?',
        a: 'Penpot Professional is $0 for up to 8 team members with 10GB of storage and 7 days of history, which covers many studios outright. Beyond that, Unlimited is $7 per editor with a $175 monthly cap, so five editors are $35 a month. FigCraft is $0 with no user limit, but you carry hosting, backups and alpha-quality software yourself.'
      },
      {
        q: 'Does FigCraft work offline?',
        a: 'Yes. It is a native application that opens .figcraft files from local disk, requires no account, and sends no telemetry, so an offline machine is a normal way to use it. Whether Penpot offers an offline mode was not verified for this page; its primary model is a browser session against a server.'
      },
      {
        q: 'Can I import a Penpot file into FigCraft?',
        a: 'There is no import path we could verify, and the architectures make one unlikely: Penpot keeps projects server-side while FigCraft works on files. Moving between them should be planned as a rebuild. Figma files are a separate case, where FigCraft offers best-effort .fig import that can lose features silently.'
      }
    ],
    related: ['pricing/', 'open-source-figma-alternative/', 'figma-alternative-for-linux/', 'vs-figma/'],
    crumbs: [
      { name: 'Compare', path: 'alternatives/' },
      { name: 'Vs Penpot', path: 'vs-penpot/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  {
    path: 'vs-sketch/',
    group: 'compare',
    type: 'compare',
    title: 'FigCraft vs Sketch: Mac-only original or cross-platform Rust',
    description:
      'Sketch is the Mac-only tool with a $120 one-time licence; FigCraft is a free Rust app on four platforms. Collaboration, files and price compared.',
    h1: 'FigCraft vs Sketch: the Mac original versus a Rust rewrite',
    eyebrow: 'Comparison',
    lede:
      'Sketch defined the modern design tool and then stayed on one operating system. FigCraft is an attempt to rebuild the same idea in Rust, on every system, as open source.',
    reading: '6 min',
    body: `<section>
  <h2>A Mac tool and a cross-platform one</h2>
  <div class="prose">
    <p>Sketch sells a native macOS application, a web app and an iPhone and iPad viewer, with three subscription tiers and a one-time Mac licence. FigCraft sells nothing: it is a Rust binary for macOS, Windows, Linux and FreeBSD x86_64, plus a WebAssembly build, under MIT OR Apache-2.0, with no account and no telemetry.</p>
    <p>The interesting comparison is not feature-for-feature. It is what each licence buys and what each one excludes. Sketch's cheapest option is a purchase; FigCraft's is a gift with maintenance attached.</p>
  </div>
</section>

<section>
  <h2>Where they differ</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th></th><th>FigCraft</th><th>Sketch</th></tr></thead>
      <tbody>
        <tr><td>Licence</td><td>MIT OR Apache-2.0, open source</td><td>Proprietary, commercial</td></tr>
        <tr><td>Platform</td><td>macOS, Windows, Linux, FreeBSD; WebAssembly</td><td>Native macOS app, web app, iPhone/iPad viewer</td></tr>
        <tr><td>Hosting</td><td>Local files; no service involved</td><td>Native Mac app plus vendor web app</td></tr>
        <tr><td>File format</td><td><code>.figcraft</code> on disk</td><td>Unverified</td></tr>
        <tr><td>Real-time collaboration</td><td>Preview; no accounts</td><td>Partial: not on the $120 licence</td></tr>
        <tr><td>Offline</td><td>Yes</td><td>Unverified</td></tr>
        <tr><td>Handoff / dev mode</td><td>Inspect, annotations, six code targets</td><td>Unverified</td></tr>
        <tr><td>Extensibility</td><td>CLI, JSON channel, MCP server, 400+ commands</td><td>Unverified</td></tr>
        <tr><td>Maturity</td><td>Early alpha; ~49% parity by its own estimate</td><td>Shipped macOS product with three paid tiers</td></tr>
        <tr><td>Price</td><td>Free</td><td>$12 / $24 / $44 per editor/mo; $120 once on Mac</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Unverified cells are points the vendor's pricing page did not settle and we did not test. The table deliberately compares what can be priced and documented, not a feature audit neither vendor publishes.</p>
</section>

<section>
  <h2>The money, at five people</h2>
  <div class="prose">
    <p>Five Sketch editors on Standard cost 5 × $12 = $60 a month, billed yearly. On Professional the same five are 5 × $24 = $120, and on Enterprise 5 × $44 = $220. The one-time alternative is 5 × $120 = $600 once, which includes a year of updates and no collaboration at all — for a team that has to share files, that licence is a dead end rather than a discount.</p>
    <p>FigCraft's arithmetic is one line: $0, at any seat count, forever, because there is no licence server to ask. The cost arrives as labour. Fonts must sit in a sibling directory named <code>../craft-fonts</code>, and issue <a href="https://github.com/storytold/figcraft/issues/821" rel="noopener">#821</a> is still open on that workflow. macOS 27 on M1 has a launch crash (<a href="https://github.com/storytold/figcraft/issues/781" rel="noopener">#781</a>), Windows has a DX12 blur problem, and interface scaling breaks at 1440p (<a href="https://github.com/storytold/figcraft/issues/540" rel="noopener">#540</a>, <a href="https://github.com/storytold/figcraft/issues/818" rel="noopener">#818</a>).</p>
    <p>One asymmetry is worth stating plainly: Sketch is macOS-only in our sources, so a studio with a Linux workstation or a Windows machine is not choosing between the two products at all. For those teams FigCraft is one of the few native options, which is the subject of <a href="/figma-alternative-for-linux/">the Linux page</a>.</p>
  </div>
</section>

<section>
  <h2>Who should pick which</h2>
  <ul class="list">
    <li><strong>One designer, one Mac, no collaborators</strong><span>Sketch's $120 licence. It is a purchase rather than a subscription, and the missing collaboration is not a loss if there is nobody to collaborate with.</span></li>
    <li><strong>A studio on mixed operating systems</strong><span>FigCraft, or a browser tool. Sketch has no Windows or Linux build in our sources, so it cannot be the shared tool for that team.</span></li>
    <li><strong>Automation and code handoff</strong><span>FigCraft. Export to SVG, PNG, JPG, WebP and PDF, and handoff to CSS, HTML, React, Leptos, SwiftUI and Compose, all scriptable through the CLI and MCP server.</span></li>
    <li><strong>A team that needs plugins and review flows today</strong><span>Neither, honestly. Sketch's ecosystem was not verified here and FigCraft has no Figma plugin compatibility; a mature tool remains the safer pick.</span></li>
  </ul>
</section>

<section>
  <h2>What is genuinely unknown</h2>
  <p>We did not benchmark Sketch and will not pretend otherwise. Its file format, offline behaviour, handoff features and extension model are outside what its pricing page states, so those rows read Unverified. The same restraint applies in the other direction: FigCraft's roughly 49% parity is the project's own estimate against Figma, not a score in a contest with Sketch, and the project calls itself early alpha. Multiplayer is a preview and the public server is not end-to-end encrypted, so neither product on this page is a recommendation for a team that has to co-edit this week.</p>
  <p class="note">Prices checked 2026-10-22 from the vendors' own pricing pages; verify before you buy. This site is independent and not affiliated with Figma, Penpot, Sketch or ArtCraft.</p>
  <p>Related: <a href="/pricing/">the full pricing page</a>, <a href="/vs-figma/">FigCraft vs Figma</a>, <a href="/vs-penpot/">FigCraft vs Penpot</a>, and <a href="/tools/contrast-checker/">the contrast checker</a> for checking exported colour tokens.</p>
</section>`,
    faq: [
      {
        q: 'Is FigCraft a drop-in replacement for Sketch?',
        a: 'No. FigCraft cannot be assumed to read Sketch files, and its parity with Figma is about 49% by the project own estimate, so parity with Sketch is not established at all. What transfers is the working model: artboards, components and local files. What does not transfer is the file itself or any plugin you relied on.'
      },
      {
        q: 'How much does Sketch cost for a small team?',
        a: 'Standard is $12 per editor per month billed yearly, so five editors are 5 × $12 = $60 a month. Professional is $24 and Enterprise $44 per editor, which makes five seats $120 and $220 respectively. The $120 one-time Mac licence is per designer, includes one year of updates, and excludes collaboration.'
      },
      {
        q: 'Can I use Sketch on Windows or Linux?',
        a: 'Not according to the sources we checked: Sketch is a native macOS app with a web app and an iPhone/iPad viewer. FigCraft ships native builds for macOS, Windows, Linux and FreeBSD x86_64, plus a WebAssembly build, which makes it the practical option for a mixed-OS team.'
      },
      {
        q: 'Which is better for handoff to developers?',
        a: 'FigCraft has the more explicit story: inspect, annotations, ready-for-dev and code output for CSS, HTML, React, Leptos, SwiftUI and Compose, free and scriptable through a CLI and MCP server with 400+ commands. Sketch handoff features were not verified for this page, so no comparison is offered.'
      },
      {
        q: 'Does FigCraft have a paid tier?',
        a: 'No. FigCraft is MIT OR Apache-2.0 with no account, no telemetry and no hosted service, so there is nothing to buy. That also means no support contract, no SLA and no vendor to escalate to when alpha bugs bite; the project tracker is the support channel.'
      }
    ],
    related: ['pricing/', 'vs-figma/', 'figma-alternative-for-linux/', 'issues/'],
    crumbs: [
      { name: 'Compare', path: 'alternatives/' },
      { name: 'Vs Sketch', path: 'vs-sketch/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  {
    path: 'free-figma-alternative/',
    group: 'compare',
    type: 'compare',
    title: 'Free Figma alternatives: three routes that stay free',
    description:
      'Three genuinely free routes: Figma Starter, Penpot Professional and FigCraft. Who each fits, what free quietly excludes, and when the bill starts.',
    h1: 'Free Figma alternatives: three routes, three different bargains',
    eyebrow: 'Comparison',
    lede:
      'Free is a price, not a category. These three routes cost nothing today and charge you in three different currencies: seats, limits, or maintenance.',
    reading: '7 min',
    body: `<section>
  <h2>What people mean by a free Figma alternative</h2>
  <div class="prose">
    <p>Three products genuinely cost nothing to start, and each is free for a different reason. Figma Starter is the vendor's own free tier: unlimited drafts, 150 AI credits a day up to 500 a month, and paid seats from the point where a team appears. Penpot Professional is a loss leader with a real workspace attached: eight team members, unlimited viewers, 10GB of storage, seven days of version history, described by the vendor as free and fully featured. FigCraft is free because it is open source under MIT OR Apache-2.0 and there is no company between you and the binary.</p>
    <p>None of them is a free copy of Figma. The question worth answering is which bargain matches your work, so the comparison below is organised around what each route refuses to give you.</p>
  </div>
</section>

<section>
  <h2>Pick a route</h2>
  <div class="grid">
    <a class="card" href="#figma-starter">
      <span class="k">Route one</span>
      <h3>Figma Starter</h3>
      <p>Free unlimited drafts inside Figma itself. The safest choice if you expect to collaborate in Figma later.</p>
    </a>
    <a class="card" href="#penpot-free">
      <span class="k">Route two</span>
      <h3>Penpot Professional</h3>
      <p>A free team workspace with multiplayer, self-hostable and open source under MPL-2.0.</p>
    </a>
    <a class="card" href="#figcraft">
      <span class="k">Route three</span>
      <h3>FigCraft</h3>
      <p>Free native app, local files, no account, scriptable. Alpha, and you run it yourself.</p>
    </a>
  </div>
</section>

<section>
  <h2>The limits, in one table</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Route</th><th>Fits</th><th>Hard limit</th><th>Cost if you outgrow it</th></tr></thead>
      <tbody>
        <tr><td>Figma Starter</td><td>Learning Figma, solo drafts</td><td>Team features are seat-gated; AI credits capped</td><td>$16/seat Full, $12 Dev, $3 Collab</td></tr>
        <tr><td>Penpot Professional</td><td>Small studio, real multiplayer</td><td>8 members, 10GB, 7-day history</td><td>$7/editor, capped at $175/team</td></tr>
        <tr><td>FigCraft</td><td>Local ownership, offline, automation</td><td>No hosted service; early alpha</td><td>Nothing to buy; the cost is time</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">The Figma and Penpot figures are annual-billing list prices checked 2026-10-22. Figma's seat prices are per seat at every tier and add-ons are extra, so the amounts above are a floor.</p>
</section>

<section id="figma-starter">
  <h2>Route one: Figma Starter</h2>
  <p>Starter is free and unlimited on drafts, which is more generous than most people expect: a solo designer can work for months without paying. The cap that matters is not document count but collaboration. Team libraries, shared files and the dev handoff loop are what the paid tiers sell, and free viewers can inspect and copy CSS on paid plans, so the free tier is deliberately weakest exactly where a second person appears. If your plan is to learn Figma and you expect to join a team that already pays for it, Starter is the rational route: your files, your shortcuts and your habits all move with you.</p>
</section>

<section id="penpot-free">
  <h2>Route two: Penpot Professional</h2>
  <p>This is the strongest free tier for a group. Eight members, unlimited viewers, 10GB and seven days of history, with multiplayer as a first-class feature rather than a preview. Because Penpot is web-first, nobody installs anything, and because it is open source under MPL-2.0 it can be self-hosted; the vendor also sells a Private Server at $50,000 a year for organisations that need that deployment.</p>
  <p>The limit is depth of history, not features. Seven days means a mistake discovered next week is outside the window, so the free tier assumes you export backups yourself. Storage at 10GB is comfortable for interface work and not for a library of high-resolution imagery. When you exceed either, the arithmetic is $7 per editor with a monthly ceiling of $175 per team, which is 25 editors exactly.</p>
</section>

<section id="figcraft">
  <h2>Route three: FigCraft</h2>
  <p>FigCraft is free without a funnel, because there is nothing to sell: no account, no telemetry, no hosted service. You download a native binary for macOS, Windows, Linux or FreeBSD, or load the WebAssembly build, and open a <code>.figcraft</code> file from disk. Export covers SVG, PNG, JPG, WebP and PDF, and handoff covers CSS, HTML, React, Leptos, SwiftUI and Compose. Automation runs through a CLI, a JSON control channel and an MCP server with more than 400 commands.</p>
  <p>The exclusions do not show up in a feature list. Multiplayer is a preview with no accounts or permissions, and the public server is not end-to-end encrypted. The project calls itself early alpha at roughly 49% parity by its own estimate. Fonts need a sibling <code>../craft-fonts</code> directory and issue <a href="https://github.com/storytold/figcraft/issues/821" rel="noopener">#821</a> is open on that. macOS 27 on M1 crashes at launch (<a href="https://github.com/storytold/figcraft/issues/781" rel="noopener">#781</a>), Windows has a DX12 blur problem, 1440p interface scaling is broken (<a href="https://github.com/storytold/figcraft/issues/540" rel="noopener">#540</a>, <a href="https://github.com/storytold/figcraft/issues/818" rel="noopener">#818</a>), and FreeBSD aarch64 was dropped in v0.9.0. There is no support contract either.</p>
</section>

<section>
  <h2>Four questions that settle it</h2>
  <ol class="steps">
    <li><strong>Will anyone else edit the file this quarter?</strong> If yes, Figma Starter or Penpot; FigCraft's multiplayer is a preview and does not replace permissions.</li>
    <li><strong>Must the file live on your disk or on an air-gapped machine?</strong> Then FigCraft, which needs no account and no network, or a self-hosted Penpot if the team is the unit.</li>
    <li><strong>Do you need code or assets out of the tool, repeatedly?</strong> FigCraft's CLI and MCP surface is the free answer; Figma gates the equivalent behind Dev seats.</li>
    <li><strong>Is your time cheaper than $16 a month?</strong> That is the honest Figma question. A Full seat is $16; an afternoon lost to an alpha bug is worth more to most people, and less to anyone who enjoys the bug.</li>
  </ol>
  <div class="cta">
    <a class="btn primary" href="/install/">Install FigCraft</a>
    <a class="btn ghost sm" href="/pricing/">Compare the seat costs</a>
    <a class="btn ghost sm" href="/issues/">Read the known issues first</a>
  </div>
  <p class="note">Prices checked 2026-10-22 from the vendors' own pricing pages; verify before you buy. This site is independent and not affiliated with Figma, Penpot, Sketch or ArtCraft.</p>
  <p>Related: <a href="/pricing/">the per-seat arithmetic</a>, <a href="/open-source-figma-alternative/">the open-source licence comparison</a>, <a href="/vs-figma/">FigCraft vs Figma</a>, and <a href="/learn/migrate-from-figma/">migrating from Figma</a>.</p>
</section>`,
    faq: [
      {
        q: 'What is the best free Figma alternative?',
        a: 'For a team that needs multiplayer today, Penpot Professional: free for up to 8 members with 10GB and 7 days of history. For a solo designer who wants local files and no account, FigCraft. For someone learning Figma who will later join a paid team, Figma Starter itself, because unlimited drafts are free and the skills transfer.'
      },
      {
        q: 'Is Figma Starter actually free forever?',
        a: 'The draft workspace is free with no stated time limit: unlimited drafts and 150 AI credits a day up to 500 a month. What it withholds is collaboration. Team libraries, permissions and the dev loop sit behind seats, with Full at $16, Dev at $12 and Collab at $3 per month on annual billing.'
      },
      {
        q: 'Does Penpot free really include multiplayer?',
        a: 'Yes. Members and viewers are the unit its pricing is built on: Professional includes 8 team members and unlimited viewers at $0, with 10GB of storage and 7 days of version history. The limits are headcount, storage and history depth, not a disabled multiplayer mode.'
      },
      {
        q: 'What does free FigCraft exclude?',
        a: 'Hosted infrastructure and support. There is no server to sign in to, no account system, no telemetry and no support contract. Multiplayer is a preview without permissions or end-to-end encryption on the public server, and the app is early alpha at about 49% parity by the project own estimate.'
      },
      {
        q: 'Can I move from Figma Starter to FigCraft later?',
        a: 'Partly. FigCraft imports .fig files on a best-effort basis and drops features it cannot represent without a full report; large files can fail (#574, #321). Import to read and reference, keep the original, and expect to rebuild anything that matters, especially auto layout and component overrides.'
      }
    ],
    related: ['pricing/', 'vs-penpot/', 'open-source-figma-alternative/', 'install/'],
    crumbs: [
      { name: 'Compare', path: 'alternatives/' },
      { name: 'Free alternative', path: 'free-figma-alternative/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  {
    path: 'open-source-figma-alternative/',
    group: 'compare',
    type: 'compare',
    title: 'Open-source Figma alternatives: FigCraft and Penpot licences',
    description:
      'MIT/Apache-2.0 versus MPL-2.0, local files versus a self-hosted server, and what each licence lets a company do with design-tool code.',
    h1: 'Open-source Figma alternatives: two licences, two bets',
    eyebrow: 'Comparison',
    lede:
      'Both FigCraft and Penpot publish their source. The licence and the hosting model decide whether that source is a tool you use or a platform you build on.',
    reading: '7 min',
    body: `<section>
  <h2>The two credible open-source answers</h2>
  <div class="prose">
    <p>FigCraft is a native Rust application under MIT OR Apache-2.0: a dual licence, which means a downstream user may pick either set of terms. Penpot is a web platform under MPL-2.0, the Mozilla Public License, with a hosted service and paid team tiers on top. Both are open source; they are open in different directions, which matters to anyone building on the code.</p>
  </div>
  <div class="table-wrap">
    <table>
      <thead><tr><th></th><th>FigCraft</th><th>Penpot</th></tr></thead>
      <tbody>
        <tr><td>Licence</td><td>MIT OR Apache-2.0</td><td>MPL-2.0</td></tr>
        <tr><td>Platform</td><td>macOS, Windows, Linux, FreeBSD; WebAssembly</td><td>Browser</td></tr>
        <tr><td>Hosting</td><td>Your machine; self-hosted preview server</td><td>Vendor cloud or self-hosted</td></tr>
        <tr><td>File format</td><td><code>.figcraft</code> files on disk</td><td>Unverified (server-side projects)</td></tr>
        <tr><td>Real-time collaboration</td><td>Preview; no accounts</td><td>Yes; members and viewers</td></tr>
        <tr><td>Offline</td><td>Yes</td><td>Unverified</td></tr>
        <tr><td>Handoff / dev mode</td><td>Inspect, annotations, six code targets</td><td>Unverified</td></tr>
        <tr><td>Extensibility</td><td>CLI, JSON channel, MCP server, 400+ commands</td><td>Unverified</td></tr>
        <tr><td>Maturity</td><td>Early alpha; ~49% parity by its own estimate</td><td>Shipped; paid team tiers</td></tr>
        <tr><td>Price</td><td>$0, no hosted service</td><td>$0 Professional; $7/editor, capped $175/team</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">MPL-2.0 is commonly summarised as file-level copyleft: changes to MPL-covered files must be published under MPL, while larger works that merely combine with them may carry other terms. Read the licence, or ask counsel, before relying on that summary.</p>
</section>

<section>
  <h2>Permissive versus file-level copyleft</h2>
  <div class="prose">
    <p>MIT and Apache-2.0 ask almost nothing. You may use, modify, embed and redistribute the code, including inside a closed product, provided the copyright and licence notice travel with it. For a design tool, that means a company can fork FigCraft, restyle it, ship it internally or bundle it into a commercial product without publishing those changes. The Apache-2.0 half of the dual licence adds an explicit patent grant.</p>
    <p>MPL-2.0 is a middle position: not the viral copyleft of the GPL, since a larger work can combine MPL files with proprietary ones under other terms. But any file that is itself MPL-covered, and any modification to it, must stay available under MPL. For Penpot that is a reasonable fit: a company can run and modify it, and if it distributes a modified version it publishes the modified source files.</p>
    <p>The practical question is where your investment lands. If you plan to change the editor and keep those changes private, FigCraft's licence is simpler. If you run a workspace internally and never distribute it, the distinction barely bites, because the obligations attach to distribution.</p>
  </div>
</section>

<section>
  <h2>Hosting is where open source meets the invoice</h2>
  <p>Penpot's open-source code is offset by a commercial service. The Professional tier is $0 for 8 team members, 10GB and 7 days of history; Unlimited is $7 per editor, capped at $175 a month per team; Enterprise is $25 per member; and a Private Server is $50,000 a year. Those are hosted-service prices, not licence prices: the code is open, and the vendor is selling operations, support and isolation.</p>
  <p>FigCraft has no mirror-image offer. There is no hosted product, no enterprise plan and no paid support, so self-hosting is not an option that costs extra; running the binary is the whole product. The trade is reversed. You keep all the operational control and you inherit all the operational work, from fonts sitting in a sibling <code>../craft-fonts</code> directory (#821 is open) to a macOS 27/M1 launch crash (<a href="https://github.com/storytold/figcraft/issues/781" rel="noopener">#781</a>) and broken 1440p interface scaling (<a href="https://github.com/storytold/figcraft/issues/540" rel="noopener">#540</a>, <a href="https://github.com/storytold/figcraft/issues/818" rel="noopener">#818</a>).</p>
  <p>For a company comparing total cost, the honest framing is this: Penpot's free tier buys less code freedom and more operational certainty; FigCraft's permissive licence buys maximum freedom and zero operational certainty. Neither is cheaper in every case.</p>
</section>

<section>
  <h2>Parity and community, without the numbers game</h2>
  <div class="prose">
    <p>FigCraft's roughly 49% parity is the project's own estimate of how much of Figma it covers, and it is the only parity number on this page with a source. We did not produce an equivalent figure for Penpot, and no credible public count of either project's users was verified here, so no chart of adoption appears. What can be observed is structure: FigCraft is a young project with a public issue tracker where bugs are numbered and discussed in the open; Penpot is a shipped platform with a commercial organisation selling seats and a private server around it.</p>
    <p>That structure predicts where each will hurt. A young project can change direction quickly and can also stall. A funded platform ships steadily and prices accordingly. For a company placing a five-year bet, the licence is the durable part and the roadmap is the volatile part.</p>
  </div>
</section>

<section>
  <h2>Who should pick which</h2>
  <ul class="list">
    <li><strong>Embedding a design engine in a product</strong><span>FigCraft, if the alpha state is acceptable. MIT/Apache-2.0 lets modifications stay private; MPL would require publishing changes to covered files.</span></li>
    <li><strong>Running a design workspace for staff</strong><span>Penpot. The free tier is a real workspace, and there is a paid path with support when the team grows.</span></li>
    <li><strong>Security review or air-gapped deployment</strong><span>FigCraft has no telemetry and no account system, which is the shortest possible review. Penpot can be self-hosted, but the deployment is a server you must run.</span></li>
    <li><strong>Needing a vendor to escalate to</strong><span>Penpot, via its Enterprise tier or Private Server. FigCraft has no support contract to buy.</span></li>
  </ul>
  <p class="note">Prices checked 2026-10-22 from the vendors' own pricing pages; verify before you buy. This site is independent and not affiliated with Figma, Penpot, Sketch or ArtCraft.</p>
  <p>Related: <a href="/pricing/">the pricing arithmetic</a>, <a href="/vs-penpot/">FigCraft vs Penpot in practice</a>, <a href="/free-figma-alternative/">free routes compared</a>, and <a href="/learn/migrate-from-figma/">migrating from Figma</a>.</p>
</section>`,
    faq: [
      {
        q: 'Is FigCraft or Penpot more open?',
        a: 'FigCraft uses MIT OR Apache-2.0, which is permissive: modifications can stay private and the code can be embedded in closed products with attribution. Penpot uses MPL-2.0, which requires changes to MPL-covered files to be published when distributed. FigCraft is more permissive; Penpot is still genuinely open source and self-hostable.'
      },
      {
        q: 'Can I self-host Penpot for free?',
        a: 'Penpot is open source and self-hostable, and the vendor also sells a Private Server deployment at $50,000 a year. The vendor prices that offering around operations and isolation rather than the licence. Whether a free self-hosted deployment is supportable for your team is an operational question this page does not test.'
      },
      {
        q: 'What does MPL-2.0 require of my company?',
        a: 'MPL-2.0 is file-level copyleft: if you modify MPL-covered files and distribute the result, those files must be made available under MPL. A larger work that merely combines them may use other terms. Internal use without distribution triggers no publication duty. Read the licence or ask counsel before relying on a summary.'
      },
      {
        q: 'Does FigCraft have a company behind it?',
        a: 'There is no vendor selling seats, support or hosting for FigCraft: the project is open source at github.com/storytold/figcraft, with bugs handled in a public tracker. That means no support contract and no SLA, and it also means no pricing page to renegotiate.'
      },
      {
        q: 'Which has better Figma parity?',
        a: 'Only FigCraft publishes an estimate: roughly 49% by the project own reckoning, and it labels itself early alpha. We did not produce a comparable parity figure for Penpot and will not guess one. Penpot is the more mature product in the narrow sense of shipping paid team tiers; parity with Figma specifically was not measured for this page.'
      }
    ],
    related: ['vs-penpot/', 'pricing/', 'free-figma-alternative/', 'vs-figma/'],
    crumbs: [
      { name: 'Compare', path: 'alternatives/' },
      { name: 'Open source', path: 'open-source-figma-alternative/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  },

  {
    path: 'figma-alternative-for-linux/',
    group: 'compare',
    type: 'compare',
    title: 'Figma alternatives for Linux: FigCraft packages, Penpot, Graphite',
    description:
      'FigCraft ships AppImage, deb, rpm, flatpak, pkg.tar.zst and tar.gz for x86_64, aarch64 and riscv64. Penpot needs only a browser; Graphite is unverified.',
    h1: 'Figma alternatives on Linux: what actually installs',
    eyebrow: 'Comparison',
    lede:
      'Linux is where the design-tool gap is widest. FigCraft ships real packages, Penpot needs only a browser, and Graphite is the name people mention without checking.',
    reading: '6 min',
    body: `<section>
  <h2>The gap, and who fills it</h2>
  <div class="prose">
    <p>Figma is usable in a browser on Linux, which is enough for many people and not enough for anyone who wants a native application, a local file and a command line. FigCraft is a Rust application that ships Linux builds directly. Penpot is a web platform, so Linux support means a browser. Graphite is a third name that comes up in these conversations; we did not verify its Linux packaging or its feature coverage for this page, so it appears here as a lead to investigate rather than a recommendation.</p>
  </div>
</section>

<section>
  <h2>FigCraft's Linux packages</h2>
  <p>Six formats, three architectures. Pick the one your distribution expects; there is no universal installer.</p>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Format</th><th>Architectures</th><th>Typical fit</th></tr></thead>
      <tbody>
        <tr><td>AppImage</td><td>x86_64, aarch64, riscv64</td><td>Any distribution; single portable file</td></tr>
        <tr><td>.deb</td><td>x86_64, aarch64, riscv64</td><td>Debian, Ubuntu and derivatives</td></tr>
        <tr><td>.rpm</td><td>x86_64, aarch64, riscv64</td><td>Fedora, RHEL and derivatives</td></tr>
        <tr><td>.flatpak</td><td>x86_64, aarch64, riscv64</td><td>Sandboxed install, shared runtime</td></tr>
        <tr><td>.pkg.tar.zst</td><td>x86_64, aarch64, riscv64</td><td>Arch and derivatives</td></tr>
        <tr><td>.tar.gz</td><td>x86_64, aarch64, riscv64</td><td>Manual unpack, any distribution</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Three architectures is unusual for a design tool and matters if you work on ARM servers or RISC-V hardware. The adjacent FreeBSD port is less lucky: aarch64 was dropped in v0.9.0, so ARM coverage is a Linux feature now, not a portable one.</p>
</section>

<section>
  <h2>What to expect on Linux specifically</h2>
  <div class="prose">
    <p>The first obstacle is fonts. FigCraft expects a sibling directory named <code>../craft-fonts</code> next to the application; installing into <code>/usr/bin</code> or <code>/opt</code> means creating that directory deliberately and keeping it across upgrades. The issue is tracked as <a href="https://github.com/storytold/figcraft/issues/821" rel="noopener">#821</a>, with an earlier fix in #752 now closed, so the behaviour is known rather than mysterious.</p>
    <p>The second is display scaling. Interface scale misbehaves at 1440p (<a href="https://github.com/storytold/figcraft/issues/540" rel="noopener">#540</a>, <a href="https://github.com/storytold/figcraft/issues/818" rel="noopener">#818</a>), which is exactly the resolution of many Linux workstations and high-density laptop panels. Windows has a separate DX12 blur problem; macOS 27 on M1 has a launch crash (<a href="https://github.com/storytold/figcraft/issues/781" rel="noopener">#781</a>). Linux is not the buggiest platform in that list, but it is not clean.</p>
    <p>The third is the fallback. A WebAssembly build runs in a browser, so a machine where nothing installs can still open a document. It is the same engine with a browser's constraints, and it is the right way to test before committing to a package.</p>
  </div>
</section>

<section>
  <h2>Installing, without guessing</h2>
  <ol class="steps">
    <li><strong>Check the architecture</strong> with your package manager, then pick the matching artefact: x86_64 for most desktops, aarch64 for ARM machines, riscv64 only if you know you are on it.</li>
    <li><strong>Install through your distribution's channel</strong> where one exists: .deb with the system package tool, .rpm with dnf, .pkg.tar.zst with pacman, .flatpak through the Flatpak remote, or the AppImage and tarball without touching the package database.</li>
    <li><strong>Create the font directory</strong> as a sibling of the binary, named exactly <code>../craft-fonts</code>, before first launch. Font problems are the most common first-run surprise.</li>
    <li><strong>Open a small file and export once</strong> — SVG or PNG — to confirm the whole chain before moving a real project across. Then read <a href="/issues/">the known-issues list</a> with the version you installed in mind.</li>
  </ol>
  <p><a href="/install/">The install page</a> covers downloads per platform in more detail; this page only explains what differs on Linux.</p>
</section>

<section>
  <h2>Penpot and Graphite on Linux</h2>
  <div class="prose">
    <p>Penpot needs no Linux package at all. It is web-first: a browser tab against the vendor cloud, or a self-hosted deployment if your organisation runs it, with the vendor's Private Server priced at $50,000 a year. For a Linux user the trade is straightforward — nothing to install, nothing to update locally, and no native file on disk. The free Professional tier covers 8 team members, 10GB and 7 days of history; Unlimited is $7 per editor with a $175 monthly cap.</p>
    <p>Graphite is the other open-source name that appears in these discussions. We did not verify its Linux packages, its file format or how close it comes to Figma, so it gets no table row and no verdict. Treat it as a second tab to open rather than a recommendation from us.</p>
  </div>
</section>

<section>
  <h2>Who should pick which on Linux</h2>
  <ul class="list">
    <li><strong>Wants a native app and local files</strong><span>FigCraft, via AppImage or your distribution's package format. Accept alpha bugs and the fonts directory.</span></li>
    <li><strong>Works across Linux, macOS and Windows</strong><span>FigCraft is the only native option here that covers all three; Penpot covers them through a browser instead.</span></li>
    <li><strong>Needs multiplayer this week</strong><span>Penpot in a browser. FigCraft's collaboration is a preview without accounts or permissions.</span></li>
    <li><strong>Automating exports or code handoff</strong><span>FigCraft: CLI, JSON control channel and MCP server with 400+ commands, all running locally.</span></li>
  </ul>
  <div class="cta">
    <a class="btn primary" href="/install/">Get the Linux build</a>
    <a class="btn ghost sm" href="/issues/">Known issues by platform</a>
  </div>
  <p class="note">Prices checked 2026-10-22 from the vendors' own pricing pages; verify before you buy. This site is independent and not affiliated with Figma, Penpot, Sketch or ArtCraft.</p>
  <p>Related: <a href="/pricing/">pricing across all four tools</a>, <a href="/vs-penpot/">FigCraft vs Penpot</a>, <a href="/open-source-figma-alternative/">the licence comparison</a>, and <a href="/tools/contrast-checker/">the contrast checker</a> for verifying exported palettes.</p>
</section>`,
    faq: [
      {
        q: 'Does Figma run natively on Linux?',
        a: 'Figma is used through a browser; no native Linux build appears in the sources we checked. If you need a native binary, FigCraft ships AppImage, .deb, .rpm, .flatpak, .pkg.tar.zst and .tar.gz packages for x86_64, aarch64 and riscv64.'
      },
      {
        q: 'Which FigCraft package should I install on Ubuntu?',
        a: 'The .deb is the natural fit for Ubuntu and Debian derivatives, and the AppImage works everywhere without touching the package database. Both are published for x86_64, aarch64 and riscv64. Prefer the distribution package if you want upgrades handled by the system; prefer the AppImage if you want an isolated copy.'
      },
      {
        q: 'Why does FigCraft need a craft-fonts directory?',
        a: 'It looks for fonts in a sibling directory named ../craft-fonts next to the binary rather than relying only on system fonts. Installing into /usr/bin or /opt means creating that path yourself and preserving it across upgrades. The workflow is tracked as issue #821, still open in v0.9.0, after an earlier fix in #752.'
      },
      {
        q: 'Is Penpot a good Linux alternative to Figma?',
        a: 'It is a good alternative for anyone willing to work in a browser. Penpot is web-first and self-hostable, with a free Professional tier covering 8 team members, 10GB and 7 days of history, then $7 per editor capped at $175 per team per month. Nothing installs locally, which is either the advantage or the problem.'
      },
      {
        q: 'Does FigCraft support ARM Linux?',
        a: 'Yes: aarch64 packages exist for all six Linux formats, and riscv64 as well. Note the contrast with FreeBSD, where aarch64 support was dropped in v0.9.0, so ARM coverage should be treated as a platform-specific claim rather than a universal one. Check the release notes for your exact format before relying on it.'
      }
    ],
    related: ['install/', 'issues/', 'pricing/', 'open-source-figma-alternative/'],
    crumbs: [
      { name: 'Compare', path: 'alternatives/' },
      { name: 'For Linux', path: 'figma-alternative-for-linux/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  }
];
