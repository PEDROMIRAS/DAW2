class OpFechas{
    diffFechas(fecha1, fecha2){//Calcula los dias que hay de diferencia entre dos fechas dadas.
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

    maxFechas(fecha1, fecha2){//Devuelve la fecha mas reciente de dos fechas dadas
        const f1 = new Date(fecha1);
        const f2 = new Date(fecha2);

        if(f1>f2){
            return fecha1;
        }else if(f1<f2){
            return fecha2;
        }else{
            return "Las fechas son iguales";
        }
    }

    testFecha(fecha){//Comprueba si el formato de una fecha es correcto
        //Formato dd-mm-yyy
        const regExp = /^(\d{4})-(\d{2})-(\d{2})$/;
        console.log(regExp.test(fecha));
    }

    ayerFecha(fecha){
        //Devolver el dia anterior a la fecha introducida
        const f = new Date(fecha);
        f.setDate(f.getDate() - 1);
        
        //Devolver dd-mm-yyyy
        const dia = f.getDate();
        const mes = f.getMonth() + 1;
        const anyo = f.getFullYear();

        return dia + "-" + mes + "-" + anyo;
    }

    manianaFecha(fecha){
        //Devolver el dia siguiente a la fecha introducida
        const f = new Date(fecha);
        f.setDate(f.getDate() + 1);

        //Devolver dd-mm-yyyy
        const dia = f.getDate();
        const mes = f.getMonth() + 1;
        const anyo = f.getFullYear();

        return dia + "-" + mes + "-" + anyo;
    }

}

const op = new OpFechas();

console.log(op.diffFechas("2025-01-10", "2025-01-01")); // 9
console.log(op.maxFechas("2025-01-10", "2025-01-15")); // "2025-01-15"
console.log(op.testFecha("15-04-2025")); // false
console.log(op.ayerFecha("2025-04-01")); // "31-03-2025"
console.log(op.manianaFecha("2025-04-01")); // "02-0-04-2025"