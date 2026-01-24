function procesar() {
    // Creamos el objeto con TODOS los datos solicitados
    const info = {
        vehiculo: {
            marca: document.getElementById('marca').value,
            modelo: document.getElementById('modelo').value,
            bastidor: document.getElementById('bastidor').value,
            cilindrada: document.getElementById('cilindrada').value,
            puertas: document.getElementById('puertas').value,
            color: document.getElementById('color').value
        },
        propietario: {
            nombre: document.getElementById('nombre').value,
            apellidos: document.getElementById('apellidos').value,
            direccion: document.getElementById('direccion').value,
            telefono: document.getElementById('telefono').value,
            correo: document.getElementById('correo').value
        }
    };

    // Convertimos el objeto a JSON (string) y guardamos
    // Usamos sessionStorage para que se borre al cerrar el navegador
    sessionStorage.setItem('vehiculoDB', JSON.stringify(info));

    //Resetear todos los campos de entrada
    const entradas = document.querySelectorAll('input');
    entradas.forEach(input => input.value = '');
    
    // Lectura y Visualización
    mostrar();
}

function mostrar() {
    // Recuperamos el string y lo volvemos a convertir en objeto
    const datosRaw = sessionStorage.getItem('vehiculoDB');
    
    if (datosRaw) {
        const d = JSON.parse(datosRaw);
        const pantalla = document.getElementById('pantalla');

        pantalla.innerHTML = `
            <h3>Ficha Técnica Almacenada</h3>
            <p><b>Vehículo:</b> ${d.vehiculo.marca} ${d.vehiculo.modelo} (${d.vehiculo.color})</p>
            <p><b>Bastidor:</b> ${d.vehiculo.bastidor} | <b>Cilindrada:</b> ${d.vehiculo.cilindrada}</p>
            <p><b>Puertas:</b> ${d.vehiculo.puertas}</p>
            <hr>
            <h3>Datos del Dueño</h3>
            <p><b>Nombre:</b> ${d.propietario.nombre} ${d.propietario.apellidos}</p>
            <p><b>Dirección:</b> ${d.propietario.direccion}</p>
            <p><b>Contacto:</b> ${d.propietario.telefono} | ${d.propietario.correo}</p>
        `;
    }
}

// Para que los datos sigan ahí si el usuario refresca (F5) la página
window.onload = mostrar;