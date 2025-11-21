<?php
    session_start();
    include('conexion.php');
    $user = $_SESSION['aluses'];
    $votoName = $_POST['nombre'];

    if($_POST){
        try {
            if(empty($votoName)){
                throw new Exception('Debe ingresar un nombre.');
            }else{
                if($user === $votoName){

                    throw new Exception('No puede votar por sí mismo.');
                    
                }else{
                    try{

                        $sql = 'SELECT voto FROM alumnos WHERE user=:user AND voto = 1';
                        $stmt = $conn->prepare($sql);
                        $stmt->bindValue(':user', $user);
                        $stmt->execute();

                        if($stmt->rowCount() > 0){

                            throw new Exception('Ya ha votado.');

                        }else{

                            $sql = 'UPDATE alumnos SET nVotos = nVotos+1 WHERE user=:votoName';
                            $stmt = $conn->prepare($sql);
                            $stmt->bindParam(':votoName', $votoName);
                            $stmt->execute();

                            if($stmt->rowCount()>0){

                                $sql = 'UPDATE alumnos SET voto = 1 WHERE user=:user';
                                $stmt = $conn->prepare($sql);
                                $stmt->bindParam(':user', $user);
                                $stmt->execute();

                                if ($stmt->rowCount()>0) {
                                    header('Location: alumno.php');
                                    exit();
                                }else{
                                    throw new Exception('Error al actualizar si se ha votado.');
                                }
                            }else{
                                throw new Exception('Error al actualizar a quien se ha votado.');
                            }
                        }
                    }catch(PDOException $e){
                        echo $e->getMessage();
                    }
                }
            }
        } catch (Exception $e) {
            echo $e->getMessage();
            header('Refresh: 3, url=alumno.php');
            exit();
        }
    }
?>