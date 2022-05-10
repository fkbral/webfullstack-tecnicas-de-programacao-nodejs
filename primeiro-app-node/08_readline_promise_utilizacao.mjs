import { createReadlineWithQuestionPromise } from './lib/readline-promise.mjs'

const readline = createReadlineWithQuestionPromise()

const nome = await readline.question("Qual é seu nome? ")
console.log(`Boa noite, ${nome}`)

const cor = await readline.question("Qual sua cor favorita? ")
console.log(`Sua cor favorita é ${cor}`)

const numero = await readline.question("Qual seu número favorito? ")
console.log(`Seu número favorito é ${numero}`)

const pet = await readline.question("Qual é seu pet favorito? ")
console.log(`Seu pet favorito é ${pet}`)

readline.close()
