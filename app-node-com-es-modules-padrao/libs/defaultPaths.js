import path from 'path'
import os from 'os'

export function createDirAndFileNameGlobals(importPath) {
  const osName = os.type()
  let [, __filename] = importPath
  .split('file://')

  if(osName === 'Windows_NT') {
    __filename = __filename.split(':/')?.[1]
  }

  const __dirname = path.join(__filename, '..')

  return {
    __dirname,
    __filename
  }
}