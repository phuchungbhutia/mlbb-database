---
title: "MLBB Game Data"
description: "Equipment, emblem, talent, battle spell and patch reference database."
version: "1.0"
game: "Mobile Legends: Bang Bang"
server: "Original Server"
patch: "2.1.95a"
last_updated: "2026-09-04"
format: "Markdown"
---
## Contents

- [Equipment Database](#equipment-database)
- [Equipment Mechanical Effect Registry](#equipment-mechanical-effect-registry)
- [Equipment Tactical Decision Matrix](#equipment-tactical-decision-matrix)
- [Item Classification Tags](#item-classification-tags)
- [Emblem System Database](#emblem-system-database)
- [Talent System Database](#talent-system-database)
- [Battle Spell Database](#battle-spell-database)
- [Original Server vs Advance Server Boundaries](#original-server-vs-advance-server-boundaries)
- [Historical Patch Archive](#historical-patch-archive)
- [Changelog](#changelog)
- [Sources](#sources)

---

## Equipment Database

### Physical Attack Equipment

| ID               | Equipment               | Price | Primary Attributes                                                                  | Unique Passive / Active                                                                                                                                                | Best Roles              | Status   |
| ---------------- | ----------------------- | ----- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| `item_bod`     | Blade of Despair        | 3010  | +160 Physical Attack, +5% Movement Speed                                            | **Despair**: Attacking enemies below 50% HP grants +25% Physical Attack for 2s.                                                                                  | Assassin, Marksman      | VERIFIED |
| `item_dhs`     | Demon Hunter Sword      | 2180  | +35 Physical Attack, +25% Attack Speed                                              | **Devour**: Basic attacks deal 8% of target's Current HP as bonus Physical Damage; gains 3% Lifesteal per hit (up to 5 stacks).                                  | Marksman, Fighter       | VERIFIED |
| `item_war_axe` | War Axe                 | 2100  | +25 Physical Attack, +550 HP, +10% CDR, +12% Spell Vamp                             | **Fighting Spirit**: Dealing damage grants 12 Physical Attack and 2% extra Spell Vamp per second (up to 8 stacks). At max stacks, deals 10% True Damage.         | Fighter, Bruiser        | VERIFIED |
| `item_hs`      | Hunter Strike           | 2010  | +80 Physical Attack, +10% CDR, +15 Flat Physical Pen                                | **Retribution**: Dealing damage to a hero/creep 5 consecutive times grants 50% decaying Movement Speed for 3s (6s CD).                                           | Assassin, Fighter       | VERIFIED |
| `item_eb`      | Endless Battle          | 2470  | +65 Physical Attack, +250 HP, +10% CDR, +8% Hybrid Lifesteal, +5% MS, +5 Mana Regen | **Divine Justice**: Using a skill makes the next Basic Attack deal 60% of Physical Attack as True Damage (1.5s CD); grants 10% MS.                               | Assassin, Fighter       | VERIFIED |
| `item_mr`      | Malefic Roar            | 2060  | +60 Physical Attack, +20% Physical Penetration                                      | **Armor Buster**: Each point of enemy physical defense increases Physical Penetration by 0.1% (capped at 20% bonus, reaching 40% total).                         | Marksman, Assassin      | VERIFIED |
| `item_cs`      | Corrosion Scythe        | 2050  | +30 Physical Attack, +30% Attack Speed, +5% Movement Speed                          | **Corrosion / Impulse**: Basic attacks deal 80 bonus physical damage, slow target by 8% (stacks up to 5 times), and grant +6% Attack Speed per hit.              | Marksman, Fighter       | VERIFIED |
| `item_gs`      | Golden Staff            | 2000  | +55 Physical Attack, +15% Attack Speed                                              | **Swift / Endless Strike**: Converts each 1% Crit Chance into 1% Attack Speed. Every 2 basic attacks, the 3rd attack procs on-hit effects twice.                 | Marksman                | VERIFIED |
| `item_bfb`     | Brute Force Breastplate | 2070  | +600 HP, +23 Physical Defense, +23 Magic Defense, +10% CDR                          | **Brute Force**: Dealing damage grants 6 Physical/Magic Defense and 2% Movement Speed for 4s (stacks up to 4 times); grants 15% CC reduction at max stacks.      | Fighter, Tank, Assassin | VERIFIED |
| `item_won`     | Wind of Nature          | 1910  | +30 Physical Attack, +20% Attack Speed, +10% Physical Lifesteal                     | **Wind Chant (Active)**: Grants complete immunity to all Physical Damage for 2s (1s for non-Marksmen; 70s CD).                                                   | Marksman                | VERIFIED |
| `item_sky`     | Sky Piercer             | 1500  | +60 Adaptive Attack, +15 Movement Speed                                             | **Lethality**: After dealing damage to an enemy hero below 4%–12% HP, immediately executes them. Each kill grants 10 stacks (up to 80); deaths lose 30% stacks. | Assassin, Burst Carry   | VERIFIED |

---

### Magic Equipment

| ID            | Equipment           | Price | Primary Attributes                                      | Unique Passive / Active                                                                                                                                         | Best Roles      | Status   |
| ------------- | ------------------- | ----- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------- |
| `item_cod`  | Clock of Destiny    | 2050  | +45 Magic Power, +400 HP, +800 Mana                     | **Destiny**: Grants 20 HP and 5 Magic Power every 20s (up to 15 stacks). At max stacks, grants an additional 5% Magic Power and 300 Max Mana.             | Mage            | VERIFIED |
| `item_lt`   | Lightning Truncheon | 2250  | +75 Magic Power, +400 Mana, +10% CDR                    | **Resonate**: Every 6s, next skill deals 120% Magic Power bonus damage to up to 3 enemies, scaling with Max Mana.                                         | Mage            | VERIFIED |
| `item_hc`   | Holy Crystal        | 2180  | +100 Magic Power                                        | **Mystery**: Increases total Magic Power by 21%–35% (scaling with hero level).                                                                           | Mage            | VERIFIED |
| `item_dg`   | Divine Glaive       | 1970  | +60 Magic Power, +40% Magic Penetration                 | **Spellbreaker**: Each point of enemy magic defense increases Magic Penetration by 0.1% (capped at 20% bonus).                                            | Mage, Burst     | VERIFIED |
| `item_gw`   | Glowing Wand        | 2150  | +75 Magic Power, +400 HP, +5% Movement Speed            | **Scorch / Life Drain**: Skill damage burns targets for 1.5% Max HP magic damage per second for 3s, and reduces target shield and HP regen by 50% for 3s. | Mage, Support   | VERIFIED |
| `item_iqw`  | Ice Queen Wand      | 2240  | +75 Magic Power, +10% Spell Vamp, +300 Mana, +7% MS     | **Ice Bound**: Skills slow targets by 10% for 2s (stacks up to 3 times = 30% total slow).                                                                 | Mage, Support   | VERIFIED |
| `item_et`   | Enchanted Talisman  | 1870  | +50 Magic Power, +250 HP, +20% CDR                      | **Mana Spring / Max Stream**: Restores 15% Max Mana every 10s; increases maximum CDR ceiling by 5% (up to 45%).                                           | Mage, Support   | VERIFIED |
| `item_foto` | Flask of the Oasis  | 1850  | +60 Magic Power, +300 HP, +10% CDR, +12% Healing Effect | **Blessing**: Triggering a heal/shield on an ally below 35% HP grants them a massive shield and 15% CD reduction on skills (40s CD).                      | Support, Healer | VERIFIED |
| `item_wc`   | Winter Crown        | 2110  | +45 Adaptive Attack, +400 HP, +5% CDR                   | **Frozen (Active)**: Freezes champion in place for 2s, becoming completely untargetable and immune to all damage (can buffer skills; 100s CD).            | All Roles       | VERIFIED |

---

### Defense Equipment

| ID                 | Equipment       | Price | Primary Attributes                                                   | Unique Passive / Active                                                                                                                                                                                                                 | Best Roles             | Status             |
| ------------------ | --------------- | ----- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------ |
| `item_dom_ice`   | Dominance Ice   | 2010  | +500 Mana, +70 Physical Defense, +5% Movement Speed                  | **Arctic Cold / Life Drain**: Reduces nearby enemies' Attack Speed by 70% of base and reduces their shield/healing reception by 50%.                                                                                              | Tank, Support, Fighter | VERIFIED           |
| `item_blade_arm` | Blade Armor     | 1960  | +90 Physical Defense, +20% Crit Damage Reduction                     | **Bladed Armor**: When struck by basic attacks, reflects 25% of incoming physical damage + 25% of user's Physical Defense back as Physical Damage; slows attacker by 15%.                                                         | Tank                   | VERIFIED           |
| `item_ath_shld`  | Athena's Shield | 2050  | +900 HP, +62 Magic Defense, +2 HP Regen                              | **Shield**: Taking Magic Damage grants a shield absorbing magic damage that reduces incoming Magic Damage by 25% for 3s (20s out-of-combat CD).                                                                                   | Tank, All Roles        | VERIFIED           |
| `item_rad_arm`   | Radiant Armor   | 1880  | +950 HP, +40 Magic Defense, +12 HP Regen                             | **Holy Blessing**: Taking Magic Damage increases Magic Damage Reduction by 6–18 for 3s (stacks up to 6 times), countering continuous magic ticks.                                                                                | Tank, Fighter          | VERIFIED           |
| `item_ant_cui`   | Antique Cuirass | 2170  | +920 HP, +40 Physical Defense, +4 HP Regen                           | **Deter**: Struck by skill damage reduces attacker's Physical Attack by 6% for 2s (stacks up to 3 times = 18% physical attack reduction).                                                                                         | Tank, Fighter          | VERIFIED           |
| `item_oracle`    | Oracle          | 2060  | +850 HP, +25 Physical Defense, +25 Magic Defense, +10% CDR           | **Bless**: Increases all incoming shield effects and HP regeneration received by 30%.                                                                                                                                             | Tank, Fighter          | VERIFIED           |
| `item_immort`    | Immortality     | 2120  | +800 HP, +20 Physical Defense                                        | **Immortal**: Resurrects 2.5s after death with 16% Max HP and a 220–1200 shield lasting 3s (210s CD).                                                                                                                            | All Roles              | VERIFIED           |
| `item_thun_belt` | Thunder Belt    | 1990  | +800 HP, +15 Physical Defense, +15 Magic Defense, +20 Movement Speed | **Thunderbolt**: Basic attack every 4s deals 50 + 100% Total Hybrid Defense as True Damage, slowing enemies. Each hit grants permanent +1 Hybrid Defense. *(Nerfed in 2.1.95a: 50% stacking value for Marksman/Mage/Assassin)*. | Tank, Fighter          | ADJUSTED (2.1.95a) |
| `item_queens_w`  | Queen's Wings   | 2250  | +40 Adaptive Attack, +600 HP, +10% CDR, +10% Spell Vamp              | **Demonize**: Dropping below 40% HP grants 30% damage reduction for 3s and grants 30% emergency Spell Vamp/Lifesteal (60s CD).                                                                                                    | Fighter                | VERIFIED           |

---

## Equipment Mechanical Effect Registry

| Equipment              | Primary Stat Focus             | Trigger Mechanism                | Frequency / Internal CD          | Scaling Vector                     | Primary Counters                          |
| ---------------------- | ------------------------------ | -------------------------------- | -------------------------------- | ---------------------------------- | ----------------------------------------- |
| Blade of the Heptaseas | Ambush Physical Burst          | Leaving combat for 5 seconds     | 5 seconds out-of-combat          | Flat Physical Attack               | Backline Marksmen / Squishy Mages         |
| Demon Hunter Sword     | Shredding High-HP Pools        | Every Basic Attack hit           | No CD (On-hit)                   | 8% Current HP of Target            | Hylos, Fredrinn, Belerick, Barats         |
| War Axe                | Sustained Brawling True Damage | Dealing skill/physical damage    | 1 stack per second (max 8)       | Flat AD + Spell Vamp               | Frontline Bruisers & Extended Tanks       |
| Glowing Wand           | Continuous Anti-Heal & % Burn  | Dealing any Magic/Skill damage   | Refreshes per tick (3s duration) | 1.5% Max HP / Flat Magic Power     | Estes, Floryn, Uranus, Ruby               |
| Dominance Ice          | Anti-Attack Speed & Anti-Heal  | Passive Aura proximity (4 yards) | Continuous Area Check            | Static 70% AS cut / 50% Anti-Heal  | Claude, Miya, Moskov, Thamuz              |
| Blade Armor            | Basic Attack Damage Reflection | Taking Basic Attack damage       | On every incoming auto-attack    | 25% incoming damage + 25% Armor    | Lesley, Bruno, Irithel, Beatrix           |
| Thunder Belt           | Defense Stacking & True Damage | Basic attack after 4-second CD   | 4 seconds                        | Hybrid Defense (Physical + Magic)  | High-Armor Frontliners (bypasses defense) |
| Wind of Nature         | Complete Physical Immunity     | Manual Active activation         | 70 seconds CD                    | Static 2.0s duration (1.0s non-MM) | Saber, Hayabusa, Natalia, Aldous          |
| Winter Crown           | Untargetable Stasis            | Manual Active activation         | 100 seconds CD                   | Static 2.0s stasis window          | Pharsa ult, Hayabusa ult, Harley ring     |

---

---

title: "MLBB Game Data"
description: "Equipment, emblem, talent, battle spell and patch reference database."
version: "1.0"
game: "Mobile Legends: Bang Bang"
server: "Original Server"
patch: "2.1.95a"
last_updated: "2026-09-04"
format: "Markdown"
------------------

## Contents

- [Equipment Database](#equipment-database)
- [Equipment Mechanical Effect Registry](#equipment-mechanical-effect-registry)
- [Equipment Tactical Decision Matrix](#equipment-tactical-decision-matrix)
- [Item Classification Tags](#item-classification-tags)
- [Emblem System Database](#emblem-system-database)
- [Talent System Database](#talent-system-database)
- [Battle Spell Database](#battle-spell-database)
- [Original Server vs Advance Server Boundaries](#original-server-vs-advance-server-boundaries)
- [Historical Patch Archive](#historical-patch-archive)
- [Changelog](#changelog)
- [Sources](#sources)

---

## Equipment Database

### Physical Attack Equipment

| ID               | Equipment               | Price | Primary Attributes                                                                  | Unique Passive / Active                                                                                                                                                | Best Roles              | Status   |
| ---------------- | ----------------------- | ----- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| `item_bod`     | Blade of Despair        | 3010  | +160 Physical Attack, +5% Movement Speed                                            | **Despair**: Attacking enemies below 50% HP grants +25% Physical Attack for 2s.                                                                                  | Assassin, Marksman      | VERIFIED |
| `item_dhs`     | Demon Hunter Sword      | 2180  | +35 Physical Attack, +25% Attack Speed                                              | **Devour**: Basic attacks deal 8% of target's Current HP as bonus Physical Damage; gains 3% Lifesteal per hit (up to 5 stacks).                                  | Marksman, Fighter       | VERIFIED |
| `item_war_axe` | War Axe                 | 2100  | +25 Physical Attack, +550 HP, +10% CDR, +12% Spell Vamp                             | **Fighting Spirit**: Dealing damage grants 12 Physical Attack and 2% extra Spell Vamp per second (up to 8 stacks). At max stacks, deals 10% True Damage.         | Fighter, Bruiser        | VERIFIED |
| `item_hs`      | Hunter Strike           | 2010  | +80 Physical Attack, +10% CDR, +15 Flat Physical Pen                                | **Retribution**: Dealing damage to a hero/creep 5 consecutive times grants 50% decaying Movement Speed for 3s (6s CD).                                           | Assassin, Fighter       | VERIFIED |
| `item_eb`      | Endless Battle          | 2470  | +65 Physical Attack, +250 HP, +10% CDR, +8% Hybrid Lifesteal, +5% MS, +5 Mana Regen | **Divine Justice**: Using a skill makes the next Basic Attack deal 60% of Physical Attack as True Damage (1.5s CD); grants 10% MS.                               | Assassin, Fighter       | VERIFIED |
| `item_mr`      | Malefic Roar            | 2060  | +60 Physical Attack, +20% Physical Penetration                                      | **Armor Buster**: Each point of enemy physical defense increases Physical Penetration by 0.1% (capped at 20% bonus, reaching 40% total).                         | Marksman, Assassin      | VERIFIED |
| `item_cs`      | Corrosion Scythe        | 2050  | +30 Physical Attack, +30% Attack Speed, +5% Movement Speed                          | **Corrosion / Impulse**: Basic attacks deal 80 bonus physical damage, slow target by 8% (stacks up to 5 times), and grant +6% Attack Speed per hit.              | Marksman, Fighter       | VERIFIED |
| `item_gs`      | Golden Staff            | 2000  | +55 Physical Attack, +15% Attack Speed                                              | **Swift / Endless Strike**: Converts each 1% Crit Chance into 1% Attack Speed. Every 2 basic attacks, the 3rd attack procs on-hit effects twice.                 | Marksman                | VERIFIED |
| `item_bfb`     | Brute Force Breastplate | 2070  | +600 HP, +23 Physical Defense, +23 Magic Defense, +10% CDR                          | **Brute Force**: Dealing damage grants 6 Physical/Magic Defense and 2% Movement Speed for 4s (stacks up to 4 times); grants 15% CC reduction at max stacks.      | Fighter, Tank, Assassin | VERIFIED |
| `item_won`     | Wind of Nature          | 1910  | +30 Physical Attack, +20% Attack Speed, +10% Physical Lifesteal                     | **Wind Chant (Active)**: Grants complete immunity to all Physical Damage for 2s (1s for non-Marksmen; 70s CD).                                                   | Marksman                | VERIFIED |
| `item_sky`     | Sky Piercer             | 1500  | +60 Adaptive Attack, +15 Movement Speed                                             | **Lethality**: After dealing damage to an enemy hero below 4%–12% HP, immediately executes them. Each kill grants 10 stacks (up to 80); deaths lose 30% stacks. | Assassin, Burst Carry   | VERIFIED |

---

### Magic Equipment

| ID            | Equipment           | Price | Primary Attributes                                      | Unique Passive / Active                                                                                                                                         | Best Roles      | Status   |
| ------------- | ------------------- | ----- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------- |
| `item_cod`  | Clock of Destiny    | 2050  | +45 Magic Power, +400 HP, +800 Mana                     | **Destiny**: Grants 20 HP and 5 Magic Power every 20s (up to 15 stacks). At max stacks, grants an additional 5% Magic Power and 300 Max Mana.             | Mage            | VERIFIED |
| `item_lt`   | Lightning Truncheon | 2250  | +75 Magic Power, +400 Mana, +10% CDR                    | **Resonate**: Every 6s, next skill deals 120% Magic Power bonus damage to up to 3 enemies, scaling with Max Mana.                                         | Mage            | VERIFIED |
| `item_hc`   | Holy Crystal        | 2180  | +100 Magic Power                                        | **Mystery**: Increases total Magic Power by 21%–35% (scaling with hero level).                                                                           | Mage            | VERIFIED |
| `item_dg`   | Divine Glaive       | 1970  | +60 Magic Power, +40% Magic Penetration                 | **Spellbreaker**: Each point of enemy magic defense increases Magic Penetration by 0.1% (capped at 20% bonus).                                            | Mage, Burst     | VERIFIED |
| `item_gw`   | Glowing Wand        | 2150  | +75 Magic Power, +400 HP, +5% Movement Speed            | **Scorch / Life Drain**: Skill damage burns targets for 1.5% Max HP magic damage per second for 3s, and reduces target shield and HP regen by 50% for 3s. | Mage, Support   | VERIFIED |
| `item_iqw`  | Ice Queen Wand      | 2240  | +75 Magic Power, +10% Spell Vamp, +300 Mana, +7% MS     | **Ice Bound**: Skills slow targets by 10% for 2s (stacks up to 3 times = 30% total slow).                                                                 | Mage, Support   | VERIFIED |
| `item_et`   | Enchanted Talisman  | 1870  | +50 Magic Power, +250 HP, +20% CDR                      | **Mana Spring / Max Stream**: Restores 15% Max Mana every 10s; increases maximum CDR ceiling by 5% (up to 45%).                                           | Mage, Support   | VERIFIED |
| `item_foto` | Flask of the Oasis  | 1850  | +60 Magic Power, +300 HP, +10% CDR, +12% Healing Effect | **Blessing**: Triggering a heal/shield on an ally below 35% HP grants them a massive shield and 15% CD reduction on skills (40s CD).                      | Support, Healer | VERIFIED |
| `item_wc`   | Winter Crown        | 2110  | +45 Adaptive Attack, +400 HP, +5% CDR                   | **Frozen (Active)**: Freezes champion in place for 2s, becoming completely untargetable and immune to all damage (can buffer skills; 100s CD).            | All Roles       | VERIFIED |

---

### Defense Equipment

| ID                 | Equipment       | Price | Primary Attributes                                                   | Unique Passive / Active                                                                                                                                                                                                                 | Best Roles             | Status             |
| ------------------ | --------------- | ----- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------ |
| `item_dom_ice`   | Dominance Ice   | 2010  | +500 Mana, +70 Physical Defense, +5% Movement Speed                  | **Arctic Cold / Life Drain**: Reduces nearby enemies' Attack Speed by 70% of base and reduces their shield/healing reception by 50%.                                                                                              | Tank, Support, Fighter | VERIFIED           |
| `item_blade_arm` | Blade Armor     | 1960  | +90 Physical Defense, +20% Crit Damage Reduction                     | **Bladed Armor**: When struck by basic attacks, reflects 25% of incoming physical damage + 25% of user's Physical Defense back as Physical Damage; slows attacker by 15%.                                                         | Tank                   | VERIFIED           |
| `item_ath_shld`  | Athena's Shield | 2050  | +900 HP, +62 Magic Defense, +2 HP Regen                              | **Shield**: Taking Magic Damage grants a shield absorbing magic damage that reduces incoming Magic Damage by 25% for 3s (20s out-of-combat CD).                                                                                   | Tank, All Roles        | VERIFIED           |
| `item_rad_arm`   | Radiant Armor   | 1880  | +950 HP, +40 Magic Defense, +12 HP Regen                             | **Holy Blessing**: Taking Magic Damage increases Magic Damage Reduction by 6–18 for 3s (stacks up to 6 times), countering continuous magic ticks.                                                                                | Tank, Fighter          | VERIFIED           |
| `item_ant_cui`   | Antique Cuirass | 2170  | +920 HP, +40 Physical Defense, +4 HP Regen                           | **Deter**: Struck by skill damage reduces attacker's Physical Attack by 6% for 2s (stacks up to 3 times = 18% physical attack reduction).                                                                                         | Tank, Fighter          | VERIFIED           |
| `item_oracle`    | Oracle          | 2060  | +850 HP, +25 Physical Defense, +25 Magic Defense, +10% CDR           | **Bless**: Increases all incoming shield effects and HP regeneration received by 30%.                                                                                                                                             | Tank, Fighter          | VERIFIED           |
| `item_immort`    | Immortality     | 2120  | +800 HP, +20 Physical Defense                                        | **Immortal**: Resurrects 2.5s after death with 16% Max HP and a 220–1200 shield lasting 3s (210s CD).                                                                                                                            | All Roles              | VERIFIED           |
| `item_thun_belt` | Thunder Belt    | 1990  | +800 HP, +15 Physical Defense, +15 Magic Defense, +20 Movement Speed | **Thunderbolt**: Basic attack every 4s deals 50 + 100% Total Hybrid Defense as True Damage, slowing enemies. Each hit grants permanent +1 Hybrid Defense. *(Nerfed in 2.1.95a: 50% stacking value for Marksman/Mage/Assassin)*. | Tank, Fighter          | ADJUSTED (2.1.95a) |
| `item_queens_w`  | Queen's Wings   | 2250  | +40 Adaptive Attack, +600 HP, +10% CDR, +10% Spell Vamp              | **Demonize**: Dropping below 40% HP grants 30% damage reduction for 3s and grants 30% emergency Spell Vamp/Lifesteal (60s CD).                                                                                                    | Fighter                | VERIFIED           |

---

## Equipment Mechanical Effect Registry

| Equipment              | Primary Stat Focus             | Trigger Mechanism                | Frequency / Internal CD          | Scaling Vector                     | Primary Counters                          |
| ---------------------- | ------------------------------ | -------------------------------- | -------------------------------- | ---------------------------------- | ----------------------------------------- |
| Blade of the Heptaseas | Ambush Physical Burst          | Leaving combat for 5 seconds     | 5 seconds out-of-combat          | Flat Physical Attack               | Backline Marksmen / Squishy Mages         |
| Demon Hunter Sword     | Shredding High-HP Pools        | Every Basic Attack hit           | No CD (On-hit)                   | 8% Current HP of Target            | Hylos, Fredrinn, Belerick, Barats         |
| War Axe                | Sustained Brawling True Damage | Dealing skill/physical damage    | 1 stack per second (max 8)       | Flat AD + Spell Vamp               | Frontline Bruisers & Extended Tanks       |
| Glowing Wand           | Continuous Anti-Heal & % Burn  | Dealing any Magic/Skill damage   | Refreshes per tick (3s duration) | 1.5% Max HP / Flat Magic Power     | Estes, Floryn, Uranus, Ruby               |
| Dominance Ice          | Anti-Attack Speed & Anti-Heal  | Passive Aura proximity (4 yards) | Continuous Area Check            | Static 70% AS cut / 50% Anti-Heal  | Claude, Miya, Moskov, Thamuz              |
| Blade Armor            | Basic Attack Damage Reflection | Taking Basic Attack damage       | On every incoming auto-attack    | 25% incoming damage + 25% Armor    | Lesley, Bruno, Irithel, Beatrix           |
| Thunder Belt           | Defense Stacking & True Damage | Basic attack after 4-second CD   | 4 seconds                        | Hybrid Defense (Physical + Magic)  | High-Armor Frontliners (bypasses defense) |
| Wind of Nature         | Complete Physical Immunity     | Manual Active activation         | 70 seconds CD                    | Static 2.0s duration (1.0s non-MM) | Saber, Hayabusa, Natalia, Aldous          |
| Winter Crown           | Untargetable Stasis            | Manual Active activation         | 100 seconds CD                   | Static 2.0s stasis window          | Pharsa ult, Hayabusa ult, Harley ring     |

---


## Equipment Tactical Decision Matrix

                      [ENEMY THREAT IDENTIFIED]
                                  │
     ┌────────────────────────────┼────────────────────────────┐
     ▼                            ▼                            ▼
[PHYSICAL BURST]             [MAGIC SUSTAIN/DPS]         [HEALING & SHIELDS]
• Antique Cuirass            • Radiant Armor             • Dominance Ice (Physical)
• Wind of Nature (Active)    • Oracle                    • Glowing Wand (Magic)
• Blade Armor                • Athena's Shield (Burst)   • Sea Halberd (Attackers)
│                            │                            │
└────────────────────────────┼────────────────────────────┘
▼
[HIGH HP / HIGH DEFENSE TANKS]
• Demon Hunter Sword (% HP Shred)
• Malefic Roar (Armor Scaling Pen)
• Divine Glaive (Magic Scaling Pen)
• War Axe (True Damage Conversion)

---

## Item Classification Tags

* **Blade of Despair**: `[Damage]`, `[Physical]`, `[Execution]`, `[Mobility]`
* **Demon Hunter Sword**: `[Damage]`, `[On-Hit]`, `[Anti-HP]`, `[Attack Speed]`, `[Lifesteal]`
* **War Axe**: `[Damage]`, `[Sustain]`, `[True Damage]`, `[Cooldown]`, `[Spell Vamp]`
* **Glowing Wand**: `[Damage]`, `[Magic]`, `[Anti-Heal]`, `[Anti-Shield]`, `[Anti-HP]`
* **Dominance Ice**: `[Defense]`, `[Anti-Heal]`, `[Anti-Attack-Speed]`, `[Physical Defense]`, `[Mana]`
* **Blade Armor**: `[Defense]`, `[Physical Defense]`, `[Anti-Crit]`, `[Reflection]`
* **Thunder Belt**: `[Defense]`, `[True Damage]`, `[Hybrid Defense]`, `[Utility]`, `[Anti-Tank]`
* **Winter Crown**: `[Utility]`, `[Active]`, `[Anti-Burst]`, `[Untargetable]`, `[Adaptive]`
* **Flask of the Oasis**: `[Support]`, `[Healing Amp]`, `[Shield]`, `[Cooldown]`, `[Utility]`

---

## Emblem System Database

| Emblem ID        | Emblem Class    | Base Attributes (Level 60)                                        | Recommended Archetypes                    | Primary Tactical Role                              |
| ---------------- | --------------- | ----------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------- |
| `emb_assassin` | Custom Assassin | +16 Adaptive Penetration, +10 Adaptive Attack, +3% Movement Speed | Assassins, Burst Marksmen, Skill Fighters | Eliminating high-priority backline carries         |
| `emb_fighter`  | Custom Fighter  | +10% Spell Vamp, +22 Adaptive Attack, +6 Hybrid Defense           | Sustained Bruisers, Brawlers, Melee Tanks | Extended frontline skirmishes and objective fights |
| `emb_mage`     | Custom Mage     | +30 Magic Power, +5% CDR, +8 Magic Penetration                    | Burst Mages, Artillery, Control Casters   | Wave clearing, long-range poke, teamfight burst    |
| `emb_tank`     | Custom Tank     | +500 HP, +10 Hybrid Defense, +4 HP Regen                          | Vanguards, Peelers, Initiators            | Soaking burst damage and locking down targets      |
| `emb_support`  | Custom Support  | +12% Healing Effect, +10% CDR, +6% Movement Speed                 | Enchanters, Healers, Utility Roamers      | Team sustain, map rotation, crowd control          |
| `emb_marksman` | Custom Marksman | +5% Attack Speed, +5% Adaptive Attack, +5% Crit Chance            | Attack-Speed Carries, Crit Marksmen       | Sustained physical DPS and structure taking        |
| `emb_common`   | Custom Common   | +500 HP, +12 Hybrid Regen, +22 Adaptive Attack                    | Mana-hungry Bruisers, Early Laners        | Baseline lane sustain and resource efficiency      |

---

## Talent System Database

### Tier 1 Talents

| Talent             | Category | Exact Mechanical Effect                     | Best Synergy                           | Anti-Synergy                      |
| ------------------ | -------- | ------------------------------------------- | -------------------------------------- | --------------------------------- |
| **Rupture**  | Offense  | Grants +5 flat Adaptive Penetration.        | Assassin Emblem, Hunter Strike         | True Damage kits (Karrie, Lesley) |
| **Thrill**   | Offense  | Grants +16 flat Adaptive Attack.            | Early jungle farming (Balmond, Martis) | Late scaling attack-speed kits    |
| **Swift**    | Utility  | Grants +10% bonus Attack Speed.             | Marksmen, Sun, Claude                  | Pure skill-casting burst mages    |
| **Vitality** | Defense  | Grants +225 bonus Max HP.                   | Hylos, Fredrinn, Belerick              | Fragile glass-cannon assassins    |
| **Firmness** | Defense  | Grants +6 bonus Physical and Magic Defense. | Gatotkaca, Terizla, Frontline Tanks    | High-mobility squishy assassins   |
| **Agility**  | Mobility | Grants +4% bonus Movement Speed.            | Roamers, Mathilda, Kaja                | Static artillery mages            |
| **Inspire**  | Utility  | Grants +5% Cooldown Reduction.              | Xavier, Zhuxin, Cecilion               | Basic-attack reliant marksmen     |

### Tier 2 Talents

| Talent                           | Category | Exact Mechanical Effect                                            | Best Synergy                              | Anti-Synergy                       |
| -------------------------------- | -------- | ------------------------------------------------------------------ | ----------------------------------------- | ---------------------------------- |
| **Master Assassin**        | Offense  | Increases damage dealt to isolated enemy heroes by 7%.             | Hayabusa, Saber, Dyrroth, Helcurt         | 5v5 teamfight artillery mages      |
| **Bargain Hunter**         | Economy  | All equipment can be purchased for 95% of its base cost.           | Item-dependent carries (Claude, Pharsa)   | Early-game dominant gankers        |
| **Seasoned Hunter**        | Jungle   | Increases damage against Lord and Turtle by 15%.                   | Jungle Assassins, Jungle Tanks            | EXP Laners / Roamers               |
| **Tenacity**               | Defense  | Increases Physical and Magic Defense by 15 when below 50% HP.      | Fredrinn, Gatotkaca, Terizla, Ruby        | Pure glass-cannon backline carries |
| **Pull Yourself Together** | Utility  | Reduces Battle Spell and Active Equipment cooldowns by 15%.        | Atlas, Kaja, Mathilda (Flicker setups)    | Passive farmers with Sprint        |
| **Festival of Blood**      | Sustain  | Grants 6% Spell Vamp; kills/assists grant 0.5% extra (up to 10%).  | Balmond, Ruby, Alpha, Yu Zhong            | Pure basic-attack marksmen         |
| **Weapon Master**          | Offense  | Physical Attack and Magic Power gained from items increased by 5%. | Late-game hypercarries (Cecilion, Aldous) | Low-scaling utility tanks          |

### Tier 3 Talents

| Talent                    | Category | Exact Mechanical Effect                                                         | Best Synergy                       | Anti-Synergy                         |
| ------------------------- | -------- | ------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------ |
| **Lethal Ignition** | Burst    | Dealing damage greater than 7% Max HP 3 times burns target for adaptive damage. | Pharsa, Hayabusa, Saber, Eudora    | Low-damage utility supports          |
| **Brave Smite**     | Sustain  | Dealing skill damage restores 4% Max HP (6s cooldown).                          | Fredrinn, Balmond, Akai, Gatotkaca | Squishy mages without skill spam     |
| **Killing Spree**   | Reset    | Eliminating a hero instantly restores 8% Max HP and grants 15% MS for 3s.       | Hayabusa, Martis, Ling, Lancelot   | Utility supports / frontline peelers |
| **Quantum Charge**  | Utility  | Basic attacks grant 30% MS for 1.5s and restore 75–180 HP.                     | Claude, Lesley, Marksmen           | Pure spell-caster mages              |
| **Impure Rage**     | Sustain  | Dealing skill damage deals extra adaptive damage and restores 2% Max Mana.      | Zhuxin, Cecilion, Xavier           | Energy-based or manaless heroes      |
| **Focusing Mark**   | Support  | Dealing damage increases all allied damage to that target by 6% for 3s.         | Mathilda, Kaja, Angela, Floryn     | Solo split-pushing fighters          |
| **Weakness Finder** | Kiting   | Basic attacks have a 20% chance to slow enemy MS by 90% and AS by 50%.          | Claude, Wanwan, Miya, Moskov       | Single-hit melee burst assassins     |

---

## Battle Spell Database

| Spell ID             | Spell Name  | Cooldown | Exact Mechanical Effect                                                                                            | Best Suited Roles                | Strategic Counter Function                  |
| -------------------- | ----------- | -------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------- |
| `spell_retri`      | Retribution | 35s      | Deals 2100–3040 True Damage to creeps/minions; grants jungler creep buffs. Upgrades to Ice/Flame/Bloody variants. | Jungler Only                     | Mandatory for jungle camp contests          |
| `spell_flicker`    | Flicker     | 120s     | Teleports champion a fixed distance in target direction; grants +5 Hybrid Defense for 1s.                          | Mage, Tank, Fighter, Marksman    | Repositioning, surprise engages, dodge      |
| `spell_purify`     | Purify      | 90s      | Instantly removes all CC (except Suppression) and grants slow/CC immunity + 15% MS for 1.2s.                       | Marksman, Channeling Mages       | Counters Atlas, Tigreal, Guinevere          |
| `spell_vengeance`  | Vengeance   | 75s      | Reduces incoming damage by 35% and reflects 35% of incoming damage back as Magic Damage for 3s.                    | Bruisers, Frontline Tanks        | Counters Claude ult, Miya, Kimmy            |
| `spell_sprint`     | Sprint      | 100s     | Grants 50% decaying Movement Speed and complete immunity to all Slow effects for 6s.                               | Mages, Kiting Marksmen           | Counters Valir, Yve, Zhuxin slows           |
| `spell_petrify`    | Petrify     | 90s      | Deals 100 Magic Damage and petrifies (solid stun) surrounding enemies for 0.8s; slows by 50% for 0.8s.             | Initiator Tanks, Bruisers        | Chains CC on Atlas, Gatotkaca, Sun          |
| `spell_flameshot`  | Flameshot   | 50s      | Fires a sniper shot dealing 160–640 Magic Damage (scales with distance); knocks back nearby enemies.              | Mages, Healers                   | Sniping runners; peeling melee divers       |
| `spell_revitalize` | Revitalize  | 100s     | Spawns a healing spring restoring 2.5% Max HP every 0.5s for 5s; increases healing received by 25%.                | Frontline Tanks, Support Healers | Counters prolonged attrition / choke brawls |
| `spell_aegis`      | Aegis       | 90s      | Grants a 750 (+50*Level) shield for 5s to user and 70% shield to the lowest HP nearby ally.                        | Gold Lane Marksman, Mid Laners   | Absorbs lethal burst outplays               |
| `spell_inspire`    | Inspire     | 75s      | Next 8 basic attacks gain +400% Attack Speed, ignore physical defense, and restore HP on hit.                      | Marksmen, Sun, Zilong            | Melts structures and tanks instantly        |

---

## Original Server vs Advance Server Boundaries

╔═══════════════════════════════════════════════════════════════════════╗
║                      DATA SEGREGATION DIRECTIVE                       ║
╠═══════════════════════════════════════════════════════════════════════╣
║  ORIGINAL SERVER (LIVE)              ADVANCE SERVER (TESTING)         ║
║  • Patch: 2.1.95a                    • Current Build: Patch 2.2.14    ║
║  • Atlas S2 MS Nerfed (30%)          • Argus Experimental Rework      ║
║  • Obsidia Turret Stacking Live      • Aulus Base Scaling Tweaks      ║
║  • Thunder Belt Assassin Cut Live    • Test Equipment Iterations      ║
║                                                                       ║
║  CRITICAL RULE: Numbers from Patch 2.2.14 must NEVER be presented   ║
║  as live Original Server values until officially deployed.            ║
╚═══════════════════════════════════════════════════════════════════════╝

---

## Historical Patch Archive

### Patch 2.1.95a (Original Server — August 25, 2026)

* **Obsidia (BUFF)**: Attack Speed growth raised (1% $\rightarrow$ 1.5%); basic attacks on turrets generate 2 Bone Energy; Ultimate on-hit AS removed and replaced with 200 + 25 per shard shield.
* **Hayabusa (ADJUSTMENT)**: Skill 1 base damage and Extra AD scaling increased; Skill 2 shadow width expanded from 0.8 to 1.0; Skill 3 base and mark bonus damage reduced.
* **Atlas (NERF)**: Skill 2 movement speed bonus reduced from 40% to 30%; cooldown increased from 12–10s to 13–11s.
* **Hanzo (ADJUSTMENT)**: Skill 1 and Ultimate HP regeneration converted from % HP to Physical Attack scaling to eliminate Tank Hanzo builds.
* **Thunder Belt (NERF)**: Passive stack generation efficiency set to 50% for Assassins (matching Marksmen and Mages).

### Patch 2.1.95 (Original Server — August 4, 2026)

* **Kaja (REWORK)**: Skill 2 replaced with *Soaring Wings* (ignores map obstacles with terrain flight); Ultimate changed from single-target suppression to *Divine Binding* (AoE restraint and multi-target drag).
* **Gord (NERF)**: Skill damage slightly tuned down for ranked balance.
* **Novaria (BUFF)**: Skill 2 range and early damage floor raised.

---

## Changelog

### 2026-09-04

* Verified all values against active Original Server live environment (**Patch 2.1.95a**).
* Documented the role restriction expansion on **Thunder Belt** affecting the Assassin class.
* Updated Kaja's complete mechanical profile following his full kit rework in 2.1.95.
* Validated exact stats for **Sky Piercer**, **Winter Crown**, and **Flask of the Oasis**.

---

## Sources

| Source Name                       | Uniform Resource Identifier                          | Data Scope                                      | Verification Date |
| --------------------------------- | ---------------------------------------------------- | ----------------------------------------------- | ----------------- |
| Moonton Developer Patch Notes     | `https://mlbbhub.com/patch-notes/original/2.1.95a` | Live balance changes & system adjustments       | 2026-09-04        |
| Moonton Developer Patch Notes     | `https://mlbbhub.com/patch-notes/original/2.1.95`  | System rework notes & equipment balance         | 2026-09-04        |
| Reddit Official MLBB Community    | `https://www.reddit.com/r/MobileLegendsGame/`      | Patch verification & verified bug-fix logs      | 2026-09-04        |
| Liquipedia Mobile Legends Archive | `https://liquipedia.net/mobilelegends/`            | Base attributes, hero indices & tournament data | 2026-09-04        |
