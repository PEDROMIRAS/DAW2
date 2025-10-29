/*
    Utiliza la estructura de datos que consideres oportuna para generar un tablero 
    de tres en raya con todas las posiciones rellenas e indique si alguno de los 
    jugadores ha ganado la partida.
*/

//Partida de 3 en raya en un array multidimensional
const juego3R = [
    ['X', 'O', 'O'],
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
];

//Calcular el ganador comprobando, filas, columnas, y ambas diagonales
const ganador = (tablero) => {
    for (let i = 0; i < tablero.length; i++) {
        //Ganador por fila
        if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
            return 'Ganador ' + tablero[i][0];
        }
        //Ganador por columna
        if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) {
            return 'Ganador ' + tablero[0][i];
        }
        //Ganador por diagonal
        if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
            return 'Ganador ' + tablero[0][0];
        }
        //Ganador por diagonal inversa
        if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
            return 'Ganador ' + tablero[0][2];
        }
        return 'No hay ganador';

    }
};

//Mostrar el resultado 
document.write(ganador(juego3R));