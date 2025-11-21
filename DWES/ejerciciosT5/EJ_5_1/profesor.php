<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profesor</title>
</head>
<body>
    <h1>Esta es la web del profesor</h1>
    <?php
        if (isset($_SESSION['loginprof'])) {
            echo "Bienvenid@ " . $_SESSION['loginprof'] . "!";
        }
    ?>
    <br><br>
    <table border="1" cellpadding="5" cellspacing="0">
    <tr><td colspan="6"><strong style>Gestion de la base de datos</strong></th></td>
    <tr>
        <form action="gestuser.php" method="post">
        <td><label>Usuario:</label></td><td><input type="text" name="user" placeholder = "USUARIO"></td>
        <td><label>Contraseña:</label></td><td><input type="password" name="pass" placeholder = "CONTRASEÑA"></td>
        <td><label>Rol:</label></td><td><input type="text" name="rol" placeholder = "ROL"></td>
    </tr>
    <tr>
        <td colspan="6">
            <div style="text-align:center">
                <input type="submit" value="Insertar" name="insertar">
                <input type="submit" value="Modificar" name="modificar">
                <input type="submit" value="Eliminar" name="eliminar">
                <input type="submit" value="Volver" name="volver">
            </div>
        </td>
    </tr>
    </form>
    <tr><td colspan="6"><strong>Listado de Usuarios </strong></td></tr>
    <tr>
        <td colspan="2"><strong>Usuario</strong></td>
        <td colspan="2"><strong>Contraseña</strong></td>
        <td colspan="2"><strong>Rol</strong></td>
    </tr>
    <?php
        include('conexion.php');

        try {
            $sql = $conn->prepare("SELECT * FROM personal");
            $sql->execute();
            $personal = $sql->fetchAll(PDO::FETCH_ASSOC);

            foreach ($personal as $persona) {
                echo "<tr>";
                    echo "<td colspan='2'>".$persona['user']."</td>";
                    echo "<td colspan='2'>".$persona['pw']."</td>";
                    echo "<td colspan='2'>".$persona['rol']."</td>";
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
    <a href="index.php"><button>Volver</button></a>

</body>
</html>
