document.write('Uso de bucle FOR');
document.write('<br>');
// FOR: Recorremos los números del 1 al 100 
for (let i = 1; i < 101; i++) {
    // Comprobamos si el número es múltiplo de 3 y de 7
    if (i % 3 !== 0 && i % 7 !== 0) {
        // Comprobamos si además es impar
        if (i % 2 !== 0) {
            // Si cumple las tres condiciones, lo mostramos en pantalla
            document.write(i);
            document.write('<br>');
        }
    }
}
document.write('<br>');
document.write('Uso de bucle WHILE');
document.write('<br>');
// WHILE: Recorremos los números del 1 al 100 con ayuda de un contador auxiliar
let i_contador = 1;

while (i_contador < 101) {
    // Comprobamos si el número es múltiplo de 3 y de 7
    if (i_contador % 3 !== 0 && i_contador % 7 !== 0) {
        // Comprobamos si además es impar
        if (i_contador % 2 !== 0) {
            // Si cumple las tres condiciones, lo mostramos en pantalla
            document.write(i_contador);
            document.write('<br>');
        }
    }
    // Incrementamos el contador para evitar bucle infinito
    i_contador++;
}
document.write('<br>');
document.write('Uso de bucle DO_WHILE');
document.write('<br>');
// DO_WHILE: Recorremos los números del 1 al 100 con ayuda de un contador auxiliar
let j_contador = 1;

do {
    // Comprobamos si el número es múltiplo de 3 y de 7
    if (j_contador % 3 !== 0 && j_contador % 7 !== 0) {
        // Comprobamos si además es impar
        if (j_contador % 2 !== 0) {
            // Si cumple las tres condiciones, lo mostramos en pantalla
            document.write(j_contador);
            document.write('<br>');
        }
    }
    // Incrementamos el contador para pasar al siguiente número
    j_contador++;

} while (j_contador < 101);