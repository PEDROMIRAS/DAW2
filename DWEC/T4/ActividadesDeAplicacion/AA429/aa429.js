// Creamos un array de 10 posiciones vacío
let array1 = new Array(10);

// Función que llena un array con números aleatorios entre 0 y 99
function fillArray(array){
    for(let i = 0; i < array.length; i++){
        array[i] = Math.floor(Math.random() * 100);
    }
    return array;
}

// Llamamos a la función para llenar nuestro array
fillArray(array1);

// Luego reordenamos para que los múltiplos de 10 queden al principio
// y dentro de cada grupo se mantenga el orden numérico
array1.sort((a, b) => {
    if (a % 10 === 0 && b % 10 !== 0) return -1; // a va antes si es múltiplo de 10
    if (a % 10 !== 0 && b % 10 === 0) return 1;  // b va antes si es múltiplo de 10
    return a - b; // mantiene el orden numérico relativo
});

// Mostramos el array en el documento
for (const num of array1) {
    document.write(num + " ");
}