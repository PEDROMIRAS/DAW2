// var
var nombre = "Juan";
console.log("Var antes del bloque: " + nombre);

if (true) {
    var nombre = "Pedro"; // 'var' NO respeta el ámbito de bloque
    console.log("Var dentro del bloque: " + nombre);
}

console.log("Var después del bloque: " + nombre); // Se mantiene como "Pedro"

// let
let apellido = "Pérez";
console.log("Let antes del bloque: " + apellido);

if (true) {
    let apellido = "García"; // 'let' SÍ respeta el ámbito de bloque
    console.log("Let dentro del bloque: " + apellido);
}

console.log("Let después del bloque: " + apellido); // Sigue siendo "Pérez"

// const
const PI = 3.14;
console.log("Const antes del intento de cambio: " + PI);

try {
    PI = 3.1416; // Esto lanzará un error
} catch (error) {
    console.log("Error al intentar cambiar una constante: " + error.message);
}

console.log("Const después del intento de cambio: " + PI); // Sigue siendo 3.14