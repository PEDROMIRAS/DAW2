<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cliente</title>
    <style>
        h1{
            text-align:center;
        }
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
    <h1>Esta es la web del cliente</h1>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr><td colspan = "3">Bienvenido, <?php echo $_SESSION['clientses']; ?></td></tr>
        <tr><td colspan = "3">Listado de fotos</td></tr>
        <tr><td>Titulo</td><td>Tematica</td><td>Size</td></tr>
        <?php
            include ('conexion.php');
            try {
                $sql = 'SELECT * FROM fotos WHERE size > 300';
                $stmt = $conn -> prepare($sql);
                $stmt->execute();
                $fotos = $stmt->fetchAll(PDO::FETCH_ASSOC);
                foreach($fotos as $foto){
                    echo "<tr>";
                        echo "<td>".$foto['titulo']."</td>";
                        echo "<td>".$foto['tematica']."</td>";
                        echo "<td>".$foto['size']."</td>";
                    echo "</tr>";
                }
            } catch (PDOException $e) {
                $e->getMessage();
                header("Refresh:3, url = index.php");
            }
        ?>
    </table>
    <a href="index.php"><button>Volver</button></a>
</body>
</html>