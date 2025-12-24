const caja = document.getElementById('caja');

// Usamos 'mouseover' para máxima sensibilidad
caja.addEventListener('mouseover', () => {
    // Calculamos el espacio disponible (Ventana - Tamaño de la caja)
    const anchoDisponible = window.innerWidth - caja.clientWidth;
    const altoDisponible = window.innerHeight - caja.clientHeight;

    // Generamos coordenadas aleatorias dentro de ese límite
    const nuevoLeft = Math.floor(Math.random() * anchoDisponible);
    const nuevoTop = Math.floor(Math.random() * altoDisponible);

    // Aplicamos la nueva posición
    caja.style.left = nuevoLeft + 'px';
    caja.style.top = nuevoTop + 'px';
});