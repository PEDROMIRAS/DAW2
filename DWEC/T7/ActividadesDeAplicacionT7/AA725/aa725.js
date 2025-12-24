const roja = document.getElementById('caja-roja');
const verde = document.getElementById('caja-verde');
const ganador = document.getElementById('ganador');

// Variable de control para saber si alguien ya ganó
let juegoTerminado = false;

document.addEventListener('keydown', (e) => {
    // Si el juego terminó, no hacemos nada (return)
    if (juegoTerminado) return;

    // Lógica de movimiento
    // Usamos Math.min para que no pasen de 500 internamente, aunque el CSS lo limite
    if(e.key === 'a'){
        roja.style.width = (roja.offsetWidth + 10) + 'px';
    } else if (e.key === 'ñ') {
        verde.style.width = (verde.offsetWidth + 10) + 'px';
    }

    // Comprobación de ganador
    // Usamos >= por seguridad
    if (roja.offsetWidth >= 500) {
        finalizarJuego('¡GANA ROJO!', 'red');
    } else if (verde.offsetWidth >= 500) {
        finalizarJuego('¡GANA VERDE!', 'green');
    }
});

// Función auxiliar para no repetir código
function finalizarJuego(mensaje, color) {
    const textoGanador = document.createElement('h1'); // Usamos h1 para que se vea más grande
    textoGanador.textContent = mensaje;
    textoGanador.style.color = color;
    ganador.appendChild(textoGanador);
    
    // Cambiamos la bandera para detener el juego
    juegoTerminado = true;
}

const btnReiniciar = document.getElementById('btn-reiniciar');

btnReiniciar.addEventListener('click', () => {
    // Reseteamos el ancho visual de las cajas
    roja.style.width = '10px';
    verde.style.width = '10px';

    // Borramos el mensaje de "Ganador"
    // innerHTML = '' es la forma más rápida de vaciar un contenedor
    ganador.innerHTML = '';

    // Reactivamos la variable del juego para permitir mover las cajas
    juegoTerminado = false;

    // Quitamos el foco del botón
    // Si no se hace esto, al pulsar teclas para jugar, podrías volver a activar el botón
    btnReiniciar.blur();
});