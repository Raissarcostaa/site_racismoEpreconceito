function aumentarTexto() {
    var body = document.getElementsByTagName('body')[0];
    var computedStyle = window.getComputedStyle(body);
    var fontSize = parseFloat(computedStyle.fontSize);

    body.style.fontSize = (fontSize + 2) + 'px';
  }

function diminuirTexto() {
    var body = document.getElementsByTagName('body')[0];
    var computedStyle = window.getComputedStyle(body);
    var fontSize = parseFloat(computedStyle.fontSize);

    body.style.fontSize = (fontSize - 2) + 'px';
  }

  localStorage.setItem('tamanhoTexto', (fontSize + 2) + 'px');
  localStorage.setItem('tamanhoTexto', (fontSize - 2) + 'px');
 
  var tamanhoTexto = localStorage.getItem('tamanhoTexto');

if (tamanhoTexto) {
  body.style.fontSize = tamanhoTexto;
}



function alternarAltoContraste() {
    var htmlElement = document.documentElement;
    htmlElement.classList.toggle('alto-contraste');
  }
  