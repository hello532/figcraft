# figcraft.rerivo.com · D0

Single-page D0 for the radar term `figcraft` (2026-10-19). No login, no payment.
The demo canvas is self-contained; the page is static and has no build step.

## Status (2026-10-19)

- Repository: https://github.com/hello532/figcraft (public, `main`)
- GitHub Pages: enabled, latest build `status=built`
- Cloudflare DNS: `figcraft.rerivo.com CNAME hello532.github.io`, **proxied** (orange cloud)
- Cloudflare SSL: `Flexible`, Universal SSL active; `Always Use HTTPS` on
- Verified externally: `http://` returns **301** to `https://`; `https://` returns **200**
  with the page title and canonical `https://figcraft.rerivo.com/`.
- Local note: this machine resolves `*.rerivo.com` through a proxy to 198.18.x
  virtual IPs, so a local `curl` may not show the same path as an external client.

## Tests

The studio has a 10-round browser test harness (170 checks) that exercises presets,
custom board settings, add/resize/move, undo/redo, duplicate/delete, hide/show, text,
JSON/PNG export and localStorage persistence.

```bash
python3 -m http.server 8799 --bind 127.0.0.1
# open http://127.0.0.1:8799/ in the Chromium instance with --remote-debugging-port=9333
node tests/studio.test.mjs      # 10 rounds, 170 checks
node tests/studio.edge.mjs      # 8 resize handles, keyboard, rename, custom board
```

Environment: `CDP=http://127.0.0.1:9333`, `STUDIO_URL=http://127.0.0.1:8799/`,
`ROUNDS=10`. The transparent PNG export was also checked pixel-by-pixel: the
exported 2× image has alpha 0 at the top-left, as expected for a transparent board.

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
