//Creamos un array para copiarlo
let array = [1, 1, 2, 3, 4, 5, 5, 7, 9, 9];
let arrayCopia = [array.length];

//Copiamos el array manualmente
for (let i = 0; i < array.length; i++) {
    arrayCopia[i] = array[i];
}

//Mostramos el array copiado
for (const element of arrayCopia) {
    document.write(element + "<br>");
}