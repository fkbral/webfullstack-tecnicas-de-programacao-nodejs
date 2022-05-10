import { createReadlineWithQuestionPromise } from './lib/readline-promise.mjs'

const readline = createReadlineWithQuestionPromise()

const language = await readline.question(
  'Qual é a linguagem de programação que você tem mais proficiência?'
)

const framework = await readline.question(
  'Qual é o framework de programação que você tem mais proficiência?'
)

readline.close()

console.log('Maiores experiêcias:')
console.log(`linguagem de programação: ${language}`)
console.log(`framework: ${framework}`)
