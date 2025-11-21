<?php
    session_start();
    $user = $_SESSION['aluses'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>alumno</title>
    <style>
        body{
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
    </style>
</head>
<body>
    <h2>Bienvenido <?php echo $user ?></h2>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr><td colspan = "3" >Tabla de votos</td></tr>
        <tr>
            <td colspan = "3" >
                <form action="gestAlumn.php" method="post">
                    <label for="nombre"></label>
                    <input type="text" name = "nombre" placeholder = "VOTO A...">
                    <input type="submit" value="Votar" name = "voto">
                </form>
            </td>
        </tr>
        <tr>
            <td>Nombre</td>
            <td>Voto</td>
            <td>Num. Votos</td>
        </tr>
        <?php
            include('conexion.php');
            try {
                $sql = 'SELECT user, voto, nVotos FROM alumnos ORDER BY nVotos DESC';
                $stmt= $conn->prepare($sql);
                $stmt->execute();
                if ($stmt->rowCount()>0) {
                    $alumnos = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    foreach($alumnos as $alumno){
                        echo '<tr>';
                        echo '<td>'.$alumno['user'].'</td>';
                        echo '<td>'.$alumno['voto'].'</td>';
                        echo '<td>'.$alumno['nVotos'].'</td>';
                        echo '</tr>';
                    }
                }else{
                    throw new Exception("Error en la BBDD.");
                }
            } catch (PDOException $e) {
                echo $e->getMessage();
                exit();
            }
        ?>
        <tr>
            <td colspan = "3">
                <form action="logout.php" method="post">
                    <button type="submit">Cerrar sesión</button>
                </form>
            </td>
        </tr>
    </table>
    <br>
    
</body>
</html>