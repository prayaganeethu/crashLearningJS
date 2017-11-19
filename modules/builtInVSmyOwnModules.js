// reference : https://www.w3schools.com/nodejs/nodejs_modules.asp

const http = require('http')
const timeStamp = require('./dateTime')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('Time is running out. Current time stamp:' + timeStamp.giveDateTime())
  res.end()
}).listen(7080)
