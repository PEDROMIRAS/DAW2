<?php
    session_start();
    /* Verificar si el usuario ya ha iniciado sesión
    if (isset($_SESSION['fotoses'])) {
        header('Location: fotografo.php');
        exit();
    }elseif (isset($_SESSION['clientses'])) {
        header('Location: cliente.php');
        exit();
    }*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <style>
        .form-container {
            max-width: 250px;
            margin: 0 auto;
            padding: 30px;
            border: 1px solid #ccc;
        }
        .form-container input[type="submit"]{
            display: block;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Inicio de Sesión</h1>
        <p>Por favor, ingrese sus credenciales:</p>
        <form action="login.php" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>
            <input type="submit" value="Acceder">
        </form>
    
    <?php
        if (isset($_SESSION['error_message'])) {
            echo '<p style="color:red;">' . $_SESSION['error_message'] . '</p>';
            unset($_SESSION['error_message']);
        }
    ?>
    </div>
</body>
</html>