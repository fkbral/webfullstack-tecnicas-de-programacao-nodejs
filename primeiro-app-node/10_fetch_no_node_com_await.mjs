import fetch from 'node-fetch'

const response = await fetch('https://cat-fact.herokuapp.com/facts/random')
const catFact = await response.json()
const catFactText = catFact.text
console.log(catFactText)