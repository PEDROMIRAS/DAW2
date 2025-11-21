<?php
//funcion para pasar de pies a pulgadas y pulgadas a CM
    function conversorPiesPulgadas($pies, $pulgadas){
        //Pasamos de pies a pulgadas
        $cPulgadas = $pies * 12 + $pulgadas;
        //Pasamos de pulgadas a cm
        $cm = $cPulgadas * 2.54;
        return $cm;
    }
?>