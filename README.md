# ⚔️ Mobile Legends: Bang Bang (MLBB) Structured Database

[![Live Documentation](https://img.shields.io/badge/Live_Site-GitHub_Pages-22c55e?style=for-the-badge&logo=githubpages&logoColor=white)](https://phuchungbhutia.github.io/mlbb-database/)
[![Patch](https://img.shields.io/badge/Patch-2.1.95a-3b82f6?style=for-the-badge&logo=riotgames&logoColor=white)](https://mlbbhub.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

<br/>

[![Stars](https://img.shields.io/github/stars/phuchungbhutia/mlbb-database?style=social)](https://github.com/phuchungbhutia/mlbb-database/stargazers)
[![Forks](https://img.shields.io/github/forks/phuchungbhutia/mlbb-database?style=social)](https://github.com/phuchungbhutia/mlbb-database/network/members)
[![Watchers](https://img.shields.io/github/watchers/phuchungbhutia/mlbb-database?style=social)](https://github.com/phuchungbhutia/mlbb-database/watchers)
[![Issues](https://img.shields.io/github/issues/phuchungbhutia/mlbb-database?color=ef4444)](https://github.com/phuchungbhutia/mlbb-database/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/phuchungbhutia/mlbb-database?color=10b981)](https://github.com/phuchungbhutia/mlbb-database/pulls)

<p align="center">
  <b>A machine-readable, deterministic MLBB knowledge base and live documentation blog.</b><br/>
  Optimized for esports analysts, theorycrafters, AI/RAG knowledge retrieval, and web tools.
</p>

[🌐 Visit Live Searchable Database](https://phuchungbhutia.github.io/mlbb-database/) • [🪟 Windows Setup Guide](WINDOWS_SETUP.md) • [🔧 Troubleshooting Guide](TROUBLESHOOTING.md) • [📊 Data Files](data/)

---

### 📈 Repository Analytics & Metrics

<img src="https://github-readme-stats.vercel.app/api/pin/?username=phuchungbhutia&repo=mlbb-database&theme=github_dark&show_owner=true" alt="Repository Pin" />

<br/>

<img src="https://komarev.com/ghpvc/?username=phuchungbhutia-mlbb-database&label=DATABASE+VIEWS&color=0e7490&style=flat-square" alt="Database Views" />

</div>

---

## 📂 Repository Contents

| File / Link                                                                           | Description                                                                                          |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [🌐 **Live GitHub Pages Site**](https://phuchungbhutia.github.io/mlbb-database/) | Fast static documentation blog with local client-side instant search (`Ctrl + K`).                 |
| [🪟 **`WINDOWS_SETUP.md`**](WINDOWS_SETUP.md)                                  | Step-by-step setup, dependency installation, local dev, and deployment on Windows.                   |
| [🔧 **`TROUBLESHOOTING.md`**](TROUBLESHOOTING.md)                              | Resolution logs for branch mismatches, CI lockfile failures, Pages 404s, and YAML rendering.         |
| [📜 **`MLBB_Hero_Database.md`**](MLBB_Hero_Database.md)                        | Hero master index, detailed kits, skill synergies, full builds, and matchups.                        |
| [⚔️ **`MLBB_Game_Data.md`**](MLBB_Game_Data.md)                              | Complete equipment indices, passive triggers, emblem trees, battle spells, and patch archive.        |
| [📁 **`data/`**](data/)                                                        | Machine-readable JSON files parsed from Markdown tables (`heroes.json`, `equipment.json`, etc.). |
| [⚙️ **`scripts/`**](scripts/)                                                | Lightweight zero-dependency Node.js parsers and schema validation suites.                            |

---

## 🚀 Quick Execution (Windows + VSCodium)

For detailed walkthroughs, refer to the [Windows Setup Guide](WINDOWS_SETUP.md). If you run into build or deployment errors, consult the [Troubleshooting Guide](TROUBLESHOOTING.md).

```powershell
# 1. Clone repository
git clone [https://github.com/phuchungbhutia/mlbb-database.git](https://github.com/phuchungbhutia/mlbb-database.git)
cd mlbb-database

# 2. Install dependencies
npm install

# 3. Parse Markdown tables into JSON & run validation
npm run parse
npm test

# 4. Run local blog search engine
npm run docs:dev

```

---

## 📊 Structured JSON Sample

Generated in `data/heroes.json` from the master Markdown table:

```json
[
  {
    "Hero": "Balmond",
    "ID": "balm_001",
    "Primary Role": "Fighter",
    "Secondary Role": "None",
    "Primary Lane": "Jungle / EXP",
    "Archetype": "Sustain Bruiser / Execute",
    "Damage Type": "Physical",
    "Scaling": "Mid Game Peak",
    "Tier": "A",
    "WR (%)": "51.20",
    "PR (%)": "1.85",
    "BR (%)": "3.40",
    "Patch Status": "CURRENT"
  }
]

```

---

## 🔄 Deployment Pipeline

This repository builds and deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy-pages.yml`:

```
  Push to main
       │
       ▼
  Parse Markdown tables ──▶ Validate entity schemas (Node.js)
       │
       ▼
  VitePress static site build
       │
       ▼
  Deploy artifact to GitHub Pages CDN

```

---

## 🛡️ License

Distributed under the [MIT License](https://www.google.com/search?q=LICENSE). Mobile Legends: Bang Bang is a registered trademark of Moonton Games.

---
