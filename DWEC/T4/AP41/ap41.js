//Solicitamos el valor de las variables al usuario.
const precio = prompt('Introduce un precio de producto');
const porcentaje = prompt('Introduce un porcentaje de descuento');

//Definimos la funcion
function descuento(precio,porcentaje){
    descuentoPrecio = precio-(precio*(porcentaje/100));
    return descuentoPrecio;
}

//Llamamos a la funcion en una salida por consola, pasandole como parametros
// los valores recogidos en los prompts
console.log(descuento(precio,porcentaje));