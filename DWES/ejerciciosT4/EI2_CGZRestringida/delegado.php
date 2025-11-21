<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delegado</title>
</head>
<body>
    <h1>Esta es la web del delegado</h1>
    <?php
        if (isset($_SESSION['logindele'])) {
            echo "Bienvenid@ " . $_SESSION['logindele'] . "!";
        }
    ?>
    <br><br>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr><td colspan="2"><strong>Lista de Usuarios</strong></th></td>
        <tr>
            <td><strong>Usuario</strong></td>
            <td><strong>Rol</strong></td>
        </tr>
        <?php
            include("conexion.php");

            try {
                $sql = $conn->prepare("SELECT user, rol FROM personal");
                $sql->execute();
                $personal = $sql->fetchAll(PDO::FETCH_ASSOC);

                foreach ($personal as $persona) {
                    echo "<tr>";
                        echo "<td>".$persona['user']."</td>";
                        echo "<td>".$persona['rol']."</td>";
                    echo "</tr>";
                }

                $conn = null;
                $sql = null;
            } catch (PDOException $e) {
                echo $e->getMessage();
            }
        ?>
    </table>
    <br><br>
    <a href="index.php">Volver a index1</a>
    <br><br>
    <a href="index2.php">Volver a index2</a>
</body>
</html>