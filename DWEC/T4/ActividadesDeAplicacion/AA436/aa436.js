// Funcion para crear una tabla de bingo
function generarTabla() {
    // Definir dimensiones
    const filas = 8;
    const columnas = 4;

    // Crear tabla vacía
    const tabla = Array.from({ length: filas }, () => Array(columnas).fill(null));

    // Rellenar tabla con 20 números únicos
    const numerosGenerados = new Set(); // para números únicos
    let numerosColocados = 0;

    // Bucle hasta colocar 20 números
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

// Funcion para generar números del bingo
function genNum(){
    const numerosBingo = new Set();
    while (numerosBingo.size < 90) {
        const num = Math.floor(Math.random() * 90) + 1;
        numerosBingo.add(num);
    }
    return Array.from(numerosBingo);
}


//Comprobar bingo(tabla marcada al completo)
function tieneBingo(tabla) {
    //Recorrer cada fila de la tabla
    for (const fila of tabla) {
        //Recorrer cada celda de la fila
        for (const celda of fila) {
            //Comprobar si hay algun numero sin marcar
            if (typeof celda === 'number' && celda !== 'X') {
                return false;
            }
        }
    }
    return true;
}

// Función bingo (a implementar)
function bingo(numBingo,...tablas) {
    // Recorrer números del bingo
    for (const num of numBingo) {
        console.log(`Número sacado: ${num}`);

        // Marcar número en cada tabla
        for (let t = 0; t < tablas.length; t++) {
            // Obtener tabla actual
            const tabla = tablas[t];
            // Marcar número en la tabla actual
            for (let i = 0; i < tabla.length; i++) {
                for (let j = 0; j < tabla[i].length; j++) {
                    if (tabla[i][j] === num) {
                        tabla[i][j] = 'X'; // Marcar número
                    }
                }
            }

            // Revisar bingo en la tabla actual, si hay bingo, anunciar y detener juego
            if (tieneBingo(tabla)) {
                console.log(`¡¡¡BINGO en la tabla ${t + 1}!!!`);
                console.log("Juego detenido: ya hay un ganador.");
                return; //SE DETIENE El JUEGO
            }
        }
    }
}

// Generar 5 tablas de bingo
const tablas = Array.from({ length: 5 }, generarTabla);
// Generar números del bingo
const numerosBingo = genNum();
// Iniciar el juego de bingo
bingo(numerosBingo, ...tablas);