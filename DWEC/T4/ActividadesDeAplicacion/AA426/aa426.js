// Matriz original 3x3
let matriz3X = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// Función que devuelve una versión modificada de la matriz
function modMatriz(matriz){
    // map() + spread operator crea una copia profunda de la matriz
    let copia = matriz.map(fila => [...fila]); // evita modificar la matriz original

    // Modificamos elementos específicos de la copia
    copia[0][1] = 0; // fila 0, columna 1
    copia[0][2] = 0; // fila 0, columna 2
    copia[1][0] = 0; // fila 1, columna 0
    copia[1][2] = 0; // fila 1, columna 2
    copia[2][0] = 0; // fila 2, columna 0
    copia[2][1] = 0; // fila 2, columna 1

    return copia; // devuelve la matriz modificada
}

// Mostrar la matriz original en el documento
for(let fila of matriz3X){
    document.write(fila + "<br>");
}

document.write("<br>"); // espacio entre matrices

// Mostrar la matriz modificada
for(let fila of modMatriz(matriz3X)){
    document.write(fila + "<br>");
}