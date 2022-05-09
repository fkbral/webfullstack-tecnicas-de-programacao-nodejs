import * as rl from 'readline'

function createReadlinePromise() {
  const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  }