<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        define('PI', 3.1416);
        $radio = 3.5;
        $area = PI*pow($radio, 2); 
    ?>
    <p>El area del circulo es <?php echo $area?></p>
</body>
</html>