<?php
    include('guarda_prefs.php');
    // Eliminar cookies estableciendo tiempo de expiración en el pasado
    setcookie("nombreusu", $_COOKIE['nombreusu'], time() - 3600, "/");
    setcookie("colorusu", $_COOKIE['colorusu'], time() - 3600, "/");

    // Redirigir a la página principal
    header("Location: index.php");
    exit;
?>
