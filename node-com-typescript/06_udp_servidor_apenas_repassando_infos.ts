import dgram from 'dgram'

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

  const allClientsWithoutSender = clientPorts.filter(
    (clientPort) => clientPort !== remoteInfo.port
  )

  allClientsWithoutSender.forEach((clientPort) =>
    server.send(`${remoteInfo.port}: ${msgContent.toString()}`, clientPort)
  )
})

server.bind(5001)
