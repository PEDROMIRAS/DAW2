<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form dep</title>
</head>
<body>
        <!--Formulario para seleccionar departamento y ver su presupuesto-->
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
            <label for="option_select">Departamentos</label>
            <!--Etiqueta de HTML de select con opciones de departamentos-->
            <select name="options" id="option_select" required>
                <option value="" disabled selected>Eliga una opcion</option>
                <option value="INFORMÁTICA">INFORMÁTICA</option>
                <option value="LENGUA">LENGUA</option>
                <option value="INGLÉS">INGLÉS</option>
                <option value="MATEMÁTICAS">MATEMÁTICAS</option>
            </select>
            <br>
            <!--Botón para enviar el formulario-->
        <button type="submit">Buscar</button> 
        </form>
        <?php
            if($_POST){  
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
            }
        ?>
</body>
</html>