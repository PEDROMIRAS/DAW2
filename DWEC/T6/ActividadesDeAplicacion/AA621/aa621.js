const widthC = prompt('Indique el acho de la caja');
const heightC = prompt('Indique la altura de la caja');
const colorC = prompt('Indique el color del borde de la caja');

const caja = document.querySelector('div');

caja.dataset.width = widthC;
caja.dataset.heigth = heightC;
caja.dataset.bordercolor = colorC;

// Aplicamos estilo visual para que se vea

caja.style.width = widthC + "px";
caja.style.height = heightC + "px";
caja.style.border = `3px solid ${colorC}`;