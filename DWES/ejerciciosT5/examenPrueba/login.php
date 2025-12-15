<?php
    session_start();
    include ('conexion.php');

    if($_POST){
        $user = $_POST['user'];
        $pass = $_POST['pass'];

        try {
            if(empty($user) || empty($pass)){
                $_SESSION['error_message'] = 'Las credenciales no pueden estar vacias.';
                header('Location: index.php');
                exit();
            }else{
                $sql = 'SELECT nombre, pass FROM bibliotecario WHERE nombre=:user AND pass=:pass';
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':user',$user);
                $stmt->bindParam(':pass',$pass);
                $stmt->execute();

                if($stmt->rowCount() > 0){
                    $_SESSION['bibliotecario'] = $user;
                    header('Location: pag_biblio.php');
                    exit();
                }else{
                   $sql = 'SELECT nombre, pass FROM cliente WHERE nombre=:user AND pass=:pass';
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':user',$user);
                    $stmt->bindParam(':pass',$pass);
                    $stmt->execute(); 

                    if($stmt->rowCount() > 0){
                        $_SESSION['cliente'] = $user;
                        header('Location: pag_cliente.php');
                        exit();
                    }else{
                        $_SESSION['error_message'] = 'Las credenciales no pueden estar vacias.';
                        header('Location: index.php');
                        exit();
                    }
                }
            }
        } catch (Exception $e) {
            $e->getMessage();
            header('Refresh:3, url = index.php');
        }
    }

?>