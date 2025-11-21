<?php
    //Variables recogidas en el formulario
    if($_POST){ 
        $n = $_POST['nVeces'];
        //Controlamos que no haya un valor vacio y sea numerica la entrada por teclado del cliente
        try {
            if(empty($n)){
                throw new Exception("El formulario esta vacio...");
            }
            if(!is_numeric($n)){
                throw new Exception("El dato introducido no es numerico...");
            }
            if($n < 4 || $n > 7){
                throw new Exception("Tira de 4 a 7 veces");
            }
                for($i = 0; $i < $n ; $i++){
                    $numero = rand(1,6);
                    echo "Has sacado: $numero";
                    echo "<br>";
                }
        }catch (Exception $e) {
            echo "Excepcion capturada ", $e->getMessage();
            //Recargamos el formulario si salta una excepcion
            header('refresh: 5; url=form_SM.html');
        }
        
    }
?>