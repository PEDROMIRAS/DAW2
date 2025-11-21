<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form name="Mantenimiento" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
    <table border="1" cellpadding="5" cellspacing="0">
    <tr><td colspan="4"><label>Listado de Usuarios </label></td></tr>
    <tr><td><label>Usuario</label></td>
    <td><label>Contraseña</label></td>
    <td><label>Edad</label></td>
    </tr>
    <?php
    include('conexion.php');

    $stmt = $conn->prepare("SELECT * FROM usuario");
    $stmt->execute();
    $clientes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($clientes as $cliente) {
        echo "<tr>";
            echo "<td>".$cliente['login']."</td>";
            echo "<td>".$cliente['pass']."</td>";
            echo "<td>".$cliente['edad']."</td>";
        echo "</tr>";
    }
    ?>
    </table>
    </form>

</body>
</html>