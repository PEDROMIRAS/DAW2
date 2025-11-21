<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartas</title>
</head>
<body>
    <?php include('func_cartas.php'); ?>
    <h1>Cartas de una baraja:</h1>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        <p>Introduza el número de cartas:</p>
        <br>
        <label for="num">
            Numero:
            <input type="text" name="num">
        </label>
        <br>
        <button type="submit">Mostrar</button>
    </form>

    <?php
        if($_POST){
            $num = $_POST['num'];
            $arrayCartas = [
                'Diamantes' => 'Rojo',
                'Treboles' => 'Negro',
                'Corazones' => 'Rojo',
                'Picas' => 'Negro'
            ];
            try {
                if (empty($num)) {
                    throw new Exception("El valor no puede estar vacio");
                    
                }
                if (!is_numeric($num)) {
                    throw new Exception("El valoe debe ser numerico");
                    
                }
                if($num < 1){
                    throw new Exception("Tiene que pedir mas de un valor");
                    
                }
                if($num > count($arrayCartas)){
                    throw new Exception("No puede pedir mas numeros que valores tenga el array");
                    
                }
                echo "<br>";
                mostrarCartas($num, $arrayCartas);
            } catch (Exception $e) {
                echo $e->getMessage();
                header('refresh: 5; url=form_cartas.php');
            }
        }
    ?>
</body>
</html>