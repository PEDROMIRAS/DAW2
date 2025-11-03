//Función basica para pasar de Fahrenheit a Clesius
function fahrenheitToClesius(grados){
    grados = (grados - 32) * 5/9;
    return grados.toFixed(2);
}
//Variable con grados de prueba
let grados = 100;

//Resultado de la función
document.write(`${grados} grados fahrenheit son ${fahrenheitToClesius(grados)} grados celsius.<br>`);