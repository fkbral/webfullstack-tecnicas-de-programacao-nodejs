import fs from 'fs'
import path from 'path'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const { __dirname } = createDirAndFileNameGlobals(import.meta.url)

const fileUrl = path.join(__dirname, 'uploads', 'zoologico.csv')

const fileContent = await fs.promises.readFile(fileUrl, 'utf8')

// const zoologico = [
//   {
//     animal: '',
//     quantidade: '',
//     numeroDeVisitasSemanal: '',
//     comentario: '',
//     popularidade: ''
//   }
// ]

const [, ...animalLines] = fileContent.split('\n')
// console.log(columnNames)
// console.log(animalLines)

const zoologico = animalLines.map(animalLine => {
  const [animal, quantidade, numeroDeVisitasSemanal, comentario, popularidade] =
   animalLine.split(',')

  return {
    animal,
    quantidade: Number(quantidade),
    numeroDeVisitasSemanal,
    comentario,
    popularidade: Number(popularidade),
  }
})

const destFileUrl = path.join(__dirname, 'uploads', 'zoologico.json')

await fs.promises.writeFile(
  destFileUrl, JSON.stringify(zoologico, null, 2)
)