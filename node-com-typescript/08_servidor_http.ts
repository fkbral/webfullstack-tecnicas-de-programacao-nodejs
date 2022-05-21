import * as http from 'http'

const server = http.createServer((request, response) => {
  const { url, method } = request
  // console.log(method)

  response.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (url === '/') {
    return response.end(`
      <div>
        <h1>Teste h1</h1>
        <p>Olá</p>
      </div>
    `)
  }

  if (url === '/usuarios') {
    return response.end('Olá anônimo!!')
  }

  response.statusCode = 404
  response.end('<h1>Página não encontrada</h1>')
  // console.log(request)
})

server.listen('3333')
