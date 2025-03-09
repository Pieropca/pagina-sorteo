// El principal objetivo de este desafío es fortalecer
// tus habilidades en lógica de programación. Aquí deberás
// desarrollar la lógica para resolver el problema.
let lista = [];

function agregarAmigo() {
    dataAmigo = document.getElementById("amigo");
    texto = dataAmigo.innerHTML;
    if (texto == ""){
        alert("Por favor, inserte un nombre");
    }else{
        lista.push(texto);
        actualizaAmigos(texto);
        dataAmigo.innerHTML = "";
    }
}

function actualizaAmigos(data) {
    ul = document.getElementById("listaAmigos")
    ul.innerHTML = "";

    const li = document.createElement("li"); // Crear un <li>
    li.textContent = data; // Asignar texto al <li>
    ul.appendChild(li); // Agregar el <li> al <ul>
}