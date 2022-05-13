import fs from 'fs'
import path from 'path'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const { __dirname } = createDirAndFileNameGlobals(import.meta.url)

const diretorioACriar = path.join(__dirname, 'pasta1', 'teste1', 'teste2')
// const diretorioACriar = path.join(__dirname, 'pasta1/teste1/teste2')
const diretorio2ACriar = path.join(__dirname, 'pasta2')

await fs.promises.mkdir(diretorioACriar, { recursive: true })
await fs.promises.mkdir(diretorio2ACriar, { recursive: true })
