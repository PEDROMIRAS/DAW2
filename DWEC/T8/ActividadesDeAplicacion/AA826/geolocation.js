export function askPermision(){
    navigator.geolocation.getCurrentPosition(
        () => console.log("Permiso concedido"),() => console.warn("Permiso denegado"));
}

export function getLongitude(){
    return navigator.geolocation.getCurrentPosition(posicion=> posicion.coords.longitude);
}

export function getLatitude(){
    return navigator.geolocation.getCurrentPosition(posicion=> posicion.coords.latitude);
}

export function getAltitude(){
    return navigator.geolocation.getCurrentPosition(posicion=> posicion.coords.altitude);
}