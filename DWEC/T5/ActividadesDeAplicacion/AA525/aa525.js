class OpFechas{
    diffFechas(fecha1, fecha2){
        // Convertir a Date (si ya son Date no pasa nada)
        const f1 = new Date(fecha1);
        const f2 = new Date(fecha2);

        // Diferencia en milisegundos
        const diffMs = f1 - f2;

        // Convertir a días
        const msPorDia = 1000 * 60 * 60 * 24;
        const diffDias = Math.floor(diffMs / msPorDia);

        return diffDias;
    }

    maxFechas(fecha1, fecha2){
        const f1 = new Date(fecha1);
        const f2 = new Date(fecha2);

        if(f1-f2 > 0){
            return console.log('Fecha 1 mayor que Fecha 2');
        }else if(f1 - f2 === 0){
            return console.log('Las dos fechas son iguales.')
        }else{
            return console.log('Fecha 2 mayor que Fecha 1') 
        }
    }

    testFecha(fecha1){
        const regExp = /^(\d){2}-(\d){2}-(\d){4}$/;

    }
}