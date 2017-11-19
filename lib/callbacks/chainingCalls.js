// Using node's fs api calls.
// With the asynchronous methods there is no guaranteed ordering. Hence chain the callbacks.
const fs = require('fs')
fs.open('./learnJS.txt', 'a+', (err, fd) => {
  if (err) throw err
  fs.rename('./learnJS.txt', './prettyMuchNothing.txt', (err) => {
    if (err) throw err
    fs.stat('./prettyMuchNothing.txt', (err, stats) => {
      if (err) throw err
      console.log(JSON.stringify(stats))
    })
  })
})
