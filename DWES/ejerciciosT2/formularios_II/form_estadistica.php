<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cálculos estadísticos</title>
</head>
<body>
    <!--Formculario de entrada-->
    <h1>Cálculos estadísticos</h1>
    <form action="form_entrada.php" method="post">
        <p>Escribe cuántos valores quieres introducir:</p>
        <label for="cantidad">Cantidad: </label>
        <input type="text" name="cantidad">
        <br><br>
        <button type="submit">Mostrar formulario de entrada</button>
    </form>
    <?php
        //Controll de exceciones
            if($_POST){
                $cantidad = $_POST['cantidad'];//Variable donde guardo la cantidad de i
                try {
                    if(empty($cantidad)){
                        throw new Exception("No has indicado la cantidad de numeros");
                    }
                    if(!is_numeric($cantidad)){
                        throw new Exception("No has introducido un número");
                    }
                } catch (Exception $e) {
                    echo $e->getMessage();
                    header('refresh: 5; url=form_estadistica.php');
                }
            }
        ?>
</body>
</html>