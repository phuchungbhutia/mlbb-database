
# Interactive Meta Explorer

<div style="margin: 20px 0;">
  <input 
    id="heroSearch" 
    type="text" 
    placeholder="Type hero, role, or lane (e.g. Assassin, Jungle, Hayabusa)..." 
    style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-alt); color: var(--vp-c-text-1);"
  />
</div>

<div style="overflow-x: auto;">
  <table id="metaTable" style="width: 100%; border-collapse: collapse;">
    <thead>
      <tr style="border-bottom: 2px solid var(--vp-c-divider); text-align: left;">
        <th style="padding: 10px;">Hero</th>
        <th style="padding: 10px;">Role</th>
        <th style="padding: 10px;">Lane</th>
        <th style="padding: 10px;">Archetype</th>
        <th style="padding: 10px;">Tier</th>
        <th style="padding: 10px;">Win Rate</th>
        <th style="padding: 10px;">Ban Rate</th>
      </tr>
    </thead>
    <tbody id="tableBody">
      <!-- Injected via JavaScript -->
    </tbody>
  </table>
</div>

<script>
const heroData = [
  { hero: "Hayabusa", role: "Assassin", lane: "Jungle", archetype: "Shadow Diver", tier: "S+", wr: "53.10%", br: "68.40%" },
  { hero: "Zhuxin", role: "Mage", lane: "Mid", archetype: "Area Denial / CC", tier: "S+", wr: "53.80%", br: "72.10%" },
  { hero: "Atlas", role: "Tank / Support", lane: "Roam", archetype: "Hard CC Vanguard", tier: "S", wr: "52.40%", br: "34.20%" },
  { hero: "Obsidia", role: "Marksman", lane: "Gold", archetype: "Stacking Hypercarry", tier: "S", wr: "51.80%", br: "28.50%" },
  { hero: "Kaja", role: "Support / Fighter", lane: "Roam", archetype: "Area Restraint", tier: "S", wr: "52.90%", br: "42.10%" },
  { hero: "Claude", role: "Marksman", lane: "Gold", archetype: "Blinking Carry", tier: "S", wr: "52.10%", br: "31.80%" },
  { hero: "Balmond", role: "Fighter", lane: "Jungle / EXP", archetype: "Sustain Bruiser", tier: "A", wr: "51.20%", br: "3.40%" },
  { hero: "Fredrinn", role: "Tank / Fighter", lane: "Jungle / EXP", archetype: "Grey HP Tank", tier: "A+", wr: "50.40%", br: "12.50%" },
  { hero: "Mathilda", role: "Support / Assassin", lane: "Roam / Mid", archetype: "Mobility Enchanter", tier: "S", wr: "52.70%", br: "45.00%" }
];

function renderRows(items) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = items.map(item => `
    <tr style="border-bottom: 1px solid var(--vp-c-divider);">
      <td style="padding: 10px; font-weight: bold;">${item.hero}</td>
      <td style="padding: 10px;">${item.role}</td>
      <td style="padding: 10px;">${item.lane}</td>
      <td style="padding: 10px;">${item.archetype}</td>
      <td style="padding: 10px;"><span style="background: #10b981; color: white; padding: 2px 8px; border-radius: 4px;">${item.tier}</span></td>
      <td style="padding: 10px;">${item.wr}</td>
      <td style="padding: 10px;">${item.br}</td>
    </tr>
  `).join('');
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    renderRows(heroData);
    document.getElementById('heroSearch').addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = heroData.filter(h => 
        h.hero.toLowerCase().includes(q) || 
        h.role.toLowerCase().includes(q) || 
        h.lane.toLowerCase().includes(q) ||
        h.archetype.toLowerCase().includes(q)
      );
      renderRows(filtered);
    });
  });
}
</script>
