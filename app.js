// El principal objetivo de este desafío es fortalecer
// tus habilidades en lógica de programación. Aquí deberás
// desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function intentoDeUsuario() {
    dataAmigo = document.getElementById("amigo");
    if (dataAmigo != ""){
        listaAmigos.push(dataAmigo);
        dataAmigo.innerHTML = "";
    }else{
        alert("Por favor, inserte un nombre");
    }
}
