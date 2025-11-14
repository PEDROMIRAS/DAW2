const abecedarioEspanyol = "aábcdeéfghiíjklmnñoópqrstuúüvwxyz";
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

    // Palabras que NO contienen solo caracteres del abecedario español
    "hello!",       // símbolo
    "niño123",      // números
    "café?",        // signo
    "mañana_",      // guion bajo
    "árbol*",       // símbolo
    "hola-world",   // guion
    "mañaña@",      // arroba
    "東京",          // caracteres japoneses

];
let nuevoArray = [];
function noCaracterEspanyol(array){
    nuevoArray = array.filter(function(palabra){
        for (const letra of palabra) {
            if(!abecedarioEspanyol.includes(letra)){
                return true;
            }
        }
        return false;
    })

    return nuevoArray = nuevoArray.map(function(palabra){
        for (const letra of palabra) {
            if(!abecedarioEspanyol.includes(letra)){
                return letra;
            }
        }
        return '';
    })
};

noCaracterEspanyol(palabras);

for (const caracteres of nuevoArray) {
    document.write(caracteres + ' ');
}