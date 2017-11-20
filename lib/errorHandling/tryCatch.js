'use strict'
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Today is which day of the week? ', (answer) => {
  try {
    console.log(getWeekDay(answer.toLowerCase()))
  } catch (error) {
    console.log('Something went wrong : ' + error)
  }
  rl.close()
})

function getWeekDay (day) {
  switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
    case 'saturday':
    case 'sunday': console.log('Awesome ' + day + ' !!!')
      break
    default: throw new Error('Invalid weekday : ' + day)
  }
}
