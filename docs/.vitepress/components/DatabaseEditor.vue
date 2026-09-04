<script setup>
import { ref } from 'vue'

const repoOwner = 'phuchungbhutia'
const repoName = 'mlbb-database'

const githubToken = ref('')
const heroName = ref('')
const heroId = ref('')
const primaryRole = ref('Fighter')
const secondaryRole = ref('None')
const lane = ref('EXP')
const archetype = ref('')
const tier = ref('A')
const winRate = ref('50.00')
const pickRate = ref('1.50')
const banRate = ref('2.00')

const coreItems = ref('')
const battleSpell = ref('Flicker')
const emblemTree = ref('')

const statusMsg = ref('')
const statusColor = ref('')
const isSubmitting = ref(false)

const submitUpdate = async () => {
  if (!githubToken.value) {
    statusMsg.value = 'Please provide a GitHub Personal Access Token with repo/contents write scope.'
    statusColor.value = '#ef4444'
    return
  }
  if (!heroName.value || !heroId.value) {
    statusMsg.value = 'Hero Name and ID are required.'
    statusColor.value = '#ef4444'
    return
  }

  isSubmitting.value = true
  statusMsg.value = 'Fetching current database markdown...'
  statusColor.value = '#3b82f6'

  try {
    const filePath = 'MLBB_Hero_Database.md'
    const getFileUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`

    // 1. Fetch current file content and sha
    const getRes = await fetch(getFileUrl, {
      headers: {
        Authorization: `token ${githubToken.value}`,
        Accept: 'application/vnd.github.v3+json'
      }
    })

    if (!getRes.ok) {
      throw new Error(`Failed to fetch file: ${getRes.status} ${getRes.statusText}`)
    }

    const fileData = await getRes.json()
    const currentSha = fileData.sha
    const currentContent = decodeURIComponent(escape(atob(fileData.content)))

    // 2. Prepare new table row
    const newTableRow = `| ${heroName.value} | \`${heroId.value}\` | ${primaryRole.value} | ${secondaryRole.value} | ${lane.value} | ${archetype.value} | Physical | Mid Game | ${tier.value} | ${winRate.value} | ${pickRate.value} | ${banRate.value} | CURRENT |`

    // 3. Prepare detailed hero block
    const itemsList = coreItems.value
      .split(',')
      .map((item, idx) => `${idx + 1}. **${item.trim()}**`)
      .join('\n')

    const newDetailBlock = `
### ${heroName.value} (ID: ${heroId.value})
* **Optimal Emblem Tree:** ${emblemTree.value || 'Custom Setup'}
* **Battle Spells:** ${battleSpell.value}
* **Recommended Equipment Build:**
${itemsList}
---
`

    // 4. Inject row into Hero Master Index table
    const tableHeader = '| Hero | ID | Primary Role | Secondary Role | Primary Lane | Archetype | Damage Type | Scaling | Tier | WR (%) | PR (%) | BR (%) | Patch Status |'
    let updatedContent = currentContent

    if (updatedContent.includes(tableHeader)) {
      const parts = updatedContent.split(tableHeader)
      const afterHeader = parts[1]
      const lines = afterHeader.split('\n')
      // line 0 is blank, line 1 is separator |:---|...
      // insert immediately after separator
      lines.splice(2, 0, newTableRow)
      updatedContent = parts[0] + tableHeader + lines.join('\n') + newDetailBlock
    } else {
      updatedContent += `\n${newTableRow}\n${newDetailBlock}`
    }

    // 5. Commit updated file back to repository via GitHub API
    statusMsg.value = 'Writing commit to main branch...'
    const putRes = await fetch(getFileUrl, {
      method: 'PUT',
      headers: {
        Authorization: `token ${githubToken.value}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: `data: register ${heroName.value} (${heroId.value}) and kit specs`,
        content: btoa(unescape(encodeURIComponent(updatedContent))),
        sha: currentSha,
        branch: 'main'
      })
    })

    if (!putRes.ok) {
      const err = await putRes.json()
      throw new Error(err.message || 'Error pushing to GitHub')
    }

    statusMsg.value = `✔ Successfully added ${heroName.value}! GitHub Actions is now re-parsing and rebuilding your live site.`
    statusColor.value = '#10b981'

    // Reset inputs
    heroName.value = ''
    heroId.value = ''
    coreItems.value = ''
    archetype.value = ''
  } catch (err) {
    statusMsg.value = `❌ Error: ${err.message}`
    statusColor.value = '#ef4444'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div style="background: var(--vp-c-bg-alt); padding: 24px; border-radius: 12px; border: 1px solid var(--vp-c-divider); margin: 24px 0;">
    <p style="font-size: 13px; color: var(--vp-c-text-2); margin-bottom: 20px;">
      This form commits directly to <code>MLBB_Hero_Database.md</code> in your repository. GitHub Actions will automatically parse the Markdown into JSON and deploy the updated meta to GitHub Pages.
    </p>

    <!-- Token Security Field -->
    <div style="margin-bottom: 16px;">
      <label style="display: block; font-weight: 600; font-size: 13px; margin-bottom: 6px;">GitHub Personal Access Token (Fine-grained or Classic with <code>repo</code> write):</label>
      <input
        v-model="githubToken"
        type="password"
        placeholder="github_pat_..."
        style="width: 100%; padding: 10px 14px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);"
      />
      <small style="color: var(--vp-c-text-3);">Your token is only used locally in memory for this API request and is never saved or tracked.</small>
    </div>

    <!-- Hero Data Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 16px;">
      <div>
        <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Hero Name</label>
        <input v-model="heroName" placeholder="e.g. Nolan" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);" />
      </div>

      <div>
        <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Hero ID</label>
        <input v-model="heroId" placeholder="e.g. nola_001" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);" />
      </div>

      <div>
        <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Primary Role</label>
        <select v-model="primaryRole" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);">
          <option>Assassin</option>
          <option>Fighter</option>
          <option>Mage</option>
          <option>Marksman</option>
          <option>Support</option>
          <option>Tank</option>
        </select>
      </div>

      <div>
        <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Lane</label>
        <input v-model="lane" placeholder="Jungle, EXP, Mid, Gold, Roam" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);" />
      </div>

      <div>
        <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Tier</label>
        <select v-model="tier" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);">
          <option>S+</option>
          <option>S</option>
          <option>A+</option>
          <option>A</option>
          <option>B</option>
        </select>
      </div>

      <div>
        <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Archetype</label>
        <input v-model="archetype" placeholder="e.g. Rift Diver / Burst" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);" />
      </div>
    </div>

    <!-- Kit & Build Section -->
    <div style="margin-bottom: 16px;">
      <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Core Items (Comma separated)</label>
      <input v-model="coreItems" placeholder="Blade of the Heptaseas, Hunter Strike, Malefic Roar, Blade of Despair" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);" />
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
      <div>
        <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Battle Spell</label>
        <input v-model="battleSpell" placeholder="Retribution, Flicker, Purify" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);" />
      </div>

      <div>
        <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Optimal Emblem Setup</label>
        <input v-model="emblemTree" placeholder="Custom Assassin (Rupture, Master Assassin, Killing Spree)" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1);" />
      </div>
    </div>

    <button
      :disabled="isSubmitting"
      @click="submitUpdate"
      style="background: #3b82f6; color: white; border: none; padding: 10px 24px; border-radius: 6px; font-weight: 600; cursor: pointer; opacity: isSubmitting ? 0.6 : 1;"
    >
      {{ isSubmitting ? 'Pushing Commit...' : 'Commit Hero to Database' }}
    </button>

    <div v-if="statusMsg" :style="{ color: statusColor, marginTop: '16px', fontSize: '14px', fontWeight: '500' }">
      {{ statusMsg }}
    </div>
  </div>
</template>