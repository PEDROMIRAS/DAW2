//Generamos en el DOM los datos
function mostrarDatos() {
    contenerdor1.innerHTML = ""; // limpiar antes de mostrar
    for (let i = 0; i < datos.length; i++) {
        const parrafo = document.createElement("p");
        parrafo.textContent = datos[i];
        contenerdor1.appendChild(parrafo);
    }
}