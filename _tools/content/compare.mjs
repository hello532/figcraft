// Pricing page plus the comparison sections that live inside /alternatives/.
// Every price and feature claim is taken from vendor pages checked 2026-10-22
// (figma.com/pricing, penpot.app/pricing, sketch.com/pricing) or from the
// FigCraft project itself. Gaps are labelled "Unverified" rather than guessed.
//
// /alternatives/ is hand-written and stays live; vs-penpot/, vs-sketch/,
// free-figma-alternative/, open-source-figma-alternative/ and
// figma-alternative-for-linux/ all 301 to it. ALTERNATIVES_SECTIONS is inserted
// into that page, so it carries no <h1>, no header, no footer and no FAQ.

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
    reading: '7 min',
    body: `<section>
  <h2>Four products, four definitions of free</h2>
  <div class="prose">
    <p>Free means four things here. FigCraft is free because the source is open and you run the binary. Figma Starter is free because the vendor rents a drafts-only workspace and charges for seats. Penpot Professional is $0 with caps on members, storage and history; Unlimited removes them. Sketch is not free beyond a trial, and its $120 one-time Mac licence excludes collaboration.</p>
    <p>Everything below is arithmetic on published list prices checked 2026-10-22, using annual billing. Taxes and add-ons are excluded. The aim is to show where the meter starts running, and to say plainly what each free tier refuses to give you.</p>
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
  <p>FigCraft's price is zero and the cost is time. Fonts must sit in a sibling directory named <code>../craft-fonts</code> (<a href="https://github.com/storytold/figcraft/issues/821" rel="noopener">#821</a>), macOS 27 on M1 crashes at launch (<a href="https://github.com/storytold/figcraft/issues/781" rel="noopener">#781</a>), interface scale breaks at 1440p (<a href="https://github.com/storytold/figcraft/issues/540" rel="noopener">#540</a>, <a href="https://github.com/storytold/figcraft/issues/818" rel="noopener">#818</a>), and FreeBSD aarch64 was dropped in v0.10.0. None of that costs money; all of it costs afternoons.</p>
  <p>Run it the other way: $16 buys a mature editor with multiplayer, permissions and plugins; $7 buys a browser workspace with team features. FigCraft buys ownership, offline work, an inspectable engine and a CLI and MCP surface past 400 commands, and asks for tolerance of alpha software. <a href="/issues/">Known issues</a> is the honest test.</p>
</section>

<section>
  <h2>The honest conclusion</h2>
  <div class="prose">
    <p>If a team co-edits this quarter, the cheapest serious answer is Penpot Professional at $0 for up to eight members, then $7 per editor with a $175 ceiling. If maturity, plugins and hiring matter more, Figma's $16 seat is expensive but not overpriced. For one designer who never shares a file, $120 once for Sketch is the cheapest option that feels like a purchase.</p>
    <p>FigCraft is free in the licence sense and self-run in the operational sense. It is not production-ready for a team: multiplayer is a preview, the public collaboration server is not end-to-end encrypted, and parity is 49% by the project's own estimate. Use it for local, offline, scriptable work on your own disk, and keep a paid seat elsewhere for the collaboration you cannot yet do without.</p>
  </div>
  <div class="cta">
    <a class="btn primary" href="/install/">Install FigCraft</a>
    <a class="btn ghost sm" href="/alternatives/">Compare it with Penpot and Sketch</a>
    <a class="btn ghost sm" href="/issues/">Read the known issues first</a>
  </div>
  <p class="note">Prices checked 2026-10-22 from the vendors' own pricing pages; verify before you buy. This site is independent and not affiliated with Figma, Penpot, Sketch or ArtCraft.</p>
  <p>Related: <a href="/alternatives/#penpot">FigCraft vs Penpot</a>, <a href="/alternatives/#licence">what each licence permits</a>, <a href="/vs-figma/">FigCraft vs Figma</a>, and <a href="/learn/#topic-migrate">migrating from Figma</a>.</p>
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
    related: ['alternatives/', 'install/'],
    crumbs: [
      { name: 'Compare', path: 'alternatives/' },
      { name: 'Pricing', path: 'pricing/' }
    ],
    priority: '0.8',
    changefreq: 'monthly',
    updated: '2026-10-22'
  }
];

// Inserted into the hand-written /alternatives/ page. Section ids are link
// targets: /alternatives/#penpot, #sketch, #licence, #linux, #free.
export const ALTERNATIVES_SECTIONS = `<section id="penpot">
  <h2>FigCraft vs Penpot</h2>
  <div class="prose">
    <p>Both are open source, and they disagree about the only question that matters: where the document lives. Penpot is a web application — open a browser, sign in to a workspace, edit a project the server holds; if you want the server to be yours, you run one. FigCraft is a native desktop program: you open a <code>.figcraft</code> file from your disk, edit it offline, and there is no account, no server and no telemetry in the loop.</p>
    <p>That difference decides collaboration, offline work, what a backup is, and who carries the operational risk. Where a vendor page did not settle a point, the table says so.</p>
  </div>
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
  <p class="note">Unverified means the vendor's own pricing page did not cover the point and we did not test it ourselves. We would rather show a gap than a confident guess.</p>
  <div class="grid two">
    <div class="card">
      <span class="k">Where Penpot is ahead</span>
      <ul class="list">
        <li>Collaboration is the product rather than a preview: 8 members and unlimited viewers at $0, with 10GB and 7 days of history.</li>
        <li>Nothing is installed, so a contractor on a locked-down laptop and a stakeholder on an iPad reach the same file by link.</li>
        <li>Self-hosting is a supported deployment, and the vendor sells a Private Server at $50,000 a year for teams that need it inside their own perimeter.</li>
      </ul>
    </div>
    <div class="card">
      <span class="k">Where FigCraft is ahead</span>
      <ul class="list">
        <li>The file is the document: no account, no session, no server that can be down or repriced, and a <code>.figcraft</code> file can be versioned in git or opened on a plane.</li>
        <li>A permissive licence, so changes to the engine can stay private when you ship them inside a product.</li>
        <li>Automation is free rather than a paid seat: CLI, JSON control channel and MCP server with more than 400 commands.</li>
      </ul>
    </div>
  </div>
  <p>Between the two there is no import path worth relying on, because one stores projects server-side and the other stores documents as files. Treat a switch as a rebuild rather than a migration.</p>
</section>

<section id="sketch">
  <h2>FigCraft vs Sketch</h2>
  <p>Sketch is the Mac original: a native macOS application with a vendor web app and an iPhone/iPad viewer, sold under a proprietary licence. It has no Windows or Linux build in the sources we checked, which matters more than any feature row below.</p>
  <div class="table-wrap">
    <table>
      <thead><tr><th></th><th>FigCraft</th><th>Sketch</th></tr></thead>
      <tbody>
        <tr><td>Licence</td><td>MIT OR Apache-2.0, open source</td><td>Proprietary, commercial</td></tr>
        <tr><td>Platform</td><td>macOS, Windows, Linux, FreeBSD; WebAssembly</td><td>macOS only; web app and iPhone/iPad viewer</td></tr>
        <tr><td>File format</td><td><code>.figcraft</code> on disk</td><td>Unverified</td></tr>
        <tr><td>Collaboration</td><td>Preview; no accounts</td><td>Partial: not on the $120 licence</td></tr>
        <tr><td>Offline</td><td>Yes</td><td>Unverified</td></tr>
        <tr><td>Maturity</td><td>Early alpha; ~49% parity by its own estimate</td><td>Shipped macOS product with three paid tiers</td></tr>
        <tr><td>Price</td><td>Free</td><td>$12 / $24 / $44 per editor/mo; $120 once on Mac</td></tr>
      </tbody>
    </table>
  </div>
  <p>Sketch Standard is $12 per editor a month billed yearly, Professional $24 and Enterprise $44, so five editors are $60, $120 and $220 a month. The $120 one-time Mac licence includes a year of updates and no collaboration at all — for a team that has to share files, that is a dead end rather than a discount.</p>
</section>

<section id="licence">
  <h2>What the licence actually requires</h2>
  <p>FigCraft is MIT OR Apache-2.0, Penpot is MPL-2.0, Sketch is proprietary. MIT and Apache-2.0 ask almost nothing: modify the code, embed it in a closed product, redistribute it, and keep the copyright and licence notice with it, with the Apache-2.0 half adding an explicit patent grant. MPL-2.0 is file-level copyleft: if you modify MPL-covered files and distribute the result, those files must be published under MPL, while a larger work that merely combines them may carry other terms. Sketch grants a right to use its application and nothing more, so there is no source to modify, embed or redistribute at all.</p>
  <p>Modify and distribute FigCraft and you publish nothing beyond the notice; modify and distribute Penpot's covered files and those files ship as MPL source; use either internally and no publication duty attaches at all. That is why a permissive licence matters to a company embedding the engine: a fork can be restyled and shipped inside a product without handing back the changes, and the Apache-2.0 patent grant removes a question from review.</p>
  <p class="note">MPL-2.0 is summarised here as file-level copyleft; read the licence, or ask counsel, before relying on that summary.</p>
</section>

<section id="linux">
  <h2>Linux and the packaging question</h2>
  <p>FigCraft ships <code>.AppImage</code>, <code>.deb</code>, <code>.rpm</code>, <code>.flatpak</code>, <code>.pkg.tar.zst</code> and <code>.tar.gz</code> for x86_64, aarch64 and riscv64 — six formats, three architectures, which is unusual for a design tool and matters on ARM servers or RISC-V hardware. The adjacent FreeBSD port is x86_64 only, because aarch64 was dropped in v0.10.0.</p>
  <p>Penpot needs no Linux package at all: it is a browser tab against the vendor cloud, or a self-hosted deployment your organisation runs. Sketch is macOS only in the sources we checked. So a Linux user has two options, not three — a native binary or a browser — and the native one arrives with the fonts directory (<code>../craft-fonts</code>, issue <a href="https://github.com/storytold/figcraft/issues/821" rel="noopener">#821</a>) and 1440p interface scaling problems (<a href="https://github.com/storytold/figcraft/issues/540" rel="noopener">#540</a>, <a href="https://github.com/storytold/figcraft/issues/818" rel="noopener">#818</a>) to plan around.</p>
</section>

<section id="free">
  <h2>Three genuinely free routes</h2>
  <p>Each of these costs nothing today and charges you in a different currency: seats, limits, or maintenance.</p>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Route</th><th>Fits</th><th>What it withholds</th></tr></thead>
      <tbody>
        <tr><td><strong>Figma Starter</strong></td><td>Learning Figma, solo drafts</td><td>Unlimited drafts and 150 AI credits a day up to 500 a month, but team libraries, permissions and the dev loop need seats: $16 Full, $12 Dev, $3 Collab</td></tr>
        <tr><td><strong>Penpot Professional</strong></td><td>A small studio with real multiplayer</td><td>Free for 8 members, unlimited viewers, 10GB and 7 days of history; more members, storage or history need Unlimited at $7/editor, capped $175/team</td></tr>
        <tr><td><strong>FigCraft</strong></td><td>Local ownership, offline work, automation</td><td>No hosted service, support contract or team accounts; early alpha at about 49% parity, and you supply the machine, fonts and backups</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">Prices checked 2026-10-22 from the vendors' own pricing pages; verify before you buy. This site is independent and not affiliated with Figma, Penpot, Sketch or ArtCraft.</p>
</section>`;
