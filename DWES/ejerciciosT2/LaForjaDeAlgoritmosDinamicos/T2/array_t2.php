<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include('funciones.php'); ?> <!-- Incluye funciones externas, como dobleVerificacion() -->

    <h2>El Reloj del Cronometrador: Procesamiento Iterativo de Múltiples Entradas</h2>

    <!-- Formulario que se envía a sí mismo usando POST -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <!-- Inputs para los códigos de misión, usando array para capturar múltiples valores -->
        <label for="nombre">Codigo de mision:</label>
        <input type="text" name="codigo_mision[]">
        <br><br>
        <label for="nombre">Codigo de mision:</label>
        <input type="text" name="codigo_mision[]">
        <br><br>
        <label for="nombre">Codigo de mision:</label>
        <input type="text" name="codigo_mision[]">
        <br><br>
        <label for="nombre">Codigo de mision:</label>
        <input type="text" name="codigo_mision[]">
        <br><br>
        <label for="nombre">Codigo de mision:</label>
        <input type="text" name="codigo_mision[]">
        <br><br>

        <button type="submit">Enviar</button>
        <br><br>
    </form>

    <?php 
        if($_POST){ // Comprueba si se envió el formulario
            $codigo_mision = $_POST['codigo_mision']; // Recoge los códigos del formulario

            // Inicializa un array para almacenar los resultados procesados
            $resultados_procesados = [
                'original' => [], // Guardará los códigos originales
                'duplicado' => [], // Guardará el resultado de dobleVerificacion()
                'alerta' => [] // Guardará mensajes de alerta según la condición
            ];

            try {
                // Validación de cada código antes de procesar
                for ($i = 0; $i < count($codigo_mision); $i++) { 
                    if (empty($codigo_mision[$i])) { // Comprueba si está vacío
                        throw new Exception("Campo no valido, está vacio."); // Lanza excepción si falla
                    }
                    if(!is_numeric($codigo_mision[$i])){ // Comprueba si es numérico
                        throw new Exception("Campo no valido, no es numerico."); // Lanza excepción si falla
                    }
                }

                // Procesamiento de los códigos válidos
                foreach($codigo_mision as $codigo){
                    $resultados_procesados['original'][] = $codigo; // Guarda el código original
                    $resultados_procesados['duplicado'][] = dobleVerificacion($codigo); // Aplica función externa

                    // Determina si el código es de alto riesgo
                    if($codigo > 50){
                        $resultados_procesados['alerta'][] = 'ALTO RIESGO';
                    }else{
                        $resultados_procesados['alerta'][] = ' '; // Si no hay riesgo, deja espacio vacío
                    }
                }
                
                // Mostrar resultados en una tabla HTML
                echo "<table border='1' cellpadding='10' cellspacing='0'>";
                echo "<tr><th>Original</th><th>Duplicado</th><th>Alerta</th></tr>";

                $total = count($resultados_procesados['original']); // Número de filas a mostrar

                // Recorre cada resultado y lo imprime en la tabla
                for($i = 0; $i < $total; $i++){
                    echo "<tr>";
                    echo "<td>{$resultados_procesados['original'][$i]}</td>";
                    echo "<td>{$resultados_procesados['duplicado'][$i]}</td>";
                    echo "<td>{$resultados_procesados['alerta'][$i]}</td>";
                    echo "</tr>";
                }

                echo "</table>";
            } catch (Exception $e) {
                // Captura errores de validación y los muestra
                echo $e->getMessage();
                // Redirige automáticamente después de 5 segundos
                header('refresh:5; url=array_t2.php');
            }
        }
    ?>
</body>
</html>