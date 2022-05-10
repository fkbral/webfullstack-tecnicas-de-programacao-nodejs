import * as readline from 'readline-sync'

const nome = readline.question("Qual é seu nome? ")

const cor = readline.question("Qual sua cor favorita? ")

const numero = readline.question("Qual seu número favorito? ")

const pet = readline.question("Qual é seu pet favorito? ")

console.log(`Boa noite, ${nome}`)
console.log(`Sua cor favorita é ${cor}`)
console.log(`Seu número favorito é ${numero}`)
console.log(`Seu pet favorito é ${pet}`)
