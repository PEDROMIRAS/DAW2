<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Contadores</h1>
    <p>Este contador va de 1 al 100:</p>
    <?php 
        for ($i=1; $i <= 100; $i++) { 
            echo $i.",";
        }
        ?>
    <br>
    <p>Este contador otro contador va del 10 al 0:</p>
    <?php
        $a = 10;
        while ($a >= 0) {
            if ($a!=0) {
                echo $a."-";
            }else{
                echo $a;
            }
            $a--;
        }
    ?>
</body>
</html>