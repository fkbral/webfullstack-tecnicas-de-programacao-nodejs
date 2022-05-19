import dgram from 'dgram'
import rl from 'readline'

const server = dgram.createSocket('udp4')
const clientPorts: number[] = []

server.on('listening', () => {
  const addressInfo = server.address()
  const { address, port } = addressInfo

  console.log(`server listening on ${address}:${port}`)
})

server.on('message', (msgContent, remoteInfo) => {
  console.log(`${remoteInfo.port}:${msgContent.toString()}`)

  if (!clientPorts.includes(remoteInfo.port)) {
    clientPorts.push(remoteInfo.port)
  }
})

server.bind(5001)

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.on('line', (msgContent) => {
  server.send(msgContent, clientPorts?.[0])
})
