<?php
    session_start();
    include('conexion.php');

    if($_POST){
        $usuario = $_POST['user'];
        $pass= $_POST['pass'];
        $rol = $_POST['rol'];
        $option = $_POST['insertar'] ?? $_POST['modificar'] ?? $_POST['eliminar'] ?? $_POST['volver'] ?? '';

        try {

            if($option === 'Volver'){
                session_destroy();
                header('Location: index.php');
                exit();
            }

            if($option == 'Insertar'){
                if(empty($usuario) || empty($pass) || empty($rol)){
                    throw new Exception("Todos los campos son obligatorios para insertar un usuario.");
                }
                try {
                    $sql = $conn->prepare("INSERT INTO personal (user, pw, rol) VALUES (:user, :pw, :rol)");
                    $sql->bindParam(':user', $usuario);
                    $sql->bindParam(':pw', $pass);
                    $sql->bindParam(':rol', $rol);
                    $sql->execute();

                    if($sql->rowCount() > 0){
                        header("Location: profesor.php");
                        exit();
                    }else{
                        echo "No se ha podido insertar el usuario.";
                        header("refresh:3;url=profesor.php");
                    }

                } catch (PDOException $e) {
                    $e->getMessage();
                    exit();
                }


            }elseif($option == 'Modificar'){
                if(empty($usuario) || empty($pass) || empty($rol)){
                    throw new Exception("Todos los campos son obligatorios para modificar un usuario.");
                }
                try {
                    $sql = $conn->prepare("UPDATE personal SET pw=:pw, rol=:rol WHERE user=:user");
                    $sql->bindParam(':user',$usuario);
                    $sql->bindParam(':pw',$pass);
                    $sql->bindParam(':rol',$rol);
                    $sql->execute();
                    
                    if($sql->rowCount() > 0){
                        header("Location: profesor.php");
                        exit();
                    }else{
                        echo "No se ha podido modificar el usuario.";
                        header("refresh:3;url=profesor.php");
                    }
                } catch (PDOException $e) {
                    $e->getMessage();
                    exit();
                }
                
            }elseif($option == 'Eliminar'){
                if(empty($usuario)){
                    throw new Exception("El campo usuario es obligatorio para eliminar un usuario.");
                }elseif (!empty($pass) || !empty($rol)) {
                    throw new Exception("Para eliminar un usuario, solo debe rellenar el campo usuario. Los demás deben estar vacíos.");
                }
                try {
                    $sql = $conn->prepare("DELETE FROM personal WHERE user=:user");
                    $sql->bindParam(":user",$usuario);
                    $sql->execute();

                    if($sql->rowCount() > 0){
                        header("Location: profesor.php");
                        exit();
                    }else{
                        echo "No se ha podido eliminar el usuario.";
                        header("refresh:3;url=profesor.php");
                    }
                } catch (PDOException $e) {
                    $e->getMessage();
                    exit();
                }
            }
        } catch (Exception $e) {
            echo $e->getMessage();
            header("refresh:3;url=profesor.php");
        }
    }
?>