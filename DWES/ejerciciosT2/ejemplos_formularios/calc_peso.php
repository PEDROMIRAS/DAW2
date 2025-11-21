<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculo peso</title>
</head>
<body>
    <?php
        include ('funcion_imc.php');
    //Validamos si se ha enviado el formulario
        if($_POST){
            $peso= $_POST['peso'];
            $altura= $_POST['altura'];
            try{
                //Comprobamos que los campos no estén vacíos y que sean numéricos
                if(empty($peso) || empty($altura)){
                    throw new Exception("Los campos no pueden estar vacíos");
                }
                //Comprobamos que los valores sean numéricos
                if(!is_numeric($peso) || !is_numeric($altura)){
                throw new Exception("Los valores deben ser numéricos");
                }
                $imc = calcularIMC($peso, $altura);
                echo "<p>Con un peso de " .$peso. " y una altura de ". $altura . " tu índice de masa corporal es: " . round($imc, 2) ."</p>";
            }
                //Capturamos las excepciones y mostramos el mensaje de error
            catch (Exception $e) {
                echo 'Excepción capturada: ',  $e->getMessage(), "\n";
                //Redirigimos al formulario después de 4 segundos
                header("Refresh: 4; url=form_peso.html");
            }
        }
    ?>
</body>
</html>