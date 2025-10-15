/*¿Recuerdad la fórmula para calcular las soluciones de una escuacion de segundo grado?
Crea un programa que las calcule*/

/*Formula para calcular ecuaciones de segundo grado */
function calcularEcuacionSegundoGrado(a, b, c) {
    var discriminante = b * b - 4 * a * c; // Calcula el discriminante (b² - 4ac)
    
    if (discriminante > 0) {
        // Dos soluciones reales distintas
        var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [x1, x2];
    } else if (discriminante === 0) {
        // Una única solución real (raíz doble)
        var x = -b / (2 * a);
        return [x];
    } else {
        // No hay soluciones reales (raíces complejas)
        return [];
    }
}

// Ejemplo de uso
var a = 1;
var b = -3;
var c = 2;

var soluciones = calcularEcuacionSegundoGrado(a, b, c);

if (soluciones.length === 0) {
    console.log("No hay soluciones reales.");
} else if (soluciones.length === 1) {
    console.log("Hay una única solución real: " + soluciones[0]);
} else {
    console.log("Hay dos soluciones reales:");
    console.log("x1 = " + soluciones[0]);
    console.log("x2 = " + soluciones[1]);
}