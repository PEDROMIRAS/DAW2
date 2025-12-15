<?php
    include('conexion.php');
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista Artefactos</title>
    </head>
    <body>
        <h2>Lista de artefactos</h2>
        <table border=1 cellpadding="5" cellspacing="0">
            <tr>
                <td><b>ID</b></td>
                <td><b>Nombre artefacto</b></td>
                <td><b>Era de origen</b></td>
                <td><b>Localizacion actual</b></td>
                <td><b>Valor estimado</b></td>
            </tr>
                <?php
                    foreach($_SESSION['artefactos'] as $artefacto){
                        echo '<tr>';
                            echo '<td>'.$artefacto['id'].'</td>';
                            echo '<td>'.$artefacto['nombre_artefacto'].'</td>';
                            echo '<td>'.$artefacto['era_origen'].'</td>';
                            echo '<td>'.$artefacto['localizacion_actual'].'</td>';
                            echo '<td>'.$artefacto['valor_estimado'].'</td>';
                        echo '</tr>';
                    }
                ?>
        </table>
        <br>
        <a href="modificar_artefactos.php"><button>Modificar artefacto</button></a>
        <br><br>
        <a href="index_artefactos.php"><button>Volver</button></a>
    </body>
</html>