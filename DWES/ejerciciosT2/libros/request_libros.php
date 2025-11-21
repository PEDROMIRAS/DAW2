<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Resultados del formulario de búsqueda</h1>
    <p>Estos son los datos introducidos:</p>
    <?php
        //Recoger los datos del formulario
        $textoBusqueda = $_POST['texto'];
        $opcionBusqueda = $_POST['opcion'];
        $tipoLibro = $_POST['variedadLibros'];
        
        //Mostrar los datos recogidos
        echo "<ul>";
        echo "<li>Texto de búsqueda: ".$textoBusqueda."</li>";
        echo "<li>Buscar en: ".$opcionBusqueda."</li>";
        echo "<li>Género: ".$tipoLibro."</li>";
        echo "</ul>";
    ?>
    
</body>
</html>