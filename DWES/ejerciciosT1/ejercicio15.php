<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $datos = "datos.txt";
        $datos_copia = "copia_datos.txt";
            function copiarDatos($origen, $copia){
                if (file_exists($origen)) {
                    $archivo = file_get_contents($origen);
                    if (file_put_contents($copia, $archivo)) {
                        echo "Copia realizada con éxito.";
                    } else {
                        echo "Error al crear copia.";
                    }
                } else {
                    echo "El archivo no existe.";
                }
            }
        copiarDatos($datos,$datos_copia);
    ?>
</body>
</html>