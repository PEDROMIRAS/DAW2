<?php
    include('funcion_SM.php');
    //Variables recogidas en el formulario
    $segundos = $_POST['segundos'];
    if($_POST){
        //Controlamos que no haya un valor vacio y sea numerica la entrada por teclado del cliente
        try {
            if(empty($segundos)){
                throw new Exception("El formulario esta vacio...");
            }
            if(!is_numeric($segundos)){
                throw new Exception("El dato introducido no es numerico...");
            }
                $tiempo = convertirMin($segundos);
                $min = $tiempo[0];
                $seg = $tiempo[1];
                echo "<p>$segundos segundos son $min y $seg segundos </p>";
        }catch (Exception $e) {
            echo "Excepcion capturada ", $e->getMessage();
            //Recargamos el formulario si salta una excepcion
            header('refresh: 5; url=form_SM.html');
        }
        
    }
?>