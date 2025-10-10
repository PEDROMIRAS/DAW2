const MAX = 100; // Valor máximo para el número aleatorio
let array1 = new Array(100); // Crea un array de 100 elementos

for (let index = 0; index < array1.length; index++) {
    let num = Math.floor(Math.random() * MAX); // Genera un número aleatorio entre 0 y 99
    array1[index] = num;
    if (array1[index] % 2 === 0) {
        document.write(array1[index] + " es par<br>");
    } 
}