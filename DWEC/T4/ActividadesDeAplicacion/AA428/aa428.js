// Array 2D de ejemplo A
const array4A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Array 2D de ejemplo B
const array4B = [
    [1, 2, 7, 1],
    [5, 3, 7, 8],
    [6, 11, 13, 12]
];

// Función que compara dos arrays 2D y devuelve un nuevo array
// con los valores iguales o 0 si son distintos
function copArrays(array1, array2) {
    // Recorre cada fila del array1 usando map
    let copia = array1.map((fila, i) => {             
        // Recorre cada valor de la fila usando map
        return fila.map((valor, j) => {                 
            // Compara el valor en la posición [i][j] de ambos arrays
            if (array1[i][j] !== array2[i][j]) {
                return 0;        // Si son distintos, devuelve 0
            } else {
                return array1[i][j];  // Si son iguales, copia el valor
            }
        });
    });

    return copia; // Devuelve el nuevo array 2D
}

// Muestra el resultado en forma de tabla en la consola
console.table(copArrays(array4A, array4B));