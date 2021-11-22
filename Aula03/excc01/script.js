class Guy {
  constructor(name, cash) {
    this.firstName = name
    this.account = cash
  }
  GiveCash(value) {
    if (this.account >= value) {
      this.account = this.account - value
      return true
    } else {
      return false
    }
  }
  TakeCash(value) {
    this.account = this.account + value
  }
}

martin = new Guy('Martin', 1000)
raul = new Guy('Raul', 2000)

v = 500
if (martin.GiveCash(v)) {
  raul.TakeCash(v)
} else {
  console.log('Nao foi possível emprestar')
}

console.log(martin.account)
console.log(raul.account)
