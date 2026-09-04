import fs from 'node:fs';
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

console.log(`Successfully generated JSON records in ${OUT_DIR}/`);