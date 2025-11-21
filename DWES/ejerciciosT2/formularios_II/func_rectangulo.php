<?php
    // Función que dibuja un rectángulo de '*' de una altura y anchura dadas
    function dibujar($altura, $anchura){
        // Recorre cada fila
        for ($i = 0; $i < $altura; $i++) { 
            // Recorre cada columna en la fila actual
            for ($j = 0; $j < $anchura; $j++) { 
                echo '*'; // Dibuja un asterisco
            }
            echo '<br>'; // Salto de línea al final de cada fila
        }
    }
?>