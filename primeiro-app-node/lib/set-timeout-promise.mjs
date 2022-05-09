function setTimeoutPromise(callback, tempo) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => { 
        // resolve(callback())
        callback()
        resolve()
      }, tempo)
    } catch (error) {
      // console.error(error)
      reject(error)
    }
  })
}

const tempoDeEspera = 1000 // 1s ou 1000ms

await setTimeoutPromise(() => { 
  console.log(`Passaram-se ${tempoDeEspera}s`)
  console.log('ok!!')
}, tempoDeEspera)
console.log('timeout 1 rodou!')

setTimeoutPromise(() => { console.log(`Passaram-se ${2000}s`) }, 2000)
.then(() => {
  console.log('timeout 2 rodou!')
})
