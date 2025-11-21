<?php
    function comprobarPalabras($palabra1, $palabra2){
        $p1 = strtolower(trim($palabra1));
        $p2 = strtolower(trim($palabra2));

        if($p1[0] == $p2[0]){
            return "Es un tautograma";
        }else{
            return "No es un tautograma";
        }
    }
?>