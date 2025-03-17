// Array para almacenar los amigos
const listaAmigos = [];

// Elementos del DOM
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Función para agregar amigos
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    
    // Validaciones
    if (nombre === "") {
        alert("Por favor, ingrese un nombre");
        return;
    }
    
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista");
        return;
    }
    
    // Agregar el nombre a la lista
    listaAmigos.push(nombre);
    
    // Crear y agregar elemento a la lista visual
    const li = document.createElement("li");
    li.textContent = nombre;
    ulListaAmigos.appendChild(li);
    
    // Limpiar el input
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya suficientes participantes
    if (listaAmigos.length < 2) {
        alert("Se necesitan al menos 2 participantes para realizar el sorteo");
        return;
    }
    
    // Limpiar resultados anteriores
    ulResultado.innerHTML = "";
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const li = document.createElement("li");
    li.textContent = `¡Tu amigo secreto es: ${amigoSorteado}!`;
    ulResultado.appendChild(li);
}

// Agregar evento para el Enter en el input
inputAmigo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});