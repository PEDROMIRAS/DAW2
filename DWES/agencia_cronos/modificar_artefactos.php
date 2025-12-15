<?php
    include('conexion.php');
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Modificar artefactos</title>
    </head>
    <body>
        <h2>Modificar artefactos</h2>
        <form action="gestionar_artefactos.php" method="post">
            <label for="id">ID:</label><br>
            <input type="text" name="id"><br>
            <label for="localizacion_actual">Localizacion actual:</label><br>
            <input type="text" name="localizacion_actual"><br>
            <label for="valor_estimado">Valor estimado:</label><br>
            <input type="text" name="valor_estimado"><br>
            <br>
            <input type="submit" value="Modificar">
        </form>
        <br>
        <a href="listar_datos.php"><button>Ver artefactos</button></a>
    </body>
</html>