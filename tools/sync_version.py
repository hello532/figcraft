#!/usr/bin/env python3
"""
Keep the version-dependent parts of the guide in sync with storytold/figcraft's
latest GitHub release.

    python3 tools/sync_version.py            # dry run: show what would change
    python3 tools/sync_version.py --check    # CI: exit 1 if a factual slot is stale
    python3 tools/sync_version.py --apply    # rewrite the factual slots
    python3 tools/sync_version.py --check --strict   # also exit 1 on editorial debt

WHY THERE ARE TWO CLASSES OF VERSION REFERENCE
------------------------------------------------
"FigCraft v0.9.0" appears in two very different senses, and treating them the
same is how a version-number sync starts lying:

  FACTUAL   - a claim about what the newest release *is*.
              "Latest release: v0.9.0 - 2026-10-21", the AppImage filename in a
              copy-pasteable command, softwareVersion in JSON-LD, how many
              build artifacts the release has. These are facts about the world.
              They can and should be injected from the release API.

  EDITORIAL - a claim about what *our prose describes*.
              "What's new in FigCraft 0.9.0" heads a section that walks through
              the 0.9.0 changelog; "Covers FigCraft v0.9.0" says which release
              this guide was written against; "fixed in 0.9.0" ties an issue to
              the build that fixed it; "aarch64 dropped as of v0.9.0" is a
              historical fact about when something happened.

Bumping an editorial slot without rewriting the prose under it produces a page
that states a falsehood with total confidence: a "What's new in v0.10.0" heading
over a 0.9.0 changelog, or an issue described as "fixed in 0.10.0" when it was
fixed three releases ago. So this script injects the factual slots and *reports*
the editorial ones. It never guesses at prose.

The staleness gap between the two is surfaced rather than hidden: when the guide
covers v0.9.0 and the project has shipped v0.10.0, --check says so, names the
prose that needs a human, and posts the same message as a CI run annotation and
to the run summary. That is a deliberate, visible piece of editorial debt, not
something to paper over.

WHAT FAILS THE BUILD
--------------------
Only factual staleness fails --check. A factual slot is out of date exactly when
the page states a release number, a date, an artifact count or a filename that
the project never published, and in that window the page is saying something
false to readers. Editorial drift means the prose names an older release than
the newest one; that is honest but lagging, and somebody has to rewrite a
changelog section to close it. Making it fail too is how this check became a
permanent red light that got ignored for weeks. So it warns, loudly and in the
run summary, and --strict (for a human running this before a release) restores
the old fail-on-anything behaviour.

SAFETY
------
Every rule declares how many times its pattern must match. A rule that matches
the wrong number of times is a hard error, never a silent skip -- so editing the
HTML in a way that breaks a pattern fails loudly instead of quietly leaving a
stale number on the page. Editorial patterns are asserted to be *unchanged* by
--apply, which is what stops a future edit to this script from quietly
rewriting prose.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REPO = "storytold/figcraft"
API = f"https://api.github.com/repos/{REPO}/releases/latest"

# --------------------------------------------------------------------------
# Factual slots: injected from the release API.
#
# Each rule is (file, regex, expected match count, replacement).
# {ver} {date} {builds} are substituted from the API response.
# --------------------------------------------------------------------------
FACTUAL = [
    (
        "index.html",
        r"<dd>v\d+\.\d+\.\d+ · \d{4}-\d{2}-\d{2}</dd>",
        1,
        "<dd>v{ver} · {date}</dd>",
    ),
    # Twice: the #get-started body and the matching HowTo step in JSON-LD.
    (
        "index.html",
        r"v\d+\.\d+\.\d+ publishes \d+ build artifacts",
        2,
        "v{ver} publishes {builds} build artifacts",
    ),
    # Twice on the home page (body + HowTo), twice on /install/.
    (
        "index.html",
        r"figcraft-\d+\.\d+\.\d+-linux-x86_64\.AppImage",
        2,
        "figcraft-{ver}-linux-x86_64.AppImage",
    ),
    (
        "install/index.html",
        r"figcraft-\d+\.\d+\.\d+-linux-x86_64\.AppImage",
        2,
        "figcraft-{ver}-linux-x86_64.AppImage",
    ),
    (
        "index.html",
        r'"softwareVersion":"\d+\.\d+\.\d+"',
        1,
        '"softwareVersion":"{ver}"',
    ),
]

# --------------------------------------------------------------------------
# Editorial slots: reported, never rewritten.
#
# These describe which release the guide's prose is about, or record when
# something historically happened. Updating them is an editorial act.
# --------------------------------------------------------------------------
EDITORIAL = [
    ("index.html", r"Covers FigCraft v\d+\.\d+\.\d+", 1),
    ("index.html", r"covers FigCraft v\d+\.\d+\.\d+", 1),
    ("index.html", r"What's new in FigCraft \d+\.\d+\.\d+", 1),
    ("index.html", r"Released \d{4}-\d{2}-\d{2}\.", 1),
    ("index.html", r"releases/tag/v\d+\.\d+\.\d+", 1),
    ("index.html", r"v\d+\.\d+\.\d+ release</a>", 1),
    ("index.html", r"early alpha, about \d+% parity", 1),
    ("index.html", r"v\d+\.\d+\.\d+ \(\d{4}-\d{2}-\d{2}\), early alpha", 1),
    ("index.html", r"dropped as of v\d+\.\d+\.\d+", 1),
    ("index.html", r"dropped in v\d+\.\d+\.\d+", 2),
    ("install/index.html", r"as of v\d+\.\d+\.\d+", 3),
    ("install/index.html", r"dropped as of v\d+\.\d+\.\d+", 2),
    ("issues/index.html", r"What's new in FigCraft \d+\.\d+\.\d+", 1),
    ("issues/index.html", r"Released \d{4}-\d{2}-\d{2}\.", 1),
    ("issues/index.html", r"releases/tag/v\d+\.\d+\.\d+", 1),
    ("issues/index.html", r"v\d+\.\d+\.\d+ release</a>", 1),
    ("issues/index.html", r"fixed in \d+\.\d+\.\d+", 4),
    ("issues/index.html", r"dropped as of v\d+\.\d+\.\d+", 1),
    ("vs-figma/index.html", r"as of v\d+\.\d+\.\d+", 1),
    ("llms-full.txt", r"Covers: FigCraft v\d+\.\d+\.\d+", 1),
    ("llms-full.txt", r"releases/tag/v\d+\.\d+\.\d+", 1),
    ("llms-full.txt", r"Latest release covered here: v\d+\.\d+\.\d+", 1),
    ("llms-full.txt", r"dropped as of v\d+\.\d+\.\d+", 1),
]

# Facts that rot for reasons other than the version number. No API to read them
# from, so they need a human on a schedule.
WATCH = [
    ("index.html", r"early alpha, about \d+% parity",
     "parity percentage is the project's own estimate and moves independently"),
    ("index.html", r"~49%",
     "parity figure appears in the hero, meta description and og:description"),
]


class Stale(Exception):
    """A rule did not match the number of times it promised."""


def fetch_latest(token: str | None = None) -> dict:
    """Return the latest release as {ver, date, builds, tag, url}."""
    req = urllib.request.Request(
        API,
        headers={
            "Accept": "application/vnd.github+json",
            # GitHub rejects requests with no User-Agent.
            "User-Agent": "figcraft-guide-version-sync",
            **({"Authorization": f"Bearer {token}"} if token else {}),
        },
    )
    with urllib.request.urlopen(req, timeout=30) as res:
        data = json.load(res)

    assets = [a["name"] for a in data.get("assets", [])]
    checksums = [a for a in assets if a.upper().startswith("SHA256SUMS")]
    builds = len(assets) - len(checksums)

    return {
        "ver": data["tag_name"].lstrip("v"),
        "tag": data["tag_name"],
        "date": data["published_at"][:10],
        "builds": builds,
        "url": data["html_url"],
    }


def substitute(text: str, pattern: str, replacement: str, expected: int, fields: dict) -> str:
    found = len(re.findall(pattern, text))
    if found != expected:
        raise Stale(
            f"expected {expected} match(es) for {pattern!r}, found {found}\n"
            f"    the HTML moved under this rule -- update the rule, do not skip it"
        )
    return re.sub(pattern, replacement.format(**fields), text)


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


def write(rel: str, text: str) -> None:
    (ROOT / rel).write_text(text, encoding="utf-8")


def covered_version() -> str | None:
    """Which release the guide's prose is written against."""
    m = re.search(r"Covers FigCraft v(\d+\.\d+\.\d+)", read("index.html"))
    return m.group(1) if m else None


def annotate(title: str, message: str) -> None:
    """Make a finding visible in CI without failing the run.

    GitHub renders a `::warning` line as an annotation on the run and appends
    $GITHUB_STEP_SUMMARY to the run's front page. Both are no-ops outside
    Actions, where the plain print is the whole report.
    """
    if os.environ.get("GITHUB_ACTIONS"):
        print(f"::warning title={title}::{message}")
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        with open(summary, "a", encoding="utf-8") as fh:
            fh.write(f"### {title}\n\n{message}\n\n")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    mode = ap.add_mutually_exclusive_group()
    mode.add_argument("--check", action="store_true", help="report only; exit 1 if a factual slot is stale")
    mode.add_argument("--apply", action="store_true", help="rewrite the factual slots")
    ap.add_argument(
        "--strict",
        action="store_true",
        help="with --check: also exit 1 when the prose still describes an older release",
    )
    ap.add_argument("--token", default=os.environ.get("GITHUB_TOKEN"), help="raise the API rate limit")
    args = ap.parse_args()

    try:
        rel = fetch_latest(args.token)
    except (urllib.error.URLError, OSError, KeyError, json.JSONDecodeError) as exc:
        # A flaky network must never block a deploy, so this is a warning, not
        # a failure. Exit 0 and say plainly that nothing was verified.
        print(f"! could not reach the GitHub API ({exc}); nothing was verified")
        return 0

    covered = covered_version()
    print(f"latest release : {rel['tag']} ({rel['date']}), {rel['builds']} build artifacts")
    print(f"guide covers   : v{covered}" if covered else "guide covers   : unknown")

    changed = []
    factual_stale = False
    for rel_path, pattern, expected, replacement in FACTUAL:
        before = read(rel_path)
        after = substitute(before, pattern, replacement, expected, rel)
        if before != after:
            changed.append(rel_path)
            if args.apply:
                write(rel_path, after)

    # A stale factual slot is a failure in its own right: it means the page
    # states a version the project never published, which is worse than saying
    # nothing. In --check mode that is reported alongside the editorial debt
    # rather than instead of it -- during a real version bump the factual slots
    # are always out of date until --apply runs, so returning here would hide
    # the message that actually tells the operator what to do.
    if changed and args.check:
        print(
            f"\nFACTUAL SLOTS OUT OF DATE: these files do not yet name {rel['tag']}:\n"
            f"  {', '.join(sorted(set(changed)))}\n"
            f"Run 'python3 tools/sync_version.py --apply' to correct them."
        )
        factual_stale = True

    # Editorial slots must survive --apply byte-for-byte. This is the guard that
    # keeps a future edit to this script from rewriting prose.
    for rel_path, pattern, expected in EDITORIAL:
        substitute(read(rel_path), pattern, r"\g<0>", expected, {})

    for rel_path, pattern, why in WATCH:
        n = len(re.findall(pattern, read(rel_path)))
        if n:
            print(f"watch          : {pattern} x{n} -- {why}")

    if changed and args.apply:
        print(f"\nfactual slots updated in: {', '.join(sorted(set(changed)))}")
    elif not changed:
        print("\nfactual slots already current")

    drift = covered is not None and covered != rel["ver"]
    if drift:
        slots = sum(len(re.findall(p, read(f))) for f, p, _ in EDITORIAL)
        factual_note = (
            "--apply has already closed the factual slots; only the prose lags."
            if not changed
            else "The factual slots are also out of date, and --apply will close those."
        )
        print(
            f"\nEDITORIAL DEBT: the guide describes v{covered} but the project has shipped "
            f"{rel['tag']}.\n"
            f"{slots} editorial slot(s) still reference v{covered}. These need a human:\n"
            f"  - rewrite 'What's new in FigCraft {covered}' against the {rel['tag']} notes\n"
            f"    ({rel['url']})\n"
            f"  - decide whether 'fixed in {covered}' and 'dropped as of {covered}' are\n"
            f"    still the right versions to cite\n"
            f"  - bump 'Covers FigCraft v{covered}' and llms-full.txt once the prose is true\n"
            f"{factual_note}"
        )
        annotate(
            "Editorial debt",
            f"{slots} editorial slot(s) still describe v{covered}; the latest release is "
            f"{rel['tag']} ({rel['url']}). Closing this means rewriting the release prose. "
            f"{factual_note}",
        )
    elif args.check:
        print("\nOK: the guide is in sync with the latest release")

    if not args.check:
        return 0
    # Factual staleness always fails: the page is asserting something untrue.
    # Editorial drift fails only under --strict: prose naming an older release
    # is lagging, not false, and a check that stays red until somebody rewrites
    # a changelog section stays red forever.
    return 1 if (factual_stale or (args.strict and drift)) else 0


if __name__ == "__main__":
    sys.exit(main())
