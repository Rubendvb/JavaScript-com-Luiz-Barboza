class Pessoa {
  constructor(fn, ln) {
    this.firstName = fn
    this.lastName = ln
  }
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

luiz = new Pessoa('Rubén', 'Vásquez')
nome = luiz.fullName()
console.log(nome)
