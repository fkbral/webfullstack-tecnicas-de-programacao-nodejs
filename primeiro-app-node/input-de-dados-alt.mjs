import * as readline from 'readline'

const interfaceComUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// callback hell
interfaceComUsuario.question("Qual é seu nome? ", (nome) => {
  console.log(`Boa noite, ${nome}`)

  interfaceComUsuario.question("Qual sua cor favorita? ", (cor) => {
    console.log(`Sua cor favorita é ${cor}`)

    interfaceComUsuario.question("Qual seu número favorito? ", (numero) => {
      console.log(`Seu número favorito é ${numero}`)
      // const dobro = numero * 2
      // const ehPar = numero % 2 === 0

      interfaceComUsuario.question("Qual é seu pet favorito? ", (pet) => {
        console.log(`Seu pet favorito é ${pet}`)
        interfaceComUsuario.close()
      })
    })
  })
})