const soma = 1 + 1

const somaPromise = new Promise((resolve, reject) => {
  if (soma === 2) {
    resolve(soma)
  }
  else {
    reject(soma)
  }
})

try {
  const resultado = await somaPromise
  console.log(resultado)
} catch (error) {
  console.error('Resultado inesperado da soma!!!')
}

// const array = []
// array.map((elemento, indice, elementosDoArray) => {})
