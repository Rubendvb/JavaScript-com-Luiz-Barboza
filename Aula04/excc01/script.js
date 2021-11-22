function loadDoc() {
  const xhttp = new XMLHttpRequest()
  xhttp.onload = function () {
    const linhas = this.responseText.split('\n')
    text = ''
    for (let i = 0; i < linhas.length; i++) {
      text += '<tr>'
      const cels = linhas[i].split(',')
      for (let j = 0; j < cels.length; j++) {
        text += '<td>' + cels[j] + '</td>'
      }
      text += '</tr>'
    }
    console.log(text)
    document.getElementById('demo').innerHTML = '<table>' + text + '</table>'
  }
  xhttp.open(
    'GET',
    'https://raw.githubusercontent.com/lcbjrrr/quant/master/notas%20(2).csv'
  )
  xhttp.send()
}
