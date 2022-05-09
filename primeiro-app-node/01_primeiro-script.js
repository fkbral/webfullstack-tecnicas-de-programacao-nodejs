const alunos = ["Fulano", "Maria", "Zeca"]

alunos.forEach(aluno => {
  console.log(`Boa noite, ${aluno}`)
})

// Window não está está disponível no node: dá erro
try {
  window.alert('Não entro aqui, pois não existo no node')
  alert('Não entro aqui, pois não existo no node')
} catch (error) {
  // console.error(error)
  console.error('Global Window não está disponível no node')
}

try {
  const numeroDigitadoPeloUsuario = parseInt(prompt('Entre com um número: '))
  console.log(numeroDigitadoPeloUsuario)
} catch (error) {
  console.error(
    'Global Window não está disponível no node, logo prompt não pode ser usado'
  )
}

const numero = 10
console.log(numero)
console.log(document)
console.log(document.querySelector)