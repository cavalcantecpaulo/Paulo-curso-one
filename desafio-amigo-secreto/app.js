//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
let amigos = [];
let listaAmigos = [];

function telaInicial(){
    console.log("Jogo Inicializado")
}
function adicionarAmigo(){
    amigos = document.querySelector("input").value;
    console.log("O botão adicionar foi clicado!!!");
    
    if(amigos==""){
    alert('Por favor, insira um nome.');
    return;
}
    listaAmigos.push(amigos);
    console.log(amigos);
    console.log(listaAmigos);
    limparInput();
}
function sortearAmigo(){

}
function limparInput(){
    amigos = document.querySelector("input");
    amigos.value = "";
}
telaInicial();