<?php
    // Función que convierte temperaturas entre Celsius y Fahrenheit
    // $temp → valor numérico de la temperatura
    // $unidad → unidad original ('C' o 'F')
    function cambioDeUnidad($temp, $unidad){
        if($unidad == 'C'){
            // Celsius a Fahrenheit: F = C * 1.8 + 32
            $resultado = $temp * 1.8 + 32;
            return "$resultado °F";

        } elseif($unidad == 'F'){
            // Fahrenheit a Celsius: C = (F - 32) / 1.8
            $resultado = ($temp - 32) / 1.8;
            return "$resultado °C";
        } 
        // Nota: no hay manejo de unidad incorrecta
    }
?>