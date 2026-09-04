import fs from 'node:fs';

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
  console.error(`\nFound ${errors} errors.`);
  process.exit(1);
} else {
  console.log('✔ All entity tests passed successfully.');
}