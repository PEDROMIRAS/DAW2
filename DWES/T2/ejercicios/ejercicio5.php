<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba_if</title>
</head>
<body>
        <?php 
            $nota1 = 6.3;
            $nota2 = 8.7;
            $nota3 = 7.6;
            if($nota1 > $nota2 and $nota1 > $nota3){
                echo "La primera nota es mayor que las demás.";
            }elseif($nota2 > $nota1 and $nota2 > $nota3){
                echo "La segunda nota es mayor que las demás.";
            }else{
                echo "La tercera nota es mayor que las demás.";
            }
        ?>
</body>
</html>