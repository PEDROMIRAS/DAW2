// Array con valores repetidos
let array = [1, 2, 2, 3, 2, 5, 5, 7, 9, 9];

let numRep = 0;
let maxRepeticiones = 0;

// Recorremos el array
for (let i = 0; i < array.length; i++) {
    let contador = 0;

    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            contador++;
        }
    }

    // Si encontramos un número con más repeticiones, lo guardamos
    if (contador > maxRepeticiones) {
        maxRepeticiones = contador;
        numRep = array[i];
    }
}

// Mostramos el resultado
document.write(`El número ${numRep} está repetido ${maxRepeticiones} veces`);