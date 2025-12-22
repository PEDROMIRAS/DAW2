const texto = document.getElementById('texto');
const lista = document.getElementById('lista');
const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    // Evitar añadir tareas vacías
    if (texto.value === '') return; 

    const item = document.createElement('li');
    // Agregamos un espacio después del texto para que no se pegue al botón
    item.textContent = texto.value + ' '; 
    
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'X';

    item.appendChild(btnDelete);

    // Añadimos el 'li' (que ya trae el botón dentro) a la lista
    lista.appendChild(item);

    // Limpiamos el input para escribir algo nuevo
    texto.value = '';

    btnDelete.addEventListener('click', () => {
        // Como el botón es hijo del item, al borrar el item se borra todo
        item.remove();
    })
})