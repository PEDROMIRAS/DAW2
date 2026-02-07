// Referencias al DOM
const btnCargar = document.getElementById('btnCargar');
const colPersona = document.getElementById('col-persona');
const colPlaneta = document.getElementById('col-planeta');
const colNave = document.getElementById('col-nave');

// URLs de la API
const URL_PEOPLE = 'https://swapi.dev/api/people/1/';
const URL_PLANET = 'https://swapi.dev/api/planets/1/';
// La nave 1 da error 404, usamos la 9 (Estrella de la Muerte)
const URL_STARSHIP = 'https://swapi.dev/api/starships/9/';

// Evento Click
btnCargar.addEventListener('click', () => {
    
    // Indicamos visualmente que empieza la carga
    colPersona.innerHTML = 'Cargando...';
    colPlaneta.innerHTML = 'Cargando...';
    colNave.innerHTML = 'Cargando...';

    // Lógica de Petición (Promise.all)
    // Lanzamos las 3 peticiones a la vez.
    // Convertimos a JSON en el propio array de promesas.
    Promise.all([
        fetch(URL_PEOPLE).then(response => response.json()),
        fetch(URL_PLANET).then(response => response.json()),
        fetch(URL_STARSHIP).then(response => response.json())
    ])
    .then((resultados) => {
        // Promise.all devuelve un array con los datos en el mismo orden
        const persona = resultados[0];
        const planeta = resultados[1];
        const nave = resultados[2];

        // Renderizado (Mostrar datos)
        mostrarPersona(persona);
        mostrarPlaneta(planeta);
        mostrarNave(nave);
    })
    .catch((error) => {
        console.error("Error en la petición:", error);
        colPersona.innerHTML = "Error de conexión.";
    });
});

// --- Funciones auxiliares para generar el HTML de cada celda ---

function mostrarPersona(data) {
    colPersona.innerHTML = `
        <ul>
            <li><strong>Nombre:</strong> ${data.name}</li>
            <li><strong>Altura:</strong> ${data.height}</li>
            <li><strong>Ojos:</strong> ${data.eye_color}</li>
        </ul>
    `;
}

function mostrarPlaneta(data) {
    colPlaneta.innerHTML = `
        <ul>
            <li><strong>Nombre:</strong> ${data.name}</li>
            <li><strong>Clima:</strong> ${data.climate}</li>
            <li><strong>Gravedad:</strong> ${data.gravity}</li>
        </ul>
    `;
}

function mostrarNave(data) {
    colNave.innerHTML = `
        <ul>
            <li><strong>Nombre:</strong> ${data.name}</li>
            <li><strong>Modelo:</strong> ${data.model}</li>
            <li><strong>Clase:</strong> ${data.starship_class}</li>
        </ul>
    `;
}