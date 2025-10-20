// Crea un mapa con pares clave-valor (ambos strings)
let frases = new Map();

frases
    .set('motivacion1', 'El éxito no llega por suerte, sino por constancia.')
    .set('motivacion2', 'Cada día es una nueva oportunidad para mejorar.')
    .set('motivacion3', 'El fracaso es solo el primer paso hacia el aprendizaje.')
    .set('motivacion4', 'Haz hoy lo que otros no quieren, y mañana tendrás lo que otros no pueden.')
    .set('motivacion5', 'Si puedes soñarlo, puedes lograrlo.');

// Convertir el mapa a un array de pares [clave, valor]
let array = [...frases];

// Ordenar el array por el valor (segunda posición del par)
array.sort((a, b) => a[1].localeCompare(b[1]));

// Mostrar los resultados ordenados
for (const [clave, valor] of array) {
    document.write(`<strong>${clave}</strong>: ${valor}<br>`);
}
