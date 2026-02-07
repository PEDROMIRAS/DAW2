// Referencias al DOM
const inputBusqueda = document.getElementById('inputBusqueda');
const btnBuscar = document.getElementById('btnBuscar');
const contenedor = document.getElementById('contenedor-resultados');

// Evento Click
btnBuscar.addEventListener('click', () => {
    
    const termino = inputBusqueda.value;

    // Validación simple
    if (termino === "") {
        alert("Por favor, escribe algo para buscar.");
        return;
    }

    // Limpiamos resultados anteriores y mostramos carga
    contenedor.innerHTML = "Cargando productos...";

    // Construcción de la URL
    // encodeURIComponent convierte espacios y caracteres raros para que la URL no se rompa
    const urlAPI = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(termino)}`;

    // Petición Fetch (Asíncrona)
    fetch(urlAPI)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la respuesta de la API");
            }
            return response.json();
        })
        .then(data => {
            // La API devuelve un array llamado 'results' con muchos productos.
            // El ejercicio pide SOLO LOS 3 PRIMEROS.
            const tresPrimeros = data.results.slice(0, 3);
            
            // Renderizamos los resultados
            mostrarProductos(tresPrimeros);
        })
        .catch(error => {
            console.error(error);
            contenedor.innerHTML = "Hubo un error al buscar los productos.";
        });
});


// Función auxiliar para pintar el HTML
function mostrarProductos(productos) {
    // Si no hay resultados
    if (productos.length === 0) {
        contenedor.innerHTML = "No se encontraron productos con ese nombre.";
        return;
    }

    // Limpiamos el mensaje de "Cargando..."
    contenedor.innerHTML = "";

    // Recorremos los 3 productos y añadimos HTML
    productos.forEach(producto => {
        // Creamos un div para cada producto
        // Usamos estilos en línea mínimos solo para que la imagen no sea gigante
        const htmlProducto = `
            <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                <h3>${producto.title}</h3>
                <img src="${producto.thumbnail}" alt="Imagen del producto">
                <p><strong>Precio:</strong> $${producto.price} ${producto.currency_id}</p>
                <p>
                    <a href="${producto.permalink}" target="_blank">Ver en MercadoLibre</a>
                </p>
            </div>
        `;

        // Añadimos al contenedor (+= concatena)
        contenedor.innerHTML += htmlProducto;
    });
}