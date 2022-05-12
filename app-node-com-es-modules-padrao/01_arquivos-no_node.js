import fs from 'fs'
import path from 'path'
import { createDirAndFileNameGlobals } from './libs/defaultPaths.js'

const { __dirname, __filename } = createDirAndFileNameGlobals(import.meta.url)

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