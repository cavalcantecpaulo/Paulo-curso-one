//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.

let listaAmigos = [];

    function adicionarAmigo() {
    let amigo = document.querySelector("input").value;

    //caso nome esteja vazio
    if (amigo == "") {
        alert("Por favor, insira um nome.");
        return;
    }
    //caso nome já tenha sido digitado
    if (listaAmigos.includes(amigo)) {
        alert("Esse nome já foi digitado, insira outro nome.");
        limparInput();
        return;
    }

    listaAmigos.push(amigo);
    atualizarLista();
    limparInput();
    }
    function atualizarLista() {
    let array;
    array = document.getElementById("listaAmigos");
    array.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = listaAmigos[i];
        array.appendChild(elementoLista);
    }
}
    function sortearAmigo() {
    let numeroElementos = listaAmigos.length;
    let indiceAleatorio = parseInt(Math.random() * numeroElementos);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    if (numeroElementos > 0) {
        mostrarResultado(amigoSorteado);
    }
    else{
        alert("Não há ninguém para ser sorteado!");
    }
}
    function mostrarResultado(amigoSorteado){
        let sorteado;
        sorteado = document.getElementById("resultado");
        sorteado.innerHTML = "";
        let elementoSorteado = document.createElement("li");
        elementoSorteado.textContent = `O amigo secreto sorteado foi: ${amigoSorteado}`;
        
        sorteado.appendChild(elementoSorteado);
    }
    function limparInput() {
    let amigo;
    amigo = document.querySelector("input");
    amigo.value = "";
    }
    