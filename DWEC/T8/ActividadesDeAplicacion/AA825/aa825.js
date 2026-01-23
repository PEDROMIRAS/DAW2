// aa825.js

// Importación de componentes concretos de nuestro módulo previo
import { capitalizar, obtenerFecha } from './utilidades.js';

function ejecutarProceso(usuario) {
    const nombreFormateado = capitalizar(usuario);
    const fecha = obtenerFecha();

    console.log("Iniciando aplicación para: " + nombreFormateado);
    console.log("Fecha de acceso: " + fecha);

    // Uso del módulo externo (cargado en el HTML)
    // Lanzamos un efecto de confeti para confirmar que funciona
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        console.log("Módulo externo 'Confetti' ejecutado.");
    } else {
        console.warn("El módulo externo no está disponible.");
    }
}

// Ejecución
ejecutarProceso("  juan pÉrez  ");