import * as rl from 'readline'

export function createReadlineWithQuestionPromise() {
  const terminalInterface = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return {
    ...terminalInterface,
    close: () => { terminalInterface.close() },
    question: (pergunta) => {
      return new Promise((resolve, reject) => {
        try {
          terminalInterface.question(`${pergunta} `, (answer) => {
            resolve(answer)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}