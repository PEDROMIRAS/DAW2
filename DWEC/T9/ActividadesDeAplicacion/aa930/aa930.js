const parrafo = document.querySelector('.parrafo');
const patron = document.querySelector('.patron');

const esperarPatron = new Promise((resolve) => {
    let contador = 0; // Iniciamos un contador local

    // Definimos la función que se ejecutará al hacer click
    const manejarClick = () => {
        contador++; // Aumentamos el contador
        console.log(`Click ${contador} detectado`);

        // Comprobamos si hemos llegado al patrón deseado (2 clicks)
        if (contador === 2) {
            resolve(); // ¡AHORA SÍ! Resolvemos la promesa
            
            // Opcional: Dejamos de escuchar clicks para no seguir contando
            parrafo.removeEventListener('click', manejarClick);
        }
    };

    // Añadimos el escuchador
    parrafo.addEventListener('click', manejarClick);
});

// Ejecución
console.log("Esperando 2 clicks...");

esperarPatron.then(() => {
    parrafo.textContent = '';
    patron.innerHTML = '¡Patrón de 2 clicks completado!';
    console.log("Promesa resuelta: Patrón completado");
});