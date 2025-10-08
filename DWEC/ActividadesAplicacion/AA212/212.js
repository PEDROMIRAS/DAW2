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