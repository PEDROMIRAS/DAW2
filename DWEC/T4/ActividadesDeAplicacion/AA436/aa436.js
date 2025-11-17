// Generar tabla de bingo
function generarTabla() {
    const filas = 8;
    const columnas = 4;
    const tabla = Array.from({ length: filas }, () => Array(columnas).fill(null)); // tabla vacía
    const numerosGenerados = new Set(); // para números únicos
    let numerosColocados = 0;

    while (numerosColocados < 20) {
        // Generar número aleatorio
        const num = Math.floor(Math.random() * 90) + 1;

        // Si ya existe, saltar
        if (numerosGenerados.has(num)) {
            continue;
        } else {
            numerosGenerados.add(num);
        }

        // Elegir fila y columna aleatoria
        const fila = Math.floor(Math.random() * filas);
        const col = Math.floor(Math.random() * columnas);

        // Si la posición ya está ocupada, saltar
        if (tabla[fila][col] !== null) {
            continue;
        } else {
            // Colocar el número
            tabla[fila][col] = num;
            numerosColocados++;
        }
    }

    return tabla;
}

// Generar tabla y mostrarla
const tabla1 = generarTabla();
const tabla2 = generarTabla();
const tabla3 = generarTabla();
const tabla4 = generarTabla();
const tabla5 = generarTabla();

console.table(tabla1);
console.table(tabla2);
console.table(tabla3);
console.table(tabla4);
console.table(tabla5);

// Generar números del bingo
function genNum(){
    const numerosBingo = new Set();
    while (numerosBingo.size < 90) {
        const num = Math.floor(Math.random() * 90) + 1;
        numerosBingo.add(num);
    }
}

// Función bingo (a implementar)
function bingo(...tablas) {
    
}
