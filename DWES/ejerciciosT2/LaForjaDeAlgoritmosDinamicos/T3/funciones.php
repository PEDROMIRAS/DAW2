<?php
// Función para agregar un nuevo ítem al inventario
// Se pasa por referencia $inventario_maestro para modificar directamente el array original
// $item = nombre del item, $rareza = nivel de rareza, $cantidad = cantidad inicial
function agregarItem(&$inventario_maestro, $item, $rareza = 'Raro', $cantidad = 1) {
    // Determinar el siguiente ID disponible basado en la cantidad actual de elementos
    $ID = count($inventario_maestro);

    // Crear un nuevo ítem como array asociativo
    $nuevo_item = [
        'Nombre' => $item,
        'Cantidad' => $cantidad,
        'Rareza' => $rareza
    ];

    // Añadir el nuevo ítem al inventario usando el ID determinado
    $inventario_maestro[$ID] = $nuevo_item;

    // Devolver el inventario actualizado (opcional, ya que se pasa por referencia)
    //return $inventario_maestro;
}

// Función que convierte el valor numérico de rareza en texto legible
function obtenerRareza($rareza) {
    if (!$rareza) { // Si no hay rareza definida
        return 'Desconocida';
    } elseif ($rareza == 1) { // Rareza 1 = Común
        return 'Común';
    } elseif ($rareza == 2) { // Rareza 2 = Raro
        return 'Raro';
    } elseif ($rareza == 3) { // Rareza 3 = Épico
        return 'Épico';
    }
}

// Función para mostrar un inventario filtrado según la rareza seleccionada
function actualizarInventario($inventario_maestro, $rareza) {
    echo "<h3>Inventario filtrado:</h3>";
    echo "<table border='1' cellpadding='5' cellspacing='0'>";
    echo "<tr><th>ID</th><th>Nombre</th><th>Cantidad</th><th>Rareza</th></tr>";

    // Recorrer cada ítem del inventario
    foreach ($inventario_maestro as $id => $objeto) {
        // Obtener la rareza en formato de texto
        $textoRareza = obtenerRareza($objeto['Rareza']);   
        
        // Filtrado según la rareza seleccionada por el usuario
        if ($rareza == 1) { // Común: mostramos todos los ítems
            echo "<tr>";
            echo "<td>{$id}</td>";
            echo "<td>{$objeto['Nombre']}</td>";
            echo "<td>{$objeto['Cantidad']}</td>";
            echo "<td>{$textoRareza}</td>";
            echo "</tr>";
        } elseif ($rareza == 2) { // Raro: mostramos solo Raro o Épico
            if ($textoRareza == 'Raro' || $textoRareza == 'Épico') {
                echo "<tr>";
                echo "<td>{$id}</td>";
                echo "<td>{$objeto['Nombre']}</td>";
                echo "<td>{$objeto['Cantidad']}</td>";
                echo "<td>{$textoRareza}</td>";
                echo "</tr>";
            }
        } elseif ($rareza == 3) { // Épico: solo ítems Épicos
            if ($textoRareza == 'Épico') {
                echo "<tr>";
                echo "<td>{$id}</td>";
                echo "<td>{$objeto['Nombre']}</td>";
                echo "<td>{$objeto['Cantidad']}</td>";
                echo "<td>{$textoRareza}</td>";
                echo "</tr>";
            }
        }    
    }    
    echo "</table>";
}
?>