<?php
    session_start();
    if(isset($_SESSION['loginusu'])){
        session_destroy();
        header('Location:login.php');
    }
?>