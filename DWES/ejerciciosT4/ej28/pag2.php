<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina 2</title>
</head>
<body>
    <?php
        session_start();
        if(!isset($_SESSION['loginusu'])){
            header('Location: login.php');
            exit;
        }
        require('cabecera.php');
    ?>
    <p>Pagina 2</p>
</body>
</html>