<script setup>
import { ref, computed } from 'vue'
import { data as rawHeroes } from '../../heroes.data.mjs'

const searchQuery = ref('')
const selectedRole = ref('All')

const splitItems = (str) => {
  if (!str) return []
  return str.split(',').map(s => s.trim()).filter(Boolean)
}

const heroes = computed(() => {
  if (!Array.isArray(rawHeroes)) return []
  return rawHeroes.map(h => ({
    id: h.ID || h.Hero,
    hero: h.Hero || 'Unknown',
    role: (h['Primary Role'] || '') + (h['Secondary Role'] && h['Secondary Role'] !== 'None' ? ` / ${h['Secondary Role']}` : ''),
    lane: h['Primary Lane'] || '-',
    archetype: h.Archetype || '-',
    tier: h.Tier || 'B',
    wr: h['WR (%)'] ? `${h['WR (%)']}%` : '-',
    br: h['BR (%)'] ? `${h['BR (%)']}%` : '-',
    items: splitItems(h['Core Items']),
    spell: h['Battle Spell'] || 'Flexible',
    emblem: h.Emblem || 'Standard'
  }))
})

const availableRoles = computed(() => {
  const set = new Set()
  if (Array.isArray(rawHeroes)) {
    rawHeroes.forEach(h => {
      if (h['Primary Role']) set.add(h['Primary Role'])
    })
  }
  return ['All', ...Array.from(set).sort()]
})

const filteredHeroes = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  const role = selectedRole.value

  return heroes.value.filter(h => {
    const matchesRole = (role === 'All') || h.role.includes(role)
    const matchesQuery = !q || (
      h.hero.toLowerCase().includes(q) ||
      h.lane.toLowerCase().includes(q) ||
      h.archetype.toLowerCase().includes(q) ||
      h.tier.toLowerCase().includes(q) ||
      h.spell.toLowerCase().includes(q) ||
      h.emblem.toLowerCase().includes(q) ||
      h.items.some(i => i.toLowerCase().includes(q))
    )
    return matchesRole && matchesQuery
  })
})
</script>

<template>
  <div style="display: flex; gap: 12px; margin: 24px 0; flex-wrap: wrap;">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search hero, equipment (e.g. War Axe), spell, or emblem..."
      style="flex: 1; min-width: 260px; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-alt); color: var(--vp-c-text-1); font-size: 14px; outline: none;"
    />
    <select
      v-model="selectedRole"
      style="padding: 10px 14px; border-radius: 8px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-alt); color: var(--vp-c-text-1); font-size: 14px; outline: none; cursor: pointer;"
    >
      <option v-for="r in availableRoles" :key="r" :value="r">Role: {{ r }}</option>
    </select>
  </div>

  <div style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
      <thead>
        <tr style="border-bottom: 2px solid var(--vp-c-divider); color: var(--vp-c-text-2);">
          <th style="padding: 10px 8px; min-width: 110px;">Hero</th>
          <th style="padding: 10px 8px;">Tier</th>
          <th style="padding: 10px 8px; min-width: 100px;">Lane / Role</th>
          <th style="padding: 10px 8px; min-width: 190px;">Core Equipment</th>
          <th style="padding: 10px 8px; min-width: 110px;">Spell</th>
          <th style="padding: 10px 8px; min-width: 170px;">Emblem Setup</th>
          <th style="padding: 10px 8px;">WR / BR</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="item in filteredHeroes" 
          :key="item.id"
          style="border-bottom: 1px solid var(--vp-c-divider);"
        >
          <td style="padding: 10px 8px; vertical-align: top;">
            <div style="font-weight: 600; color: var(--vp-c-text-1);">{{ item.hero }}</div>
            <div style="font-size: 11px; color: var(--vp-c-text-3);">{{ item.archetype }}</div>
          </td>

          <td style="padding: 10px 8px; vertical-align: top;">
            <span 
              :style="{
                background: item.tier.includes('S') ? '#10b981' : item.tier.includes('A') ? '#3b82f6' : '#6b7280',
                color: '#fff',
                padding: '2px 7px',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '11px',
                display: 'inline-block'
              }"
            >
              {{ item.tier }}
            </span>
          </td>

          <td style="padding: 10px 8px; vertical-align: top;">
            <div style="font-weight: 500;">{{ item.lane }}</div>
            <div style="font-size: 11px; color: var(--vp-c-text-3);">{{ item.role }}</div>
          </td>

          <td style="padding: 10px 8px; vertical-align: top;">
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span
                v-for="eq in item.items"
                :key="eq"
                style="background: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-divider); border-radius: 4px; padding: 2px 6px; font-size: 11px; white-space: nowrap; color: var(--vp-c-text-2);"
              >
                {{ eq }}
              </span>
              <span v-if="item.items.length === 0" style="color: var(--vp-c-text-3); font-size: 11px;">Standard Build</span>
            </div>
          </td>

          <td style="padding: 10px 8px; vertical-align: top;">
            <span style="background: rgba(245, 158, 11, 0.12); color: #d97706; border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 4px; padding: 2px 7px; font-size: 11px; font-weight: 500; display: inline-block;">
              ⚡ {{ item.spell }}
            </span>
          </td>

          <td style="padding: 10px 8px; vertical-align: top; font-size: 12px; color: var(--vp-c-text-2);">
            <span style="display: inline-block; background: var(--vp-c-bg-mute); border-radius: 4px; padding: 2px 6px; font-size: 11px;">
              🛡️ {{ item.emblem }}
            </span>
          </td>

          <td style="padding: 10px 8px; vertical-align: top; font-size: 12px; white-space: nowrap;">
            <div style="color: #10b981; font-weight: 500;">{{ item.wr }}</div>
            <div style="color: var(--vp-c-text-3); font-size: 11px;">Ban: {{ item.br }}</div>
          </td>
        </tr>

        <tr v-if="filteredHeroes.length === 0">
          <td colspan="7" style="padding: 24px; text-align: center; color: var(--vp-c-text-3);">
            No matching heroes or equipment found for "{{ searchQuery }}"
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>