<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fotografo</title>
    <style>
        table {
            margin: 0 auto;
            text-align: center;
        }
        input[type="text"] {
            width: 150px;
        }
        input[type="submit"] {
            width: 100px;
            text-align: center;
        }
        a{  
            text-decoration: none;
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr><td colspan ="4">Bienvenido, <?php echo $_SESSION['fotoses']; ?></td></tr>
        <tr><td colspan ="4">GESTION DE FOTOS</td></tr>
        <form action="gestfoto.php" method="post">
            <tr>
                <td colspan= "4" >
                    <input type="submit" value="Volver" name = "volver">
                    <input type="submit" value="Nuevo" name = "nuevo">
                    <input type="submit" value="Modificar" name = "modificar">
                    <input type="submit" value="Eliminar" name = "eliminar">
                </td>
            </tr>
            <tr><td colspan ="4">Introduzca los datos del formulario</td></tr>
            <tr>
                <td colspan ="4">
                    <label for="titulo">Titulo </label><input type="text" placeholder="TITULO" name = "titulo">
                    <label for="tematica">Tematica </label><input type="text" placeholder="TEMATICA" name = "tematica">
                    <label for="size">Size </label><input type="text" placeholder="SIZE" name = "size">
                </td>
            </tr>
        </form>
        <tr><td colspan = "3">Listado de fotos</td></tr>
        <tr><td>Titulo</td><td>Tematica</td><td>Size</td></tr>
        <?php
            include ('conexion.php');
            try {
                $sql = 'SELECT * FROM fotos';
                $stmt = $conn -> prepare($sql);
                $stmt->execute();
                $fotos = $stmt->fetchAll(PDO::FETCH_ASSOC);
                foreach($fotos as $foto){
                    echo "<tr>";
                        echo "<td>".$foto['titulo']."</td>";
                        echo "<td>".$foto['tematica']."</td>";
                        echo "<td colspan = '2' >".$foto['size']."</td>";
                    echo "</tr>";
                }
            } catch (PDOException $e) {
                $e->getMessage();
            }
        ?>
    </table>
    <a href="index.php"><button>Cerrar sesión</button></a>
</body>
</html>