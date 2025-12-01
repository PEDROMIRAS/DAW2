let tabla = document.getElementsByTagName('table')[0]; // Accedemos a la primera tabla

function añadirFilas() {
    let fila = document.createElement('tr');
    // Opcional: agregar celdas a la fila
    let celda = document.createElement('td');
    celda.textContent = "Nueva fila";
    fila.appendChild(celda);

    tabla.appendChild(fila);
}

let button = document.getElementsByTagName('button')[0]; // Accedemos al primer botón
button.addEventListener("click", añadirFilas);