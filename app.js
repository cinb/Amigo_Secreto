// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Guardamos los nombres de los amigos
let  AmigoSecreto = [];


// Función para agregar un nuevo amigo
function AmigoSecreto() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

