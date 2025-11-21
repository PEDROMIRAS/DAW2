<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preferencias</title>
</head>
<body>
    <h2>Elige tus preferencias</h2>
    <form action="guarda_prefs.php" method="post">
        <label for="nombre">
            Nombre:
            <input type="text" name="nombre" required>
        </label>
        <br><br>
        <label for="color">
            Color favorito:
            <input type="color" name="color" required>
        </label>
        <br><br>
        <input type="submit" value="Guardar">
    </form>
</body>
</html>