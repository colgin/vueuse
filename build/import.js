const path = require('path')
const fs = require('fs-extra')

const srcDir = path.resolve(__dirname, '../src')

async function updateImport () {
  const files = fs
    .readdirSync(srcDir)
    .filter(f => f.startsWith('use'))
    .sort()

  let content = ''
  content += 'export { init } from \'./api\'\n'
  content += files.map(f => `export * from './${f}'\n`).join('')

  fs.writeFileSync(path.join(srcDir, 'index.ts'), content)
}

if (require.main === module)
  updateImport()