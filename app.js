// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Creamos un arreglo global para almacenar los nombres
let amigos = [];

// 2. Función para agregar un nuevo amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // eliminamos espacios vacíos

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // detenemos la ejecución si está vacío
    }

    // Agregar el nombre al arreglo de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

   
    
    // 1. Obtener el elemento <ul> donde mostraremos los amigos
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista antes de volver a llenarla
    lista.innerHTML = "";

    // 3. Recorrer el arreglo amigos con un bucle for
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un nuevo <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i];

        // 5. Agregar el <li> a la lista
        lista.appendChild(li);
    }
}





