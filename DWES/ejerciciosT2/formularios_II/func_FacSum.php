<?php
    //Funcion para calcular el factorial
    function factorial($num){
        if ($num === 0 || $num === 1) {
            return 1; // Caso base
        } else {
            return $num * factorial($num - 1); // Llamada recursiva
        }
    }
    //Funcion para calcular el sumatorio de $num desde 1
    function sumatorio($num){
        $resultado = 0;
        for ($i=0; $i <= $num; $i++) { 
            $resultado+= $i;
        }
        return $resultado;
    }
?>