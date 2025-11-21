<?php 
    session_start();
    include('conexion.php');

    $titulo = $_POST['titulo'];
    $tematica = $_POST['tematica'];
    $size = $_POST['size'];
    $option = $_POST['volver'] ?? $_POST['nuevo'] ?? $_POST['modificar'] ?? $_POST['eliminar'] ?? '';

    if($_POST){

        try {

            switch ($option) {
                case 'Volver':
                    session_destroy();
                    header('Location: index.php');
                    break;
                case 'Nuevo':
                    if (!empty($titulo) && !empty($tematica) && !empty($size)) {
                        try {
                            $sql = $conn->prepare('INSERT INTO fotos(titulo,tematica,size) VALUES(:titulo,:tematica,:size)');
                            $sql -> bindParam(":titulo", $titulo);
                            $sql -> bindParam(":tematica", $tematica);
                            $sql -> bindParam(":size", $size);
                            $sql -> execute();

                            if($sql->rowCount() > 0){
                                header('Location: fotografo.php');
                            }else{
                                throw new Exception("Error al insertar nueva foto.");
                            }
                        } catch (PDOException $e) {
                            echo $e->getMessage();
                        }
                    }else{
                        throw new Exception("Para insertar nueva foto rellene todos los campos.");
                    }
                    break;
                case 'Modificar':
                    if (!empty($titulo) && !empty($tematica) && !empty($size)) {
                        try {
                            $sql = $conn->prepare('UPDATE fotos SET tematica=:tematica, size=:size WHERE titulo=:titulo');
                            $sql -> bindParam(":titulo", $titulo);
                            $sql -> bindParam(":tematica", $tematica);
                            $sql -> bindParam(":size", $size);
                            $sql -> execute();

                            if($sql->rowCount() > 0){
                                header('Location: fotografo.php');
                            }else{
                                throw new Exception("Error al modificar una foto.");
                            }
                        } catch (PDOException $e) {
                            echo $e->getMessage();
                        }
                    }else{
                        throw new Exception("Para modificar una foto rellene todos los campos.");
                    }
                    break;
                case 'Eliminar':
                    if(empty($titulo)){
                        throw new Exception('Campo titulo debe estar relleno para eliminar');
                    }elseif(!empty($tematica) || !empty($size)){
                        throw new Exception('Campos tematica y size deben estar vacíos para eliminar');
                    }
                    try {
                        $sql = $conn -> prepare('DELETE FROM fotos WHERE titulo =:titulo');
                        $sql->bindParam(':titulo', $titulo);
                        $sql->execute();

                        if($sql->rowCount() > 0){
                            header('Location: fotografo.php');
                        }else{
                            throw new Exception("Error al eliminar la foto.");
                        }
                    } catch (PDOException $e) {
                        echo $e->getMessage();
                        header('Refresh: 3, url = fotografo.php');
                    }
                    break;
            }
            
        } catch (Exception $e) {
            echo $e->getMessage();
            header('Refresh: 3, url = fotografo.php');
        }
    }
?>