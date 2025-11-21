<?php
    // Función que determina si un número es primo
    // Devuelve la cadena "es primo" o "no es primo"
    function primo($numero){
        $primo = "es primo"; // Asumimos inicialmente que el número es primo

        // 0 y 1 no son primos
        if($numero == 0 || $numero == 1){
            $primo = "no es primo";

        // Para números mayores que 1
        } elseif($numero > 1){
            // Recorremos todos los posibles divisores desde 2 hasta numero-1
            for($i = 2; $i < $numero; $i++){
                if($numero % $i == 0){
                    $primo = "no es primo"; // Si se encuentra un divisor, no es primo
                    break; // Salimos del bucle, no hace falta seguir comprobando
                }
            }
        }

        return $primo; // Devolvemos el resultado
    }
?>