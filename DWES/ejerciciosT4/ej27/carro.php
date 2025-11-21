<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carro</title>
</head>
<body>
    <?php
        session_start();
    ?>
    <h3>Listado de articulos</h3>
    <ul>
        <li><a href="carro.php?precio=40">Zapatillas Reebok(40 euros)</a></li>
        <li><a href="carro.php?precio=15">Sudadera Domyos(15 euros)</a></li>
        <li><a href="carro.php?precio=50">Pala de pádek Vairo(50 euros)</a></li>
        <li><a href="carro.php?precio=20">Pelota de baloncesto Molten(20 euros)</a></li>
    </ul>
    <br>
    <a href="carro.php?vaciar=1">Vaciar cesta</a>
    <br>
    <?php
        session_start();

        if (isset($_GET['vaciar'])) {
            session_destroy();
        }
        if (isset($_GET['precio'])) {
            $total = $_SESSION['total'] += $_GET['precio'];
            echo "<br>Total: $total euros";
        }
        
    ?>
</body>
</html>