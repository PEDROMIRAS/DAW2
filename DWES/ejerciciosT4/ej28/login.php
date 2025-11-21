<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <?php
        session_start();
        // Si ya hay sesión activa, redirige al index
        if (isset($_SESSION['loginusu'])) {
            header("Location: index.php");
            exit;
        }
    ?>
    <h1>Login</h1>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <button type="submit">Login</button>
    </form>
    <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $username = trim($_POST['username']);
            $password = trim($_POST['password']);
            try{
                if (empty($username) || empty($password)) {
                    throw new Exception("<br>Credenciales vacias");
                }else{
                    function comprobarLogin($username, $password){
                        $credenciales = file_get_contents('usuarios.txt');
                        if(str_contains($credenciales, "$username:$password")) {
                            $_SESSION['loginusu'] = $username;
                            header('Location: index.php');
                        }else{
                            echo "<p style='color:red;'>Usuario o contraseña incorrectos.</p>";
                        }
                    }
                comprobarLogin($username, $password);
                exit; 
                }
            }catch(Exception $e){
                echo $e->getMessage();
                exit;
            }
        }

    ?>
</body>
</html>