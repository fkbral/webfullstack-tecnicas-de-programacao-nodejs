import * as fs from 'fs'
import * as path from 'path'

const fileUrl = path.join(__dirname, 'uploads', 'zoologico.csv')
const destFileUrl = path.join(__dirname, 'uploads', 'zoologico.json')

const readStream = fs.createReadStream(fileUrl, { encoding: 'utf8' })
const writeStream = fs.createWriteStream(destFileUrl)

interface IZoologico {
  animal: string,
  quantidade: number,
  numeroDeVisitasSemanal: string,
  comentario: string,
  popularidade: number
}

readStream.on('data', (chunk: string) => {
  const [, ...animalLines] = chunk.split('\n')
  
  const zoologico: IZoologico[] = animalLines.map(animalLine => {
    const [animal, quantidade, numeroDeVisitasSemanal, comentario, popularidade] =
     animalLine.split(',')

    // const zooObject: IZoologico = {
    //   animal,
    //   quantidade: Number(quantidade),
    //   numeroDeVisitasSemanal,
    //   comentario,
    //   popularidade: Number(popularidade),
    // }
  
    // return zooObject

    return {
      animal,
      quantidade: Number(quantidade),
      numeroDeVisitasSemanal,
      comentario,
      popularidade: Number(popularidade)
    }
  })

  writeStream.write(
    JSON.stringify(zoologico, null, 2)
  )
})

