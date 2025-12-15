<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>Ingreso de artefactos</h2>
        <form action="ingresar_artefactos.php" method="post">
            <label for="nombre">Nombre del artefacto:</label><br>
            <input type="text" name="nombre"><br>
            <label for="era_origen">Era de origen:</label><br>
            <input type="text" name="era_origen"><br>
            <label for="localizacion_actual">Localizacion actual:</label><br>
            <input type="text" name="localizacion_actual"><br>
            <label for="valor_estimado">Valor estimado:</label><br>
            <input type="text" name="valor_estimado">
            <br><br>
            <input type="submit" value="Ingresar">

            <?php
            // Mensaje de éxito
            if(isset($_SESSION['valid_artifact'])){
                echo "<p style='color:green'>".$_SESSION['valid_artifact']."</p>";
                unset($_SESSION['valid_artifact']); // borrar mensaje después de mostrar
            }

            // Mensaje de error
            if(isset($_SESSION['invalid_artifact'])){
                echo "<p style='color:red'>".$_SESSION['invalid_artifact']."</p>";
                unset($_SESSION['invalid_artifact']); // borrar mensaje después de mostrar
            }
            ?>
        </form>
        <br>
        <a href="listar_datos.php"><button>Mostrar artefactos</button></a>
    </body>
</html>