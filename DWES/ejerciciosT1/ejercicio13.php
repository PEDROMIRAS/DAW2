<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $fechaAhora = time();
        $textoFecha = date("d M y - H:m:s", $fechaAhora);
        echo $textoFecha;
    ?>
</body>
</html>