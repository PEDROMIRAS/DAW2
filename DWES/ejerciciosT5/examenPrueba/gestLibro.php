<?php
    session_start();
    include('conexion.php');

    if ($_POST) {
        $isbn = $_POST['isbn'];
        $titulo = $_POST['titulo'];
        $autor = $_POST['autor'];
        $editorial = $_POST['editorial'];
        $reservado = trim($_POST['reservado']);      // quitar espacios
        $reservado = ($reservado === '' ? 0 : (int)$reservado);
        $opcion = $_POST['volver'] ?? $_POST['nuevo'] ?? $_POST['eliminar'] ?? $_POST['modificar'] ?? '';

        try {
                switch ($opcion) {
                    case 'Volver':
                        session_destroy();
                        header('Location: index.php');
                        exit();
                        break;
                    
                    case 'Nuevo':
                        if (empty($isbn) || empty($titulo) || empty($autor) || empty($editorial)){
                            throw new Exception("Todos los campos deben estar rellenos A.");
                        }else{
                                    $sql = "INSERT INTO libro (isbn,titulo,autor,editorial,reservado) VALUES(:isbn, :titulo, :autor, :editorial, :reservado)";
                                    $stmt= $conn->prepare($sql);
                                    $stmt->bindParam(':isbn',$isbn);
                                    $stmt->bindParam(':titulo',$titulo);
                                    $stmt->bindParam(':autor',$autor);
                                    $stmt->bindParam(':editorial',$editorial);
                                    $stmt->bindParam(':reservado', $reservado);
                                    $stmt->execute();

                                    if($stmt->rowCount()>0){
                                            header('Location: pag_biblio.php');
                                            exit();
                                    }else{
                                        throw new Exception("Error al insertar el libro");
                                        
                                    }
                                    
                        }
                        break;
                    case 'Eliminar':
                        if (empty($isbn)) {
                            throw new Exception("El campo ISBN no puede estar vacío.");
                        }else{
                            
                                $sql = "DELETE FROM libro WHERE isbn=:isbn";
                                $stmt= $conn->prepare($sql);
                                $stmt->bindParam(':isbn',$isbn);
                                $stmt->execute();

                                if($stmt->rowCount()>0){
                                    header('Location: pag_biblio.php');
                                    exit();
                                }else{
                                    throw new Exception("Error al eliminar el libro");
                                        
                                }
                        }
                        break;    
                    case 'Modificar':
                        if(empty($isbn) || empty($titulo) || empty($autor) || empty($editorial)){
                            throw new Exception("Todos los campos deben estar rellenos.");
                        }else{                           
                            $sql = "UPDATE libro SET titulo=:titulo, autor=:autor, editorial=:editorial, reservado=:reservado WHERE isbn=:isbn";
                            $stmt = $conn->prepare($sql);
                            $stmt->bindParam(':isbn',$isbn);
                            $stmt->bindParam(':titulo',$titulo);
                            $stmt->bindParam(':autor',$autor);
                            $stmt->bindParam(':editorial',$editorial);
                            $stmt->bindParam(':reservado',$reservado);
                            $stmt->execute();
                            header('Location: pag_biblio.php');
                            exit();       
                        }
                        break;
            }
        } catch (Exception $e) {
            echo $e->getMessage();
            header("Refresh:4, url = pag_biblio.php");
        }
        
    }
?>