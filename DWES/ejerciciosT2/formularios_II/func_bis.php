<?php
    // Función que determina si un año es bisiesto y muestra un mensaje
    function anyoBisiesto($anyo){
        // Si el año es divisible entre 400 → es bisiesto
        if($anyo % 400 == 0){
            echo "<p>El año $anyo es bisiesto, porque $anyo es múltiplo de 400.</p>";

        // Si el año es divisible entre 100 pero no entre 400 → no es bisiesto
        } elseif($anyo % 100 == 0){
            echo "<p>El año $anyo no es bisiesto.</p>";

        // Si el año es divisible entre 4 pero no entre 100 → es bisiesto
        } elseif($anyo % 4 == 0){
            echo "<p>El año $anyo es bisiesto, porque $anyo es múltiplo de 4.</p>";

        // Si no cumple ninguna de las condiciones anteriores → no es bisiesto
        } else{
            echo "<p>El año $anyo no es bisiesto.</p>";
        }
    }
?>