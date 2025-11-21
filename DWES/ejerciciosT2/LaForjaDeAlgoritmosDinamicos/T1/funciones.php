<?php
    //Funcion para validar los campos de entrada
    function validarCampos($nombre, $clave){
        $valid = true;//Mi funcion devuelve un booleano
        //Comprobamos que los campos no esten vacios y se acapten al tipo de dato.
        if(empty($nombre) || empty($clave) || is_numeric($nombre) || !is_numeric($clave)){
            $valid = false;
        }
        return($valid);//Devolvemos el valor de la variable
    }
    //Funcion que verifica si la clave conincide con algun numero de 
    //la suerte definidos en un array
    function comprobarClave($clave, $numeros_de_la_suerte){
        //Mi funcion devuelve un booleano
        $acierto = false;
        //Recorro el array
        foreach($numeros_de_la_suerte as $numero){
            if($clave == $numero){
                $acierto = true;//Si coincide cambio la variable a 'true' y salgo del bucle
                break;
            }
        }
        return($acierto);//Devolvemos el valor de la variable
    }
?>