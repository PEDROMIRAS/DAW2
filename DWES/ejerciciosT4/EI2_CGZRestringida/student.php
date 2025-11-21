<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estudiante</title>
</head>
<body>
    <h1>Esta es la web del estudiante</h1>
    <?php
        if (isset($_SESSION['loginestu'])) {
            echo "Bienvenid@ " . $_SESSION['loginestu'] . "!";
        }
    ?>
    <br><br>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr><td colspan="3"><strong>Tabla del estudiante</strong></th></td>
        <tr>
            <td><strong>Usuario</strong></td>
            <td><strong>Rol</strong></td>
            <td><strong>Contraseña</strong></td>
        </tr>
        <?php
            include("conexion.php");
            $user = $_SESSION['loginestu'];
            try {
                $sql= $conn->prepare("SELECT * FROM personal WHERE user=:user");
                $sql->bindParam(":user", $user);
                $sql->execute();

                $estudiante = $sql->fetchAll(PDO::FETCH_ASSOC);
                foreach ($estudiante as $row) {
                    echo "<tr>";
                    echo "<td>" . $row['user'] . "</td>";
                    echo "<td>" . $row['pw'] . "</td>";
                    echo "<td>" . $row['rol'] . "</td>";
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