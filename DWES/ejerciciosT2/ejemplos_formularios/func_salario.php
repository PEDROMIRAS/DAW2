<?php
function calcularSalario($edad, $salario) {
    //salario mayor a 1000
    if ($salario < 1000) {
        //edad menor que 30
        if ($edad < 30) {
            return 1100;//fijar salario
        } elseif ($edad >= 30 && $edad <= 45) {//mayor 30 menor que 45 años
            return $salario + (($salario * 30) / 100);//aumentar salario 30%
        } else {
            return $salario + (($salario * 15) / 100);//aumentar salario 15%
        }
    } elseif ($salario >= 1000 && $salario < 2000) {//salario mayor a 1000 menor a 2000
        if ($edad > 45) {//empleados mayores de 45
            return $salario + (($salario * 3) / 100);//aumentar salario 3%
        } else {
            return $salario + (($salario * 10) / 100);//aumentar salario 10%
        }
    } else {
        // Si el salario es 2000 o más, no cambia
        return $salario;
    }
}
?>