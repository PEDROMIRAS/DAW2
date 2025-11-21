<?php 
    // Función que dibuja una tabla de multiplicar con h columnas y v filas usando <table>
    function dibujarTabla($h, $v){
        echo "<table border='1' cellpadding='5' cellspacing='0'>"; // Inicia la tabla con borde y espacio

        // Fila de encabezado horizontal
        echo "<tr><th>X</th>"; // Celda superior izquierda
        for ($j = 1; $j <= $h; $j++) { 
            echo "<th>$j</th>"; // Encabezado horizontal de columnas
        }
        echo "</tr>"; // Fin de la fila de encabezado

        // Filas de la tabla con los valores
        for ($i = 1; $i <= $v; $i++) { 
            echo "<tr>"; // Inicia fila
            echo "<th>$i</th>"; // Encabezado vertical de la fila
            for ($j = 1; $j <= $h; $j++) {
                echo "<td>" . ($i * $j) . "</td>"; // Celda con el producto fila x columna
            }
            echo "</tr>"; // Fin de la fila
        }

        echo "</table>"; // Fin de la tabla
    }
?>