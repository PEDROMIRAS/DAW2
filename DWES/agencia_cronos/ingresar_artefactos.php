<?php
session_start();
include('funciones.php');
include('conexion.php');

if($_POST){

    $artefacto = [
        'nombre_artefacto' => $_POST['nombre'],
        'era_origen' => $_POST['era_origen'],
        'localizacion_actual' => $_POST['localizacion_actual'],
        'valor_estimado' => $_POST['valor_estimado']
    ];

    // Validación de campos
    if(!validarArtefacto($artefacto)){
        $_SESSION['invalid_artifact'] = "Error: El nombre o la localización están vacíos.";
        header('Location: index_artefactos.php');
        exit();
    }
    try {
        // Insert
        $sql = "INSERT INTO artefactos(nombre_artefacto, era_origen, localizacion_actual, valor_estimado)
                VALUES(:nombre_artefacto, :era_origen, :localizacion_actual, :valor_estimado)";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre_artefacto', $artefacto['nombre_artefacto']);
        $stmt->bindParam(':era_origen', $artefacto['era_origen']);
        $stmt->bindParam(':localizacion_actual', $artefacto['localizacion_actual']);
        $stmt->bindParam(':valor_estimado', $artefacto['valor_estimado']);


        if($stmt->execute()){
            $_SESSION['valid_artifact'] = "Artefacto insertado correctamente.";
            header('Location: index_artefactos.php');
            exit();
        } else {
            $_SESSION['invalid_artifact'] = "Error al insertar.";
            header('Location: index_artefactos.php');
            exit();
        }
    } catch (PDOException $e) {
        echo $e->getMessage();
        header('refresh: 5, url = index_artefactos.php');
        exit();
    }
    
}
?>
