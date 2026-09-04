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

// Function to extract individual hero builds, emblems, and spells
function parseHeroBuilds(markdown) {
  const buildMap = {};
  const heroSections = markdown.split(/### \d+\.\s+/);

  for (let i = 1; i < heroSections.length; i++) {
    const section = heroSections[i];
    const nameMatch = section.match(/^([^(]+)\s+\(ID:\s*([^)]+)\)/);
    if (!nameMatch) continue;

    const heroName = nameMatch[1].trim();

    // Extract Emblem
    const emblemMatch = section.match(/\*\*Optimal Emblem Tree:\*\*\s*([^\n\r]+)/i);
    const emblem = emblemMatch ? emblemMatch[1].replace(/`/g, '').trim() : '';

    // Extract Battle Spells
    const spellMatch = section.match(/\*\*Battle Spells:\*\*\s*([^\n\r]+)/i);
    const spell = spellMatch ? spellMatch[1].replace(/`/g, '').trim() : '';

    // Extract Recommended Equipment Build
    const buildLines = section.split('\n');
    const buildIdx = buildLines.findIndex(l => l.includes('**Recommended Equipment Build:**') || l.includes('Recommended Equipment Build:'));
    const items = [];

    if (buildIdx !== -1) {
      for (let j = buildIdx + 1; j < Math.min(buildIdx + 15, buildLines.length); j++) {
        const line = buildLines[j].trim();
        const itemMatch = line.match(/^\d+\.\s+\*\*([^*]+)\*\*/);
        if (itemMatch) {
          items.push(itemMatch[1].trim());
        } else if (line.startsWith('###') || line.startsWith('---') || (line.startsWith('*') && !line.includes('.'))) {
          if (items.length > 0) break;
        }
      }
    }

    buildMap[heroName.toLowerCase()] = {
      items: items.join(', '),
      emblem: emblem,
      spell: spell
    };
  }
  return buildMap;
}

// 1. Parse heroes & match builds
const heroMd = fs.readFileSync('MLBB_Hero_Database.md', 'utf-8');
const heroes = parseMarkdownTable(heroMd, '## Hero Master Index');
const builds = parseHeroBuilds(heroMd);

heroes.forEach(h => {
  const profile = builds[h.Hero.toLowerCase()] || {};
  h['Core Items'] = profile.items || h['Core Items'] || 'Tough Boots, War Axe, Brute Force Breastplate';
  h['Battle Spell'] = profile.spell || h['Battle Spell'] || 'Retribution';
  h['Emblem'] = profile.emblem || h['Emblem'] || 'Custom Fighter';
});

fs.writeFileSync(path.join(OUT_DIR, 'heroes.json'), JSON.stringify(heroes, null, 2));

// 2. Parse game equipment, emblems, and spells
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

console.log(`✔ Successfully generated complete JSON records with build kits in ${OUT_DIR}/`);