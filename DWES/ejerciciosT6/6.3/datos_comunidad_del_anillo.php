<?php
// Definimos el array asociativo con los datos de la Comunidad del Anillo
$comunidad = [
    [
        "nombre" => "Frodo Bolsón",
        "raza" => "Hobbit",
        "poder" => "Portador del Anillo"
    ],
    [
        "nombre" => "Sam Gamyi",
        "raza" => "Hobbit",
        "poder" => "Lealtad y coraje"
    ],
    [
        "nombre" => "Gandalf",
        "raza" => "Mago",
        "poder" => "Magia y sabiduría"
    ],
    [
        "nombre" => "Aragorn",
        "raza" => "Humano",
        "poder" => "Habilidad con la espada y liderazgo"
    ],
    [
        "nombre" => "Legolas",
        "raza" => "Elfo",
        "poder" => "Arquería y agilidad"
    ]
];

// Convertimos el array a JSON 
echo json_encode($comunidad);
?>