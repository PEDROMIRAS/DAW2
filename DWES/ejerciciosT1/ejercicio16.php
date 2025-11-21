<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!--Crea una página llamada tabla_multiplicar.php en tu carpeta de ejercicios. Crea en ella
un array numérico bidimensional donde en cada fila almacenes la tabla de multiplicar de
un número del 0 al 9-->
<?php
    $tabla = array();
    for ($i = 0; $i <= 9; $i++) {
        for ($j = 0; $j <= 10; $j++) {
            $tabla[$i][$j] = $i * $j;
        }
    }
//Después, recorre el array con un bucle foreach y saca por pantalla las tablas de multiplicar de la siguiente forma .
    foreach ($tabla as $num => $multiplicaciones) {
        echo "<h3>Tabla del $num</h3>";
        foreach ($multiplicaciones as $multiplicador => $resultado) {
            echo "$num x $multiplicador = $resultado<br>";
        }
    }
?>
</body>
</html>