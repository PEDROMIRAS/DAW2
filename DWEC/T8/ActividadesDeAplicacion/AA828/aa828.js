const canvas = document.getElementById('canvasMitsubishi');
const ctx = canvas.getContext('2d');

function dibujarLogo() {
    const centroX = 300;
    const centroY = 300;
    const tamañoLado = 120; // Tamaño de cada segmento del diamante

    // Configuración de estilo
    ctx.fillStyle = "#ff0000"; // Rojo corporativo

    // Movemos el origen al centro del canvas para facilitar la rotación
    ctx.translate(centroX, centroY);

    // Dibujamos los 3 diamantes usando un bucle
    for (let i = 0; i < 3; i++) {
        dibujarDiamante(ctx, tamañoLado);
        // Rotamos 120 grados para el siguiente diamante
        ctx.rotate((120 * Math.PI) / 180);
    }
}

/**
 * Dibuja un rombo (diamante) compuesto por dos triángulos equiláteros
 */
function dibujarDiamante(ctx, lado) {
    const alturaTriangulo = lado * Math.sqrt(3) / 2;

    ctx.beginPath();
    ctx.moveTo(0, 0); // Punta que toca el centro
    
    // Vértice izquierdo
    ctx.lineTo(-lado / 2, -alturaTriangulo);
    
    // Punta exterior (vértice superior)
    ctx.lineTo(0, -alturaTriangulo * 2);
    
    // Vértice derecho
    ctx.lineTo(lado / 2, -alturaTriangulo);
    
    ctx.closePath();
    ctx.fill();
}

dibujarLogo();