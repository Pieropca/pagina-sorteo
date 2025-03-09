// El principal objetivo de este desafío es fortalecer
// tus habilidades en lógica de programación. Aquí deberás
// desarrollar la lógica para resolver el problema.
let lista = [];

function agregarAmigo() {
    dataAmigo = document.getElementById("amigo");
    if (dataAmigo != ""){
        lista.push(dataAmigo);
        actualizaAmigos(dataAmigo);
        dataAmigo.innerHTML = "";
        
    }else{
        alert("Por favor, inserte un nombre");
    }
}

function actualizaAmigos(data) {
    ul.innerHTML("listaAmigos") = "";

    const li = document.createElement("li"); // Crear un <li>
    li.textContent = data; // Asignar texto al <li>
    ul.appendChild(li); // Agregar el <li> al <ul>
}