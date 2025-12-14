// Obtiene el elemento del DOM con el id "btn" 
const b = document.getElementById("btn");
// Obtiene el elemento del DOM con el id "color" 
let color = document.getElementById("color");

// Variable de estado que indica si el color ha sido cambiado (actualmente no se usa debido a que el bloque 'if/else' está comentado)
//let cambiado = false;

// Función que cambia el color del texto de un párrafo
function cambiaColor(){
    // Obtiene el elemento del DOM con el id "parrafo"
    let p = document.getElementById("parrafo");

    /*if(cambiado){
        p.style.color = "";// vacío = vuelve al color por defecto
    }else{*/

// Establece la propiedad 'color' del estilo del párrafo al valor actual del elemento 'color'
    p.style.color = color.value; 
    /*}
    cambiado = !cambiado;*/ // Invierte el estado de 'cambiado'
}

// Agrega un "escuchador de eventos" al botón 'b'. Cuando se haga "click" en él, se ejecutará la función 'cambiaColor'
b.addEventListener("click", cambiaColor);