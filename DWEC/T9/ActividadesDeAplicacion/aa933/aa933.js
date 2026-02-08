const boton = document.getElementById('btnCargar');
const contenedor = document.getElementById('contenedor-cv');

boton.addEventListener('click', () => {
    
    contenedor.innerHTML = "Cargando datos...";

    // Hacemos la petición al archivo que está en nuestra carpeta
    fetch('cv.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo leer el archivo");
            }
            return response.json(); // Convertimos el texto JSON a objeto JS
        })
        .then(datos => {
            // Llamamos a la función que pinta el HTML
            mostrarCurriculum(datos);
        })
        .catch(error => {
            console.error("Error:", error);
            contenedor.innerHTML = "Error: Recuerda abrir este archivo con un servidor local (Live Server), no con doble click.";
        });
});

function mostrarCurriculum(cv) {
    // Datos Personales
    let html = `
        <h2>${cv.datos_personales.nombre}</h2>
        <h3>${cv.datos_personales.profesion}</h3>
        <p>
            Email: ${cv.datos_personales.email} <br>
            Ciudad: ${cv.datos_personales.ciudad}
        </p>
    `;

    // Experiencia (es un array, lo recorremos)
    html += `<h3>Experiencia Laboral</h3>`;
    
    cv.experiencia.forEach(trabajo => {
        html += `
            <div style="margin-bottom: 15px;">
                <strong>${trabajo.puesto}</strong> en ${trabajo.empresa} (${trabajo.anio})<br>
                ${trabajo.descripcion}
            </div>
        `;
    });

    // Formación (es un array simple)
    html += `<h3>Formación Académica</h3><ul>`;
    
    cv.formacion.forEach(titulo => {
        html += `<li>${titulo}</li>`;
    });
    
    html += `</ul>`;

    // Inyectamos todo el HTML generado
    contenedor.innerHTML = html;
}