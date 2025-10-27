// Solicita al usuario que escriba el primer número y lo guarda en la variable op1
const op1 = prompt('Escribe el primer número');

// Solicita al usuario que escriba el símbolo de la operación (+, -, *, /, %, **) y lo guarda en la variable simbolo
const simbolo = prompt('Escribe el símbolo');

// Solicita al usuario que escriba el segundo número y lo guarda en la variable op2
const op2 = prompt('Escribe el segundo número');

// Se declara la variable resultado, que almacenará el resultado de la operación
let resultado;

// Se comprueba qué símbolo ha introducido el usuario y se realiza la operación correspondiente
if (simbolo === '+') {
    // Suma de los dos números
    resultado = Number(op1) + Number(op2);
} else if (simbolo === '-') {
    // Resta de los dos números
    resultado = Number(op1) - Number(op2);
} else if (simbolo === '*') {
    // Multiplicación de los dos números
    resultado = Number(op1) * Number(op2);
} else if (simbolo === '/') {
    // División de los dos números
    resultado = Number(op1) / Number(op2);
} else if (simbolo === '%') {
    // Módulo: el resto de dividir op1 entre op2
    resultado = Number(op1) % Number(op2);
} else if (simbolo === '**') {
    // Potencia: op1 elevado a op2
    resultado = Number(op1) ** Number(op2);
}

// Muestra el resultado en la consola
console.log(`Resultado: ${resultado}`);