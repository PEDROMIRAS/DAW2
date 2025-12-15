<?php
    session_start();
    include('conexion.php');

    if ($_POST) {
        $isbn = $_POST['isbn'];
        $opcion = $_POST['volver'] ?? $_POST['reservar'] ?? $_POST['devolver'] ?? '';

        try {
                switch ($opcion) {
                    case 'Volver':
                        session_destroy();
                        header('Location: index.php');
                        exit();
                        break;
                    
                    case 'Reservar':
                         if (empty($isbn)) {
                            throw new Exception("El campo ISBN no puede estar vacío.");
                         }else{
                            try{
                                    $sql = "SELECT reservado from libro WHERE isbn=:isbn AND reservado=1";
                                    $stmt= $conn->prepare($sql);
                                    $stmt->bindParam(':isbn',$isbn);
                                    $stmt->execute();

                                    if ($stmt->rowCount()>0) {
                                        throw new Exception("El libro ya está reservado.");
                                    }else{
                                        $sql = "UPDATE libro SET reservado = 1 WHERE isbn=:isbn";
                                        $stmt= $conn->prepare($sql);
                                        $stmt->bindParam(':isbn',$isbn);
                                        $stmt->execute();
                                        if($stmt->rowCount()>0){
                                            header('Location: pag_cliente.php');
                                            exit();
                                        }
                                    }
                                    
                            }catch(PDOException $e){
                                    echo $e->getMessage();
                                    header("Refresh:4, url = pag_cliente.php");
                            }
                        }
                        break;
                    case 'Devolver':
                         if (empty($isbn)) {
                            throw new Exception("El campo ISBN no puede estar vacío.");
                        }else{
                            try{
                                        $sql = "UPDATE libro SET reservado = 0 WHERE isbn=:isbn";
                                        $stmt= $conn->prepare($sql);
                                        $stmt->bindParam(':isbn',$isbn);
                                        $stmt->execute();

                                        if($stmt->rowCount()>0){
                                            header('Location: pag_cliente.php');
                                            exit();
                                        }

                            }catch(PDOException $e){
                                    echo $e->getMessage();
                                    header("Refresh:4, url = pag_cliente.php");
                            }
                        }
                        break;    
                
            }
        } catch (Exception $e) {
            echo $e->getMessage();
            header("Refresh:4, url = pag_cliente.php");
        }
        
    }
?>