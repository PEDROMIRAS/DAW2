/*Idea un programa en el que usar un bucle 'do while' 
sea mejor que usar un bucle 'while'.*/

/* 
    Idea: pedir una contraseña al usuario hasta que escriba la correcta.
    En este caso, el bucle 'do while' es mejor que 'while'
    porque queremos que el código se ejecute al menos una vez,
    antes de comprobar la condición.
*/

let contraseña;
const correcta = "1234";

do {
    contraseña = prompt("Introduce la contraseña:");
} while (contraseña !== correcta);

console.log("¡Contraseña correcta! Acceso concedido.");