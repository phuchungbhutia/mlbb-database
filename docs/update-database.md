
# Database Contribution & Patch Updater

Use this panel to append new hero profiles, gear recommendations, and patch adjustments directly to the primary Markdown database.

<script setup>
import DatabaseEditor from './.vitepress/components/DatabaseEditor.vue'
</script>

<DatabaseEditor />

### How It Operates

1. **API Direct Commit:** Pushes an authenticated Git commit updating `MLBB_Hero_Database.md` on your GitHub `main` branch.
2. **Automated Pipeline:** Triggers the `.github/workflows/deploy-pages.yml` workflow.
3. **Parse & Build:** Runs `npm run parse` to update `data/heroes.json` and rebuilds the VitePress site.
4. **Live Synchronization:** The [Meta Explorer](/explorer) automatically reflects the new entries once the build completes (~45 seconds).
