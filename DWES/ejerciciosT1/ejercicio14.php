<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $fecha = "06:39:12";
        if (preg_match("/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/", $fecha, $partes)){
            echo "La fecha completa es " . $partes[0];
            echo ('<br>');
            echo "La hora es " . $partes[1];
            echo ('<br>');
            echo "Los minutos son " . $partes[2];
            echo ('<br>');
            echo "Los segundos son " . $partes[3];
        }
    ?>
</body>
</html>