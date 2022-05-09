// códigos assíncronos são executados DEPOIS
setTimeout(() => {console.log('Rodo dentro de um timer')}, 0)
setTimeout(() => {console.log('Rodo dentro de um timer')}, 1000)

// códigos síncronos são executados PRIMEIRO
console.log('Eu vou aparecer em tela antes da primeira pergunta ser respondida')
const numero = 100
console.log(numero)