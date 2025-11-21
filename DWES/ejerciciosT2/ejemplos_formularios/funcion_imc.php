<?php
    function calcularIMC($peso, $altura){
        //Pasamos la altura a metros
                $altura = $altura / 100;
        //Calculamos el índice de masa corporal
                $imc = $peso / ($altura * $altura);
                return $imc;
    }    
?>