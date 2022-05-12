import fs from 'fs'
import path from 'path'

// const __dirname =
const [, __filename] = import.meta.url.split('file://')
const __dirname = path.join(__filename, '..')
const filePath = process.cwd()
// const filePath = path.join(process.cwd(), '..', '..')
// const filePath = path.join(process.cwd(), '../../..')
// console.log(filePath)
console.log(__filename)
console.log(__dirname)

async function getFileNames(filePath) {
  const fileNames = await fs.promises.readdir(filePath)
  console.log(fileNames)
}

async function getFileOrDirStats(filePath) {
  const fileOrDirStats = await fs.promises.stat(filePath)
  console.log(fileOrDirStats)
}

async function getFileStats(filePath) {
  const fileOrDirStats = await fs.promises.readdir(filePath, { withFileTypes: true })
  fileOrDirStats.forEach(stats => console.log(stats.isDirectory()))
}

// function getFileStatsSync() {
//   const fileOrDirStats = fs.readdirSync(path, { withFileTypes: true })
//   fileOrDirStats.forEach(stats => console.log(stats.isDirectory()))
// }

getFileNames(filePath)
getFileOrDirStats(filePath)
getFileStats(filePath)

fs.promises.readdir(path).then(result => console.log(result))