// 1. Pregunta al usuario los valores (Ancho, Alto, Color)
const widthC = prompt('Indique el acho de la caja');
const heightC = prompt('Indique la altura de la caja');
const colorC = prompt('Indique el color del borde de la caja');

// 2. Selecciona la caja (el div)
const caja = document.querySelector('div');

// 3. Rellena cada atributo 'data-*' con su valor 
caja.dataset.width = widthC;
caja.dataset.heigth = heightC; 
caja.dataset.bordercolor = colorC; 

// 4. Recoge los valores de los atributos data y aplica los estilos 

// Almacenamos los valores del dataset, aunque ya los teníamos en las constantes iniciales,
// esta parte demuestra la 'recogida' explícita de los datos del elemento.
const w = caja.dataset.width;
const h = caja.dataset.heigth;
const c = caja.dataset.bordercolor;

// Aplicamos los estilos utilizando los valores recogidos del dataset
caja.style.width = w + "px";
caja.style.height = h + "px";
caja.style.border = `3px solid ${c}`;