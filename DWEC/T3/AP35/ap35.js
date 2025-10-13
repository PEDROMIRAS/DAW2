//Creamos un array de 10 elementos
const a_numeros = new Array(10);
const MAX = 101;

//Inicializamos el array con multiplos de 5
for (let i = 0; i < a_numeros.length; i++) {
    let num_rand;
    do {
        num_rand = Math.floor(Math.random()*MAX);
    } while (num_rand % 5 !== 0);
        a_numeros[i] = num_rand;
}
//Mostramos el array en modo tabla
console.table(a_numeros);

//Si el primer elemento es menor de 50, debes eliminarlo e insertar otro multiplo de 5 aleatorio. 
//Esta oparacion debe repetirse hasta que el primer elemento sea mayor o igual que 50.
while(a_numeros[0] < 50 ){
    a_numeros.shift();
    let num_rand;
    do {
        num_rand = Math.floor(Math.random()*MAX);
    } while (num_rand % 5 !== 0); 
    a_numeros.unshift(num_rand);
}
//Si el ultimo elemento es mayor de 50,debes eliminarlo e insertar otro multiplo de 5 aleatorio.
//Esta operacion debes realizarla hasta que el ultimo elemento sea mayor o igual que 50.
while(a_numeros[a_numeros.length - 1] > 50){
    a_numeros.pop();
    let num_rand;
    do {
        num_rand = Math.floor(Math.random()*MAX);
    } while (num_rand % 5 !== 0); 
    a_numeros.push(num_rand);
}
//Mostramos el array en modo tabla
console.table(a_numeros);
