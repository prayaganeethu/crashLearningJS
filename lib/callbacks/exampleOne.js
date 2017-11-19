let cb = function (string) {
  console.log(string)
}

function calculateThis (exp, func) {
  if (exp) console.log(exp)
  else func('Try again, Neethu')
}

calculateThis(1 * 1, cb)
calculateThis(1 * 0, cb)
