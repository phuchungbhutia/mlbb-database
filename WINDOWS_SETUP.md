
# Windows + VSCodium Complete Setup & Deployment Guide

This guide walks you through the end-to-end process of setting up, validating, running locally, and deploying the **MLBB Database & Documentation Blog** using **Windows**, **PowerShell**, and **VSCodium**.

---

## 1. Prerequisites Installation

Open **PowerShell as Administrator** (`Win + X` $\rightarrow$ select **Terminal (Admin)** or **Windows PowerShell (Admin)**) and run:

```powershell
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
winget install --id GitHub.cli -e
```


Note: Close and reopen your terminal after installation so path variables refresh.Verify each tool:PowerShellgit --version
node -v
npm -v
gh --version
2. GitHub CLI AuthenticationLink your local machine to your GitHub account:PowerShellgh auth login
Follow the prompts:What account do you want to log into? $\rightarrow$ GitHub.comWhat is your preferred protocol for Git operations? $\rightarrow$ HTTPSAuthenticate Git with your GitHub credentials? $\rightarrow$ YesHow would you like to authenticate GitHub CLI? $\rightarrow$ Login with a web browserPress Enter to open your browser, and enter the one-time 8-character code shown in your console.3. Directory Setup & VSCodium LaunchNavigate to your working folder (e.g., Documents) and create your project workspace:PowerShellcd "$HOME\Documents"
mkdir mlbb-database
cd mlbb-database
codium .
In VSCodium, press `Ctrl + `` (backtick) to open the integrated terminal. Run all subsequent commands inside this terminal.4. Scaffold Repository StructureExecute this script in your VSCodium terminal to create all folders and files:PowerShellNew-Item -ItemType Directory -Force -Path ".github/workflows", "scripts", "data", "docs/.vitepress"
New-Item -ItemType File -Force -Path "MLBB_Hero_Database.md", "MLBB_Game_Data.md", "package.json", ".gitignore", "LICENSE", "README.md", "scripts/parse-markdown.mjs", "scripts/validate-data.mjs", ".github/workflows/deploy-pages.yml", "docs/.vitepress/config.mjs", "docs/index.md", "docs/explorer.md"
5. File Configurationspackage.jsonJSON{
  "name": "mlbb-database",
  "version": "1.0.0",
  "description": "Structured MLBB Hero and Game Mechanics Markdown Database",
  "type": "module",
  "scripts": {
    "parse": "node scripts/parse-markdown.mjs",
    "test": "node scripts/validate-data.mjs",
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.0.0"
  },
  "license": "MIT"
}
.gitignorePlaintextnode_modules/
.DS_Store
*.log
dist/
docs/.vitepress/dist
docs/.vitepress/cache
scripts/parse-markdown.mjsJavaScriptimport fs from 'node:fs';
import path from 'node:path';

const OUT_DIR = './data';
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function parseMarkdownTable(markdown, headerMatch) {
  const lines = markdown.split('\n');
  const startIndex = lines.findIndex(line => line.includes(headerMatch));
  if (startIndex === -1) return [];

  let tableStart = -1;
  for (let i = startIndex; i < lines.length; i++) {
    if (lines[i].trim().startsWith('|')) {
      tableStart = i;
      break;
    }
  }
  if (tableStart === -1) return [];

  const headers = lines[tableStart]
    .split('|')
    .map(c => c.trim())
    .filter(c => c.length > 0);

  const rows = [];
  for (let i = tableStart + 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line.startsWith('|')) break;

    const cells = line
      .split('|')
      .map(c => c.trim())
      .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);

    if (cells.length === headers.length) {
      const entry = {};
      headers.forEach((h, idx) => {
        entry[h] = cells[idx].replace(/`/g, '');
      });
      rows.push(entry);
    }
  }
  return rows;
}

const heroMd = fs.readFileSync('MLBB_Hero_Database.md', 'utf-8');
const heroes = parseMarkdownTable(heroMd, '## Hero Master Index');
fs.writeFileSync(path.join(OUT_DIR, 'heroes.json'), JSON.stringify(heroes, null, 2));

const gameMd = fs.readFileSync('MLBB_Game_Data.md', 'utf-8');
const physicalItems = parseMarkdownTable(gameMd, '### Physical Attack Equipment');
const magicItems = parseMarkdownTable(gameMd, '### Magic Equipment');
const defenseItems = parseMarkdownTable(gameMd, '### Defense Equipment');
const allEquipment = [...physicalItems, ...magicItems, ...defenseItems];
fs.writeFileSync(path.join(OUT_DIR, 'equipment.json'), JSON.stringify(allEquipment, null, 2));

const emblems = parseMarkdownTable(gameMd, '## Emblem System Database');
fs.writeFileSync(path.join(OUT_DIR, 'emblems.json'), JSON.stringify(emblems, null, 2));

const spells = parseMarkdownTable(gameMd, '## Battle Spell Database');
fs.writeFileSync(path.join(OUT_DIR, 'spells.json'), JSON.stringify(spells, null, 2));

console.log(`✔ Successfully generated JSON records in ${OUT_DIR}/`);
scripts/validate-data.mjsJavaScriptimport fs from 'node:fs';

let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ Validation Failure: ${message}`);
    errors++;
  }
}

const heroes = JSON.parse(fs.readFileSync('data/heroes.json', 'utf-8'));
assert(heroes.length > 0, 'heroes.json must contain at least 1 hero');
heroes.forEach(h => {
  assert(h.ID && h.ID.length > 0, `Hero ${h.Hero} is missing a deterministic ID`);
  assert(h['Primary Role'], `Hero ${h.Hero} missing Primary Role`);
});

const equipment = JSON.parse(fs.readFileSync('data/equipment.json', 'utf-8'));
assert(equipment.length > 0, 'equipment.json must not be empty');
equipment.forEach(item => {
  assert(item.ID && item.ID.startsWith('item_'), `Item ${item.Equipment} has invalid ID prefix`);
});

if (errors > 0) {
  console.error(`\nFound ${errors} validation errors.`);
  process.exit(1);
} else {
  console.log('✔ All entity tests passed successfully.');
}
docs/.vitepress/config.mjsJavaScriptimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MLBB Meta & Mechanics Database",
  description: "Patch 2.1.95a Live Hero Builds, Equipment Synergies, and Draft Analytics",
  base: "/mlbb-database/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Hero Profiles', link: '/heroes' },
      { text: 'Equipment & Mechanics', link: '/game-data' },
      { text: 'Interactive Explorer', link: '/explorer' }
    ],
    sidebar: [
      {
        text: 'Database Archives',
        items: [
          { text: 'Hero Profiles & Builds', link: '/heroes' },
          { text: 'Equipment & Mechanics', link: '/game-data' },
          { text: 'Interactive Explorer', link: '/explorer' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: '[https://github.com/phuchungbhutia/mlbb-database](https://github.com/phuchungbhutia/mlbb-database)' }
    ]
  }
})
6. Copy Markdown Docs & Install VitePressCopy your primary markdown files into docs/ so VitePress compiles them:PowerShellCopy-Item "MLBB_Hero_Database.md" "docs/heroes.md"
Copy-Item "MLBB_Game_Data.md" "docs/game-data.md"
Install VitePress as a developer dependency:PowerShellnpm install -D vitepress
7. Local Testing & VerificationRun the data parsing and validation engine:PowerShellnpm run parse
npm test
Start your documentation server locally:PowerShellnpm run docs:dev
Open your browser to the local URL (e.g. http://localhost:5173/mlbb-database/). Verify search (Ctrl + K), navigation, and the interactive table. Press Ctrl + C in the terminal to stop the server when finished.8. GitHub Actions Deployment SetupEnsure .github/workflows/deploy-pages.yml contains:YAMLname: Deploy VitePress to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install Dependencies
        run: npm ci

      - name: Parse Data & Validate
        run: |
          npm run parse
          npm run test

      - name: Build Documentation Site
        run: npm run docs:build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
9. Initialize Git & Push to MainRun these commands inside your project folder:PowerShellgit init
git config user.name "Your Name"
git config user.email "your_email@example.com"
git add .
git commit -m "feat: complete database with patch 2.1.95a, parser, and vitepress docs"
git branch -M main
git remote add origin [https://github.com/phuchungbhutia/mlbb-database.git](https://github.com/phuchungbhutia/mlbb-database.git)
git push -u origin main


10. Enable GitHub PagesNavigate to your repository in your browser:PowerShellgh browse
Click Settings $\rightarrow$ Pages (in the left sidebar).Under Build and deployment $\rightarrow$ Source, choose GitHub Actions.Click the Actions tab to watch the workflow build and publish. Once complete, your live site is accessible at:https://phuchungbhutia.github.io/mlbb-database/
