import fs from 'fs'
import path from 'path'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const { __dirname, __filename } = createDirAndFileNameGlobals(import.meta.url)

const diretorioACriar = path.join(__dirname, 'pasta3')
const arquivoACriarOuModificar = path.join(__dirname, 'pasta3', 'teste.txt')

await fs.promises.mkdir(diretorioACriar, { recursive: true })
await fs.promises.writeFile(arquivoACriarOuModificar, 'Olá pessoal\n')
await fs.promises.appendFile(arquivoACriarOuModificar, 'Tchau pessoal')
