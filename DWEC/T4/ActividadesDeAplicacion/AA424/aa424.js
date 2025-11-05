function tablaMultiplicar(numero){
    document.write(`<b>Tabla del ${numero}</b><br>`);
    for(let i=0; i<= 10; i++){
            document.write(`<b>${i} x ${numero} = ${i*numero}</b><br>`);
    }
}
tablaMultiplicar(10);
document.write("<br>");
tablaMultiplicar(5);