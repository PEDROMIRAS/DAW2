<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $numero = rand(1,6);
        if($numero >= 1 and $numero <= 4){
            echo('Prueba otra vez...');
        }elseif($numero == 5){
            echo ('Has estado cerca.');
        }elseif($numero == 6){
            echo ('Enhorabuena maxima puntuacion.');
        }
    ?>
</body>
</html>