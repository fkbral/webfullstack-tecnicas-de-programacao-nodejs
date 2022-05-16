import path from 'path'
import fs from 'fs'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const { __dirname } = createDirAndFileNameGlobals(import.meta.url)

const fileUrl = path.join(__dirname, 'uploads', 'numeros.txt')
const fileDestUrl = path.join(__dirname, 'uploads', 'numeros-dobro-output.txt')

const fileReadStream = fs.createReadStream(fileUrl, { encoding: 'utf8' })
const fileWriteStream = fs.createWriteStream(fileDestUrl)

fileReadStream.on('data', (chunk) => {
  const numerosStrArray = chunk.split('\n')
  
  numerosStrArray.forEach((numeroStr) => {
    const numeroDobroStr = (Number(numeroStr) * 2).toString()
    // fileWriteStream.write(`${numeroStr}\n`)
    fileWriteStream.write(`${numeroDobroStr}\n`)
  })
})