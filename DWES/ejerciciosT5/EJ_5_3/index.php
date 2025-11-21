<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <style>
        div{
            display:flex;
            justify-content:center;
        }
        form{
            width: 250px;
            border: 1px solid black;
            align-items:center;
            padding: 10px;
        }
        form h2{
            text-align:center;
            padding: 0 0 10px 0;
        }
        form input[type='submit']{
            
        }
    </style>
</head>
<body>
    <div>
        <form action="login.php" method="post">
            <h2>Login</h2>
            <label for="user">Nombre: </label>
            <input type="text" name = "user">
            <br><br>
            <label for="pwd">Contraseña: </label>
            <input type="text" name = "pwd">
            <br><br>
            <input type="submit" value="Enviar" name ="enviar">
        </form>
    </div>
    <?php
        if (isset($_SESSION['error_message'])) {
            echo '<p style="color:red;">' . $_SESSION['error_message'] . '</p>';
            unset($_SESSION['error_message']);
        }
    ?>
</body>
</html>