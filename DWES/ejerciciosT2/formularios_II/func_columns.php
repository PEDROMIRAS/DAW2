<?php 
    //Función para dibujar una columna
    function dibujarColumna($cant){
        echo '<table border="1" cellspacing="0" cellpadding="5">';//Creamos la tabla
        for ($i = 0; $i < $cant; $i++) { 
            echo '<td>'. $i . '</td>';//Imprimimos la columna rellandola con un número
        }
        echo '</table>';
    }
?>