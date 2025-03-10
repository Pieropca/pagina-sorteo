// El principal objetivo de este desafío es fortalecer
// tus habilidades en lógica de programación. Aquí deberás
// desarrollar la lógica para resolver el problema.
let amigos = [];
completado = false;

function agregarAmigo() {
    if (completado == true) {
        ulResultado = document.getElementById("resultado");
        ulResultado.innerHTML = "";
        amigos = [];
        completado = false;
    }
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
    return;
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

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("La lista está vacía");
        return;
    }
    // Genera un número aleatorio dentro de una lista
    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];

    console.log(amigoAleatorio);

    ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";
    const liResultado = document.createElement("li");
    liResultado.textContent = "El amigo secreto sorteado es: " + amigoAleatorio;
    ulResultado.appendChild(liResultado);

    completado = true;
}