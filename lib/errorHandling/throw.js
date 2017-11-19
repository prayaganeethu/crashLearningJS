function MyException (errMessage) {
  this.message = errMessage
  this.name = 'My Exception'
}

MyException.prototype.toString = function () {
  return this.name + ' : ' + this.message
}

throw new MyException('Too many letters')
