// SELECCIÓN DE ELEMENTOS: Conectamos el HTML con el JavaScript
const audio = document.getElementById('miAudio');      // El reproductor de música
const canvas = document.getElementById('visualizador'); // El lienzo para dibujar
const ctx = canvas.getContext('2d');                    // El "pincel" para dibujar en 2D

// TAMAÑO: Ajustamos el ancho al 80% de la pantalla y el alto a 300px
canvas.width = window.innerWidth * 0.8;
canvas.height = 300;

// Variables que guardarán los datos del sonido (se llenarán al dar Play)
let audioCtx, analyser, source, dataArray, bufferLength;

// INICIO: Se ejecuta cuando pulsas el botón de Play
audio.onplay = function() {
    // Solo se configura la primera vez para no colapsar el navegador
    if (!audioCtx) {
        // Creamos el "motor" de audio del navegador
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        // Creamos el analizador (el que "escucha" las frecuencias)
        analyser = audioCtx.createAnalyser();
        // Conectamos la música al analizador y luego a los altavoces
        source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);

        // Configuramos cuánta información queremos (256 es el nivel de detalle)
        analyser.fftSize = 256; 
        bufferLength = analyser.frequencyBinCount; // Esto nos dará 128 barras
        dataArray = new Uint8Array(bufferLength);   // Array para guardar el volumen de cada barra
    }
    renderFrame(); // Llamamos a la función que dibuja
};

// EL BUCLE DE DIBUJO: Esta función se ejecuta 60 veces por segundo
function renderFrame() {
    // Se llama a sí misma para crear una animación fluida
    requestAnimationFrame(renderFrame);
    
    // Le pedimos al analizador que nos dé el volumen actual de las frecuencias
    analyser.getByteFrequencyData(dataArray);

    // LIMPIEZA: Pintamos un fondo negro casi transparente
    // El 0.2 crea un "efecto estela" (las barras dejan rastro al bajar)
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Configuración de las barras (ancho y posición X inicial)
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    // DIBUJAR BARRAS: Recorremos los datos de sonido
    for (let i = 0; i < bufferLength; i++) {
        // La altura de la barra depende del volumen en esa frecuencia
        barHeight = dataArray[i];

        // COLOR: Creamos un color RGB dinámico que cambia según la posición
        const r = barHeight + (25 * (i / bufferLength)); // Rojo
        const g = 250 * (i / bufferLength);              // Verde
        const b = 150;                                    // Azul fijo

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        
        // Dibujamos el rectángulo (barra)
        // Coordenadas: (X, Y, Ancho, Alto)
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        // Movemos la X para la siguiente barra
        x += barWidth + 1;
    }
}