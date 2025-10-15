//Creamos un array y lo llenamos de valores booleanos como nos pide el ejercicio
const booleanos = [true, false, true, true, false, true, true, false, true, false];
const valor = true; //Declaramos el valor por el que vamos a buscar
let resultado; 
let i = 0; //Contador para iterar sobre el comienzo de busqueda
while(booleanos.length > i){
    resultado = booleanos.indexOf(valor,i);//Buscamos 'true' desde i
    if(resultado === -1){//En caso de que el ultimo valor sea -1 salimos antes de imprimirlo por consola
        break;
    }
    console.log(resultado);//Imprimimos el resultado por consola
    i++;//Aumentamos en 1 la posicion por la que empezmos a buscar
}