import path from 'path'
import os from 'os'

const osName = os.type()
let [, __filename] = import.meta.url
.split('file://')

if(osName === 'Windows_NT') {
  __filename = __filename.split(':/')?.[1]
}

const __dirname = path.join(__filename, '..')

console.log(__filename)
console.log(__dirname)