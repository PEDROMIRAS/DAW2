<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Distancias</title>
</head>
<body>
    <?php 
        // Se incluye el archivo con la función convertirCM()
        include('func_distancias.php');
    ?>

    <h1>Convertidor de distancias</h1>

    <!-- Formulario que pide una distancia en centímetros -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <label>
            Escribe una distancia (en centímetros) y la convertiré a kilómetros, metros y centímetros.
        </label>
        <br>
        <label>Distancia: <input type="text" name="distancia"> cm</label>
        <br>
        <label for="button"><button>Convertir</button></label>
    </form>

    <?php
        // Si se ha enviado el formulario
        if ($_POST) {
            $cm = $_POST['distancia']; // Se obtiene el valor introducido

            try {
                // Validaciones del campo
                if(empty($cm)){
                    throw new Exception("El formulario está vacío");
                }
                if(!is_numeric($cm)){
                    throw new Exception("El dato insertado no es un número");
                }

                // Llama a la función convertirCM() que devuelve un array con km, m y cm restantes
                $resultado = convertirCM($cm);
                $km = $resultado[0];
                $m = $resultado[1];
                $cmRest = $resultado[2];

                // Muestra el resultado formateado
                echo "<p>$cm cm son $km km, $m m y $cmRest cm.</p>";
            } catch (Exception $e) {
                // Si hay error, muestra mensaje y redirige tras 5 segundos
                echo "Error: " . $e->getMessage();
                header('refresh: 5; url=form_distancia.php');
            }
        }
    ?>
</body>
</html>