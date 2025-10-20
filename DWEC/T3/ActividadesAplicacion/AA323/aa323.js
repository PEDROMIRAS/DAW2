//Array con valores repetidos, que vamos a comprobar
let array = [1, 1, 2, 3, 4, 5, 5, 7, 9, 9];

//Recorremos el array
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {//Comprobamos si el número está repetido, si lo está lo imprimimos
        document.write(`El número ${array[i]} está repetido en las posiciones ${i} y ${j}`);
        document.write("<br>");
        }
    }
}