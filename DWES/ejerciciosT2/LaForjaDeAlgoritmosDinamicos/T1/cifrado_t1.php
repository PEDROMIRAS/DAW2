<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarea 1</title>
</head>
<body>
    <!--Inclusion del archivo de funciones.php-->
    <?php include('funciones.php');?>
    <h1>Formulario de Usuario</h1>
    <!--Definicion del formulario-->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre">
        <br><br>
        <label for="clave">Clave secreta:</label>
        <input type="password" name="clave">
        <br><br>
        <button type="submit">Enviar</button> <!--Boton de envio-->
    </form>

    <?php
        //Condicion de envio de datos
        if ($_POST) {
            //Definicion de variables
            $nombre = $_POST['nombre'];
            $clave = $_POST['clave'];
            $numeros_de_la_suerte = [22,54,67,89,234,65,332,98,124];

            //Llamada a las funciones de control de errores y validacion de campos
            try {
                $datos = validarCampos($nombre, $clave);
                if($datos == false){
                    throw new Exception("<br>Los valores de entrada no son validos.");
                }
                $valor = comprobarClave($clave, $numeros_de_la_suerte);
                if($valor == false){
                    echo "<br>Envio de datos correcto. La clave no es correcta.";
                }else{
                    echo "<br>La clave es correcta. !Bienvenido!";
                }
            } catch (Exception $e) {
                echo $e->getMessage();
                header("refresh= 5; url=cifrado_t1.php");//Cargamos la pagina de nuevo si hay un error
            }
            
        }

    ?>
</body>
</html>