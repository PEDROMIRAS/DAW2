<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form dep</title>
</head>
<body>
        <!--Formulario para seleccionar departamento y ver su presupuesto-->
        <form action="presupuesto.php" method="post">
            <label for="option_select">Departamentos</label>
            <!--Etiqueta de HTML de select con opciones de departamentos-->
            <select name="options" id="option_select" required>
                <option value="" disabled selected>Eliga una opcion</option>
                <option value="INFORMÁTICA">INFORMÁTICA</option>
                <option value="LENGUA">LENGUA</option>
                <option value="INGLÉS">INGLÉS</option>
                <option value="MATEMÁTICAS">MATEMÁTICAS</option>
            </select>
            <br>
            <!--Botón para enviar el formulario-->
        <button type="submit">Buscar</button> 
        </form>
</body>
</html>