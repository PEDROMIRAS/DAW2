// Escribe un programa que muestre en pantalla todos los números múltiplos de 7 entre 1 y 100. Al final debe mostrar también 
//cuántos números múltiplos de 7 hay en ese rango.
let contador = 0;

for(let i = 1; i <= 100; i++){
    if(i % 7 === 0 ){
        console.log(i);
        contador ++;
    }
}
console.log("Hay " + contador + " números múltiplos de 7 entre 0 y 100");