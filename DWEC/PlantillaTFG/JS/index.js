// Seleccionamos el botón que mostrará u ocultará los bloques de cards
const desplegableButton = document.getElementById('despliegue');

// Seleccionamos todos los bloques de cards que están ocultos inicialmente
const hiddenCards = document.querySelectorAll('.cards.hidden');

// Añadimos un evento al botón para que al hacer clic se ejecute la función
desplegableButton.addEventListener('click', () => {

    // Recorremos todos los bloques ocultos y alternamos la clase 'hidden'
    // Si estaba oculto, se muestra; si estaba visible, se oculta
    hiddenCards.forEach(cardBlock => cardBlock.classList.toggle('hidden'));

    // Seleccionamos el icono dentro del botón para cambiarlo
    const icon = desplegableButton.querySelector('i');

    // Si el primer bloque sigue oculto después del toggle, mostramos el icono de hamburguesa
    // Si ya está visible, mostramos el icono de "cerrar"
    if (hiddenCards[0].classList.contains('hidden')) {
        icon.classList.replace('fa-xmark', 'fa-bars'); // cambiar a hamburguesa
    } else {
        icon.classList.replace('fa-bars', 'fa-xmark'); // cambiar a X (cerrar)
    }
});