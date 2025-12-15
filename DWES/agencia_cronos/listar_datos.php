<?php
    include('conexion.php');
    session_start();

    $sql = 'SELECT * FROM artefactos ORDER BY id ASC';
    $stmt = $conn -> prepare($sql);
    $stmt->execute();
    $artefactos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($artefactos) > 0 ) {
        // Guardar resultados en sesión para pasar a la visualización
        $_SESSION['artefactos'] = $artefactos;
        header("Location: visualizar_artefactos.php");
        exit();
                    
    }else{
        $_SESSION['empty_message'] = "No hay registros activos";
        header("Location: visualizar_artefactos.php");
        exit();
    }
                
?>