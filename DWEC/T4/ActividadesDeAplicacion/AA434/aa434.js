// Función recursiva que calcula el n-ésimo número de la sucesión
function tribonacci(n) {
    if (n == 0 || n == 1) return 0;
    if (n === 2) return 1;
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

// Función para mostrar los primeros "cantidad" números en consola
function mostrarTribonacci(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(tribonacci(i));
    }
}

// Ejemplo: mostrar los primeros 10 números
mostrarTribonacci(12);