//Declaramos una palabra clave como variable
const palabraClave = "sargento";

//Definimos la funcion
function palabreja(...letras) {
    let resultado = "";
    //Recorremos la palabra clave
    for (let letra of palabraClave) {
        if (letras.includes(letra)) {//Comprobamos si la palabra clave contiene alguna de las letras insertadas 
            resultado += letra; // si se adivinó la letra, la mostramos
        } else {
            resultado += "-";   // si no, mostramos un guion
        }
    }

    console.log(resultado);
}
//Llamamos a la funcion, le indicamos unos parametros variables
palabreja("a","e","i","o","u","d","n");