import * as http from 'http'

const requestOptions: http.RequestOptions = {
  host: 'localhost',
  port: 3333,
  path: '/usuarios',
}

const request = http.request(requestOptions, (response) => {
  console.log(response.statusCode)

  response.on('data', (chunk: Buffer) => {
    console.log(chunk.toString())
  })
})

request.end()
