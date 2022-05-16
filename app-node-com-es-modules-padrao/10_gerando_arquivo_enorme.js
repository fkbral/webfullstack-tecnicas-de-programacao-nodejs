import fs from 'fs'
import path from 'path'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const {__dirname} = createDirAndFileNameGlobals(import.meta.url)
const fileDestUrl = path.join(__dirname, 'uploads', 'arquivo-grande.txt')
const fileWriteStream = fs.createWriteStream(fileDestUrl)


console.time('meu loop')
// for (let i=0; i<=10**8; i++){
for (let i=0; i<=1e7; i++){
  fileWriteStream.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident nulla id quibusdam vero veniam vel eaque. Distinctio, non dicta.')
}

console.timeEnd('meu loop')