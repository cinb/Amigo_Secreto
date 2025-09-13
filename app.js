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

    // (Más adelante agregaremos aquí la función mostrarLista para visualizar)
}




