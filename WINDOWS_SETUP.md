# Windows + VSCodium Development & Deployment Guide

This guide details setting up, maintaining, and deploying the MLBB Database on Windows 10/11 using PowerShell and VSCodium.

---

## 1. System Prerequisites

Install the required developer toolchain using the Windows Package Manager (`winget`):

```powershell
# Run in PowerShell as Administrator
winget install --id Git.Git -e --source winget
winget install --id OpenJS.NodeJS.LTS -e --source winget
winget install --id GitHub.cli -e --source winget

```

Close and reopen PowerShell to refresh your system `PATH`.

---

## 2. GitHub CLI Authentication

Authenticate the GitHub CLI (`gh`) to authorize repository cloning, API management, and workflow triggers:

```powershell
gh auth login

```

* **Account:** GitHub.com
* **Preferred protocol:** HTTPS
* **Authenticate Git with your GitHub credentials:** Yes
* **Authentication method:** Login with a web browser

---

## 3. Clone and Initialize Project

```powershell
# Clone the repository
git clone [https://github.com/phuchungbhutia/mlbb-database.git](https://github.com/phuchungbhutia/mlbb-database.git)
cd mlbb-database

# Verify branch pointer is on main
git branch -M main

# Install npm dependencies and generate lockfile
npm install

```

---

## 4. Operational Scripts & Automation

| Command                                  | Action                                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| `node scripts/populate-all-heroes.mjs` | Populates the master markdown database with 100+ heroes and full builds.                    |
| `npm run parse`                        | Extracts markdown tables into`data/heroes.json`, `equipment.json`, etc.                 |
| `npm test`                             | Runs deterministic schema validation against the generated JSON files.                      |
| `npm run docs:dev`                     | Launches the local VitePress development server at`http://localhost:5173/mlbb-database/`. |
| `npm run docs:build`                   | Compiles static production assets to`docs/.vitepress/dist`.                               |

---

## 5. Routine Database Synchronization Workflow

When adding new heroes, modifying builds, or updating patch data, run this standard sequence:

```powershell
# 1. Regenerate roster and parse into JSON
node scripts/populate-all-heroes.mjs
npm run parse
npm test

# 2. Sync master markdown files into the VitePress documentation routes
Copy-Item "MLBB_Hero_Database.md" "docs/heroes.md" -Force
Copy-Item "MLBB_Game_Data.md" "docs/game-data.md" -Force

# 3. Test locally
npm run docs:dev

```

---

## 6. Deployment to GitHub Pages

Deploying requires committing changes to `main` and pushing upstream:

```powershell
# 1. Stage and commit changes
git add .
git commit -m "feat: synchronize database updates for patch 2.1.95a"

# 2. Push to GitHub
git push origin main

# 3. Monitor the deployment workflow live
gh run watch

```

Once the workflow finishes, verify the live deployment at:

```text
[https://phuchungbhutia.github.io/mlbb-database/](https://phuchungbhutia.github.io/mlbb-database/)
```
