# ⚔️ Mobile Legends: Bang Bang (MLBB) Structured Database & Meta Hub

[![Live Documentation](https://img.shields.io/badge/Live_Site-GitHub_Pages-22c55e?style=for-the-badge&logo=githubpages&logoColor=white)](https://phuchungbhutia.github.io/mlbb-database/)
[![Patch](https://img.shields.io/badge/Patch-2.1.95a-3b82f6?style=for-the-badge&logo=riotgames&logoColor=white)](https://phuchungbhutia.github.io/mlbb-database/)
[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

<br/>

[![Stars](https://img.shields.io/github/stars/phuchungbhutia/mlbb-database?style=social)](https://github.com/phuchungbhutia/mlbb-database/stargazers)
[![Forks](https://img.shields.io/github/forks/phuchungbhutia/mlbb-database?style=social)](https://github.com/phuchungbhutia/mlbb-database/network/members)
[![Issues](https://img.shields.io/github/issues/phuchungbhutia/mlbb-database?color=ef4444)](https://github.com/phuchungbhutia/mlbb-database/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/phuchungbhutia/mlbb-database?color=10b981)](https://github.com/phuchungbhutia/mlbb-database/pulls)

<p align="center">
  <b>A deterministic, machine-readable MLBB game knowledge base and live static documentation engine.</b><br/>
  Designed for esports theorycrafters, automated data pipelines, RAG ingestion, and competitive drafting analysis.
</p>

[🌐 Live Site](https://phuchungbhutia.github.io/mlbb-database/) • [🪟 Windows Setup](WINDOWS_SETUP.md) • [🔧 Troubleshooting](TROUBLESHOOTING.md) • [📝 Update Database](https://phuchungbhutia.github.io/mlbb-database/update-database)

---

### 📈 Repository Traffic & Analytics

<img src="https://github-readme-stats.vercel.app/api/pin/?username=phuchungbhutia&repo=mlbb-database&theme=github_dark&show_owner=true" alt="Repository Pin" />

<br/>

<img src="https://komarev.com/ghpvc/?username=phuchungbhutia-mlbb-database&label=DATABASE+HITS&color=0e7490&style=flat-square" alt="Database Hits" />

</div>

---

## 📂 Project Architecture

| File / Folder                                                                          | Purpose                                                                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [🌐 **GitHub Pages Web Portal**](https://phuchungbhutia.github.io/mlbb-database/) | Fast VitePress static site with local instant search (`Ctrl + K`).                                  |
| [🪟 **`WINDOWS_SETUP.md`**](WINDOWS_SETUP.md)                                   | Complete step-by-step setup guide for Windows, PowerShell, and VSCodium.                              |
| [🔧 **`TROUBLESHOOTING.md`**](TROUBLESHOOTING.md)                               | Incident logs covering Git mismatches, build errors, Pages 404s, and Vue compilation.                 |
| [📜 **`MLBB_Hero_Database.md`**](MLBB_Hero_Database.md)                         | Canonical source for 100+ hero kits, skill interactions, item paths, and draft counters.              |
| [⚔️ **`MLBB_Game_Data.md`**](MLBB_Game_Data.md)                               | Master reference for equipment passives, emblem systems, spells, and patch notes.                     |
| [📁 **`data/`**](data/)                                                         | Machine-readable JSON files (`heroes.json`, `equipment.json`, `emblems.json`, `spells.json`). |
| [⚙️ **`scripts/`**](scripts/)                                                 | Automation scripts for Markdown table parsing, validation, and full roster generation.                |
| [🖥️ **`docs/`**](docs/)                                                       | VitePress markdown pages and reactive Vue components (`HeroExplorer.vue`, `DatabaseEditor.vue`).  |

---

## ⚡ Quick Start (Local Development)

For detailed walkthroughs and prerequisites, read the [Windows Setup Guide](WINDOWS_SETUP.md).

```powershell
# 1. Clone repository
git clone [https://github.com/phuchungbhutia/mlbb-database.git](https://github.com/phuchungbhutia/mlbb-database.git)
cd mlbb-database

# 2. Install dependencies
npm install

# 3. Generate roster, parse markdown into JSON, and run validation
node scripts/populate-all-heroes.mjs
npm run parse
npm test

# 4. Start local development server
npm run docs:dev

```

---

## 🔄 Automated CI/CD Lifecycle

Every push to the `main` branch triggers an automated GitHub Actions deployment workflow (`.github/workflows/deploy-pages.yml`):

```
 Git Push (main)
       │
       ▼
 npm ci (Clean Install)
       │
       ▼
 npm run parse (Markdown ──▶ JSON extraction)
       │
       ▼
 npm test (Schema & entity validation)
       │
       ▼
 npm run docs:build (VitePress static compilation)
       │
       ▼
 GitHub Pages CDN Deployment

```

---

## 🛡️ License

Distributed under the [MIT License](https://www.google.com/search?q=LICENSE). Mobile Legends: Bang Bang is a registered trademark of Moonton Games.
