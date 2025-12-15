<?php
    session_start();
    $biblio = $_SESSION['bibliotecario'];
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
                    Bienvenido, <?php echo $biblio ?>
                </td>
            </tr>
            <tr>
                <td>
                    Gestion de libros
                </td>
                <form action="gestlibro.php" method="post">
                    <td><input type="submit" value="Volver" name="volver"></td>
                    <td><input type="submit" value="Nuevo" name="nuevo"></td>
                    <td><input type="submit" value="Eliminar" name="eliminar"></td>
                    <td><input type="submit" value="Modificar" name="modificar"></td>
                
            </tr>
            <tr><td colspan="5">Introduzca los datos en el formulario</td></tr>
            <tr>
                    <td><input type="text" name="isbn" placeholder="ISBN"></td>
                    <td><input type="text" name="titulo" placeholder="titulo"></td>
                    <td><input type="text" name="autor" placeholder="autor"></td>
                    <td><input type="text" name="editorial" placeholder="editorial"></td>
                    <td><input type="text" name="reservado" placeholder="reservado"></td>
                </form>
            </tr>
            <tr>
                <td>isbn</td>
                <td>titulo</td>
                <td>autor</td>
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
                    //throw $th;
                }
            ?>
        </table>
</body>
</html>
