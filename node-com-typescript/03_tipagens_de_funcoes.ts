// function dobraNumero(numero: number): number {
function dobraNumero(numero: number) {
  return numero * 2
}

// function cumprimenta(nome: string, data: Date): void {
function cumprimenta(nome: string, data: Date) {
  console.log(`Olá, ${nome} são ${data.getHours()}h`)
}

const numeroDobrado = dobraNumero(100)
console.log(numeroDobrado)

cumprimenta('Maria', new Date())
