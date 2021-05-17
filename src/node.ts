import * as path from 'path'
import * as fs from 'fs'
import * as os from 'os'

export function dirExistsOrCreate(dir: string) {
  const parsedPath = path.parse(dir).dir
  if (!fs.existsSync(parsedPath)) {
    fs.mkdirSync(parsedPath, { recursive: true })
  }
}

export function writeFile(dir: string, data: string) {
  dirExistsOrCreate(dir)
  fs.appendFileSync(dir, `${os.EOL}${data}`)
}

export function readFile(dir: string) {
  if (!fs.existsSync(dir)) {
    return ''
  }
  return fs.readFileSync(dir).toString()
}
