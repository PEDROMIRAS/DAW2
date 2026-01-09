const imagenNodo = document.querySelector('img');

document.addEventListener('keydown', (event) => {
    const tecla = event.key;

    // Comprobamos si la tecla es un número entre 0 y 9
    if (tecla >= '0' && tecla <= '9') {
        // "Vaciamos" el contenedor
        imagenNodo.src = "";
        
        // Cargamos la nueva imagen usando el número de la tecla
        // Usamos template literals para no escribir las 10 rutas
        imagenNodo.src = `./images/num${tecla}.png`;
        
        console.log(`Cargando imagen del número: ${tecla}`);
    }
});
