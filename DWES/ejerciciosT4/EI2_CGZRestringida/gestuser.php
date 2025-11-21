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
                exit;
            }

            if (empty($usuario) && empty($pass) && empty($rol)) {
                throw new Exception("Todos los campos son obligatorios.");
            }

            if($option == 'Insertar'){
                if(empty($usuario) || empty($pass) || empty($rol)){
                    throw new Exception("Todos los campos son obligatorios para insertar un usuario.");
                }
                try {
                    //code...
                } catch (PDOException $e) {
                    //throw $th;
                }

            }elseif($option == 'Modificar'){
                if(empty($usuario) || empty($pass) || empty($rol)){
                    throw new Exception("Todos los campos son obligatorios para insertar un usuario.");
                }
                try {
                    //code...
                } catch (PDOException $e) {
                    //throw $th;
                }
            }elseif($option == 'Eliminar'){
                if(empty($usuario)){
                    throw new Exception("El campo usuario es obligatorio para eliminar un usuario.");
                }
                try {
                    //code...
                } catch (PDOException $e) {
                    //throw $th;
                }
            }
        } catch (Exception $e) {
            echo $e->getMessage();
            header("refresh:3;url=profesor.php");
        }
    }
?>