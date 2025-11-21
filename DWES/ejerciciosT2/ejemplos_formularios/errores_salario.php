<?php
include('func_salario.php');
    if($_POST){
        try {
            $nombre = $_POST['nombre'];
            $apellido = $_POST['apellido'];
            $edad = $_POST['edad'];
            $salario = $_POST['salario'];

            if(empty($nombre)||empty($apellido)||empty($edad)||empty($salario)){
                throw new Exception("Uno de los valores introducidos está vacío");
            }
            if(is_numeric($nombre) || is_numeric($apellido) || !is_numeric($edad) || !is_numeric($salario)){
                throw new Exception("Error de formato en alguno de los parametros.");
            }
            $salario2 = calcularSalario($edad,$salario);
            echo "$nombre $apellido, tu salario será de $salario2.";
        } catch (Exception $e) {
            echo "Error captado: " . $e->getMessage();
            header('refresh:4; url=form_salario.html');
        }
        
    }
?>