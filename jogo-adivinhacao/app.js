let listaDeNumerosAleatorios = [];
let qtdElementosLista = listaDeNumerosAleatorios.length;
let numElementos = 100;
let numeroSecreto = gerarNumero();
let tentativas = 1;
let numeroMinimo = 1;
let numeroMaximo = 100;

if (qtdElementosLista == numElementos) {
  listaDeNumerosAleatorios = [];
}
function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female");
}

function telaInicial() {
  numeroMinimo = 1;
  numeroMaximo = 100;
  exibirTexto("h1", "Descubra o número secreto 🧐");
  exibirTexto(
    "#instrucao",
    `Digite um número de ${numeroMinimo} a ${numeroMaximo}:`
  );
  exibirTexto("#dica", "");

  document.getElementsByClassName("container__imagem-pessoa")[0].src =
    "/img/ronaldinho.webp";
}

function gerarNumero() {
  let numeroEscolhido = parseInt(Math.random() * numElementos + 1);
  if (listaDeNumerosAleatorios.includes(numeroEscolhido)) {
    return gerarNumero();
  } else {
    listaDeNumerosAleatorios.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparInput() {
  chute = document.querySelector("input");
  chute.value = "";
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  if(chute<numeroMinimo || chute>numeroMaximo){
    exibirTexto("#dica", `NÚMERO INVÁLIDO!!!`);
  }
  else if (chute == numeroSecreto) {
    exibirTexto("h1", "Parabéns, você ganhou!! 🥳");
    let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
    let msgTentativa = `Você descobriu o número (${numeroSecreto}) com ${tentativas} ${palavraTentativa}!`;
    exibirTexto("#dica", msgTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementsByClassName("container__imagem-pessoa")[0].src =
      "/img/ronaldinhorindo.jpg";
  } else if (chute > numeroSecreto) {
    numeroMaximo = chute - 1;
    exibirTexto("#dica", `O número secreto é menor que ${chute}`);

  } else {
    numeroMinimo = parseInt(chute) + 1;
    exibirTexto("#dica", `O número secreto é maior que ${chute}`);
  }
  tentativas++;
  exibirTexto("#instrucao", "");
  exibirTexto(
    "#instrucao",
    `Digite um número de ${numeroMinimo} a ${numeroMaximo}:`
  );
  limparInput();
}

function novoJogo() {
  numeroSecreto = gerarNumero();
  tentativas = 1;
  limparInput();
  telaInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
telaInicial();
