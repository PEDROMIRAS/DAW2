//Array del ejercicio anterior
let arrayMasivo = [[21,2,3,4],[45,32,22,9],[0,66,7,4],[-3,32,11,90],[59,-2,-63,15]];

//Concatenamos todo el array del ej 27 en un solo array nuevo
let arrayUnidimensional = [];

for (const fila of arrayMasivo) {
    for (const num of fila) {
        arrayUnidimensional.push(num);    
    }
}

//Mostramos el array unidimensional creado
document.write("Array unidimensional: ");
for (const num of arrayUnidimensional) {
    document.write(num + " ");
}