import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'

const filePath = (variant: SchemeName) => {
  const isBordered = variant.endsWith('Bordered')
  const base = variant.replace('Bordered', '')
  
  // Convert camelCase to kebab-case for the filename
  const baseFilename = base.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
  const name = `ayu-cola-${baseFilename}`
  
  const suffix = isBordered ? '-bordered' : ''
  return path.join(process.cwd(), `${name}${suffix}.json`)
}

;(['light', 'dark', 'mirage', 'lightBordered', 'darkBordered', 'mirageBordered', 'powderRoseLight', 'powderRoseLightBordered', 'shibaInuLight', 'shibaInuLightBordered'] as SchemeName[]).forEach(
  (variant: SchemeName) => {
    const content = JSON.stringify(template(variant), null, '\t')

    fs.writeFileSync(filePath(variant), content)
    console.log(`Updated ${variant}`)
  }
)
