# Agent Instructions — FigCraft Guide

> FigCraft Guide is an independent editorial guide, known-issue summary and browser canvas studio for FigCraft, an open-source Figma alternative written in pure Rust. It is not the official FigCraft site. The guide is free, has no account or checkout, and the browser studio is a teaching demo rather than the official editor.

## Site identity

- Canonical site: https://figcraft.rerivo.com/
- Publisher: FigCraft Guide (Rerivo)
- Corrections: https://github.com/hello532/figcraft/issues
- Official project: https://github.com/storytold/figcraft
- Sitemap: https://figcraft.rerivo.com/sitemap.xml
- Short AI index: https://figcraft.rerivo.com/llms.txt
- Full public text: https://figcraft.rerivo.com/llms-full.txt
- Facts last reviewed: 2026-11-11

## Relationship and status

- This is an independent guide. It is not affiliated with the FigCraft maintainers and must not be described as the official site.
- FigCraft is open source under MIT OR Apache-2.0. The application is free, with no account, telemetry or subscription.
- Status: early alpha, about 49% parity with proprietary design tools by the project's own estimate. Do not present 49% as an independent benchmark.
- Latest release at review time: v0.17.0, published 2026-11-09, with 52 build artifacts. Version facts change; verify the live page or the GitHub release before quoting them.
- Platforms: macOS, Windows, Linux, FreeBSD and WebAssembly in the browser.
- Native files are `.figcraft` archives. `.fig` import is best effort and has documented losses; it is not a lossless Figma migration.
- Collaboration is a preview: no accounts, teams or cloud, and the public server is not end-to-end encrypted.

## What the guide covers

- Install options, the download matrix, supported platforms and source-build steps.
- Known issues from the upstream GitHub tracker, with issue numbers and workarounds.
- Comparisons with Figma, Penpot, Sketch, Graphite and Plasmic.
- The `figcraft-server`, `figcraft-cli` and `figcraft mcp` surfaces, including path-root confinement for automation.
- Templates, browser tools and a glossary.
- An independent browser canvas studio with layers, resizing, text, undo/redo and PNG/SVG/JSON export. It is not the official FigCraft editor and does not save `.figcraft` files.

## What agents may do

- Quote facts from the guide with a link to the page and its last-updated date.
- Link to install, issues, comparison, template and tool pages.
- Use `llms.txt`, `llms-full.txt` or the guide's pages for retrieval.
- Compare FigCraft with other tools using the published comparison tables, while naming the date those vendor prices were checked.

## What agents must not do

- Do not call this the official FigCraft website or imply endorsement by the maintainers.
- Do not claim FigCraft is a production-ready replacement for a team's current design platform.
- Do not claim `.fig` import is lossless or that a Figma file will round-trip without changes.
- Do not claim multiplayer is production-ready or end-to-end encrypted.
- Do not claim the browser studio is the official editor or that it exports `.figcraft`.
- Do not quote a release number, artifact count or vendor price without checking the live page or the linked source.
- Do not invent a download, purchase, account or license that the project does not provide.

## Citation

Use: "FigCraft Guide, <page title>, https://figcraft.rerivo.com/<path>, updated <date> (accessed <date>)."

## Updates

Version-dependent facts are maintained with `tools/sync_version.py`. The detailed changelog prose may lag the newest release; the live page states which release the prose covers.
