# Troubleshooting & Incident Resolution Playbook

This document catalogs real-world setup, Git branching, CI/CD pipeline, and VitePress rendering issues encountered while developing and deploying the MLBB Database on Windows using VSCodium.

---

## Quick Reference Index

- [Troubleshooting \& Incident Resolution Playbook](#troubleshooting--incident-resolution-playbook)
  - [Quick Reference Index](#quick-reference-index)
  - [1. Git Branch Mismatch (`src refspec main does not match any`)](#1-git-branch-mismatch-src-refspec-main-does-not-match-any)
    - [Symptom](#symptom)
    - [Root Cause](#root-cause)
    - [Resolution](#resolution)
  - [2. Remote Branch Split (`merge: master - not something we can merge`)](#2-remote-branch-split-merge-master---not-something-we-can-merge)
    - [Symptom](#symptom-1)
    - [Root Cause](#root-cause-1)
    - [Resolution](#resolution-1)
  - [3. CI Pipeline Failure: Missing `package-lock.json` in `npm ci`](#3-ci-pipeline-failure-missing-package-lockjson-in-npm-ci)
    - [Symptom](#symptom-2)
    - [Root Cause](#root-cause-2)
    - [Resolution](#resolution-2)
  - [4. GitHub Pages 404: Mismatched Deployment Source (`master` vs `workflow`)](#4-github-pages-404-mismatched-deployment-source-master-vs-workflow)
    - [Symptom](#symptom-3)
    - [Root Cause](#root-cause-3)
    - [Resolution](#resolution-3)
  - [5. Raw Frontmatter Rendered on Home Page (`layout: home` visible)](#5-raw-frontmatter-rendered-on-home-page-layout-home-visible)
    - [Symptom](#symptom-4)
    - [Root Cause](#root-cause-4)
    - [Resolution](#resolution-4)
  - [6. VitePress Vue SFC Compile Error in Markdown (`Element is missing end tag`)](#6-vitepress-vue-sfc-compile-error-in-markdown-element-is-missing-end-tag)
    - [Symptom](#symptom-5)
    - [Root Cause](#root-cause-5)
    - [Resolution](#resolution-5)
  - [7. Meta Explorer Showing Fallback / Generic Builds](#7-meta-explorer-showing-fallback--generic-builds)
    - [Symptom](#symptom-6)
    - [Root Cause](#root-cause-6)
    - [Resolution](#resolution-6)
  - [8. Config Syntax Error: Missing Comma in Nav/Sidebar (`Expected "]" but found "{"`)](#8-config-syntax-error-missing-comma-in-navsidebar-expected--but-found-)
    - [Symptom](#symptom-7)
    - [Root Cause](#root-cause-7)
    - [Resolution](#resolution-7)
  - [9. Client-Side Browser Caching Masking Deployments](#9-client-side-browser-caching-masking-deployments)
    - [Symptom](#symptom-8)
    - [Root Cause](#root-cause-8)
    - [Resolution](#resolution-8)

---

## 1. Git Branch Mismatch (`src refspec main does not match any`)

### Symptom

Running `git push origin main` produces:

```text
error: src refspec main does not match any
error: failed to push some refs to '[https://github.com/phuchungbhutia/mlbb-database.git](https://github.com/phuchungbhutia/mlbb-database.git)'

```

### Root Cause

The local repository was initialized on the legacy `master` branch and has not yet established an initial commit, or the local branch reference has not been renamed to `main`.

### Resolution

```powershell
git add .
git commit -m "feat: initial commit"
git branch -M main
git push -u origin main

```

---

## 2. Remote Branch Split (`merge: master - not something we can merge`)

### Symptom

Running `git merge master` produces:

```text
merge: master - not something we can merge
Did you mean this?
        origin/master

```

### Root Cause

GitHub created the initial remote repository with an `origin/master` branch containing a default `README.md` or `.gitignore`, while the local development continued on `main`.

### Resolution

```powershell
git fetch origin
git merge origin/master --allow-unrelated-histories -m "chore: merge remote master into main"
git push -u origin main
gh repo edit --default-branch main

```

---

## 3. CI Pipeline Failure: Missing `package-lock.json` in `npm ci`

### Symptom

GitHub Actions fails at the `Install Dependencies (npm ci)` step with error code `ENOENT`:

```text
npm error code ENOENT
npm error syscall open
npm error path /home/runner/work/mlbb-database/mlbb-database/package-lock.json
npm error enoent Could not read package-lock.json

```

### Root Cause

`npm ci` requires an exact `package-lock.json` checked into Git for deterministic, reproducible builds. Local `npm install` generated the file, but it was excluded or untracked.

### Resolution

```powershell
npm install --package-lock-only
git add package-lock.json
git commit -m "fix: add package-lock.json for CI"
git push origin main

```

---

## 4. GitHub Pages 404: Mismatched Deployment Source (`master` vs `workflow`)

### Symptom

GitHub Actions runs show green checkmarks (`✓`), but navigating to the site results in:

```text
404: Page not found
Sorry, we've misplaced that URL or it's pointing to something that doesn't exist.

```

Checking via CLI (`gh api repos/phuchungbhutia/mlbb-database/pages`) reveals:

```json
{
  "build_type": "workflow",
  "source": { "branch": "master", "path": "/" },
  "status": null
}

```

### Root Cause

GitHub Pages retains an internal legacy binding looking for flat HTML files on the `master` branch, ignoring the VitePress build artifact uploaded from the `main` branch.

### Resolution

1. Open settings in your browser:

```powershell
gh browse --settings

```

2. Navigate to **Pages** $\rightarrow$ **Build and deployment** $\rightarrow$ **Source**.
3. Toggle the dropdown to **GitHub Actions** (if already selected, toggle to "Deploy from a branch", save, and switch back to "GitHub Actions" to force a state reset).
4. Remove the stale remote `master` pointer:

```powershell
git push origin --delete master

```

5. Trigger a fresh deployment:

```powershell
gh workflow run deploy-pages.yml
gh run watch

```

---

## 5. Raw Frontmatter Rendered on Home Page (`layout: home` visible)

### Symptom

The home page renders raw text strings on screen (`layout: home hero: name: ...`) rather than the formatted VitePress banner.

### Root Cause

The YAML frontmatter in `docs/index.md` was missing its bounding triple hyphens (`---`) at line 1, column 1, or had whitespace/blank lines preceding it.

### Resolution

Ensure line 1 starts strictly with `---`:

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

```

---

## 6. VitePress Vue SFC Compile Error in Markdown (`Element is missing end tag`)

### Symptom

During `npm run docs:dev` or `docs:build`:

```text
[plugin:vite:vue] Element is missing end tag.
C:/Users/.../docs/explorer.md:92:7
92 | <tr v-for="item in filteredHeroes" :key="item.id">

```

### Root Cause

VitePress compiles Markdown through a dual Markdown-it and Vue template parser. Complex reactive tables containing inline tags, unescaped angle brackets, or emojis can break the AST parser when embedded directly in a `.md` file.

### Resolution

Extract complex reactive templates into a standalone Vue Single File Component:

1. Place logic in `docs/.vitepress/components/HeroExplorer.vue`.
2. In `docs/explorer.md`, simply import and mount the component:

```markdown
# Interactive Meta Explorer

<script setup>
import HeroExplorer from './.vitepress/components/HeroExplorer.vue'
</script>

<HeroExplorer/>

```

---

## 7. Meta Explorer Showing Fallback / Generic Builds

### Symptom

The explorer displays hero rows, but all item columns render `"Standard Build"`, spells show `"Flexible"`, and emblems show `"Standard"`.

### Root Cause

The parser script (`scripts/parse-markdown.mjs`) was only reading the top-level index table (`## Hero Master Index`), which does not contain gear columns.

### Resolution

Update `scripts/parse-markdown.mjs` to parse both the summary index and the individual profile sections (`### X. HeroName (ID: ...)`), merging the `Core Items`, `Optimal Emblem Tree`, and `Battle Spells` fields into `data/heroes.json`.

---

## 8. Config Syntax Error: Missing Comma in Nav/Sidebar (`Expected "]" but found "{"`)

### Symptom

`npm run docs:dev` fails immediately with:

```text
docs/.vitepress/config.mjs:22:10: ERROR: Expected "]" but found "{"
failed to load config from docs/.vitepress/config.mjs

```

### Root Cause

A missing comma `,` separating array elements inside `nav` or `sidebar` in `docs/.vitepress/config.mjs`.

### Resolution

Verify proper object separation in `docs/.vitepress/config.mjs`:

```javascript
nav: [
  { text: 'Home', link: '/' },
  { text: 'Hero Profiles', link: '/heroes' },
  { text: 'Equipment & Mechanics', link: '/game-data' },
  { text: 'Interactive Explorer', link: '/explorer' },
  { text: 'Update Database', link: '/update-database' } // Ensure previous entry ends with a comma
],

```

---

## 9. Client-Side Browser Caching Masking Deployments

### Symptom

The GitHub Actions workflow succeeds, but refreshing the browser still displays an old version or a cached 404 page.

### Root Cause

VitePress registers progressive service workers and caches static route payloads aggressively.

### Resolution

* Execute a hard cache bypass: press **`Ctrl + F5`** or **`Ctrl + Shift + R`**.
* Test in an **InPrivate / Incognito** window.
* Verify the edge server response via terminal:

```powershell
curl.exe -I [https://phuchungbhutia.github.io/mlbb-database/](https://phuchungbhutia.github.io/mlbb-database/)
```
