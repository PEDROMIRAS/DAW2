<?php
    // Función que calcula todos los divisores de un número entero positivo
    function calcularDivisores($numero) {
        $divisores = []; // Array donde se guardarán los divisores
        // Recorre todos los números desde 1 hasta $numero
        for ($i = 1; $i <= $numero; $i++) {
            // Si $i divide exactamente a $numero, se añade al array
            if ($numero % $i == 0) {
                $divisores[] = $i;
            }
        }
        return $divisores; // Devuelve el array de divisores
    }

    // Función que muestra los divisores de un array en pantalla
    function mostrarDivisores($divisores) {
        foreach ($divisores as $divisor) {
            echo $divisor . ' '; // Imprime cada divisor separado por espacio
        }
    }
?>