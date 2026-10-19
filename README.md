# figcraft.rerivo.com · D0

Single-page D0 for the radar term `figcraft` (2026-10-19). No login, no payment.
The demo canvas is self-contained; the page is static and has no build step.

## Deploy (GitHub Pages)

```bash
git init
git add .
git commit -m "figcraft D0"
gh repo create hello532/figcraft --public --source=. --remote=origin --push
gh api -X POST repos/hello532/figcraft/pages -f 'source[branch]=main' -f 'source[path]=/'
```

GitHub Pages reads `CNAME` and serves `https://figcraft.rerivo.com/` once DNS points there.

## DNS (Cloudflare)

Add a CNAME record:

| Name | Type | Target | Proxy |
|---|---|---|---|
| figcraft | CNAME | hello532.github.io | DNS only (grey cloud) first |

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
