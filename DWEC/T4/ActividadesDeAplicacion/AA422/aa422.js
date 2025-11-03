//Funcion que recibe un numero por parametro y evalua si es multiplo de 10
function multiploDe10(numero){
    if(numero % 10 == 0){
        return true;//Si es multiplo devuelve true
    }else{
        return false;//Si no es multipo devuelve false
    }
}

//Variable de prueba
let numero = 20;
//Salida por pantalla de la utilizacion de la funcion
document.write(`${numero} es multiplo de 10? ${multiploDe10(numero)}<br>`);
