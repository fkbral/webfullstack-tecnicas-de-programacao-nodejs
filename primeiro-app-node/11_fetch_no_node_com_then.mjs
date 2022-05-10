import fetch from 'node-fetch'

fetch('https://cat-fact.herokuapp.com/facts/random')
.then((response) => {
  response.json()
  .then((catFact) => {
    const catFactText = catFact.text
    console.log(catFactText)
  })
})