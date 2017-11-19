// https://blog.tableflip.io/the-difference-between-module-exports-and-exports/

let giveDateTime = function () {
  return Date()
}

exports = giveDateTime
console.log(exports, module.exports)
