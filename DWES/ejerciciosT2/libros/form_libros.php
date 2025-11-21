<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1>Buscador de libros</h1>
        <!--Formulario para buscar libros-->
    <form action="request_libros.php" method="post">
        <!--Campo de texto para introducir el texto de búsqueda-->
        <label for="texto">Texto de búsqueda: 
            <input type="text" name="texto">
        </label>
        <br>
        <!--Radio buttons para seleccionar la opción de búsqueda-->
        <label>
            <input type="radio" name="opcion" value="Titulo del Libro">
            Titulo del libro
        </label>
        <label>
            <input type="radio" name="opcion" value="Nombre del autor">
            Nombre del autor
        </label>
        <label>
            <input type="radio" name="opcion" value="Editorial">
            Editorial
            </label>
        <br>
        <!--Select para elegir el tipo de libro-->
        <label for="t_libro">
            Tipo de libro:
            <select name="variedadLibros" id="t_libro">
                <option value="Narrativa">Narrativa</option>
                <option value="Libro Texto">Libros de Texto</option>
                <option value="Guias y Mapas">Guías y Mapas</option>
            </select>
        </label>
        <br>
        <!--Botón para enviar el formulario-->
        <button type="submit">Buscar</button>     
    </form>
    </div>
</body>
</html>