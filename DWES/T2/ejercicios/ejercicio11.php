<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJercicio 11</title>
</head>
<body>
<?php 
    // Función que aplica un descuento y guarda el resultado en la variable pasada por referencia
    function calculaDescuento($precio, $descuento = 0, &$resultado){
        $resultado = $precio - (($precio * $descuento) / 100);
    }
    $precioDescuento = 0; // variable donde se guardará el resultado
    calculaDescuento(250, 10, $precioDescuento); // llamada a la función
    echo "El precio con descuento es: " . $precioDescuento; // muestra 225
?>
</body>
</html>