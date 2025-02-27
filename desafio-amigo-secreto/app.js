//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.

let listaAmigos = [];

function telaDoJogo(){
    console.log("Jogo Inicializado");
}
function adicionarAmigo(){
    let amigo = document.querySelector("input").value;

    if(amigo == ""){
    alert('Por favor, insira um nome.');
    return;
}
    
    listaAmigos.push(amigo);
    console.log("Nome digitado:", amigo);
    console.log("Amigos: ", listaAmigos);
    atualizarLista();
    limparInput();
}
function atualizarLista(){
    let array;
    let i;
    let li;
    array = document.getElementsByClassName("name-list");
    array.innerHTML = "";
    for(i=0;i<listaAmigos.length; i++){
        li = document.createElement("li");
    }
}
function sortearAmigo(){
    let numeroElementos = listaAmigos.length;
    let indiceAleatorio = parseInt(Math.random() * numeroElementos);
    console.log("Amigo sorteado: ", listaAmigos[indiceAleatorio]);
}

function limparInput(){
    let amigo;
    amigo = document.querySelector("input");
    amigo.value = "";
}
telaDoJogo();