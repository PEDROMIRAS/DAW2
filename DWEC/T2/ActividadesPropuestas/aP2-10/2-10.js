//pedimos con prompt una letra, usamos let pq vamos a modificarla
let letra = prompt("Introduce una letra:").toLowerCase();

while(letra != "s") {//bucle while que se repite mientras 'letra' no sea una 's'
    console.log("Has introducido la letra '" + letra + "', inténtalo de nuevo.");
    letra = prompt("Introduce una letra:").toLowerCase();
}
console.log("Has introducido la letra 's', ¡has acertado!");