/*let textoEntrada = document.querySelector("#textoarea");
let textoSaida = document.querySelector("#box-transform");

function msgCriptografar() {
  let mensagem = textoEntrada.value;

  let resultado = mensagem
    .replace(/a/g, "b1n2")
    .replace(/e/g, "k9l8")
    .replace(/i/g, "p3q4")
    .replace(/o/g, "x7y6")
    .replace(/u/g, "z0w5");

  document.getElementById("box-transform").innerHTML =
    "<textarea readonly id='#textoSaida'>" +
    resultado +
    "<textarea>" +
    '<button class = "btn-copiar" id="copiar" onclick = "copiar()"> Copiar </button>';
}

function msgDescriptografar() {
  let mensagem = textoEntrada.value;

  let resultado = mensagem
    .replace(/b1n2/g, "a")
    .replace(/k9l8/g, "e")
    .replace(/p3q4/g, "i")
    .replace(/x7y6/g, "o")
    .replace(/z0w5/g, "u");

  document.getElementById("box-transform").innerHTML =
    "<textarea readonly id='#textoSaida'>" +
    resultado +
    "<textarea>" +
    '<button class = "btn-copiar" id="copiar" onclick = "copiar()">Copiar</button>';
}

function copiar() {
  let copiarTexto = document.getElementById("textoSaida");
  copiarTexto.select(); // Corrigir para select()
  document.execCommand("copy");
  alert("Texto copiado");
}*/

let textoEntrada = document.querySelector("#textoarea");
let textoSaida = document.querySelector("#box-transform");

function msgCriptografar() {
  let mensagem = textoEntrada.value;

  let resultado = mensagem
    .replace(/a/g, "b1n2")
    .replace(/e/g, "k9l8")
    .replace(/i/g, "p3q4")
    .replace(/o/g, "x7y6")
    .replace(/u/g, "z0w5");

  textoSaida.innerHTML =
    '<textarea readonly id="textoSaida">' +
    resultado +
    "</textarea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function msgDescriptografar() {
  let mensagem = textoEntrada.value;

  let resultado = mensagem
    .replace(/b1n2/g, "a")
    .replace(/k9l8/g, "e")
    .replace(/p3q4/g, "i")
    .replace(/x7y6/g, "o")
    .replace(/z0w5/g, "u");

  textoSaida.innerHTML =
    '<textarea readonly id="textoSaida">' +
    resultado +
    "</textarea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  let copiarTexto = document.getElementById("textoSaida");
  copiarTexto.select(); // Corrigir para select()
  document.execCommand("copy");
  alert("Texto copiado");
}
