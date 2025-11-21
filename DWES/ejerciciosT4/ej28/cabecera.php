<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cabecera</title>
</head>
<body>
    <?php
        session_start();
    ?>
    <h1>Cabecera</h1>
    <hr>
    <?php
        if(!isset($_SESSION['loginusu'])){
            header('Location: login.php');
            exit;
        }else{
            echo "<a href='index.php'>Inicio</a>   <a href='pag1.php'>Página 1</a>   <a href='pag2.php'>Página 2</a>   <a href='cerrarSes.php'>Cerrar sesión</a>";
        }
    ?>
</body>
</html>