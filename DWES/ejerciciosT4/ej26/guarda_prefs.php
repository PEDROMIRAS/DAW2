<?php
    if ($_POST) {
        $nombreusu = $_POST['nombre'];
        $colorusu = $_POST['color'];

        try {
            if (empty($nombreusu) || empty($colorusu)) {
                throw new Exception("Los campos no pueden estar vacíos");
            }

            // Guardar cookies con duración de 5 minutos
            setcookie("nombreusu", $nombreusu, time() + 60 * 5, "/");
            setcookie("colorusu", $colorusu, time() + 60 * 5, "/");

            // Redirigir a index.php
            header("Location: index.php");
            exit;
        } catch (Exception $e) {
            $mensajeError = $e->getMessage();
        }
    }
?>
