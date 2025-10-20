let numeros = [3, 21, 45, 67, 12, 88, 9, 54, 30, 76]; // Array de 10 números entre 1 y 100
let multiplos = new Array();

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 == 0) {
        multiplos.push(numeros[i]);
    }
}

document.write('Multiplos de 3');
document.write('<br>');
for (let i = 0; i < multiplos.length; i++) {
    document.write(multiplos[i] + '<br>');
}
document.write('<br>');