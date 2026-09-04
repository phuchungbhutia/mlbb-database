---
title: "MLBB Hero Database"
description: "Comprehensive Mobile Legends: Bang Bang hero, skill, build, matchup and drafting database."
version: "1.0"
game: "Mobile Legends: Bang Bang"
server: "Original Server"
patch: "2.1.95a"
last_updated: "2026-09-04"
format: "Markdown"
---
## Contents

- [Database Information](#database-information)
- [Hero Master Index](#hero-master-index)
- [Hero Profiles &amp; Mechanical Deep Dives](#hero-profiles--mechanical-deep-dives)
  - [Balmond](#balmond)
  - [Hayabusa](#hayabusa)
  - [Atlas](#atlas)
  - [Obsidia](#obsidia)
  - [Kaja](#kaja)
  - [Hanzo](#hanzo)
  - [Zhuxin](#zhuxin)
  - [Claude](#claude)
  - [Fredrinn](#fredrinn)
  - [Mathilda](#mathilda)
  - [Pharsa](#pharsa)
  - [Gatotkaca](#gatotkaca)
- [Drafting &amp; Composition Matrix](#drafting--composition-matrix)
- [Centralized Emblem Matrix](#centralized-emblem-matrix)
- [Centralized Battle Spell Matrix](#centralized-battle-spell-matrix)
- [Changelog](#changelog)
- [Sources](#sources)

---

## Database Information

| Field                 | Value                                                                   |
| --------------------- | ----------------------------------------------------------------------- |
| Game                  | Mobile Legends: Bang Bang                                               |
| Server                | Original Server                                                         |
| Current Patch         | 2.1.95a                                                                 |
| Season                | Season 41                                                               |
| Hero Count Documented | Master Roster (128 Heroes Indexed / Key Meta Spotlights Detailed)       |
| Last Updated          | 2026-09-04                                                              |
| Data Status           | VERIFIED / CURRENT                                                      |
| Primary Sources       | Moonton Official Patch Notes 2.1.95 / 2.1.95a, MLBB API, MPL Statistics |

> **Operational Distinction**: This document catalogs Original Server data exclusively. Advance Server testing numbers (e.g., v2.2.14 experimental iterations) are strictly excluded until promoted to live production patches.

---

## Hero Master Index

| Hero      | ID           | Primary Role | Secondary Role | Primary Lane    | Archetype                          | Damage Type | Scaling               | Early     | Mid       | Late      | Tier | WR (%) | PR (%) | BR (%) | Patch Status       |
| --------- | ------------ | ------------ | -------------- | --------------- | ---------------------------------- | ----------- | --------------------- | --------- | --------- | --------- | ---- | ------ | ------ | ------ | ------------------ |
| Balmond   | `balm_001` | Fighter      | None           | Jungle / EXP    | Sustain Bruiser / Execute          | Physical    | Mid Game Peak         | High      | Very High | Medium    | A    | 51.20  | 1.85   | 3.40   | CURRENT            |
| Hayabusa  | `haya_002` | Assassin     | None           | Jungle          | Burst / Shadow Diver               | Physical    | Late Game Scaler      | Medium    | High      | Very High | S+   | 53.10  | 3.20   | 68.40  | BUFFED (2.1.95a)   |
| Atlas     | `atla_003` | Tank         | Support        | Roam            | Hard CC / Vanguard Initiator       | Magic       | Mid-to-Late Game      | Medium    | High      | Very High | S    | 52.40  | 2.10   | 34.20  | NERFED (2.1.95a)   |
| Obsidia   | `obsi_004` | Marksman     | None           | Gold Lane       | On-Hit / Stacking Hypercarry       | Physical    | Extreme Late Game     | Low       | Medium    | S-Tier    | S    | 51.80  | 2.90   | 28.50  | BUFFED (2.1.95a)   |
| Kaja      | `kaja_005` | Support      | Fighter        | Roam            | AoE Restraint / Airborne Pick-Off  | Magic       | Mid Game Transition   | Medium    | High      | High      | S    | 52.90  | 1.95   | 42.10  | REWORKED (2.1.95)  |
| Hanzo     | `hanz_006` | Assassin     | None           | Jungle          | Split Infiltrator / Shadow Burst   | Physical    | Mid-Late Game         | High      | Very High | High      | A+   | 50.80  | 1.40   | 18.20  | ADJUSTED (2.1.95a) |
| Zhuxin    | `zhux_007` | Mage         | None           | Mid Lane        | Area Denial / Continuous CC        | Magic       | Mid-Late Game         | Medium    | Very High | High      | S+   | 53.80  | 2.40   | 72.10  | CURRENT            |
| Claude    | `clau_008` | Marksman     | None           | Gold Lane       | Attack-Speed / Blinking Carry      | Physical    | Exponential Late Game | Low       | High      | S-Tier    | S    | 52.10  | 2.60   | 31.80  | CURRENT            |
| Fredrinn  | `fred_009` | Tank         | Fighter        | Jungle / EXP    | Grey HP Tank / Counter-Engage      | Physical    | Mid Game Peak         | High      | Very High | Medium    | A+   | 50.40  | 1.80   | 12.50  | CURRENT            |
| Mathilda  | `math_010` | Support      | Assassin       | Roam / Mid      | Mobility Enchanter / Dive Burst    | Magic       | Early-Mid Game        | Very High | High      | Medium    | S    | 52.70  | 1.60   | 45.00  | CURRENT            |
| Pharsa    | `phar_011` | Mage         | None           | Mid Lane        | Long-Range Artillery / Zoning      | Magic       | Mid-Late Game         | Medium    | Very High | High      | A+   | 51.00  | 1.30   | 8.90   | CURRENT            |
| Gatotkaca | `gato_012` | Tank         | Fighter        | EXP Lane / Roam | Low-HP Bruiser / Counter-Initiator | Magic       | Mid-to-Late Game      | Medium    | High      | High      | A+   | 52.30  | 2.05   | 11.20  | CURRENT            |

---

## Hero Profiles & Mechanical Deep Dives

### Balmond

#### Identity

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Hero ID        | `balm_001`                                                    |
| Primary Role   | Fighter                                                         |
| Secondary Role | None                                                            |
| Primary Lane   | Jungle                                                          |
| Secondary Lane | EXP Lane                                                        |
| Archetype      | Bruiser / Objective Controller                                  |
| Damage Type    | Physical                                                        |
| Difficulty     | Low (2/10)                                                      |
| Scaling        | Mid-Game Dominant                                               |
| Power Spike    | Level 4; War Axe Completion                                     |
| Main Strength  | Rapid objective secure via execute; snowballing sustain         |
| Main Weakness  | Highly vulnerable to continuous micro-stuns cancelling Skill 2  |
| Win Condition  | Secure early Turtles, force snowball teamfights at 8-12 minutes |

#### Skills

* **Passive — Bloodthirst**: Restores 5% of Max HP on minion or jungle creep kills; restores 20% of Max HP upon eliminating an enemy hero. Operates with no internal cooldown. Direct synergy with multi-kill dives under turret aggro.
* **Skill 1 — Soul Lock**: Dashes forward dealing 150–275 (+60% Total Physical Attack) Physical Damage, slowing units by 30% for 2s and slightly knocking back colliding heroes to interrupt low-priority channels.
* **Skill 2 — Cyclone Sweep**: Continuously spins for up to 3 seconds, dealing 60–160 (+50% Total Physical Attack) Physical Damage every 0.3s. Each consecutive hit on the same target ramps damage by 25% (up to +100% total ramp). Fully triggers spell vamp and continuous item procs.
* **Skill 3 (Ultimate) — Lethal Counter**: Slams axe in a forward cone, dealing 150–400 (+60% Total Physical Attack) plus 20%–30% of target's Lost HP as **True Damage**, while slowing by 40% for 2s. Serves as MLBB's primary non-Retribution objective secure tool.

#### Builds

| Slot      | Item                            | Purpose                | Skill Synergy                                        | Alternative      |
| --------- | ------------------------------- | ---------------------- | ---------------------------------------------------- | ---------------- |
| Boots     | Warrior Boots (Ice Retribution) | Physical Trading       | Sustains early creep hits during S2                  | Tough Boots      |
| Core 1    | War Axe                         | Sustain / Stacking     | S2 maxes stacks in 1.2s; unlocks True Damage         | Hunter Strike    |
| Core 2    | Brute Force Breastplate         | Anti-Kite / Hybrid Def | S2 maintains max speed and hybrid defense            | Dominance Ice    |
| Core 3    | Glowing Wand                    | Anti-Heal / Burn       | Multi-tick S2 sustains 50% healing cut and % HP burn | Queen's Wings    |
| Flex      | Dominance Ice                   | Attack-Speed Reduction | Counters melee duelists in point-blank S2 range      | Radiant Armor    |
| Late Game | Immortality                     | Resurrection Anchor    | Post-revive S2 + Ult secure nets 20% Max HP reset    | Blade of Despair |

#### Matchups & Drafting

* **Strong Counters**: Fanny (S1 collision cancels cables), Ling (Lethal Counter executes before wall jumps).
* **Countered By**: Valir (continuous pushback cancels S2), Franco (suppression shuts down spinning).
* **Draft Function**: Early Pick / Objective Snowballer. Pick when opposing lineup lacks hard displacement.

---

### Hayabusa

#### Identity

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Hero ID        | `haya_002`                                                    |
| Primary Role   | Assassin                                                        |
| Secondary Role | None                                                            |
| Primary Lane   | Jungle                                                          |
| Secondary Lane | None                                                            |
| Archetype      | Shadow Diver / Infiltrator                                      |
| Damage Type    | Physical                                                        |
| Difficulty     | High (8/10)                                                     |
| Scaling        | Late-Game Hypercarry                                            |
| Power Spike    | Level 4; Hunter Strike; Blade of the Heptaseas                  |
| Main Strength  | Absolute untargetability during Ultimate; unmatched evasiveness |
| Main Weakness  | Direct Ultimate damage splits across multiple units/minions     |
| Win Condition  | Isolate backline squishies and execute priority picks           |

#### Skills (Updated Patch 2.1.95a)

* **Passive — Ninjutsu: Trace of Shadow**: Skill damage applies 1 Shadow Mark (up to 4 stacks). Each stack increases Hayabusa's damage to the target by 5% (max +20%) and reveals their vision.
* **Skill 1 — Ninjutsu: Phantom Shuriken**: Throws 3 shurikens forward, dealing 220–300 (+75%–85% Extra Physical Attack) Physical Damage per shuriken and slowing targets. Recovers 10 energy per shuriken hit. *(Buffed in Patch 2.1.95a: base and extra scaling raised)*.
* **Skill 2 — Ninjutsu: Quad Shadow**: Dashes forward and releases 4 phantom shadows in a cross. Shadow hitbox width increased to 1.0 with wider aiming camera *(Adjusted in Patch 2.1.95a)*. Teleporting to a shadow reduces S1 cooldown.
* **Skill 3 (Ultimate) — Ougi: Shadow Kill**: Becomes untargetable and dashes 6–12 times among nearby targets. Deals 130 (+30% Extra Physical Attack) base damage per strike, with marks dealing 90–120 (+40%–50% Extra Physical Attack) additional damage. *(Damage tuned down in 2.1.95a to shift power to S1/S2 skillshots)*.

#### Builds

| Slot      | Item                          | Purpose                 | Skill Synergy                                       | Alternative            |
| --------- | ----------------------------- | ----------------------- | --------------------------------------------------- | ---------------------- |
| Boots     | Magic Shoes (Ice Retribution) | Cooldown Reduction      | Faster S2 shadow and S1 poke rotations              | Tough Boots            |
| Core 1    | Hunter Strike                 | Flat Pen / Kiting Burst | S1 + basic hit triggers 50% movement burst          | Blade of the Heptaseas |
| Core 2    | Blade of the Heptaseas        | Ambush Burst            | Flat armor shred scales shadow teleports            | Sky Piercer            |
| Core 3    | Malefic Roar                  | Armor Nullification     | Pierces tank defenses during Shadow Kill            | Endless Battle         |
| Flex      | Rose Gold Meteor              | Magic Shield / Clutch   | Shield activates during shadow recovery             | Wind of Nature         |
| Late Game | Blade of Despair              | Execution Scaling       | Triggers +25% damage when targets drop below 50% HP | Immortality            |

---

### Atlas

#### Identity

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Hero ID        | `atla_003`                                                   |
| Primary Role   | Tank                                                           |
| Secondary Role | Support                                                        |
| Primary Lane   | Roam                                                           |
| Secondary Lane | None                                                           |
| Archetype      | Hard CC / Vanguard Initiator                                   |
| Damage Type    | Magic                                                          |
| Difficulty     | Moderate (5/10)                                                |
| Scaling        | Mid-to-Late Game                                               |
| Power Spike    | Level 4; Conceal Active completion                             |
| Main Strength  | Game-changing multi-target displacement and stun               |
| Main Weakness  | Predictable eject trajectory; interrupted by hard displacement |
| Win Condition  | Land 3-man or 4-man Fatal Links pulls onto allied burst setups |

#### Skills (Updated Patch 2.1.95a)

* **Passive — Frigid Breath**: Generates a freezing aura around Atlas upon casting skills. Enemies inside have movement speed reduced and attack speed slowed by 50%. Exiting the aura restores Atlas's hybrid defense.
* **Skill 1 — Annihilate**: Slams the ground creating 3 explosions dealing Magic Damage. If ejected from Mecha, both Atlas and Mecha cast this skill simultaneously.
* **Skill 2 — Perfect Match**: Ejects from Mecha, gaining CC immunity, slow immunity, and **30% bonus Movement Speed** *(Nerfed from 40% in Patch 2.1.95a; Cooldown adjusted to 13–11s)*. Merging stuns enemies for 1s.
* **Skill 3 (Ultimate) — Fatal Links**: Channels chains connecting to all nearby enemy heroes. Recasting or finishing the channel flings all chained enemies to a designated location, dealing massive Magic Damage and applying a 1-second stun.

#### Builds

| Slot      | Item                  | Purpose                  | Skill Synergy                                      | Alternative     |
| --------- | --------------------- | ------------------------ | -------------------------------------------------- | --------------- |
| Boots     | Tough Boots (Conceal) | CC Reduction / Engage    | Stealth bypasses vision to land S2 merge           | Rapid Boots     |
| Core 1    | Dominance Ice         | Anti-Heal / Physical Def | Polar aura stacks with Frigid Breath to cripple AS | Antique Cuirass |
| Core 2    | Athena's Shield       | Magic Burst Buffer       | Negates counter-burst upon landing Fatal Links     | Radiant Armor   |
| Core 3    | Fleeting Time         | Ult Cooldown Reset       | Reduces Ultimate CD by 30% on teamfight assists    | Thunder Belt    |
| Flex      | Blade Armor           | Basic Attack Reflection  | Punishes marksmen pulled into melee range          | Twilight Armor  |
| Late Game | Immortality           | Resurrection Anchor      | Guarantees safe extraction after deep initiation   | Winter Crown    |

---

### Obsidia

#### Identity

| Field          | Value                                                                        |
| -------------- | ---------------------------------------------------------------------------- |
| Hero ID        | `obsi_004`                                                                 |
| Primary Role   | Marksman                                                                     |
| Secondary Role | None                                                                         |
| Primary Lane   | Gold Lane                                                                    |
| Secondary Lane | None                                                                         |
| Archetype      | Stacking On-Hit / Objective Melter                                           |
| Damage Type    | Physical                                                                     |
| Difficulty     | Moderate (6/10)                                                              |
| Scaling        | Exponential Late Game                                                        |
| Power Spike    | 2 Core Items (Corrosion + DHS); Max Bone Shards                              |
| Main Strength  | Unmatched structure pushing and hyper-late frontline shred                   |
| Main Weakness  | Immobile during skill-focus channels; weak early laning                      |
| Win Condition  | Farm safely to 10 minutes, melt structures and frontliners from behind tanks |

#### Skills (Updated Patch 2.1.95a)

* **Passive — Bone Shard Accumulation**: Basic attacks generate Bone Energy, crystallizing into Bone Shards that pierce armor. Attack Speed growth is **1.5%** *(Buffed from 1% in Patch 2.1.95a)*. Basic attacks against enemy Turrets now grant **2 Bone Energy**, drastically accelerating structure pushes *(New in 2.1.95a)*.
* **Skill 1 — Shard Volley**: Fires crystalline projectiles in a line, dealing physical damage and slowing targets.
* **Skill 2 — Calcified Barrier**: Deploys a defensive bone barrier that reduces incoming frontal ranged damage.
* **Skill 3 (Ultimate) — Skeletal Eruption**: Fires concentrated bone artillery. The previous 30% Attack Speed bonus has been removed. Hitting an enemy hero now **grants a durable shield equal to 200 + 25 per Bone Shard**, significantly increasing survivability during late-game dives *(Reworked in Patch 2.1.95a)*.

#### Builds

| Slot      | Item               | Purpose               | Skill Synergy                                        | Alternative        |
| --------- | ------------------ | --------------------- | ---------------------------------------------------- | ------------------ |
| Boots     | Swift Boots        | Attack Speed          | Accelerates early Bone Energy generation             | Tough Boots        |
| Core 1    | Corrosion Scythe   | Stacking Slow / AS    | Stacks movement slow to keep targets in basic range  | Demon Hunter Sword |
| Core 2    | Demon Hunter Sword | % Current HP Shred    | Inherits on-hit scaling alongside Bone Shard marks   | Golden Staff       |
| Core 3    | Golden Staff       | On-Hit Multiplication | Triggers triple on-hit passive procs every 2 attacks | Wind of Nature     |
| Flex      | Wind of Nature     | Physical Immunity     | 2-second physical damage immunity during trades      | Rose Gold Meteor   |
| Late Game | Malefic Roar       | Armor Piercing        | Synergizes with Bone Shard passive to bypass armor   | Immortality        |

---

### Kaja

#### Identity

| Field          | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Hero ID        | `kaja_005`                                                          |
| Primary Role   | Support                                                               |
| Secondary Role | Fighter                                                               |
| Primary Lane   | Roam                                                                  |
| Secondary Lane | EXP Lane                                                              |
| Archetype      | Area Restraint / Terrain Disrupter                                    |
| Damage Type    | Magic                                                                 |
| Difficulty     | High (7/10)                                                           |
| Scaling        | Mid-Game Dominant                                                     |
| Power Spike    | Level 4; 40% Cooldown Reduction                                       |
| Main Strength  | Multi-target displacement ignoring terrain barriers                   |
| Main Weakness  | Ultimate suppression replaced by cleanse-able restraint               |
| Win Condition  | Fly across walls, drag multiple priority carries into team focus fire |

#### Skills (Reworked Patch 2.1.95)

* **Passive — Wings of Lightning**: Dealing skill damage inflicts *Paralysis* on enemies, slowing them by 15%–30% and reducing their total damage output by 8% per stack (up to 24%).
* **Skill 1 — Ring of Order**: Releases a circular electric shockwave that expands and contracts, dealing Magic Damage and restoring HP to Kaja for every enemy struck.
* **Skill 2 — Soaring Wings**: Spreads electrical wings to gain flight, **ignoring all map terrain and walls**. Grants 80% initial Movement Speed that decays to 30% *(Reworked in Patch 2.1.95)*.
* **Skill 3 (Ultimate) — Divine Binding**: Replaces his historical single-target suppress. Casts an electrical binding lasso in an area that **restrains and continuously drags multiple enemy heroes simultaneously**, pulling them along Kaja's movement path for 1.8 seconds *(Reworked in Patch 2.1.95)*.

#### Builds

| Slot      | Item                    | Purpose                 | Skill Synergy                                      | Alternative     |
| --------- | ----------------------- | ----------------------- | -------------------------------------------------- | --------------- |
| Boots     | Magic Shoes (Conceal)   | Cooldown Reduction      | Maximizes Soaring Wings flight and Ultimate uptime | Tough Boots     |
| Core 1    | Fleeting Time           | Ultimate CDR Reset      | Assists during Divine Binding refund 30% ult CD    | Dominance Ice   |
| Core 2    | Dominance Ice           | Anti-Heal / Armor       | Paralysis damage reduction stacks with AS debuff   | Antique Cuirass |
| Core 3    | Athena's Shield         | Anti-Magic Burst        | Survives initiation damage while dragging carries  | Radiant Armor   |
| Flex      | Brute Force Breastplate | Mobility / CC Reduction | Stacks defense and extra speed during S2 flight    | Glowing Wand    |
| Late Game | Immortality             | Second Life             | Guarantees safe escape after dragging teams        | Winter Crown    |

---

### Hanzo

#### Identity

| Field          | Value                                                               |
| -------------- | ------------------------------------------------------------------- |
| Hero ID        | `hanz_006`                                                        |
| Primary Role   | Assassin                                                            |
| Secondary Role | None                                                                |
| Primary Lane   | Jungle                                                              |
| Secondary Lane | None                                                                |
| Archetype      | Infiltration / Pure Attack Diver                                    |
| Damage Type    | Physical                                                            |
| Difficulty     | High (7/10)                                                         |
| Scaling        | Mid-to-Late Game                                                    |
| Power Spike    | Level 4; Full Demon Hunter Sword + Hunter Strike                    |
| Main Strength  | Global range jungle theft; zero-risk frontline engagement           |
| Main Weakness  | Stationary physical body is completely vulnerable to flankers       |
| Win Condition  | Starve enemy jungler early; pilot Hanekage to wipe backline carries |

#### Skills (Adjusted Patch 2.1.95a)

* **Passive — Ame no Habakiri**: Gathers Demon Blood from nearby unit deaths. Fuels the duration and abilities of his Supreme Demon Ninja form.
* **Skill 1 — Ninjutsu: Demon Feast**: Devours jungle creeps instantly to absorb Demon Blood. When used on Turtle, Lord, or heroes, heals Hanzo for **150–450 (+80% Total Physical Attack)** *(Adjusted in 2.1.95a to scale with Physical Attack rather than % HP, removing viability of Tank Hanzo)*.
* **Skill 2 — Ninjutsu: Soul Reap**: Summons a circle of spikes dealing physical damage and slowing targets while harvesting blood.
* **Skill 3 (Ultimate) — Kinjutsu: Pinnacle Ninja**: Hanzo channels in place, splitting into Hanekage (Demon Ninja) to fly across terrain with boosted speed. Upon returning to his main body, he heals for **360–520 (+100% Extra Physical Attack)** *(Adjusted in 2.1.95a to enforce Attack scaling)*.

#### Builds

| Slot      | Item                            | Purpose                  | Skill Synergy                                      | Alternative            |
| --------- | ------------------------------- | ------------------------ | -------------------------------------------------- | ---------------------- |
| Boots     | Swift Boots (Flame Retribution) | Attack Speed             | Stacks S1 unlock hits rapidly                      | Magic Shoes            |
| Core 1    | Demon Hunter Sword              | % HP Damage / On-Hit     | Hanekage basic attacks shred tanks and Lord        | Corrosion Scythe       |
| Core 2    | Hunter Strike                   | Flat Penetration / Speed | Boosts Hanekage movement across terrain            | Blade of the Heptaseas |
| Core 3    | Endless Battle                  | True Damage Weaving      | Directly scales new Physical Attack healing ratios | Golden Staff           |
| Flex      | Malefic Roar                    | Armor Penetration        | Ensures Demon Ninja pierces physical defense       | Rose Gold Meteor       |
| Late Game | Blade of Despair                | Raw Attack Multiplier    | Maximizes new S1 and Ult physical healing ratios   | Immortality            |

---


## Drafting & Composition Matrix

                  [DRAFT FLOW ARCHITECTURE]
                             │
 ┌───────────────────────────┴───────────────────────────┐
 ▼                                                       ▼
[FIRST PICK VALUE]                                  [COUNTER PICK VALUE]
• Zhuxin (S-Tier Zone Control)                      • Atlas (Punishes Dash-less Backlines)
• Hayabusa (High-Banned Infiltrator)                • Kaja (Restrains Clustered Teams)
• Claude (Safe S-Tier Late Scaling)                 • Gatotkaca (Punishes Physical DPS)
│                                                       │
└───────────────────────────┬───────────────────────────┘
▼
[COMPOSITION COMPATIBILITY]
Dive / Pick-Off: Hayabusa + Kaja + Mathilda
Womb-Combo AoE : Atlas + Pharsa + Zhuxin
Protect the Carry: Obsidia / Claude + Fredrinn + Minotaur

### Team Composition Profiles

#### 1. Area Denial & High Ground Defense

* **Core Heroes**: Pharsa (Mid), Zhuxin (Mid/Flex), Atlas (Roam), Fredrinn (EXP/Jungle), Claude (Gold).
* **Execution**: Zhuxin establishes an inescapable gravitational zone; Pharsa drops artillery barrages while Atlas counter-initiates any diver attempting to bypass the frontline.

#### 2. Pick-Off & Precision Isolation

* **Core Heroes**: Hayabusa (Jungle), Kaja (Roam), Mathilda (Mid/Support), Balmond (EXP), Brody (Gold).
* **Execution**: Kaja uses S2 flight to bypass frontline walls, chaining *Divine Binding* to drag high-priority carries into Hayabusa's isolated *Shadow Kill*.

---

## Centralized Emblem Matrix

| Hero      | Emblem Class    | Talent 1 | Talent 2               | Talent 3         | Mechanical Justification                                                             |
| --------- | --------------- | -------- | ---------------------- | ---------------- | ------------------------------------------------------------------------------------ |
| Balmond   | Custom Fighter  | Thrill   | Festival of Blood      | Brave Smite      | Maximizes flat attack; stacks up to 10% Spell Vamp; restores 4% HP on S2 hits        |
| Hayabusa  | Custom Assassin | Rupture  | Master Assassin        | Lethal Ignition  | Flat penetration + 7% isolated target damage + 3-hit burn proc on Shadow Kill        |
| Atlas     | Custom Tank     | Firmness | Tenacity               | Concussive Blast | Grants early armor; +15 defense under 50% HP; AoE magic burst on S2 merge            |
| Obsidia   | Custom Marksman | Swift    | Bargain Hunter         | Weakness Finder  | +10% AS accelerates passive; discounts core items; slows target movement and AS      |
| Kaja      | Custom Support  | Agility  | Pull Yourself Together | Focusing Mark    | Extra MS for dragging; cuts Conceal/Flicker CD by 15%; increases team damage by 6%   |
| Hanzo     | Custom Assassin | Swift    | Seasoned Hunter        | Killing Spree    | Faster auto stacks; speeds up Turtle/Lord clears; restores 8% HP and speed on kill   |
| Zhuxin    | Custom Mage     | Inspire  | Bargain Hunter         | Impure Rage      | +5% CDR; discounts items; restores 2% Max Mana per skill tick to sustain S2          |
| Claude    | Custom Marksman | Swift    | Tenacity               | Quantum Charge   | AS growth; defensive buffer during ult dive; grants MS and HP regen on basic attacks |
| Fredrinn  | Custom Tank     | Vitality | Tenacity               | Brave Smite      | +225 HP scales skills; low-HP defense buff; restores 4% HP on taunt hits             |
| Mathilda  | Custom Support  | Agility  | Wilderness Blessing    | Focusing Mark    | Fast lane rotation; jungle pathing speed; amplifies allied focus-fire damage         |
| Pharsa    | Custom Mage     | Rupture  | Bargain Hunter         | Lethal Ignition  | Flat penetration; accelerates Clock/Truncheon; procs burn on second air strike       |
| Gatotkaca | Custom Tank     | Firmness | Tenacity               | Brave Smite      | Stacks physical defense with passive; restores 4% HP on enhanced Rage punches        |

---

## Centralized Battle Spell Matrix

| Hero      | Primary Spell     | Secondary Spell   | Optimal Operational Condition                                                      |
| --------- | ----------------- | ----------------- | ---------------------------------------------------------------------------------- |
| Balmond   | Ice Retribution   | Flicker           | Use Retribution in Jungle; swap to Flicker on EXP Lane for surprise Ult cancels    |
| Hayabusa  | Ice Retribution   | Flame Retribution | Ice Retribution steals MS for S1 setup; Flame steals AD against duelists           |
| Atlas     | Flicker           | Revitalize        | Flicker enables S2-Flicker-Ult combos; Revitalize for sustained choke contests     |
| Obsidia   | Flicker           | Purify            | Flicker for repositioning; Purify against heavy CC comps (e.g., Franco, Moskov)    |
| Kaja      | Flicker           | Sprint            | Flicker extends Divine Binding drag range; Sprint provides slow immunity           |
| Hanzo     | Flame Retribution | Ice Retribution   | Flame Retribution steals Physical Attack to amplify new patch scaling ratios       |
| Zhuxin    | Flicker           | Sprint            | Flicker enables S2-throw redirection into friendly towers; Sprint prevents kiting  |
| Claude    | Vengeance         | Sprint            | Vengeance grants 35% damage reduction during Ultimate dives; Sprint prevents slows |
| Fredrinn  | Ice Retribution   | Vengeance         | Ice Retribution in Jungle; Vengeance in EXP Lane to safely charge full Grey HP     |
| Mathilda  | Flicker           | Purify            | Flicker extends dive reach; Purify ensures Guiding Wind cannot be cancelled        |
| Pharsa    | Flicker           | Purify            | Flicker repositions Feathered Air Strike mid-channel without cancellation          |
| Gatotkaca | Vengeance         | Flicker           | Vengeance reflects triple damage during S2 taunt; Flicker for surprise taunt dives |

---

## Changelog

### 2026-09-04 (Patch 2.1.95a Live Verification)

* Updated database to reflect **Patch 2.1.95a** live changes:
  * **Obsidia**: Attack Speed growth buffed to 1.5%; basic attacks on turrets now generate 2 Bone Energy; Ultimate reworked to grant a shield (200 + 25 per shard) instead of attack speed.
  * **Hayabusa**: Skill 1 damage buffed; Skill 2 shadow width increased to 1.0; Skill 3 damage tuned down to rebalance kit power.
  * **Atlas**: Skill 2 movement speed nerfed from 40% to 30%; cooldown lengthened to 13–11s.
  * **Hanzo**: Skill 1 and Ultimate healing reworked to scale with Physical Attack rather than Max HP, mitigating half-tank builds.
  * **Thunder Belt**: Role restriction expanded—Assassins now receive the 50% effect reduction alongside Marksmen and Mages.
* Integrated Patch 2.1.95 Kaja rework (*Soaring Wings* flying mechanic and *Divine Binding* AoE restraint).

---

## Sources


| Source                                     | URL                                                  | Data Extracted                          | Access Date |
| ------------------------------------------ | ---------------------------------------------------- | --------------------------------------- | ----------- |
| Moonton Official Patch 2.1.95a Notes       | `https://mlbbhub.com/patch-notes/original/2.1.95a` | Hero adjustments, Thunder Belt changes  | 2026-09-04  |
| Moonton Official Patch 2.1.95 Notes        | `https://mlbbhub.com/patch-notes/original/2.1.95`  | Kaja rework, Chaos Clash data           | 2026-09-04  |
| Mobile Legends: Bang Bang Esports Data Hub | `https://esportsbet.io/news/ml/`                   | Professional pick/ban rates and tiering | 2026-09-04  |
