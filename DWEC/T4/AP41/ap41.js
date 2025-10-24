
const precio = prompt('Introduce un precio de producto');
const porcentaje = prompt('Introduce un porcentaje de descuento');

function descuento(precio,porcentaje){
    descuentoPrecio = precio-(precio*(porcentaje/100));
    return descuentoPrecio;
}

console.log(descuento(precio,porcentaje));