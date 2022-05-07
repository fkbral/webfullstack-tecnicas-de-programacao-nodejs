// import * as readline from 'readline'
const readline = require('readline')

const interfaceComUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

interfaceComUsuario.question("Qual é seu nome? ", (nome) => {
  console.log(`Boa noite, ${nome}`)
  interfaceComUsuario.close()
})