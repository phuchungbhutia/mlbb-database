import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MLBB Meta & Mechanics Database",
  description: "Patch 2.1.95a Live Hero Builds, Equipment Synergies, and Draft Analytics",
  base: "/mlbb-database/", // e.g. '/mlbb-database/' (ensure trailing and leading slashes)
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Hero Profiles', link: '/heroes' },
      { text: 'Equipment & Mechanics', link: '/game-data' },
      { text: 'Interactive Explorer', link: '/explorer' },
      { text: 'Update Database', link: '/update-database' }
    ],
    sidebar: [
      {
        text: 'Database Archives',
        items: [
          { text: 'Hero Profiles & Builds', link: '/heroes' },
          { text: 'Equipment & Mechanics', link: '/game-data' },
          { text: 'Interactive Explorer', link: '/explorer' }
          { text: 'Update Database', link: '/update-database' }
        ]
      }
    ],
    // Built-in client-side full-text search
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/phuchungbhutia/mlbb-database' }
    ]
  }
})