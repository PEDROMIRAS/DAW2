// Declara una variable 'letra' que se usará para almacenar la entrada del usuario.
// Se declara fuera del bucle para que sea accesible en la condición del 'while'.
let letra;

// Inicia un bucle 'do-while'. 
do {
    // Pide al usuario que introduzca una letra mediante una ventana emergente (prompt).
    // .toLowerCase() convierte la letra introducida a minúsculas para que la comparación no distinga entre 's' y 'S'.
    letra = prompt("Introduce una letra:").toLowerCase();
    // Comprueba si la letra introducida es diferente de "s".
    if (letra != "s"){
        // Si no es "s", muestra un mensaje en la consola indicando el error.
        console.log("Has introducido la letra '" + letra + "', inténtalo de nuevo.");
    }

} while (letra != "s"); // El bucle se repetirá mientras la letra introducida no sea "s".

// Cuando el bucle termina se muestra este mensaje de éxito en la consola.
console.log("Has introducido la letra 's', ¡has acertado!");

