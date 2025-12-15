<?php
    session_start();
    include('conexion.php');

    if($_POST){
        $id = $_POST['id'];
        $localizacion_actual = $_POST['localizacion_actual'];
        $valor_estimado = $_POST['valor_estimado'];

        if(empty($id) || empty($localizacion_actual) || empty($valor_estimado)){
            $_SESSION['invalid_artifact'] = 'Los campos no pueden estar vacíos';
            header('Location: modificar_artefactos.php');
            exit();
        }else{
            try {
                $sql = "UPDATE artefactos SET localizacion_actual=:localizacion_actual, 
                    valor_estimado=:valor_estimado WHERE id=:id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':localizacion_actual',$localizacion_actual);
                $stmt->bindParam(':valor_estimado',$valor_estimado);
                $stmt->bindParam(':id',$id);
                $stmt->execute();

                if($stmt->rowCount()>0){
                    header("Location: listar_datos.php");
                    exit();
                }else{
                    throw new Exception("Error al modificar el artefacto.");
                }
            } catch (PDOException $e) {
                echo $e->getMessage();
                header("Refresh:3, url=modificar_artefactos.php");
            }
        }
    }
?>