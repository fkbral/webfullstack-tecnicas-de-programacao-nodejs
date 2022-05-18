/* eslint-disable quotes */
const numero = 20
const nome = 'Fulano'
const ehValido = true
const numeros = [10, 20, 30]

// any é má prática
let qualquerCoisa: any
let numero2: number
let nome2: string
let ehValido2: boolean
let data: Date

let dataArray: Date[]
const numeros2: number[] = []
let tuplaDadosPessoa: [string, number, string, boolean]
let tuplaNumeroOuString: (number | string)[]

tuplaDadosPessoa = ['Felipe', 30, '123.456.789-01', true]
tuplaNumeroOuString = ['teste', 10, 100, 'teste2']

qualquerCoisa = 100
qualquerCoisa = false
qualquerCoisa = 'fulano'

// dá erro, pois não é número
// numero2 = "10"
numero2 = 10
nome2 = 'Ciclano'
ehValido2 = false
data = new Date()
dataArray = [new Date(), new Date(new Date().setHours(10))]

numeros2.push(2, 4, 6)

console.log(numero)
console.log(data)
