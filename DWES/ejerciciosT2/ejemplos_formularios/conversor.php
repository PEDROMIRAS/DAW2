<?php
include ('funcion_conversor.php');
    if($_POST){
        //Recogemos los valores del formulario
        $pies = $_POST['pies'];
        $pulgadas = $_POST['pulgadas'];
        try {
            //Comprobamos que los valores introducidos no esten vacios
            if(empty($pies) || empty($pulgadas)){
                throw new Exception('No has introducido ningun valor');
            }
            //Comprobamos que los valores introducidos son numéricos
            if(!is_numeric($pies) && !is_numeric($pulgadas)){
                throw new Exception('Error, uno de los valores introducidos no es numérico');   
            }
            //Llamamo a la funcion creada en otro script
            $cm = conversorPiesPulgadas($pies,$pulgadas);
            echo "<p>$pies pies y $pulgadas pulgadas son $cm cm.</p>";
        } //Capturamos las excepciones y mostramos el mensaje de error
        catch (Exception $e) {
            echo 'Excepción capturada: ',  $e->getMessage(), "\n";
            //Redirigimos al formulario después de 4 segundos
            header('Refresh: 4; url=conversor.html');
        }
    }
?>
