import { addWeeks, subWeeks, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const today = new Date()
console.log(today)

// const dateFormatted = format(today, 'cccc')
const dateFormatted = format(today, "cccc',' dd 'de' MMMM", { locale: ptBR })

// const aWeekAgoDate = addWeeks(today, -3)
const aWeekAgoDate = subWeeks(today, 3)
console.log(aWeekAgoDate)

console.log(
  today.toLocaleDateString('pt-br', { hour: 'numeric', minute: 'numeric' })
)

console.log(dateFormatted)
