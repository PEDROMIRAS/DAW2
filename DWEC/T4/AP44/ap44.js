// Se declara una constante 'invertida' que almacena una función anónima
const invertida = function(palabra) {

    // Se declara una variable vacía donde se irá construyendo la palabra al revés
    let invertida = "";

    // Se recorre la palabra desde el último carácter hasta el primero
    for (let index = palabra.length - 1; index >= 0; index--) {

        // En cada iteración se añade el carácter actual al final de la cadena 'invertida'
        invertida += palabra[index];  
    }

    // Se devuelve la palabra ya invertida
    return invertida;
}

// Se llama a la función con el argumento "almadraba" y se muestra el resultado por consola
console.log(invertida("almadraba")); // Resultado: "abardamla"