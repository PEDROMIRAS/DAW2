<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperaturas</title>
</head>
<body>
    <?php 
        // Se incluye el archivo que contiene la función cambioDeUnidad()
        include('func_temp.php'); 
    ?>

    <h1>Convertidor de temperaturas</h1>

    <!-- Formulario para introducir una temperatura y su unidad -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <p>Escribe una temperatura (en grados Celsius o Fahrenheit) y la convertiré a la otra unidad.</p>
        <label for="temp">Temperatura:
            <input type="text" name="temp">
            <select name="unidad"> 
                <option value="" selected disabled>Selecciona una unidad</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
            </select>
        </label>
        <br>
        <input type="submit" value="Convertir">
    </form>

    <?php 
        // Si el formulario fue enviado
        if($_POST){
            $temp = $_POST['temp'];     // Valor numérico de la temperatura
            $unidad = $_POST['unidad']; // Unidad seleccionada (C o F)

            try {
                // Validaciones de entrada
                if(empty($temp) || empty($unidad)){
                    throw new Exception("No has rellenado uno de los campos.");
                }
                if(!is_numeric($temp)){
                    throw new Exception("La temperatura no es un número.");
                }

                // Llama a la función que realiza la conversión
                $temperatura = cambioDeUnidad($temp, $unidad);

                // Muestra el resultado
                echo "<p>$temp $unidad son $temperatura</p>";

            } catch (Exception $e) {
                // Muestra mensaje de error y redirige tras 5 segundos
                echo "<p>Error: " . $e->getMessage() . "</p>";
                header('refresh: 5; url=form_temp.php'); // corregido: "hearder" → "header"
            }
        }
    ?>
</body>
</html>