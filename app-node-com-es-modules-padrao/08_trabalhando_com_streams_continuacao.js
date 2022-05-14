import path from 'path'
import fs from 'fs'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const { __dirname } = createDirAndFileNameGlobals(import.meta.url)

const fileUrl = path.join(__dirname, 'uploads', 'numeros.txt')
const fileDestUrl = path.join(__dirname, 'uploads', 'numeros-dobro-output.txt')

const fileReadStream = fs.createReadStream(fileUrl, { encoding: 'utf8' })
const fileWriteStream = fs.createWriteStream(fileDestUrl)

// fileReadStream.push('teste1\n')

fileReadStream.pipe(fileWriteStream)
fileReadStream.on('end', () => { console.log('terminada a leitura do arquivo') })
fileReadStream.once('data', (chunk) => { 
  const numerosDobrados = chunk.split('\n').map(numero => (Number(numero) * 2).toString())
  const numerosDobradosString = numerosDobrados.join('\n')
  console.log(numerosDobradosString)
  fileReadStream.push(numerosDobradosString) 
})

fileReadStream.on('error', (chunk) => { console.log('erro') })

fileWriteStream.on('drain', () => console.log('drain'))
fileWriteStream.on('error', () => console.log('error'))
fileWriteStream.on('pipe', () => console.log('pipe'))
fileWriteStream.on('open', () => console.log('open'))
fileWriteStream.on('unpipe', () => console.log('unpipe'))
fileWriteStream.on('finish', () => console.log('finish'))

// fileWriteStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString('utf8'))
//   next()
// }