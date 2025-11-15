// Función que tira un dado varias veces y devuelve la tirada más alta
function tirarDado(cantidadDeTiros) {
    let resultados = [];

    // Hacer todas las tiradas y guardarlas
    for (let i = 0; i < cantidadDeTiros; i++) {
        resultados.push(Math.floor(Math.random() * 6) + 1); // número entre 1 y 6
    }
    // Ordenar de mayor a menor
    //resultados.sort((a, b) => b - a);
    return Math.max(...resultados); // más directo
}

document.write("<h2>Simulación de Tiradas de Dados</h2>");
document.write("La tirada ganadora es: " + tirarDado(5));