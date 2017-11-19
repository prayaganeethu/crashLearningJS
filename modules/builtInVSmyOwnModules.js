/*
References :-
https://www.w3schools.com/nodejs/nodejs_modules.asp
https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc

Using CommonJS approach here to design and import modules.
CommonJS takes a server-first approach and synchronously loads modules.
This matters because if we have three other modules we need to require,
it’ll load them one by one
*/

const http = require('http')
const timeStamp = require('./dateTime')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('Time is running out. Current time stamp:' + timeStamp.giveDateTime())
  res.end()
}).listen(7080)
