/**
 * Solicita permiso al usuario para acceder al GPS del dispositivo.
 * Esta función no devuelve datos, solo dispara el aviso del navegador.
 */
export function askPermision() {
    navigator.geolocation.getCurrentPosition(
        () => console.log("Permiso concedido"),
        () => console.warn("Permiso denegado")
    );
}

/**
 * Obtiene la longitud geográfica.
 * Para evitar el 'undefined', devolvemos una Promesa que "promete" 
 * entregar el valor cuando el satélite responda.
 */
export function getLongitude() {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((posicion) => {
            // 'resolve' es la función que envía el dato hacia afuera de la promesa
            resolve(posicion.coords.longitude);
        });
    });
}

/**
 * Obtiene la latitud geográfica.
 */
export function getLatitude() {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((posicion) => {
            // Una vez que el GPS responde, liberamos el valor de la latitud
            resolve(posicion.coords.latitude);
        });
    });
}

/**
 * Obtiene la altitud geográfica (si el dispositivo lo permite).
 */
export function getAltitude() {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((posicion) => {
            // Si el dispositivo no tiene sensor de altitud, devolverá null
            resolve(posicion.coords.altitude);
        });
    });
}