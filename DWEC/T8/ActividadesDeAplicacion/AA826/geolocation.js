// geolocation.js

// Esta variable guardará los datos para que no haya que pedirlos varias veces
let posicionCache = null; 

const opciones = { timeout: 15000, enableHighAccuracy: false };

/**
 * Pide permiso y guarda el resultado en 'posicionCache'
 */
export function askPermision() {
    return new Promise((resolve, reject) => {
        // Si ya lo tenemos de una llamada anterior, lo devolvemos directo
        if (posicionCache) return resolve(posicionCache);

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                posicionCache = pos; // <--- AQUÍ RECOGEMOS LOS DATOS
                resolve(pos);
            },
            (err) => reject(err),
            opciones
        );
    });
}

/**
 * Reutiliza el dato guardado para devolver la longitud
 */
export async function getLongitude() {
    const p = await askPermision(); // Llama a la función de arriba (que usa caché)
    return p.coords.longitude;
}

/**
 * Reutiliza el dato guardado para devolver la latitud
 */
export async function getLatitude() {
    const p = await askPermision(); 
    return p.coords.latitude;
}

/**
 * Reutiliza el dato guardado para devolver la altitud
 */
export async function getAltitude() {
    const p = await askPermision();
    return p.coords.altitude;
}