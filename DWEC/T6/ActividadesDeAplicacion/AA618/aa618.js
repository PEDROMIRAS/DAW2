// Obtiene una colección (HTMLCollection) de todos los elementos <table> en el documento.
// [0] selecciona el primer elemento <table> de esa colección.
let tabla = document.getElementsByTagName('table')[0]; // Accedemos a la primera tabla

// Función que se encarga de crear una nueva fila y añadirla a la tabla.
function añadirFilas() {
    // Crea un nuevo elemento de fila de tabla (<tr>) en memoria.
    let fila = document.createElement('tr');
    
    // Opcional: agregar celdas a la fila
    
    // Crea un nuevo elemento de celda de tabla (<td>) en memoria.
    let celda = document.createElement('td');
    
    // Asigna el contenido de texto a la nueva celda.
    celda.textContent = "Nueva fila";
    
    // Inserta la celda (<td>) dentro de la fila (<tr>).
    fila.appendChild(celda);

    // Inserta la fila completa (<tr> con la <td> dentro) como el último hijo del elemento 'tabla'.
    tabla.appendChild(fila);
}

// Obtiene una colección (HTMLCollection) de todos los elementos <button> en el documento.
// [0] selecciona el primer elemento <button> de esa colección.
let button = document.getElementsByTagName('button')[0]; // Accedemos al primer botón

// Agrega un "escuchador de eventos" al botón. 
// Cuando se haga "click" en él, se ejecutará la función 'añadirFilas'.
button.addEventListener("click", añadirFilas);