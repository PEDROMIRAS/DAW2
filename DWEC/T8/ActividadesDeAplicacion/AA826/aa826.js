// aa826.js

// Importamos todas las funciones del módulo bajo el alias 'geo'
import * as geo from './geolocation.js';

// Invocación de todas las funciones del alias geo
console.log("--- Iniciando pruebas de geolocalización ---");

// Solicitar permiso
geo.askPermision();
console.log("Llamada a geo.askPermision() realizada.");

// Intentar obtener Longitud
const lon = geo.getLongitude();
console.log("Llamada a geo.getLongitude(). Valor devuelto:", lon);

// Intentar obtener Latitud
const lat = geo.getLatitude();
console.log("Llamada a geo.getLatitude(). Valor devuelto:", lat);

// Intentar obtener Altitud
const alt = geo.getAltitude();
console.log("Llamada a geo.getAltitude(). Valor devuelto:", alt);

console.log("--- Fin de las invocaciones ---");