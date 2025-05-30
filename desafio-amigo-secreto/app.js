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
    somCadaNome();
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
        sorteado.innerHTML = "Sorteando...";

        let elementoSorteado = document.createElement("li");
        elementoSorteado.textContent = `O sorteado foi: ${amigoSorteado}`;
        sorteado.appendChild(elementoSorteado);

        document.getElementsByClassName("didicofoto")[0].src="/assets/didicorindo.jpg";
        somPosSorteado();
    }
    function limparInput() {
    let amigo;
    amigo = document.querySelector("input");
    amigo.value = "";
    }
    function novoJogo(){
        location.reload();
    }
    function somPosSorteado(){
        const audio = document.getElementById("posSorteio");
        audio.play();
    }
    function somCadaNome(){
        const audios = document.getElementsByClassName("audios-enquanto-digita");
        const indiceAleatorio = Math.floor(Math.random() * audios.length);
        const audioEscolhido = audios[indiceAleatorio];

        audioEscolhido.play();
    }
    