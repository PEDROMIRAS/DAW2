<?php
    session_start();
    $cliente = $_SESSION['cliente'];
    include('conexion.php'); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cliente</title>
</head>
<body>  
        <table border=1 cellpadding = "5" cellspacing = "0">
            <tr>
                <td colspan="5">
                    Bienvenido, <?php echo $cliente ?>
                </td>
            </tr>
            <tr>
                <td>
                    Listado de libros
                </td>
                <form action="gestReserva.php" method="post">
                    <td><input type="submit" value="Volver" name = "volver"></td>
                    <td><input type="submit" value="Reservar" name="reservar"></td>
                    <td><input type="submit" value="Devolver" name="devolver"></td>
                    <td><input type="text" name = "isbn" placeholder="Introduzca ISBN"></td>
                </form>
            </tr>
            <tr>
                <td>isbn</td>
                <td>titulo</td>
                <td>uator</td>
                <td>editorial</td>
                <td>reservado</td>
            </tr>
            <?php
                try {
                    $sql = 'SELECT * FROM libro';
                    $stmt = $conn->prepare($sql);
                    $stmt->execute();
                    if($stmt->rowCount()>0){
                        $libros = $stmt->fetchAll(PDO::FETCH_ASSOC);
                        foreach($libros as $libro){
                            echo '<tr>';
                                echo '<td>'.$libro['isbn'].'</td>';
                                echo '<td>'.$libro['titulo'].'</td>';
                                echo '<td>'.$libro['autor'].'</td>';
                                echo '<td>'.$libro['editorial'].'</td>';
                                echo '<td>'.$libro['reservado'].'</td>';
                            echo '</tr>';
                        }
                    }
                } catch (PDOException $e) {
                    $e->getMessage();
                }
            ?>
        </table>
</body>
</html>
