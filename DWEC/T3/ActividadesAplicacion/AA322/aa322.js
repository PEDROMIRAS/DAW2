// Se declara un array con 10 números entre 1 y 100
let numeros = [3, 21, 45, 67, 12, 88, 9, 54, 30, 76]; 

// Se crea un array vacío donde se guardarán los múltiplos de 3
let multiplos = new Array();

// Recorre todos los elementos del array 'numeros'
for (let i = 0; i < numeros.length; i++) {
    // Comprueba si el número actual es múltiplo de 3
    if (numeros[i] % 3 == 0) {
        // Si lo es, se añade al array 'multiplos'
        multiplos.push(numeros[i]);
    }
}

// Muestra un título en el documento HTML
document.write('Multiplos de 3');
document.write('<br>');

// Recorre el array de múltiplos y los muestra uno por uno
for (let i = 0; i < multiplos.length; i++) {
    document.write(multiplos[i] + '<br>'); // Escribe cada número en una nueva línea
}

// Añade un salto de línea al final (solo por estética)
document.write('<br>');