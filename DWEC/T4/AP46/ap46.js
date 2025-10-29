// Función flecha que recibe dos cadenas y devuelve la que tiene más vocales
const cadenaMayor = (cad1, cad2) => {
    // Lista de vocales a comparar
    const vocales = ['a','e','i','o','u'];
    // Contadores de vocales para cada cadena
    let cont1 = 0;
    let cont2 = 0;

    // Recorre la primera cadena
    for (let i = 0; i < cad1.length; i++) {
        // Compara cada letra con las vocales
        for (let j = 0; j < vocales.length; j++) {
            if (cad1[i] === vocales[j]) {
                cont1++; // Si es vocal, aumenta el contador
            }
        }
    }

    // Recorre la segunda cadena
    for (let i = 0; i < cad2.length; i++) {
        // Compara cada letra con las vocales
        for (let j = 0; j < vocales.length; j++) {
            if (cad2[i] === vocales[j]) {
                cont2++; // Si es vocal, aumenta el contador
            }
        }
    }

    // Devuelve la cadena con más vocales
    if (cont1 > cont2) {
        return cad1;
    } else {
        return cad2;
    }
};

// Muestra por consola cuál de las dos cadenas tiene más vocales
console.log('La cadena mayor es: ' + cadenaMayor('papagayo','murcielago'));