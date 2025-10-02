<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <?php
            //Recoger el valor del departamento seleccionado en el formulario
            $departamento = $_POST['options'];
            //Mostrar el presupuesto según el departamento seleccionado
            if ($departamento == "INFORMÁTICA") {
                echo "<p>INFORMATICA: 500€</p>";
            }elseif ($departamento == "LENGUA") {
                echo "<p>LENGUA: 300€</p>";
            }elseif ($departamento == "INGLÉS") {
                echo "<p>INGLÉS: 400€</p>";
            }elseif ($departamento == "MATEMÁTICAS") {
                echo "<p>MATEMÁTICAS: 300€</p>";
            }else {
                echo "<p>No has seleccionado ningún departamento</p>";
            }
        ?>
</body>
</html>