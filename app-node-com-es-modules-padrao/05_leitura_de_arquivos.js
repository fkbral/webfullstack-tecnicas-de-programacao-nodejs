import fs from 'fs'
import path from 'path'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const { __dirname } = createDirAndFileNameGlobals(import.meta.url)

const fileUrl = path.join(__dirname, 'pasta3', 'teste.txt')

const fileContent = await fs.promises.readFile(fileUrl, 'utf8')

console.log(fileContent)