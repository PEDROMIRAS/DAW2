// Cadena que contiene todas las letras válidas del abecedario español,
// incluyendo vocales acentuadas y la letra ñ.
const abecedarioEspanyol = "aábcdeéfghiíjklmnñoópqrstuúüvwxyz";

// Array inicial con palabras: algunas válidas en español y otras con caracteres no permitidos.
const palabras = [
    // Palabras válidas en español
    "canción",
    "pingüino",
    "mañana",
    "árbol",
    "niñez",
    "corazón",
    "camioneta",
    "murciélago",
    "rápido",

    // Palabras NO válidas (tienen símbolos, números, guiones, etc.)
    "hello!",       // símbolo
    "niño123",      // contiene números
    "café?",        // signo de pregunta
    "mañana_",      // guion bajo
    "árbol*",       // símbolo
    "hola-world",   // guion
    "mañaña@",      // arroba
    "東京",          // caracteres japoneses
];

// Variable donde finalmente se guardará el resultado de la función
let nuevoArray = [];

/**
 * Función que recibe un array de palabras y devuelve un array con
 * el primer carácter NO español encontrado en cada palabra.
 */
function noCaracterEspanyol(array){
    
    // Primer filtrado: quedarse solo con palabras que contienen
    // algún carácter NO perteneciente al abecedario español.
    nuevoArray = array.filter(function(palabra){
        // Recorre cada letra de la palabra
        for (const letra of palabra) {
            // Si encuentra un carácter que NO está en el abecedario español...
            if(!abecedarioEspanyol.includes(letra)){
                return true; // ...entonces la palabra se conserva en el filtrado.
            }
        }
        return false; // Si todas las letras son válidas, la palabra se descarta.
    });

    // Segundo mapeo: transformar cada palabra en *el primer carácter prohibido* que contiene.
    return nuevoArray = nuevoArray.map(function(palabra){
        // Recorre sus letras nuevamente
        for (const letra of palabra) {
            // Si encuentra un carácter no válido...
            if(!abecedarioEspanyol.includes(letra)){
                return letra; // ...devuelve ese carácter
            }
        }
        return ''; // En caso extremo de no encontrar nada (no debería suceder)
    });
}

// Ejecuta la función sobre el array de palabras
noCaracterEspanyol(palabras);

// Escribe en el documento el resultado final: los caracteres no válidos encontrados.
for (const caracteres of nuevoArray) {
    document.write(caracteres + ' ');
}