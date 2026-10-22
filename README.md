# figcraft.rerivo.com · D0 + browser studio

Single-page guide and independent browser studio for the radar term `figcraft`
(2026-10-19). No login, no payment. Static HTML/CSS/JS, no build step.

The studio includes canvas presets and custom sizes, background/transparency,
grid and alignment snapping, Fit/zoom/pan, eight-handle resize, inline text
editing, layers with drag-reorder, properties (X/Y/W/H/fill/hex/radius/opacity/
text/font), copy/paste, undo/redo, autosave, and PNG/SVG/JSON export.

## Status (2026-10-19)

- Repository: https://github.com/hello532/figcraft (public, `main`)
- GitHub Pages: enabled, latest build `status=built`
- Cloudflare DNS: `figcraft.rerivo.com CNAME hello532.github.io`, **proxied** (orange cloud)
- Cloudflare SSL: `Flexible`, Universal SSL active; `Always Use HTTPS` on
- Verified externally: `http://` returns **301** to `https://`; `https://` returns **200**
  with the page title and canonical `https://figcraft.rerivo.com/`.
- Local note: this machine resolves `*.rerivo.com` through a proxy to 198.18.x
  virtual IPs, so a local `curl` may not show the same path as an external client.

## SEO / GEO

- `robots.txt` explicitly allows GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, Applebot-Extended and CCBot.
- `llms.txt` is the short source map; `llms-full.txt` is the full answer-engine source with facts, issues, comparisons, install steps and citation.
- Structured data: WebSite, Organization, SoftwareApplication, WebApplication, Article, BreadcrumbList, two HowTo blocks and a 20-question FAQPage.
- The page includes a visible Key facts section, a citation box and a Google-autocomplete search-intent hub.
- `404.html` is a branded fallback; `robots.txt` points to the sitemap; the IndexNow key file is at the repository root for Bing/Yandex submission.

## Tests

The studio has a 10-round browser test harness (170 checks) that exercises presets,
custom board settings, add/resize/move, undo/redo, duplicate/delete, hide/show, text,
JSON/PNG export and localStorage persistence.

```bash
python3 -m http.server 8799 --bind 127.0.0.1
# open http://127.0.0.1:8799/ in the Chromium instance with --remote-debugging-port=9333
node tests/studio.test.mjs      # 10 rounds, 170 checks
node tests/studio.edge.mjs      # 8 resize handles, keyboard, rename, custom board
node tests/studio.advanced.mjs  # 24 checks: inline text, snap/Alt, aspect, copy/paste, drag reorder, icons, align/ratio/stroke, layer filter, zoom-to, theme, SVG, save
```

Environment: `CDP=http://127.0.0.1:9333`, `STUDIO_URL=http://127.0.0.1:8799/`,
`ROUNDS=10`. The transparent PNG export was also checked pixel-by-pixel: the
exported 2× image has alpha 0 at the top-left, as expected for a transparent board.

Structural checks need no browser: tag balance, one `<h1>` per page, SERP length
limits, every internal link resolving, and every structured-data answer being
present in the rendered body.

```bash
node tests/seo.check.mjs            # structure, schema visibility, links, assets
```

## Version sync

Upstream ships several releases a week and the guide cites a specific release in
about 30 places. Two kinds of reference, handled differently:

| Kind | Example | Who updates it |
|---|---|---|
| Factual | `Latest release: v0.9.0 · 2026-10-21`, the AppImage filename, `softwareVersion`, artifact count | the script, from the GitHub release API |
| Editorial | `What's new in FigCraft 0.9.0`, `fixed in 0.9.0`, `dropped as of v0.9.0` | a human, because the prose underneath must be rewritten too |

Bumping an editorial slot without rewriting the prose under it publishes a
confident falsehood — a "What's new in v0.10.0" heading over a 0.9.0 changelog —
so the script injects the first kind and *reports* the second.

```bash
python3 tools/sync_version.py            # dry run
python3 tools/sync_version.py --check    # exit 1 if stale (CI)
python3 tools/sync_version.py --apply    # rewrite the factual slots
```

Artifact counts are derived, never hardcoded: v0.9.0 has 29 build artifacts plus
`SHA256SUMS.txt`, v0.8.0 has 30, v0.7.0 has 27. `--check` also fails when a
factual slot names a release the project never published, which is how a
half-finished sync gets caught.

Every rule declares how many times its pattern must match, so editing the HTML in
a way that breaks a pattern fails loudly instead of silently leaving a stale
number on the page.

```bash
node tests/version.sync.test.mjs     # 45 checks, stubs the release feed, no network
```

`.github/workflows/version-sync.yml` runs `--check` on every push and daily. On a
schedule it also rewrites the factual slots and opens a PR with the editorial
items as an explicit checklist.

Two facts rot for reasons the API cannot answer, and are printed as warnings:
the **parity percentage** (the project's own estimate, moves independently of
any release) and the **release cadence**. Both need a human on a schedule.

## Verify

```bash
curl -I http://figcraft.rerivo.com/        # expect 301, Location: https://...
curl -I https://figcraft.rerivo.com/       # expect 200
curl -s https://figcraft.rerivo.com/ | grep -o '<title>[^<]*'
```

## GSC

Add `https://figcraft.rerivo.com/` as a URL-prefix property, verify by DNS or the
HTML file, submit `https://figcraft.rerivo.com/sitemap.xml`, then request indexing
for the homepage.
