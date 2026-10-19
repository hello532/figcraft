# figcraft.rerivo.com · D0

Single-page D0 for the radar term `figcraft` (2026-10-19). No login, no payment.
The demo canvas is self-contained; the page is static and has no build step.

## Status (2026-10-19)

- Repository: https://github.com/hello532/figcraft (public, `main`)
- GitHub Pages: enabled, latest build `status=built`
- Cloudflare DNS: `figcraft.rerivo.com CNAME hello532.github.io` (DNS only)
- HTTPS certificate: pending at the time of writing (`https_certificate` null)
- Local note: this machine resolves `*.rerivo.com` through a proxy to 198.18.x
  virtual IPs, so a local `curl` may fail before the proxy routing updates.

After the certificate is issued, the page should answer 200 at
`https://figcraft.rerivo.com/`.

## Verify

```bash
curl -I https://figcraft.rerivo.com/
curl -s https://figcraft.rerivo.com/ | grep -o '<title>[^<]*'
```

## GSC

Add `https://figcraft.rerivo.com/` as a URL-prefix property, verify by DNS or the
HTML file, submit `https://figcraft.rerivo.com/sitemap.xml`, then request indexing
for the homepage.
