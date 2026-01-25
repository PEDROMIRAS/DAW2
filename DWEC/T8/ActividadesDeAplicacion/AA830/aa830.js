let intervaloMaestro; // Controla el tiempo segundo a segundo
let segundosRestantes = 30; // Tiempo inicial del ciclo

document.onclick = function() {
    // Si ya hay un intervalo, no hacemos nada
    if (intervaloMaestro) return;

    Notification.requestPermission().then(respuesta => {
        if (respuesta === "granted") {
            const display = document.getElementById('contador');
            
            // Iniciamos el motor del programa (cada 1000ms = 1s)
            intervaloMaestro = setInterval(() => {
                segundosRestantes--;
                display.innerText = `Próxima notificación en: ${segundosRestantes}s`;

                // Cuando el contador llega a cero
                if (segundosRestantes <= 0) {
                    lanzarNotificacion();
                    segundosRestantes = 30; // Reiniciamos el ciclo
                }
            }, 1000);

            // Lanzamos la primera inmediatamente para confirmar
            lanzarNotificacion();
            display.innerText = `Próxima notificación en: ${segundosRestantes}s`;
        }
    });
};

function lanzarNotificacion() {
    const n = new Notification("Acción Requerida", {
        body: "Visita: https://pedromiras.github.io/",
        tag: "ejercicio-830",
        requireInteraction: true // Para que en Mac se vea bien
    });

    // Cierre automático a los 5 segundos
    setTimeout(() => n.close(), 5000);

    n.onclick = () => {
        window.open("https://pedromiras.github.io/", "_blank");
        
        // Detenemos TODO el sistema
        clearInterval(intervaloMaestro);
        document.getElementById('contador').innerText = "Bucle detenido. Enlace visitado.";
        n.close();
    };
}