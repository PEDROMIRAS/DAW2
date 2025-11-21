<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doble Valor</title>
</head>
<body>
    <?php
        $array = [
            'Clave' => ['Valor1', 'Valor2'],
            'Clave1' => ['Valor3', 'Valor4'],
            'Clave2' => ['Valor5', 'Valor6']
        ];

        foreach ($array as $key => [$value, $value2]) {
            echo "$key: $value, $value2<br>";
        }

        $filas = 5;

        for ($i = 1; $i <= $filas; $i++) {
            for ($j = 1; $j <= $i; $j++) {
                echo "* ";
            }
            echo "<br>";
        }
?>

</body>
</html>