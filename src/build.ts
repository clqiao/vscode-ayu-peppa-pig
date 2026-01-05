import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'

const filePath = (variant: string, bordered: boolean) => {
  const name = variant === 'shiba-inu-light' ? variant : `peppa-${variant}`
  return path.join(process.cwd(), `/ayu-${name}${bordered ? '' : '-unbordered'}.json`)
}

;['light', 'dark', 'mirage', 'shiba-inu-light'].map((variant: SchemeName) => {
  const bordered = JSON.stringify(template(variant, true), null, '\t')
  const nonBordered = JSON.stringify(template(variant, false), null, '\t')

  fs.writeFileSync(filePath(variant, true), bordered)
  fs.writeFileSync(filePath(variant, false), nonBordered)
  console.log(`Updated ${variant}`)
})
