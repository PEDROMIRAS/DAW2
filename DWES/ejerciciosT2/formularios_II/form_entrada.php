<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Entrada</title>
</head>
<body>
    <?php
        // Incluir el archivo con las funciones estadísticas (suma, media, maximo, minimo)
        include('func_estadistica.php');

        // Obtener la cantidad de campos numéricos desde POST, si no existe usar 0 como valor por defecto
        $cantidad = $_POST['cantidad'] ?? 0;
    ?>

    <h1>Cálculos estadísticos</h1>

    <!-- Formulario que se envía a sí mismo usando PHP_SELF -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        <p>Escribe los valores y marca las casillas correspondientes a los cálculos que quieres.</p>
        <br>

        <?php
            // Generar dinámicamente los campos de entrada según la cantidad especificada
            for ($i = 0; $i < $cantidad; $i++) {
                // Recuperar el valor previo del campo si existe (para mantener los datos tras el envío)
                $valor = $_POST['s'.$i] ?? '';

                // Mostrar etiqueta y campo de texto para cada número
                echo "<label>Número " . ($i + 1) . ": </label>";
                echo "<input type='text' name='s$i' value='$valor'><br>";
            }
        ?>
        <br>

        <!-- Checkboxes para seleccionar qué cálculos realizar -->
        <input type="checkbox" name="suma"> Suma -
        <input type="checkbox" name="media"> Media -
        <input type="checkbox" name="maximo"> Máximo -
        <input type="checkbox" name="minimo"> Mínimo
        <br><br>

        <!-- Campos ocultos para mantener el estado entre envíos -->
        <input type="hidden" name="cantidad" value="<?php echo $cantidad; ?>">
        <input type="hidden" name="enviado" value="1">

        <button type="submit">Calcular entrada</button>
        <br>

        <?php
            // Procesar el formulario solo si se ha enviado, hay cantidad de números y el campo 'enviado' está presente
            if ($_POST && $cantidad > 0 && !empty($_POST['enviado'])) {
                try {
                    // Array para almacenar todos los números ingresados
                    $numeros = [];

                    // Recoger todos los valores numéricos del formulario
                    for ($i = 0; $i < $cantidad; $i++) {
                        // Convertir cada valor a float, si no existe usar 0
                        $numeros[] = floatval($_POST['s'.$i] ?? 0);

                        // Validar que el número no sea 0 (campo vacío o inválido)
                        if ($numeros[$i] == 0) {
                            throw new Exception("Algún campo numérico no ha sido rellenado");
                        }
                    }

                    // Validar que al menos se haya seleccionado una opción de cálculo
                    if (empty($_POST['suma']) && empty($_POST['media']) && empty($_POST['maximo']) && empty($_POST['minimo'])) {
                        throw new Exception("No has seleccionado ninguna opción.");
                    }

                    // Mostrar título de resultados
                    echo '<br><h3>Resultados:</h3>';
                    // Mostrar los números ingresados
                    echo 'Los números ingresados son: ';
                    foreach($numeros as $numero){
                        echo $numero . ' ';
                    }
                    echo '<br>';

                    // Ejecutar y mostrar cada cálculo seleccionado
                    if (!empty($_POST['suma'])) {
                        echo "La suma de los valores es " . suma($numeros) . "<br>";
                    }
                    if (!empty($_POST['media'])) {
                        echo "La media de los valores es " . media($numeros) . "<br>";
                    }
                    if (!empty($_POST['maximo'])) {
                        echo "El valor máximo es " . maximo($numeros) . "<br>";
                    }
                    if (!empty($_POST['minimo'])) {
                        echo "El valor más pequeño es " . minimo($numeros) . "<br>";
                    }

                } catch (Exception $e) {
                    // Capturar y mostrar errores de validación
                    echo "Error: " . $e->getMessage();

                    // Redirigir automáticamente al formulario anterior después de 5 segundos
                    header('refresh: 5; url=form_estadistica.php');
                }
            }
        ?>
    </form>
    <br>

    <!-- Enlace para volver al formulario de configuración inicial -->
    <a href="form_estadistica.php">Volver al formulario anterior</a>
</body>
</html>