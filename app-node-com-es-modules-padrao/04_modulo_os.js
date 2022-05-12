import path from 'path'
import os from 'os'

const splitByHashMap = {
  'Linux': 'file://',
  'Darwin': 'file://',
  'Windows_NT': ':/'
}

const osName = os.type()
const splitByString = splitByHashMap[osName]
const [, __filename] = import.meta.url.split(splitByString)
const __dirname = path.join(__filename, '..')

console.log(__filename)
console.log(__dirname)