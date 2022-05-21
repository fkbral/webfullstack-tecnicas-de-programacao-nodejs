import * as http from 'http'

function makeRequest(requestOptions?: http.RequestOptions): Promise<string> {
  const defaultRequestOptions: http.RequestOptions = {
    host: 'localhost',
    port: 3333,
    path: '/',
  }

  const allRequestOptions = { ...defaultRequestOptions, ...requestOptions }

  return new Promise((resolve, reject) => {
    let result: string

    try {
      const request = http.request(allRequestOptions, (response) => {
        console.log(response.statusCode)

        response.on('data', (chunk: Buffer) => {
          result = chunk.toString()
        })

        response.on('end', () => {
          resolve(result)
        })
      })

      request.end()
    } catch (error) {
      reject(error)
    }
  })
}

async function callApi() {
  let response: string
  response = await makeRequest()
  console.log(response)

  response = await makeRequest({ path: '/usuarios' })
  console.log(response)
}

callApi()
