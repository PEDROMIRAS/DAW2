// Referencias al DOM y URL de la API
const escaparate = document.getElementById('escaparate');

// --- OPCIÓN A: API DE CAFÉ (La del enunciado, suele dar error CORS) ---
const API_URL = "https://coffee.alexflipnote.dev/random";

// --- OPCIÓN B: API DE PRUEBA QUE SÍ FUNCIONA (Lorem Picsum) ---
// Si quieres probar que tu código va bien, descomenta esta línea:
//const API_URL = "https://picsum.photos/300/200";

// Iniciamos la generación de la tienda
cargarProductos();

function cargarProductos() {
    // Bucle para crear 9 huecos (3 filas x 3 columnas)
    for (let i = 1; i <= 9; i++) {

        const div = document.createElement('div');
        div.style.border = "1px solid #333";
        div.style.padding = "10px";
        div.style.textAlign = "center";

        // Dejamos la imagen vacía inicialmente
        div.innerHTML = `
            <h3>Café Especial #${i}</h3>
            <img id="img-${i}" src="" alt="Cargando..." style="width: 100%; height: 150px; object-fit: cover; background-color: #eee;">
            <p>Descripción del producto ${i}.</p>
            <p><strong>Precio:</strong> ${10 + i} €</p>
        `;

        escaparate.appendChild(div);

        // Llamamos a la API. 
        // Añadimos un número aleatorio al final (?t=...) para evitar 
        // que el navegador use la caché y nos dé 9 veces la misma foto.
        fetch(API_URL + "?t=" + Math.random())
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la red");
                }
                // IMPORTANTE: Como la URL no devuelve texto JSON, sino una IMAGEN,
                // usamos .blob() (Binary Large Object).
                return response.blob();
            })
            .then(miImagenBlob => {
                // Convertimos los datos binarios en una URL que el navegador entienda
                const urlVisible = URL.createObjectURL(miImagenBlob);
                
                // Asignamos esa URL a la etiqueta <img>
                document.getElementById(`img-${i}`).src = urlVisible;
            })
            .catch(error => {
                console.error("Error (Seguramente CORS):", error);
                // Si falla, cambiamos el texto alternativo
                document.getElementById(`img-${i}`).alt = "Bloqueado por CORS";
            });
    }
}