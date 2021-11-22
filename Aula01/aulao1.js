let x, y, s

x = 1
y = 2
soma = x + y

console.log(soma)

function aprovacao(nota, freq) {
  let aprov

  if (nota >= 7 && freq >= 0.75) {
    aprov = 'Aprovado'
  } else {
    aprov = 'Reprovado'
  }
  return aprov
}

let luiz

luiz = aprovacao(5.0, 9)
console.log(luiz)
