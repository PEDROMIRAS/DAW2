const texto = document.getElementById('text');

document.addEventListener('keypress', (e) => {
    // Evitamos el comportamiento por defecto (scroll con espacio, acciones del navegador)
    e.preventDefault(); 

    // Lógica para BORRAR (Backspace)
    if (e.key === 'Backspace') {
        // Slice(0, -1) elimina el último carácter
        texto.textContent = texto.textContent.slice(0, -1);
        return; // Salimos de la función aquí
    }

    // Lógica para ENTER (Salto de línea)
    if (e.key === 'Enter') {
        texto.textContent += '\n'; 
        return;
    }

    // Lógica para escribir SOLO caracteres visibles
    // e.key.length === 1 filtra teclas especiales como "Shift", "Control", "Alt", etc.
    if (e.key.length === 1) {
        texto.textContent += e.key;
    }
});

const btnLimpiar = document.getElementById('btn-limpiar');

btnLimpiar.addEventListener('click', () => {
    // Borramos el contenido
    texto.textContent = '';
    
    // Quitamos el foco del boton después de pulsarlo
    btnLimpiar.blur(); 
});