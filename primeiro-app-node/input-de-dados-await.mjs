import * as readline from 'readline-sync'

const nome = readline.question("Qual é seu nome? ")
console.log(`Boa noite, ${nome}`)

const cor = readline.question("Qual sua cor favorita? ")
console.log(`Sua cor favorita é ${cor}`)

const numero = readline.question("Qual seu número favorito? ")
console.log(`Seu número favorito é ${numero}`)

const pet = readline.question("Qual é seu pet favorito? ")
console.log(`Seu pet favorito é ${pet}`)
