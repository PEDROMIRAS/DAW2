<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tautograma</title>
</head>
<body>
    <?php include('funciones.php'); ?>
        <h1>Tautograma</h1>
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
            <label for="palabra1">Palabra 1:</label>
            <input type="text" name="palabra1" placeholder="Palabra 1"><br>
            <label for="palabra2">Palabra 2:</label>
            <input type="text" name="palabra2" placeholder="Palabra 2">
            <br>
            <button type="submit">Enviar</button>
        </form>
    <?php
        if($_POST){
            $palabra1 = $_POST['palabra1'];
            $palabra2 = $_POST['palabra2'];
            $resultado = comprobarPalabras($palabra1, $palabra2);
            echo $resultado;
        }
    ?>
</body>
</html>