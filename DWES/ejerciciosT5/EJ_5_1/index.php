<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inicio de Sesión</title>
    <style>
        .form-container {
            max-width: 250px;
            margin: 0 auto;
            padding: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f8f8f8;
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
            <label for="usuario">Usuario:</label>
            <input type="text" id="user" name="user"><br><br>
            <label for="contraseña">Contraseña:</label>
            <input type="password" id="pass" name="pass"><br><br>
            <label for="rol">Rol:</label>
            <select name="rol" id="rol">
                <option value="" selected disabled hidden>--Seleccione una opción--</option>
                <option value="estudiante">Estudiante</option>
                <option value="profesor">Profesor</option>
                <option value="delegado">Delegado</option>
            </select><br><br>
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