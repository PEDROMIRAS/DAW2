// Función que determina si un número es primo
function numeroPrimo(numero) {
    // Inicializamos la variable como true, asumimos que es primo hasta demostrar lo contrario
    let esPrimo = true;

    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        esPrimo = false;
    } else {
        // Recorremos desde 2 hasta numero - 1
        for (let i = 2; i < numero; i++) {
            // Si el número es divisible por i, entonces no es primo
            if (numero % i == 0) {
                esPrimo = false;
                break; // No necesitamos seguir comprobando
            }
        }
    }

    // Devolvemos el resultado final
    return esPrimo;
}

// Probamos la función con 13 (primo) y 14 (no primo)
document.write("Es primo? "+numeroPrimo(13)); // true
document.write("<br>");
document.write("Es primo? " +numeroPrimo(14)); // false