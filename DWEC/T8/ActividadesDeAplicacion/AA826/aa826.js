// aa826.js
import * as geo from './geolocation.js';

const btn = document.getElementById('btnGeo');
const pantalla = document.getElementById('resultado');

btn.onclick = async () => {
    pantalla.innerHTML = "Consultando datos de GPS...";

    try {
        // Invocamos TODAS las funciones
        
        // La primera llamada activa el GPS y guarda los datos
        await geo.askPermision();
        console.log("GPS activado y datos guardados en caché.");

        // Las siguientes llamadas son instantáneas porque leen de la memoria interna
        const lat = await geo.getLatitude();
        const lon = await geo.getLongitude();
        const alt = await geo.getAltitude();

        pantalla.innerHTML = `
            <p><b>Latitud:</b> ${lat}</p>
            <p><b>Longitud:</b> ${lon}</p>
            <p><b>Altitud:</b> ${alt !== null ? alt : "No disponible"}</p>
        `;

        console.log("Invocaciones completadas con éxito.");

    } catch (error) {
        pantalla.innerHTML = "Error: " + error.message;
    }
};