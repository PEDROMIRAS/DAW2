
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
        $errores = []; //Declaro el array donde voy a almacenar los ERRORES        
        //Si hemos enviado el formulario (pulsado el botón ENVIAR)
        if($_POST) {
            //1.- Control de errores ---- UTILIZACION DE FUNCIONES    
            
            //campo nombre
            $patronN ="/^[a-zA-ZñáéíóúÁÉÍÓÚ ]{3,20}$/";       
            $errores['nombre'] = validar_string4('nombre',  'NOMBRE', $patronN, 3, 20);
            //campo apellidos
            $patronA ="/^[a-zA-ZñáéíóúÁÉÍÓÚ ]{3,50}$/";       
            $errores['apellidos'] = validar_string4('apellidos',  'APELLIDOS', $patronA, 3, 50);
            //campo contraseña
            $patronC ="/^[0-9a-zA-ZñáéíóúÁÉÍÓÚ ]{8,20}$/";       
            $errores['contrasenia'] = validar_string4('contrasenia',  'CONTRASEÑA', $patronC, 8, 20);
            //campo telefono
            //campo email                        
            
            //con esto elimino los valores null del array por si hubiera habido algún problema al meter errores al array
            $erroresLimpio = array_diff($errores, array("", 0, null));
            
            //2.- Compruebo si se ha generado algun error
            if($erroresLimpio){
                //2.1.- Si hay errores, vuelvo a cargar el formulario
                include "form.php";                
            }
            else{
                //2.2.- Si NO hay errores, proceso la información
                echo '<p>ENHORABUENA</p>'; 
                echo 'Contraseña='.$_POST["contrasenia"];          
            }
        }
        else{
            //Si es la primera vez que entro en la página, cargo el formulario
            include "form.php";
        }        
?>      
    </body>
</html>
