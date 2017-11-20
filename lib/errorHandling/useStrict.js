'use strict'
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function printTheNextNumber (num) {
  return num + 1
}

function recursiveReadline () {
  rl.question('Enter a number to know the next one, or "exit" to quit: ', (answer) => {
    if (answer !== 'exit') {
      try {
        console.log(printTheNextNumber(Number(answer)))
      } catch (e) {
        console.log('Something went wrong: ' + e)
      }
      recursiveReadline()
    } else rl.close()
  })
}

recursiveReadline()
