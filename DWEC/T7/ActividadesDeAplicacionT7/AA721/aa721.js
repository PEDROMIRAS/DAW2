const texto = document.getElementById('texto');
const lista = document.getElementById('lista');
const btnAdd = document.getElementById('btn-add');
const btnOrder = document.getElementById('btn-order');

function ordenarLista() {
    // Convertimos los <li> en un Array para poder usar .sort()
    const elementos = Array.from(lista.getElementsByTagName('li'));

    // Ordenamos el array basándonos en el texto de cada <li>
    elementos.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Limpiamos la lista y volvemos a añadir los elementos ordenados
    lista.innerHTML = "";
    elementos.forEach(li => lista.appendChild(li));
}

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

btnOrder.addEventListener('click', ordenarLista);
