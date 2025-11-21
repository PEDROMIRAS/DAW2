<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Divisores</title>
</head>
<body>
    <?php 
        // Se incluye un archivo con las funciones necesarias (probablemente calcularDivisores y mostrarDivisores)
        include('func_div.php'); 
    ?>

    <h1>Calcula Divisores</h1>

    <!-- Formulario para introducir un número entero positivo -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        <p>Escribe un número entero positivo y te diré sus divisores:</p>
        <label for="numero">Número:</label>
        <input type="text" name="numero" required><br>
        <button type="submit">Calcular</button>
    </form>

    <?php
        // Si el formulario fue enviado
        if ($_POST) {
            $numero = $_POST['numero']; // Se obtiene el número introducido

            try {
                // Validaciones de entrada
                if (empty($numero) && $numero !== "0") {
                    throw new Exception("El campo está vacío.");
                }
                if (!is_numeric($numero)) {
                    throw new Exception("El valor debe ser numérico.");
                }
                if ($numero <= 0) {
                    throw new Exception("El número debe ser positivo.");
                }

                // Se calcula el array de divisores usando una función externa
                $resultado = calcularDivisores($numero);

                // Muestra los divisores encontrados
                echo "<h4>Divisores de $numero: </h4>";
                mostrarDivisores($resultado);
                
            } catch (Exception $e) {
                // Si ocurre un error, se muestra el mensaje
                echo "Error: " . $e->getMessage() . "</p>";

                // Redirige al formulario después de 5 segundos
                header('refresh: 5; url=form_div.php');
            }
        }
    ?>
</body>
</html>