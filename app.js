// El principal objetivo de este desafío es fortalecer
// tus habilidades en lógica de programación. Aquí deberás
// desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    dataAmigo = document.getElementById("amigo");
    texto = dataAmigo.value;
    if (texto == ""){
        alert("Por favor, inserte un nombre");
    } else {
        if (amigos.includes(texto)) {
            alert("Nombre repetido, inserte uno distinto");
        } else {
            amigos.push(texto);
            console.log(amigos);
            actualizaAmigos();
            dataAmigo.value = "";
        }
    }
}

function actualizaAmigos() {
    ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (const data of amigos) {
        const li = document.createElement("li");
        li.textContent = data;
        ul.appendChild(li);
    }
    return;
}