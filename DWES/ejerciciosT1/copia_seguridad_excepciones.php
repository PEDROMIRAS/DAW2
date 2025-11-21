<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Excepciones</title>
</head>
<body>
    <?php
        try {
            if (!file_exists("dato.txt")) {
                throw new Exception("El archivo no existe.");
            }
            $contenido = file_exists("datos.txt"); // aquí sí abrimos el archivo
            file_put_contents("copia_datos.txt",$datos);
        } catch (Exception $e) {
            echo "Ha habido un error: " . $e->getMessage();
        }
    ?>
</body>
</html>