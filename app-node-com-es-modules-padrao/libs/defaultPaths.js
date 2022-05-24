import path from 'path'
import os from 'os'

export function createDirAndFileNameGlobals(importPath) {
  const splitByHashMap = {
    'Linux': 'file://',
    'Darwin': 'file://',
    'Windows_NT': 'file:///',
  }
  
  const osName = os.type()
  const splitByString = splitByHashMap[osName]
  const [, __filename] = importPath.split(splitByString)
  const parsedFileName = decodeURIComponent(__filename)
  const __dirname = path.join(parsedFileName, '..')
  
  return {
    __dirname,
    __filename
  }
}

createDirAndFileNameGlobals(import.meta.url)