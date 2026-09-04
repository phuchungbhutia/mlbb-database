import fs from 'node:fs'
import path from 'node:path'

export default {
  // Watch heroes.json so VitePress hot-reloads when you run 'npm run parse'
  watch: ['../data/heroes.json'],
  load() {
    const filePath = path.resolve(process.cwd(), 'data/heroes.json')
    if (!fs.existsSync(filePath)) {
      return []
    }
    const rawData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(rawData)
  }
}