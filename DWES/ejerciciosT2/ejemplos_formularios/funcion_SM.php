<?php
    function convertirMin($segundos){
        //Pasamos segundos a minutos y segundos
        $min = intdiv($segundos,60);//devolvemos un numero entero
        $seg = $segundos%60;
        //creo un array y le asigno los resultados de las operaciones
        $tiempo = [$min,$seg];
        //devuelvo un array
        return $tiempo;
    }
?>