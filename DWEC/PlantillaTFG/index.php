<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/f97389225c.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="CSS/index.css">
    <link rel="shortcut icon" href="assets/logo2.png" type="image/png">
    <title>Acho Q Como</title>
</head>
<body>
    <!--- <?php include('public/header.php')?>  -->
    <!-- ===== MAIN ===== -->
    <main>
        <!-- ----- BANNER ----- -->
        <section class="banner">
            <div class="imgBanner">
                <img src="assets/banner.jpg" alt="Comida deliciosa servida en mesa">
            </div>
            <div class="banner-content">
                <h2>Nunca fue tan sencillo</h2>
                <p>Pide tu comida en minutos y disfruta de la comodidad que ofrecemos.</p>
            </div>
            
        </section>

        <!-- ----- BÚSQUEDA ----- -->
        <section class="busqueda">
            <div id="botonBusqueda">
                <button type="button">Restaurantes</button>
            </div>
            <div id="busqueda">
                <form action="" method="post">
                    <input type="search" name="search" placeholder="Buscar restaurante" aria-label="Buscar restaurante">
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
        </section>

        <!-- ----- CARD ----- -->
        <section class="card-container">
            <div class="cards" id = "cards1">
                <a href="restaurante1.html"><div class="card"><img src="assets/banner.jpg" alt="Restaurante 1"><p>Restaurante 1</p></div></a>
                <a href="restaurante2.html"><div class="card"><img src="assets/banner.jpg" alt="Restaurante 2"><p>Restaurante 2</p></div></a>
                <a href="restaurante3.html"><div class="card"><img src="assets/banner.jpg" alt="Restaurante 3"><p>Restaurante 3</p></div></a>
            </div>
            <div class="cards hidden" id = "cards2">
                <a href="restaurante4.html"><div class="card"><img src="assets/banner.jpg" alt="Restaurante 4"><p>Restaurante 4</p></div></a>
                <a href="restaurante5.html"><div class="card"><img src="assets/banner.jpg" alt="Restaurante 5"><p>Restaurante 5</p></div></a>
                <a href="restaurante6.html"><div class="card"><img src="assets/banner.jpg" alt="Restaurante 6"><p>Restaurante 6</p></div></a>
            </div>
            <div class="cards hidden" id = "cards3">
                <a href="restaurante7.html"><div class="card"><img src="assets/banner.jpg" alt="Restaurante 7"><p>Restaurante 7</p></div></a>
                <a href="restaurante8.html"><div class="card"><img src="assets/banner.jpg" alt="Restaurante 8"><p>Restaurante 8</p></div></a>
                <a href="restaurante9.html"><div class="card"><img src="assets/banner.jpg" alt="Restaurante 9"><p>Restaurante 9</p></div></a>
            </div>
            <div class="desplegable">
                <button type="button" id="despliegue"><i class="fa-solid fa-bars fa-2xl"></i></button>
            </div>
        </section>

        <!-- ----- NOSOTROS ----- -->
        <section class="nosotros">
            <h2>¿Quiénes somos?</h2>
            <h3>Sobre nosotros</h3>
            <p>
                Somos una plataforma dedicada a conectar a los mejores restaurantes de Totana
                con usuarios que buscan comida deliciosa sin complicaciones. Nuestro objetivo es
                hacerte la vida más fácil y sabrosa.
            </p>
            <img src="assets/nosotros.jpg" alt="Equipo de Acho K Como">
        </section>
    </main>
    <!--- <?php include('public/footer.php')?>  -->
    <!-- ===== JAVASCRIPT ===== -->
    <script src="JS/index.js"></script>
</body>
</html>