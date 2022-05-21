import dgram from 'dgram'
import rl from 'readline'

const client = dgram.createSocket('udp4')
// client.send('Olá', 5001)

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
})

client.on('message', (msgContent, remoteInfo) => {
  console.log(`${remoteInfo.port}:${msgContent.toString()}`)
})

// evento 'line' roda indefinidamente como se fosse um loop infinito
readline.on('line', (msgContent) => {
  // client.send(msgContent, 5001, '192.168.0.122')
  // client.send(msgContent, 5001, '127.0.0.1')
  // client.send(msgContent, 5001, 'localhost')
  client.send(msgContent, 5001)
})
