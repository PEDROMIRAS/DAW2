//Array feo del ejercicio
let arrayMasivo = [[21,2,3,4],[45,32,22,9],[0,66,7,4],[-3,32,11,90],[59,-2,-63,15]];

//20000000000 bucles (Con un for...of servía)
let cont = 1;
document.write('<b>Array masivo: </b><br>');
for (const num of arrayMasivo) {
    document.write('Subarray '+cont+': '+num+'<br>');
    cont++;
}