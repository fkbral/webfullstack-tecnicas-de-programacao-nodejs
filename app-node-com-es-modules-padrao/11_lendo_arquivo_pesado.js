import fs from 'fs'
import path from 'path'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const {__dirname} = createDirAndFileNameGlobals(import.meta.url)
const fileUrl = path.join(__dirname, 'uploads', 'arquivo-grande.txt')
const fileReadStream = fs.createReadStream(fileUrl)

// isto provoca alto consumo de memória
// console.time('meu loop')
// const teste = await fs.promises.readFile(fileUrl)
// console.timeEnd('meu loop')


// com streams não acontece esse pico!!
fileReadStream.on('open', () => {
  console.time('meu loop')
})
fileReadStream.on('data', (chunk) => {})
fileReadStream.on('end', (chunk) => {
  console.log('terminou leitura')
  console.timeEnd('meu loop')
})