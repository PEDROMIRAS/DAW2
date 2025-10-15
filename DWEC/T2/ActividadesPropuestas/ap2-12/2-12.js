// Inicializa una variable 'contador' a 0. Esta variable almacenará la cantidad de múltiplos de 7 que se encuentren.
let contador = 0;

// Inicia un bucle 'for' que se ejecutará desde i=1 hasta i=100.
for(let i = 1; i <= 100; i++){
    // Dentro del bucle, comprueba si el número actual 'i' es un múltiplo de 7.
    // El operador de módulo (%) devuelve el resto de una división. Si el resto es 0, el número es divisible.
    if(i % 7 === 0 ){
        // Si 'i' es un múltiplo de 7, lo imprime en la consola.
        console.log(i);
        // Incrementa el contador en 1 cada vez que se encuentra un múltiplo.
        contador ++;
    }
}
// Una vez que el bucle ha terminado, imprime un mensaje final con el total de múltiplos encontrados.
console.log("Hay " + contador + " números múltiplos de 7 entre 0 y 100");

