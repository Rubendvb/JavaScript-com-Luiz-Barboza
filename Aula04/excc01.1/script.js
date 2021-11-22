const xhttp = new XMLHttpRequest()

xhttp.onload = function () {
  const linhas = this.responseText.split('\n')
  console.log(linhas)
  text = ''
  nota = ''
  for (let i = 0; i < linhas.length; i++) {
    const cels = linhas[i].split(',')
    text = text + '<option value=' + i + '>' + cels[1] + '</option>'

    nota = nota + '<p value=' + i + '>' + cels[5] + '</p>'
  }
  document.getElementById('list').innerHTML =
    "<form><select onchange='selecionar(this.value)'>" +
    text +
    '</select></form>'

  document.getElementById('det').innerHTML =
    "<h3 onchange='selecionar(this.value)'>" + nota + '</h3>'
}
xhttp.open(
  'GET',
  'https://raw.githubusercontent.com/lcbjrrr/quant/master/notas%20(2).csv'
)
xhttp.send()
