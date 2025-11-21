<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de multiplicar</title>
</head>
<body>
    <?php 
        // Se incluye el archivo con la función dibujarTabla()
        include('func_tabla.php');
    ?>

    <h1>Tabla de multiplicar</h1>

    <!-- Formulario que pide los límites horizontal y vertical de la tabla -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <label for="numero">Horizontal: </label>
        <input type="text" name="horizontal" required>
        <br><br>
        <label for="numero">Vertical: </label>
        <input type="text" name="vertical" required>
        <br><br>
        <button type="submit">Generar tabla</button>
    </form>

    <?php
        // Si se ha enviado el formulario
        if($_POST){
            $h = $_POST['horizontal']; // Número de columnas
            $v = $_POST['vertical'];   // Número de filas

            try {
                // Validaciones básicas
                if (empty($h) && empty($v)){
                    throw new Exception('Los valores no pueden estar vacíos.');
                }
                if (!is_numeric($h) && !is_numeric($v)) {
                    throw new Exception('Los valores deben ser numéricos.');
                }
                if ($h < 1 || $h > 10 || $v < 1 || $v > 10) {
                    throw new Exception('Los valores deben estar entre 1 y 10.');
                }

                // Si todo está bien, se genera la tabla de multiplicar
                echo "<br>";
                dibujarTabla($h, $v);

            } catch (Exception $e) {
                // Si hay error, muestra el mensaje y redirige al formulario en 5 segundos
                echo $e->getMessage();
                header('refresh:5; url=form_tabla.php');
            }
        }
    ?>
</body>
</html>