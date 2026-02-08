const btn = document.getElementById('btnEnviar');
const inputNombre = document.getElementById('nombre');
const inputMensaje = document.getElementById('mensajeInput');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', () => {
    enviarDatos();
});

// Función ASÍNCRONA (async)
async function enviarDatos() {
    
    const nombre = inputNombre.value;
    const msg = inputMensaje.value;

    if (nombre === "" || msg === "") {
        alert("Escribe algo en los dos campos");
        return;
    }

    resultado.innerHTML = "Conectando con httpbin.org...";

    try {
        // AWAIT: Hacemos la petición POST
        // httpbin.org/post es un servicio de prueba que siempre responde bien
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: nombre,
                contenido: msg
            })
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // AWAIT: Procesamos el JSON
        const data = await response.json();

        // Mostramos el resultado
        // En httpbin, los datos que enviamos vuelven dentro de la propiedad 'json'
        resultado.innerHTML = `
            <strong style="color:green">¡Datos recibidos de vuelta!</strong><br>
            El servidor confirma que recibió:<br>
            Usuario: ${data.json.usuario}<br>
            Mensaje: ${data.json.contenido}
        `;
        
        console.log("Respuesta completa:", data);

    } catch (error) {
        console.error(error);
        resultado.innerHTML = "Error: " + error.message;
        
        // Si falla:
        alert("Si falla, prueba a desactivar temporalmente el bloqueador de anuncios (icono rojo en tu navegador) o abre esto en una ventana de Incógnito.");
    }
}