<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJ 10</title>
</head>
<body>
        <?php 
            function intercambio(&$x, &$y){
                $aux = $x;
                $x = $y;
                $y = $aux;
                echo ('X vale: '. $x.', e Y vale: '.$y);
            }
            $a = 9;
            $b = 7;
            intercambio($a,$b);
        ?>
</body>
</html>