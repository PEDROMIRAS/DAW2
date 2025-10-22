//Declaramos dos arrays para comprarlos 
let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [1,2,3,4,5,6,7,8,9,10];

//Variable para saber si son iguales, la cambiaremos en caso de que no lo sen
let arraysIguales = true;

//Comparamos los arrays
if (array1.length === array2.length) {//Comprobamos que ambos sea igual de largos
    //Si lo son, recorremos los arrays comparando cada posicion
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            arraysIguales = false;
            break;
        }
    }
}else {
    arraysIguales = false;
}

//En funcion de nuestra variable 'arraysIguales' mostramos un mensaje u otro
if (arraysIguales) {
    document.write('Los arrays son iguales');
}else {
    document.write('Los arrays son diferentes');
}