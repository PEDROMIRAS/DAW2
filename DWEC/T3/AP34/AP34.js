/*
    Estructura de datos con arrays bidimensionales.
    Cada equipo es un array donde cada posición corresponde a un dato:
    - Índice 0: nombre (string)
    - Índice 1: puntos (number)
    - Índice 2: partidosJugados (number)
    - Índice 3: partidosGanados (number)
    - Índice 4: partidosPerdidos (number)
    - Índice 5: partidosEmpatados (number)
    - Índice 6: golesFavor (number)
    - Índice 7: golesContra (number)
*/

// Lista de nombres de equipos
const nombresEquipos = [
    "Real Madrid", "Real Sociedad", "Villarreal", "Espanyol", "Valencia",
    "Betis", "Sevilla", "Athletic de Bilbao", "Atletico de Madrid", "Barcelona"
];

// Creamos un array vacío que contendrá los datos de la clasificación.
const equipos = [nombresEquipos.length];

// Usamos un bucle 'for' para recorrer la lista de nombres y crear los datos para cada equipo.
for (let i = 0; i < nombresEquipos.length; i++) {
    const nombre = nombresEquipos[i];
    
    // Generamos datos coherentes para cada equipo
    const partidosJugados = 38;
    const partidosGanados = Math.floor(Math.random() * (partidosJugados + 1));
    const partidosEmpatados = Math.floor(Math.random() * (partidosJugados - partidosGanados + 1));
    const partidosPerdidos = partidosJugados - partidosGanados - partidosEmpatados;
    const puntos = (partidosGanados * 3) + partidosEmpatados;
    const golesFavor = Math.floor(Math.random() * 100);
    const golesContra = Math.floor(Math.random() * 80);

    // Creamos un array para el equipo actual con todos sus datos en el orden definido
    const equipoActual = [
        nombre,
        puntos,
        partidosJugados,
        partidosGanados,
        partidosPerdidos,
        partidosEmpatados,
        golesFavor,
        golesContra
    ];

    // Añadimos el array del equipo actual al array principal 'equipos'
    equipos[i] = equipoActual;
}

// Ordenar los equipos por puntos (índice 1) de mayor a menor.
// a[1] y b[1] acceden a los puntos de los dos equipos que se están comparando.
equipos.sort((a, b) => b[1] - a[1]);

// El equipo ganador es el primero del array ordenado
const equipoGanador = equipos[0];

// Para que el código sea más legible, es una buena práctica definir constantes para los índices.
const IDX_NOMBRE = 0;
const IDX_PUNTOS = 1;
const IDX_JUGADOS = 2;
const IDX_GANADOS = 3;
const IDX_PERDIDOS = 4;
const IDX_EMPATADOS = 5;
const IDX_GOLES_FAVOR = 6;
const IDX_GOLES_CONTRA = 7;

// Mostrar toda la información del equipo ganador usando los índices
document.write("<h1>Clasificación Final de la Liga</h1>");
document.write("<h2>El equipo ganador es: " + equipoGanador[IDX_NOMBRE] + "</h2>");
document.write("<h3>Estadísticas completas del campeón:</h3>");
document.write("<ul>");
document.write("<li><b>Puntos:</b> " + equipoGanador[IDX_PUNTOS] + "</li>");
document.write("<li><b>Partidos Jugados:</b> " + equipoGanador[IDX_JUGADOS] + "</li>");
document.write("<li><b>Partidos Ganados:</b> " + equipoGanador[IDX_GANADOS] + "</li>");
document.write("<li><b>Partidos Empatados:</b> " + equipoGanador[IDX_EMPATADOS] + "</li>");
document.write("<li><b>Partidos Perdidos:</b> " + equipoGanador[IDX_PERDIDOS] + "</li>");
document.write("<li><b>Goles a Favor:</b> " + equipoGanador[IDX_GOLES_FAVOR] + "</li>");
document.write("<li><b>Goles en Contra:</b> " + equipoGanador[IDX_GOLES_CONTRA] + "</li>");
document.write("</ul>");
