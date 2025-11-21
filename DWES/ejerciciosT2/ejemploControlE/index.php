<?php
require_once 'funciones.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>FORMULARIO COMPLETO</title>
    </head>
    <body>
        
        <?php
        $errores = []; //Declaro el array donde voy a almacenar los ERRORES (ASOCIATIVO)
        
        //Si hemos enviado el formulario (pulsado el botón ENVIAR)
        if($_POST) {
            //1.- Control de errores
                        
            //2.- Compruebo si se ha generado algun error
            if($errores){
                //2.1.- Si hay errores, vuelvo a cargar el formulario
                include "form.php";
                
            }
            else{
                //2.2.- Si NO hay errores, proceso la información
                echo '<p>ENHORABUENA</p>';                
            }
        }
        else{
            //Si es la primera vez que entro en la página, cargo el formulario
            include "form.php";
        }
        ?>        
        
    </body>
</html>
