// Array con varios subarrays de números
let arrayMasivo = [
    [21, 2, 3, 4],
    [45, 32, 22, 9],
    [0, 66, 7, 4],
    [-3, 32, 11, 90],
    [59, -2, -63, 15]
];

// Contador para numerar los subarrays
let cont = 1;

document.write('<b>Array masivo:</b><br>');

// Recorre cada subarray
for (const num of arrayMasivo) {
    // Muestra el número del subarray y su contenido
    document.write('Subarray ' + cont + ': ' + num + '<br>');
    cont++;
}