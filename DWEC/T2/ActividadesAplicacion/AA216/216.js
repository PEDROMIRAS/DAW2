// Ejemplo con ++a (prefijo) y a++ (postfijo)

let a = 5;
let b = 5;

// Prefijo: primero incrementa, luego usa el valor
let resultado1 = ++a; // a pasa a valer 6, resultado1 = 6

// Postfijo: primero usa el valor, luego incrementa
let resultado2 = b++; // resultado2 = 5, y luego b pasa a valer 6

document.write("<br>Resultado con ++a (prefijo): " + resultado1);
document.write("<br>Valor actual de a: " + a);

document.write("<br><br>Resultado con b++ (postfijo): " + resultado2);
document.write("<br>Valor actual de b: " + b);

// Lo mismo con decrementos
let c = 3;
let d = 3;

let resultado3 = --c; // Prefijo: primero resta, luego usa (resultado3 = 2)
let resultado4 = d--; // Postfijo: usa y luego resta (resultado4 = 3)

document.write("<br><br>Resultado con --c (prefijo): " + resultado3);
document.write("<br>Valor actual de c: " + c);

document.write("<br><br>Resultado con d-- (postfijo): " + resultado4);
document.write("<br>Valor actual de d: " + d);
