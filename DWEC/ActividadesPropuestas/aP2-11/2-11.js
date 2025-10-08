let letra;

do {
    letra = prompt("Introduce una letra:").toLowerCase();
    if (letra != "s"){
        console.log("Has introducido la letra '" + letra + "', inténtalo de nuevo.");
        continue;
    }
    
} while (letra != "s");
console.log("Has introducido la letra 's', ¡has acertado!");