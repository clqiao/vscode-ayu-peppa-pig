import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'

const filePath = (variant: SchemeName) => {
  const isBordered = variant.endsWith('Bordered')
  const base = variant.replace('Bordered', '')
  const name = base === 'light' ? 'ayu-cola-powder-rose-light' : `ayu-cola-${base}`
  const suffix = isBordered ? '-bordered' : ''
  return path.join(process.cwd(), `${name}${suffix}.json`)
}

;(['light', 'dark', 'mirage', 'lightBordered', 'darkBordered', 'mirageBordered'] as SchemeName[]).forEach(
  (variant: SchemeName) => {
    const content = JSON.stringify(template(variant), null, '\t')

    fs.writeFileSync(filePath(variant), content)
    console.log(`Updated ${variant}`)
  }
)
