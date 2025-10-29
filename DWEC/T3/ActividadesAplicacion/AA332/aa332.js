// Creamos un mapa con ciudades y sus coordenadas [latitud, longitud]
const ciudades = new Map([
    ['Madrid', [40.4168, -3.7038]],
    ['Barcelona', [41.3874, 2.1686]],
    ['Valencia', [39.4699, -0.3763]],
    ['Bilbao', [43.2630, -2.9350]],
    ['Sevilla', [37.3891, -5.9845]]
]);

// Recorremos el mapa y mostramos los datos de cada ciudad
for (const [ciudad, [latitud, longitud]] of ciudades) {
    document.write(`Ciudad: ${ciudad}, Latitud: ${latitud}, Longitud: ${longitud}<br>`);
}