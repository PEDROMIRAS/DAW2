<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventario Maestro</title>
</head>
<body>
    <?php 
    // Incluimos funciones externas para manipular el inventario
    include('funciones.php');

    // Definición del inventario inicial como un array asociativo
    // Cada item tiene: Nombre, Cantidad y Rareza
    $inventario_maestro = [
        0 => ['Nombre' => 'Poción de Vida', 'Cantidad' => 5, 'Rareza' => 1],
        1 => ['Nombre' => 'Espada de Plata', 'Cantidad' => 1, 'Rareza' => 2],
        2 => ['Nombre' => 'Armadura Legendaria', 'Cantidad' => 1, 'Rareza' => 3],
        3 => ['Nombre' => 'Pergamino Antiguo', 'Cantidad' => 3, 'Rareza' => 2],
    ];
    ?>

    <!-- Título principal de la página -->
    <h2>El Archivo Maestro del Gremio: Persistencia Lúdica de Datos y Filtrado Avanzado</h2>

    <!-- Formulario para agregar nuevos items -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        <!-- Campo para el nombre del item -->
        <label for="nombre">Nombre Item: </label>
        <input type="text" id="nombre" name="item">
        <br><br>

        <!-- Selector de rareza del item -->
        <label for="nombre">Rareza Item: </label>
        <select id="nombre" name="rareza">
            <option value="" selected disabled hidden>--Seleccione una opción--</option>
            <option value="1">Común</option>
            <option value="2">Raro</option>
            <option value="3">Épico</option>
        </select>
        <br><br>

        <!-- Botón para enviar el formulario -->
        <button type="submit">Agregar</button>
    </form>

    <?php
    // Comprobamos si se envió el formulario
    if($_POST){ 
        // Obtenemos los datos enviados, o valores por defecto si no existen
        $item = $_POST['item'] ?? ' ';
        $rareza = $_POST['rareza'] ?? 0;

        try {
            // Validación: el campo nombre no puede estar vacío
            if (empty($item)) {
                throw new Exception("<br>No puede haber campos vacíos");
            }

            // Si se proporcionó nombre y rareza válida, agregamos el item
            if (!empty($item) && $rareza > 0) {
                agregarItem($inventario_maestro, $item, $rareza);
                echo "<p><strong>Ítem agregado exitosamente</strong></p>";
            } 
            // Si no se seleccionó rareza, mostramos error
            elseif (!empty($item) && $rareza == 0) {
                throw new Exception("Debe seleccionar una rareza");
            }
            
            // Mostramos el inventario actualizado en una tabla
            echo "<h3>Inventario actualizado:</h3>";
            echo "<table border='1' cellpadding='5' cellspacing='0'>";
            echo "<tr><th>ID</th><th>Nombre</th><th>Cantidad</th><th>Rareza</th></tr>";

            foreach ($inventario_maestro as $id => $objeto) {
                // Convertimos el número de rareza en texto
                $textoRareza = obtenerRareza($objeto['Rareza']);
                echo "<tr>";
                echo "<td>{$id}</td>";
                echo "<td>{$objeto['Nombre']}</td>";
                echo "<td>{$objeto['Cantidad']}</td>";
                echo "<td>{$textoRareza}</td>";
                echo "</tr>";
            }
            echo "</table>";
            
            echo "<br><br>";
            // Actualizamos inventario según rareza (función definida en funciones.php)
            actualizarInventario($inventario_maestro, $rareza);

        } catch (Exception $e) {
            // Captura y muestra errores
            echo $e->getMessage();
            // Redirige a la página principal después de 5 segundos
            header('refresh:5;url=inventario.php');
        }
    }
    ?>
</body>
</html>