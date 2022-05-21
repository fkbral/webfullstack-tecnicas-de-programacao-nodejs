import axios, { AxiosResponse } from 'axios'
import { api } from './services/api'

async function callApi() {
  let response: AxiosResponse<any, any>
  let data: string
  response = await axios.get('http://localhost:3333/')
  data = response.data
  console.log(data)

  response = await axios.get('http://localhost:3333/usuarios')
  data = response.data
  console.log(data)
}

async function callApiBetter() {
  let response: AxiosResponse<any, any>
  let data: string

  response = await api.get('')
  data = response.data
  console.log(data)

  response = await api.get('usuarios')
  data = response.data
  console.log(data)
}

callApi()
callApiBetter()
