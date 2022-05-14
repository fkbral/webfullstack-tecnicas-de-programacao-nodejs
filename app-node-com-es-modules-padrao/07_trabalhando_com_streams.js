import fs from 'fs'
import path from 'path'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const { __dirname } = createDirAndFileNameGlobals(import.meta.url)

const fileUrl = path.join(__dirname, 'uploads', 'teste.txt')
const fileDestUrl = path.join(__dirname, 'uploads', 'teste-output.txt')
// const fileContent = await fs.promises.readFile(fileUrl, {encoding: 'utf8'})
// console.log(fileContent)

const fileReadStream = fs.createReadStream(fileUrl, { encoding: 'utf-8' })
const fileWriteStream = fs.createWriteStream(fileDestUrl)

fileReadStream.pipe(fileWriteStream)
fileReadStream.on('end', () => { console.log('terminada a leitura do arquivo') })
fileReadStream.on('data', (chunk) => { console.log('chunk lido') })
fileWriteStream.on('finish', () => { console.log('escrita do arquivo acabou') })