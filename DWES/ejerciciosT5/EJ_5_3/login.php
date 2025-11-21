<?php
    session_start();
    include('conexion.php');

    if($_POST){
        $user = $_POST['user'];
        $pwd = $_POST['pwd'];

        if(empty($user) || empty($pwd)){
            $_SESSION['error_message'] = 'Rellene todos los campos.';
            header('Location: index.php');
            exit();
        }else{
            try {
                $sql = $conn->prepare('SELECT user, pwd FROM alumnos WHERE user=:user AND pwd=:pwd');
                $sql->bindParam(':user', $user);
                $sql->bindParam(':pwd', $pwd);
                $sql->execute();

                if($sql->rowCount()>0){
                    $_SESSION['aluses'] = $user;
                    header('Location: alumno.php');
                    exit();
                }else{
                    $_SESSION['error_message'] = 'Credenciales incorrectas. Inténtelo de nuevo.';
                    header('Location: index.php');
                    exit();
                }
            } catch (PDOException $e) {
                echo $e->getMessage();
                header('Refresh: 3, url = index.php');
            }
        }
    }
?>