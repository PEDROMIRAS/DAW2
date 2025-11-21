<?php
    function mostrarCartas($num, $arrayCartas){
        $arrayRandomizado = array_rand($arrayCartas, $num);
        foreach($arrayRandomizado as $carta){
            echo "Palo: " . $carta . ", Color: " . $arrayCartas[$carta];
            echo "<br>";
        }
    }
?>