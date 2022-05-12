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
  const __dirname = path.join(__filename, '..')
  
  return {
    __dirname,
    __filename
  }
}