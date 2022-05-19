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

readline.on('line', (msgContent) => {
  client.send(msgContent, 5001)
})
