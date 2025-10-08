/*Escribir un fragmento de codigo donde se aprecie 
la diferencia de usar los tipos de variables let, var y const*/
// var
var nombre = "Juan";
console.log("Var antes del bloque: " + nombre);

if (true) {
    var nombre = "Pedro";
    console.log("Var dentro del bloque: " + nombre);
}

console.log("Var despues del bloque: " + nombre);

// let
let apellido = "Perez";
console.log("Let antes del bloque: " + apellido);

if (true) {
    let apellido = "Garcia";
    console.log("Let dentro de la funcion: " + apellido);
}

console.log("Let despues del bloque: " + apellido);

// const
const PI = 3.14;
console.log("Const antes del cambio: " + PI);

PI = 3.1416; // Esto causaria un error al intentar cambiar el valor de una constante
console.log("Const despues del cambio: " + PI);