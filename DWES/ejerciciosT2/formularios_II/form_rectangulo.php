<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rectángulo</title>
</head>
<body>
    <?php 
        // Se incluye el archivo con la función dibujar(), que generará el rectángulo
        include('func_rectangulo.php');
    ?>

    <h1>Dibuja rectángulo</h1>

    <!-- Formulario que pide la altura y la anchura del rectángulo -->
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <label>
            Escribe la altura y la anchura y dibujaré un rectángulo de estrellas de ese tamaño.
        </label>
        <br>
        <label>Altura: <input type="text" name="altura"></label>
        <br>
        <label>Anchura: <input type="text" name="anchura"></label>
        <br>
        <button type="submit">Dibujar</button>
    </form>

    <?php 
        // Si el formulario fue enviado
        if($_POST) {
            $altura = $_POST['altura'];   // Valor de altura introducido
            $anchura = $_POST['anchura']; // Valor de anchura introducido

            try {
                // Validaciones de entrada
                if (empty($altura) || empty($anchura)) {
                    throw new Exception("Uno de los campos está vacío.");
                }
                if(!is_numeric($altura) || !is_numeric($anchura)){
                    throw new Exception("Uno de los campos no es numérico.");
                }

                // Llamada a la función que genera el rectángulo con '*'
                $result = dibujar($altura, $anchura);
                echo $result;

            } catch (Exception $e) {
                // Si hay un error, muestra el mensaje y redirige en 5 segundos
                echo "Error: " . $e->getMessage();
                header("refresh:5; url=form_rectangulo.php");
            }
        }
    ?>
</body>
</html>