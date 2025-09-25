<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    //Definir la variable PI para calcular el area del ciruclo, utilizar 'number_format' para formatear a los decimales deseados
        $radio = 25;
        define('PI', 3.1416);
        $area = PI*pow($radio, 2);
        $textoResultado = "El área calculada del círculo es: ".number_format($area,2);
        echo "$textoResultado";
    ?>
    <br>
    <?php
    //Utilizar la funcion 'strtoupper'
        $textoResultadoMayus = strtoupper($textoResultado);
        echo $textoResultadoMayus;
    ?>
    <br>
    <?php
    //Modificar un string con la funcion 'str_replace'
        $textoResultadoModificado = str_replace('calculada', 'obtenida', $textoResultado);
        echo $textoResultadoModificado;
    ?>
    <br>
    <?php
    //Averiguar la longitud del textoResultado con 'strlen'
        echo "La longitud del texto es: ".strlen($textoResultadoModificado);
    ?>
    <br>
    <?php
    //Averigurar la posicion de una palabra en concreto con 'strpos'
        echo "La posicion de 'buenas' es: ".strpos($textoResultadoModificado, 'círculo');
    ?>
    <br>
    <?php
    //Uso de la funcion 'explode'
    $numeros = "1,2,3,4,5";
    $operacion = explode(',',$numeros);
    $textoOperacion = implode('+',$operacion);

    $resultado = 0;
    foreach($operacion as $numero){
        $resultado += $numero;
    }
    echo $textoOperacion.' = '.$resultado ;
    ?>
</body>
</html>