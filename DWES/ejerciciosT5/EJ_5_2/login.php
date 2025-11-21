<?php
    session_start();
    include('conexion.php');
    
    if($_POST){
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];

        if(empty($nombre) || empty($email)){
            $_SESSION['error_message'] = 'Por favor, complete todos los campos.';
            header('Location: index.php');
            exit();
        }else{
            try {

                $consulta = "SELECT * FROM fotografo WHERE nombre=:nombre AND email=:email";
                $sql = $conn->prepare($consulta);
                $sql->bindParam(":nombre", $nombre);
                $sql->bindParam(":email", $email);
                $sql->execute();

                if($sql->rowCount() > 0){

                    $_SESSION['fotoses'] = $nombre;
                    header('Location: fotografo.php');
                    exit();

                }else{

                    $consulta = "SELECT * FROM cliente WHERE nombre=:nombre AND email=:email";
                    $sql = $conn->prepare($consulta);
                    $sql->bindParam(":nombre", $nombre);
                    $sql->bindParam(":email", $email);
                    $sql->execute();

                    if($sql->rowCount() > 0){

                        $_SESSION['clientses'] = $nombre;
                        header('Location: cliente.php');
                        exit();

                    }else{
                        $_SESSION['error_message'] = 'Credenciales incorrectas. Inténtelo de nuevo.';
                        header('Location: index.php');
                        exit();
                    }
                }

            }catch (PDOException $e) {

                echo $e->getMessage();
                exit;
            }
        }
    }
?>