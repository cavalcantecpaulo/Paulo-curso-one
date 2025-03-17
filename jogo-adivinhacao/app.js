let listaDeNumerosAleatorios = [];
let qtdElementosLista = listaDeNumerosAleatorios.length;
let numElementos = 100;
let numeroSecreto = gerarNumero();
let tentativas=1;

if(qtdElementosLista == numElementos){
    listaDeNumerosAleatorios = [];
}
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female");
}

function telaInicial(){
    exibirTexto("h1", "Descubra o número secreto 🧐");
    exibirTexto("p", "Digite um número de 1 a 100:");
    document.getElementsByClassName("container__imagem-pessoa")[0].src ="/img/ronaldinho.webp";
}

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numElementos + 1);
    if(listaDeNumerosAleatorios.includes(numeroEscolhido)){
        return gerarNumero();
    } else{
        listaDeNumerosAleatorios.push(numeroEscolhido);
        return numeroEscolhido;
    }
 }

function limparInput(){
    chute = document.querySelector("input");
    chute.value = "";
}

function verificarChute(){
    let chute=document.querySelector("input").value;
    console.log("O botão 'chute' foi clicado!!!");

    if(chute == numeroSecreto){
        exibirTexto("h1", "Parabéns, você ganhou!! 🥳");
        let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
        let msgTentativa = (`Você descobriu o número (${numeroSecreto}) com ${tentativas} ${palavraTentativa}!`);
        exibirTexto('p', msgTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementsByClassName("container__imagem-pessoa")[0].src="/img/ronaldinhorindo.jpg";
    }
    else if(chute > numeroSecreto){
        exibirTexto('p', `O número secreto é menor que ${chute}`);
    }
    else{
        exibirTexto('p', `O número secreto é maior que ${chute}`);
    }
    tentativas++;
    limparInput();
}

function novoJogo(){
    numeroSecreto = gerarNumero();
    tentativas=1;
    limparInput();
    telaInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
telaInicial();