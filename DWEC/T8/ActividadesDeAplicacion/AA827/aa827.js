const boton = document.getElementById('botonFileSystem');
const info = document.getElementById('info');

boton.onclick = function() {
    // Abrimos el selector de archivos del sistema
    window.showOpenFilePicker()
        .then(function(handles) {
            // handles[0] es la referencia al archivo elegido
            return handles[0].getFile();
        })
        .then(function(archivo) {
            // Aquí ya tenemos el objeto del archivo con sus datos
            info.innerHTML = `
                <b>Nombre:</b> ${archivo.name} <br>
                <b>Tamaño:</b> ${archivo.size} bytes <br>
                <b>Tipo:</b> ${archivo.type || 'desconocido'}
            `;
            console.log("Archivo procesado con FileSystem API");
        })
        .catch(function(error) {
            // Manejamos si el usuario cancela la ventana
            console.error("Acceso denegado o cancelado:", error);
        });
};