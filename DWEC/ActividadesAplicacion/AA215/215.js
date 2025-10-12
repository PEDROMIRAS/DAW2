//Pedimos un numero por teclado en un prompt
const num = prompt('Escribe un numero para calcular su facotrial: ');

//funcion para calcular el factorial de forma recursiva
function factorial(num) {
    if (num === 0 || num === 1) {
      return 1; // Caso base
    } else {
      return num * factorial(num - 1); // Llamada recursiva
    }
}

  // Ejemplo de uso
    console.log(`El factorial de ${num} es: ${factorial(num)}`);