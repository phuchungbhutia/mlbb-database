
# Troubleshooting & Incident Resolution Log

This document catalogs every real-world setup, Git branching, CI/CD pipeline, and VitePress rendering error encountered while building and deploying this repository on Windows with VSCodium, along with their root causes and verified resolutions.

---

## Table of Contents

- [1. Git Branch Mismatch (`src refspec main does not match any`)](#1-git-branch-mismatch-src-refspec-main-does-not-match-any)
- [2. Remote Branch Split (`merge: master - not something we can merge`)](#2-remote-branch-split-merge-master---not-something-we-can-merge)
- [3. CI Pipeline Failure: Missing `package-lock.json` in `npm ci`](#3-ci-pipeline-failure-missing-package-lockjson-in-npm-ci)
- [4. GitHub Pages 404: Mismatched Deployment Source (`master` vs `workflow`)](#4-github-pages-404-mismatched-deployment-source-master-vs-workflow)
- [5. Raw Frontmatter Rendered on Home Page (`layout: home` visible)](#5-raw-frontmatter-rendered-on-home-page-layout-home-visible)
- [6. Local VitePress vs Primary Markdown Out-of-Sync](#6-local-vitepress-vs-primary-markdown-out-of-sync)
- [7. Client-Side Browser Caching Masking Deployments](#7-client-side-browser-caching-masking-deployments)

---

## 1. Git Branch Mismatch (`src refspec main does not match any`)

### Symptom

Running `git push origin main` fails with:

```text
error: src refspec main does not match any
error: failed to push some refs to '[https://github.com/username/mlbb-database.git](https://github.com/username/mlbb-database.git)'

```

### Root Cause

Git has not created any commits yet, or the local default branch is still named `master` while trying to push to `main`. Git cannot push a ref (branch pointer) that does not exist locally.

### Resolution

Ensure your working tree is committed, rename the local branch pointer explicitly to `main`, and push setting the upstream target:

```powershell
git add .
git commit -m "feat: initial commit"
git branch -M main
git push -u origin main

```

---

## 2. Remote Branch Split (`merge: master - not something we can merge`)

### Symptom

Running `git merge master` returns:

```text
merge: master - not something we can merge
Did you mean this?
        origin/master

```

### Root Cause

The remote GitHub repository was initialized with an `origin/master` branch, while the local environment worked on `main`. The local repository had no local tracking branch named `master`.

### Resolution

Fetch the remote tree, merge `origin/master` into your local `main` branch allowing unrelated histories, and switch GitHub's default repository branch via CLI:

```powershell
git fetch origin
git merge origin/master --allow-unrelated-histories -m "merge remote master into main"
git push -u origin main
gh repo edit --default-branch main

```

---

## 3. CI Pipeline Failure: Missing `package-lock.json` in `npm ci`

### Symptom

GitHub Actions fails at the step `Install Dependencies (npm ci)` with exit code 1:

```text
npm error code ENOENT
npm error syscall open
npm error path /home/runner/work/mlbb-database/mlbb-database/package-lock.json
npm error errno -2
npm error enoent Could not read package-lock.json: ENOENT: no such file or directory

```

### Root Cause

The CI runner uses `npm ci` (clean install), which strictly requires `package-lock.json` committed to the repository for reproducible builds. Running `npm install` locally generated `node_modules`, but `package-lock.json` was not staged or committed.

### Resolution

Generate the lockfile without reinstalling dependencies, stage it, and push:

```powershell
npm install --package-lock-only
git add package-lock.json
git commit -m "fix: add package-lock.json for CI"
git push origin main

```

---

## 4. GitHub Pages 404: Mismatched Deployment Source (`master` vs `workflow`)

### Symptom

The deployment workflow passes with green checkmarks, but visiting `https://username.github.io/mlbb-database/` returns:

```text
404: Page not found
Sorry, we've misplaced that URL or it's pointing to something that doesn't exist.

```

Checking Pages configuration via API (`gh api repos/username/mlbb-database/pages`) shows:

```json
"build_type": "workflow",
"source": {
  "branch": "master",
  "path": "/"
}

```

### Root Cause

GitHub Pages retained its legacy configuration looking for static HTML files in the root of the `master` branch, ignoring the generated VitePress tarball artifact uploaded by GitHub Actions.

### Resolution

Force the GitHub Pages API to decouple from branch deployment and bind strictly to the Actions workflow artifact:

```powershell
gh api -X PUT repos/phuchungbhutia/mlbb-database/pages -f build_type=workflow
gh workflow run deploy-pages.yml
gh run watch

```

*(Also ensure `docs/.vitepress/config.mjs` contains `base: '/mlbb-database/'` with both leading and trailing slashes).*

---

## 5. Raw Frontmatter Rendered on Home Page (`layout: home` visible)

### Symptom

The home page renders raw YAML text on screen instead of a formatted hero landing page:

```text
layout: home hero: name: "MLBB Database & Meta Hub" text: "Original Server Patch 2.1.95a" ...

```

### Root Cause

The YAML frontmatter in `docs/index.md` was missing its bounding triple-hyphen delimiters (`---`), or had preceding whitespace/empty lines before line 1. VitePress only recognizes YAML metadata when the file starts strictly at line 1, column 1 with `---`.

### Resolution

Rewrite `docs/index.md` ensuring clean UTF-8 delimiters:

```powershell
@'
---
layout: home

hero:
  name: "MLBB Database & Meta Hub"
  text: "Original Server Patch 2.1.95a"
  tagline: "High-level esports analysis, mathematical stat scaling, and gear synergies."
  actions:
    - theme: brand
      text: Browse Heroes
      link: /heroes
    - theme: alt
      text: Search Items & Spells
      link: /game-data

features:
  - title: "Deterministic Math & Synergies"
    details: "Every hero build features item-by-item interaction logic based on exact skill scalings."
  - title: "Live Patch Alignment"
    details: "Strictly isolated from Advance Server noise. Fully verified on current patch 2.1.95a."
  - title: "Local Instant Search"
    details: "Press Ctrl+K anywhere on the site to query any hero, passive, or equipment passive."
---
'@ | Set-Content -Path "docs/index.md" -Encoding utf8
git add docs/index.md
git commit -m "fix: restore yaml frontmatter delimiters in index.md"
git push origin main

```

---

## 6. Local VitePress vs Primary Markdown Out-of-Sync

### Symptom

Edits made to `MLBB_Hero_Database.md` or `MLBB_Game_Data.md` in the root folder do not show up when visiting `/heroes` or `/game-data` on the site.

### Root Cause

VitePress serves documentation strictly from the `docs/` directory (`docs/heroes.md` and `docs/game-data.md`). Modifying root files does not automatically update files under `docs/`.

### Resolution

Copy the root files into `docs/` before building or pushing:

```powershell
Copy-Item "MLBB_Hero_Database.md" "docs/heroes.md" -Force
Copy-Item "MLBB_Game_Data.md" "docs/game-data.md" -Force
git add docs/
git commit -m "docs: sync primary database to vitepress routes"
git push origin main

```

---

## 7. Client-Side Browser Caching Masking Deployments

### Symptom

A fix has deployed on GitHub Actions, but the browser continues serving an outdated page or cached 404 screen.

### Root Cause

VitePress uses aggressive service worker caching and static asset hashing. Standard browser refreshes reload from cache rather than requesting the updated edge CDN assets.

### Resolution

* **Windows / VSCodium Integrated Browsers:** Press `Ctrl + F5` or `Ctrl + Shift + R` to force an unconditional HTTP cache bypass.
* **Alternative:** Test in an **Incognito / InPrivate Window** or verify raw HTTP responses directly:

```powershell
curl.exe -I [https://phuchungbhutia.github.io/mlbb-database/](https://phuchungbhutia.github.io/mlbb-database/)

```
