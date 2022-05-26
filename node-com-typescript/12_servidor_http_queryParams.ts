import * as http from 'http'
import * as dotenv from 'dotenv'
import * as path from 'path'
import * as urlModule from 'url'
import * as querystring from 'querystring'

console.log(path.join(__dirname))
dotenv.config({ path: path.join(__dirname, '.env') })
const port = process.env.PORT ?? '3333'

interface IUser {
  name: string
}

let users = ['Fulano', 'Ciclano', 'João Maria']

const server = http.createServer(async (request, response) => {
  const { method } = request

  const { pathname, searchParams } = new urlModule.URL(
    request.url as string,
    `http://${request.url}`
  )

  response.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (pathname === '/') {
    return response.end(`
      <div>
        <h1>Teste h1</h1>
        <p>Olá</p>
      </div>
    `)
  }
  if (pathname === '/usuarios') {
    if (method === 'GET') {
      // const userParsed = querystring.parse('João Maria')
      // console.log(userParsed)
      const searchForUser = searchParams.get('name')
      const user = users.find(
        (findUser) => findUser.toLowerCase() === searchForUser?.toLowerCase()
      )

      if (searchForUser) {
        return response.end(user ?? '<h1>Usuário não encontrado</h1>')
      }
      return response.end(JSON.stringify(users))
    }

    if (method === 'POST') {
      const bodyPromise: Promise<IUser> = new Promise((resolve, reject) => {
        let bodyData: any

        request.on('data', (data) => {
          bodyData = JSON.parse(data)
        })

        request.on('end', () => {
          resolve(bodyData)
        })
      })

      const { name } = await bodyPromise

      users = [...users, name]
      return response.end(`usuário ${name} criado!`)
    }
  }

  response.statusCode = 404
  response.end('<h1>Página não encontrada</h1>')
})

server.listen(process.env.PORT, undefined, () => {
  console.log(`Aplicação rodando em ${process.env.API_URL}:${port}`)
})
