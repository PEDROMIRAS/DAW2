<?php
// Función para calcular la suma de un array de números
function suma($numeros){
    $resultado = 0; // Inicializamos el acumulador en 0
    foreach($numeros as $num){ 
        $resultado += $num; // Sumamos el número al acumulador
    }
    return $resultado; // Devolvemos la suma total
}

// Función para calcular la media (promedio) de un array de números
function media($numeros){
    $resultado = 0; // Inicializamos el acumulador en 0
    foreach($numeros as $num){ 
        $resultado += $num; // Sumamos cada número al acumulador
    }
    $media = $resultado / count($numeros); // Dividimos la suma total entre la cantidad de elementos
    return $media; // Devolvemos la media
}

// Función para obtener el valor mínimo de un array de números
function minimo($numeros){
    $minimo = $numeros[0]; // Inicializamos con el primer valor del array
    foreach($numeros as $num){ 
        if($num < $minimo){ // Si encontramos un número menor que el actual mínimo
            $minimo = $num; // Actualizamos el valor mínimo
        }
    }
    return $minimo; // Devolvemos el valor mínimo
}

// Función para obtener el valor máximo de un array de números
function maximo($numeros){
    $maximo = $numeros[0]; // Inicializamos con el primer valor del array
    foreach($numeros as $num){ 
        if($num > $maximo){ // Si encontramos un número mayor que el actual máximo
            $maximo = $num; // Actualizamos el valor máximo
        }
    }
    return $maximo; // Devolvemos el valor máximo
}
?>