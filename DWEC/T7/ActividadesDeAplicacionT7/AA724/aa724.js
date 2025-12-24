const parrafo = document.getElementById('parrafo');
const textoOriginal = parrafo.textContent; // Guardamos copia para restaurar luego

// Función reutilizable para borrar cualquier letra
function borrarLetra(letra) {
    // Creamos una expresión regular dinámica
    // 'g' = global (todas las que encuentre)
    // 'i' = case insensitive (mayúsculas y minúsculas)
    const regex = new RegExp(letra, 'gi');

    // Reemplazamos lo que encuentre el regex por nada ('')
    parrafo.textContent = parrafo.textContent.replace(regex, '');
}

// Asignamos los eventos a los botones
document.getElementById('btn-a').addEventListener('click', () => borrarLetra('a'));
document.getElementById('btn-e').addEventListener('click', () => borrarLetra('e'));
document.getElementById('btn-i').addEventListener('click', () => borrarLetra('i'));
document.getElementById('btn-o').addEventListener('click', () => borrarLetra('o'));
document.getElementById('btn-u').addEventListener('click', () => borrarLetra('u'));

// Botón para restaurar
document.getElementById('btn-reset').addEventListener('click', () => {
    parrafo.textContent = textoOriginal;
});