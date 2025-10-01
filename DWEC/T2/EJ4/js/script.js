let nombre;
let edad;
/* segun la edad sera: niño hasta 12 años, 
adolescente de 13 a 17, trabajador de 18 a 64 y jubilado 65 o mas,
el programa debe terminar mostrando un mensaje en verde y negrita por consola*/
nombre = prompt("Introduce tu nombre");
edad = parseInt(prompt("Introduce tu edad"));

if (edad <= 0 || isNaN(edad)) {
    console.log("%cError: Edad no válida", "color: red; font-weight: bold;");
}else if (edad <= 12) {
    console.log("%c"+nombre+ " tiene " + edad + " y por lo tanto es un niño", "color: green; font-weight: bold;");
} else if (edad <= 17) {
    console.log("%c"+nombre+ " tiene " + edad + " y por lo tanto es un adolecente ", "color: green; font-weight: bold;");
} else if (edad <= 64) {
    console.log("%c"+nombre+ " tiene " + edad + " y por lo tanto es un trabajador", "color: green; font-weight: bold;");
} else {
    console.log("%c"+nombre+ " tiene " + edad + " y por lo tanto es un jubilado", "color: green; font-weight: bold;");
};   
