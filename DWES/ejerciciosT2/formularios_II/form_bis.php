<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bisiesto</title>
</head>
<body>
    <?php 
        // Se incluye un archivo con funciones (probablemente contiene la función anyoBisiesto)
        include('func_bis.php');
    ?>

    <h1>Años Bisiestos</h1>

    <!-- Formulario que pide al usuario un año -->
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
        <p>Escribe un año y te diré si es bisiesto o no:</p>
        <label for="nombre">Año:
            <input type="text" name="anyo">
        </label>
        <br>
        <button type="submit">Calcular</button>
    </form>

    <?php
        // Si el formulario fue enviado
        if($_POST){
            $anyo = $_POST['anyo']; // Se obtiene el valor del año introducido
            
            try {
                // Validaciones básicas del campo
                if(empty($anyo)){
                    throw new Exception("Texto introducido vacío.");
                }
                if(!is_numeric($anyo)){
                    throw new Exception("El dato introducido no es numérico.");
                }

                // Llama a la función que determina si el año es bisiesto
                $bisisesto = anyoBisiesto($anyo);
                echo $bisisesto;

            } catch (Exception $e) {
                // Captura y muestra cualquier error
                echo "Error captado: " . $e->getMessage();

                // Redirige al formulario después de 4 segundos
                header('refresh:4; url=form_bisiesto.php');
            }
        }
    ?>
</body>
</html>