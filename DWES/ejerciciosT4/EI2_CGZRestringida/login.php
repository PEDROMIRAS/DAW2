<?php
session_start();

include('conexion.php');

// Solo procesa si los datos fueron enviados y no están vacíos
if (!empty($_POST['user']) && !empty($_POST['pass']) && !empty($_POST['rol'])) {

    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $rol  = $_POST['rol'];

    try {
        $consulta = "SELECT * FROM personal WHERE user=:user AND pw=:pw AND rol=:rol";
        $sql = $conn->prepare($consulta);
        $sql->bindParam(":user", $user);
        $sql->bindParam(":pw", $pass);
        $sql->bindParam(":rol", $rol);
        $sql->execute();

        $_SESSION['rol'] = $rol;

    } catch (PDOException $e) {
        echo $e->getMessage();
        exit;
    }

    if ($sql->rowCount() > 0) {
        if ($rol == 'profesor') {
            $_SESSION['loginprof'] = $user;
            header('Location: profesor.php');
            exit();
        } elseif ($rol == 'estudiante') {
            $_SESSION['loginestu'] = $user;
            header('Location: student.php');
            exit();
        } elseif ($rol == 'delegado') {
            $_SESSION['logindele'] = $user;
            header('Location: delegado.php');
            exit();
        }
    } else {
        $_SESSION['error_message'] = 'Usuario o contraseña incorrectos.';
        header('Location: index.php');
        exit();
    }

} else {
    $_SESSION['error_message'] = 'Por favor, complete todos los campos.';
    header('Location: index.php');
    exit();
}
?>