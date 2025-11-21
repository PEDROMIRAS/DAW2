<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        function conteo($x, $y){
            while($x <= $y){
                if ($x!=$y) {
                    echo $x."-";
                }elseif($x==$y){
                    echo ('Los números son iguales.');
                }else{
                    echo $x;
                }
                $x++;
            }
        }
        conteo(10,20);
    ?>
</body>
</html>