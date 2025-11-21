<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcula sumatorios o factoriales</title>
</head>
<body>
    <?php 
        // Se incluye el archivo que contiene las funciones factorial() y sumatorio()
        include('func_FacSum.php');
    ?>

    <h1>Calcula sumatorios o factoriales</h1>

    <!-- Formulario que pide un número y permite elegir entre factorial o sumatorio -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <label>Escribe un número e indica si quieres que calcule el factorial o el sumatorio de 1 hasta el número.</label>
        <br>
        <label>Número: 
            <input type="text" name="numero">
        </label>
        <br>
        <label>
            <input type="checkbox" name="facto"> Factorial -
            <input type="checkbox" name="suma"> Sumatorio
        </label>
        <br>
        <button type="submit">Calcular</button>
    </form>

    <?php 
        // Si el formulario fue enviado
        if($_POST){
            $num = $_POST['numero'];          // Número introducido
            $facto = $_POST['facto'] ?? '';   // Checkbox factorial (puede no estar definido)
            $suma = $_POST['suma'] ?? '';     // Checkbox sumatorio (puede no estar definido)

            try {
                // Validaciones de entrada
                if(empty($num) && (empty($facto) && empty($suma))) {
                    throw new Exception("El formulario está vacío.");
                }
                if(!is_numeric($num)){
                    throw new Exception("El campo escrito no es numérico.");
                }

                // Elección de operación según las casillas marcadas
                if(!empty($facto) && empty($suma)){
                    $resultado = factorial($num);
                    echo "<p>El factorial de $num es $resultado.</p>";
                } elseif(!empty($suma) && empty($facto)){
                    $resultado = sumatorio($num);
                    echo "<p>La suma desde 1 hasta $num es $resultado.</p>";
                }

            } catch (Exception $e) {
                // Muestra error y redirige a la página original tras 5 segundos
                echo "Error: " . $e->getMessage();
                header('refresh: 5; url = form_FacSum.php');
            }
        }
    ?>
</body>
</html>