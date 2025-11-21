<?php
    function convertirCM($cm) {
        $km = intdiv($cm, 100000);         // 1 km = 100,000 cm
        $resto = $cm % 100000;             // resto después de quitar los km
        $m = intdiv($resto, 100);          // 1 m = 100 cm
        $cmRest = $resto % 100;            // centímetros restantes
        $resultado = [$km, $m, $cmRest];
        return $resultado;
    }
?>