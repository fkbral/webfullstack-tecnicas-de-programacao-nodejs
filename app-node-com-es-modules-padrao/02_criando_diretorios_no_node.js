import fs from 'fs'
import path from 'path'

const [, __filename] = import.meta.url.split('file://')
const __dirname = path.join(__filename, '..')
const diretorioACriar = path.join(__dirname, 'pasta1/teste1/teste2')
const diretorio2ACriar = path.join(__dirname, 'pasta2')

await fs.promises.mkdir(diretorioACriar, { recursive: true })
await fs.promises.mkdir(diretorio2ACriar, { recursive: true })
