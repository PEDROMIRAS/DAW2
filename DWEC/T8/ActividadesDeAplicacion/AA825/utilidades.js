// utilidades.js

// Exportamos funciones concretas
export function capitalizar(texto) {
    return texto.trim().charAt(0).toUpperCase() + texto.trim().slice(1).toLowerCase();
}

export function obtenerFecha() {
    return new Date().toLocaleDateString();
}