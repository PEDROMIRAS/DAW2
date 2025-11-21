<?php

////////////////// FUNCIONES PARA MANTENER LA INFORMACION DE UN FORMULARIO ////////////////////////

//Función para mostrar errores al lado del campo
function mostrar_error_campo($campo, $errores){
    if(isset($errores[$campo])) {
    //if((!empty($errores[$campo]))){
        echo '<label>'.$errores[$campo].'</label>';
    }
}


//Función para mantener los input DE TEXTO (text, number, phone, email, password) correctos
function mostrar_value($campo, $errores){
    if(isset($_POST[$campo])){ //si está rellena...
        if (empty($errores[$campo])){//si no tiene errores..
            echo 'value="'.$_POST[$campo].'"'; //vuelves a rellenar ese campo
        }
    }
}
    

//Función para mantener los textarea (si tiene valor)
//NO es necesario el CONTROL DE ERRORES
function mostrar_textarea($campo){
    if(isset($_POST[$campo])){ //si está rellena...
        echo $_POST[$campo];
    }
}
    

//Función para mantener los input RADIO y CHECKBOX seleccionados
function mostrar_checked($campo, $value) {
    if(isset($_POST[$campo])){ //si está rellena...
        if ($_POST[$campo] == $value) { //si estaba marcada la opcion...
            echo 'checked= "checked"';
        }
    }
}
    

//Función para mantener seleccionada la opción anterior de un select
function mostrar_selected($campo, $value) {
    if(isset($_POST[$campo])){ //si está rellena...
        if($_POST[$campo] == $value) { //si estaba marcada la opcion...
            echo 'selected="selected"';
        }
    }
}
    

//Funcion para mantener los input CHECKBOX seleccionados (Cuando el campo es de tipo array)
function mostrar_checked_array($campo, $value) {
    if (isset($_POST[$campo])) {//si está rellena...
        if (in_array($value, $_POST[$campo])) {//si está ese valor en el array, significa que estaba seleccionado
            echo 'checked = "checked"'; //lo seleccionamos otra vez
        }
    }
}



////////////////// FUNCIONES PARA VALIDAR LA INFORMACION DE UN FORMULARIO ////////////////////////

//Funcion para comprobar una string
//que no esté vacía | que sea un conjunto de caracteres | que tenga una min y max length
function validar_string($campo, $minlength, $maxlength) {
    if (empty($_POST[$campo])) {//valido que no esté vacía
        return 'El '. $campo .' no puede estar vacío.';
    } 
    elseif (!ctype_alpha($_POST[$campo])) {//valido que todos sus caracteres sean string
        return $campo .' inválido. Debe ser una cadena de texto.';
    } 
    elseif (strlen($_POST[$campo]) < $minlength) {//valido que su tamaño sea mayor a x
        return $campo .' inválido. No puedes introducir menos de '. $minlength .' carácteres.';        
    } 
    elseif (strlen($_POST[$campo]) > $maxlength) {//valido que su tamaño sea menor a x
        return $campo .' inválido. No puedes introducir más de '. $maxlength .' carácteres.';
    }
}

//Funcion para comprobar una string
//que no esté vacía | que sea un conjunto de caracteres (utilizando un patron)
function validar_string2($campo, $patron) {
    if (empty($_POST[$campo])) {//valido que no esté vacía
        return 'El '.$campo .' no puede estar vacío.';
    } 
    elseif (!preg_match($patron, $_POST[$campo])) {//valido que todos sus caracteres sean string
        return $campo.' inválido. Debe ser una cadena de texto, con una longitud de 3 a 20 caracteres.';
    } 
}


//Funcion para comprobar una string
//que no esté vacía | que sea un conjunto de caracteres (utilizando un patron, declarado dentro de la funcion)
function validar_string3($campo) {
    //implemento mi patron personalizado    
     $patron ="/^[a-zA-ZñáéíóúÁÉÍÓÚ ]{3,20}$/";
    if (empty($_POST[$campo])) {//valido que no esté vacía
       return 'El '.$campo.' no puede estar vacío.';
    } 
    elseif (!preg_match($patron, $_POST[$campo])) {//valido que todos sus caracteres sean string
        return $campo.' inválido. Debe ser una cadena de texto, con una longitud de 3 a 20 caracteres.';
    } 
}









//Funcion para comprobar una string
//que no esté vacía | que sea un conjunto de caracteres (utilizando un patron)
function validar_string4($campo, $titulo, $patron, $minlength, $maxlength) {
    if (empty($_POST[$campo])) {//valido que no esté vacía
        return $titulo .': no puede estar vacío.';
    } 
    elseif (!preg_match($patron, $_POST[$campo])) {//valido que todos sus caracteres sean string
        return $titulo.' inválido: Debe ser una cadena de texto, con una longitud de '. $minlength.' a '. $maxlength.' caracteres.';
    } 
}


    
