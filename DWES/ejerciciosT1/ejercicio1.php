<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1 php</title>
</head>
<body>
    <!--Creacion de variable en php-->
    <?php
        $nombre = "Pedro Miras Pérez-Castejón";
        $anyo = "2000";
    ?>
    <!--Utilización de php embebido en html-->
    <p>Me llamo <?php echo $nombre?> y nací en <?php echo $anyo;?>. </p>
</body>
</html>