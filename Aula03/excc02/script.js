class Combo {
  constructor(comida, bebida, decoracao, pessoas, preco) {
    this.comida = comida
    this.bebida = bebida
    this.decoracao = decoracao
    this.pessoas = pessoas
    this.preco = preco
  }

  TotalCusto() {
    let custoComida = 25.0
    let custoBebidaSuco = 5.0
    let custoBebidaAlcoolica = 20.0
    let custoDecoracao = 30.0
    let custoLembrancinha = 7.5

    if (this.bebida == 'suco') {
      custoBebida = custoBebidaSuco - 5 * 100
    } else if (this.bebida == 'alcool') {
      custoBebida = custoBebidaAlcoolica - 5 * 100
    }
  }
}

class CalculadoraFesta {
  constructor(numPessoas, bebSaudavel, decDiferenciada) {}

  calcularValorComidas() {}

  calcularValorBebidas() {}

  calcularValorDecoracao() {}

  calcularDescontoPercentual() {}

  calcularTotalFesta() {}
}
