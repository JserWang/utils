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

export function emptyDir(dir: string) {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file)
    // baseline is Node 12 so can't use rmSync :(
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs)
      fs.rmdirSync(abs)
    } else {
      fs.unlinkSync(abs)
    }
  }
}
