<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primo</title>
</head>
<body>
    <?php 
        // Se incluye el archivo con la función primo()
        include('func_primo.php');
    ?>

    <h1>Comprueba primalidad</h1>

    <!-- Formulario para que el usuario introduzca un número -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <p>Escribe un número entero positivo y te diré si es un número primo.</p>
        <label for="numero">Número:</label>
        <input type="text" name="numero">
        <br>
        <button type="submit">Comprobar</button>
    </form>

    <?php
        // Si el formulario fue enviado
        if($_POST){
            $numero = $_POST['numero']; // Se obtiene el valor introducido

            try {
                // Validaciones básicas
                if(empty($numero)){
                    throw new Exception("El campo no puede estar vacío");
                }
                if (!is_numeric($numero)) {
                    throw new Exception("El campo debe ser numérico.");
                }

                // Llamada a la función que comprueba si el número es primo
                $resultado = primo($numero);

                // Muestra el resultado (la función debería devolver "primo" o "no primo")
                echo "El $numero $resultado.";

            } catch (Exception $e) {
                // Si hay error, se muestra el mensaje
                echo "Error: " . $e->getMessage();
                header('refresh: 5; url=form_primo.php');
            }
        }
    ?>
</body>
</html>