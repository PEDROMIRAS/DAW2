let letra = prompt("Introduce una letra:").toLowerCase();

while(letra != "s") {
    console.log("Has introducido la letra '" + letra + "', inténtalo de nuevo.");
    letra = prompt("Introduce una letra:").toLowerCase();
}
console.log("Has introducido la letra 's', ¡has acertado!");