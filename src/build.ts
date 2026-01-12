import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'

const filePath = (variant: string, bordered: boolean) => {
  let base: string
  switch (variant) {
    case 'light':
      base = 'ayu-cola-powder-rose-light'
      break
    case 'dark':
      base = 'ayu-cola-dark'
      break
    case 'mirage':
      base = 'ayu-cola-mirage'
      break
    default:
      base = `ayu-cola-${variant}`
  }

  const suffix = bordered ? '' : '-unbordered'
  return path.join(process.cwd(), `/${base}${suffix}.json`)
}

;['light', 'dark', 'mirage'].map((variant: SchemeName) => {
  const bordered = JSON.stringify(template(variant, true), null, '\t')
  const nonBordered = JSON.stringify(template(variant, false), null, '\t')

  fs.writeFileSync(filePath(variant, true), bordered)
  fs.writeFileSync(filePath(variant, false), nonBordered)
  console.log(`Updated ${variant}`)
})
