<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <?php
        // Comprobar si existen las cookies
        if (isset($_COOKIE['nombreusu']) && isset($_COOKIE['colorusu'])) {
            $nombre = $_COOKIE['nombreusu'];
            $color = $_COOKIE['colorusu'];
            
            // Aplicar color y mensaje
            echo "<style>body { background-color: $color; }</style>";
            echo "<h1>Bienvenido, $nombre</h1>";
            // Mostrar enlace para borrar preferencias solo si existen cookies
            echo '<a href="borrar_prefs.php">Borrar preferencias</a><br>';
        } else {
            // Sin cookies: fondo blanco
            echo "<style>body { background-color: white; }</style>";
            echo "<h1>Página de inicio</h1>";
        }
    ?>
        <a href="preferencias.php">Preferencias</a>
</body>
</html>