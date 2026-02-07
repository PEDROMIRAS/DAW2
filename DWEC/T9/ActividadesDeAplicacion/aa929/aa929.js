const statusW = document.querySelector('.status');
// Creamos la Promesa que encapsula el evento 'DOMContentLoaded'
const esperarDOM = new Promise((resolve, reject) => {
    // Si el DOM ya está listo (por si el script corre tarde), resolvemos directamente
    if (document.readyState !== 'loading') {
        resolve();
    } else {
        // Si no, esperamos al evento
        document.addEventListener('DOMContentLoaded', () => {
            resolve();
        });
    }
});

// Ejecución
console.log("CARGANDO..."); // Mensaje inicial

esperarDOM.then(() => {
    statusW.innerHTML = 'LISTO PARA ACTUAR';
    console.log("LISTO PARA ACTUAR"); // Mensaje final
});

