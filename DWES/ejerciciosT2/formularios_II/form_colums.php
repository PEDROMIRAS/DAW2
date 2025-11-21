<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Columnas</title>
    </head>
    <body>
        <?php 
            // Se incluye un archivo externo con funciones (probablemente contiene dibujarColumna)
            include('func_columns.php'); 
        ?>
        
        <h1>Tabla de una fila</h1>

        <!-- Formulario para introducir el número de columnas -->
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
            <label for="cant">Numero de columnas: </label>
            <input type="text" name="cant">
            <br><br>
            <button type="submit">Dibujar</button>
            <br>
        </form>

        <?php
            // Si se envió el formulario (hay datos en $_POST)
            if($_POST){
                $cant = $_POST['cant']; // Se guarda el valor introducido
                
                try {
                    // Validaciones básicas
                    if(empty($cant)){
                        throw new Exception("El campo no puede estar vacío");
                    }
                    if(!is_numeric($cant)){
                        throw new Exception("El campo debe ser numérico");
                    }

                    // Si todo está bien, se llama a la función para dibujar las columnas
                    echo "<br>";
                    dibujarColumna($cant);

                } catch (Exception $e) {
                    // Si ocurre un error, se muestra el mensaje
                    echo $e->getMessage();

                    // Redirige de nuevo al formulario después de 5 segundos
                    header('refresh: 5; url=form_colums.php');
                }
            }
        ?>
    </body>
</html>