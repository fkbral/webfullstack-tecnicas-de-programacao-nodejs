import fs from 'fs'
import path from 'path'

const [, __filename] = import.meta.url.split('file://')
const __dirname = path.join(__filename, '..')

console.log(__filename)

const diretorioACriar = path.join(__dirname, 'pasta3')
const arquivoACriarOuModificar = path.join(__dirname, 'pasta3', 'teste.txt')

await fs.promises.mkdir(diretorioACriar, { recursive: true })
await fs.promises.writeFile(arquivoACriarOuModificar, 'Olá pessoal\n')
await fs.promises.appendFile(arquivoACriarOuModificar, 'Tchau pessoal')
