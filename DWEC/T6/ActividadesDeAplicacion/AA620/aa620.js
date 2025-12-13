// Selecciona el primer elemento <ul> (lista desordenada) que encuentre en el documento.
let lista = document.querySelector('ul');

// Declara una variable para almacenar la entrada del usuario.
let ingrediente;

// Inicia un bucle do...while que garantiza que el código dentro se ejecute al menos una vez.
do {
    // Muestra una caja de diálogo al usuario pidiendo que ingrese un ingrediente
    // El valor ingresado (o null si pulsa Cancelar) se guarda en 'ingrediente'.
    ingrediente = prompt("Ingrese un ingrediente");

    // Comprueba dos condiciones:
    // 1. ingrediente !== null: Asegura que el usuario no pulsó "Cancelar" en el prompt.
    // 2. ingrediente.trim() !== '': Asegura que el texto ingresado no esté vacío o solo contenga espacios en blanco.
    if (ingrediente !== null && ingrediente.trim() !== '') {
        // Crea un nuevo elemento de lista (<li>) en memoria.
        let item = document.createElement('li');
        
        // Asigna el texto ingresado por el usuario al contenido del nuevo <li>.
        item.textContent = ingrediente;
        
        // Agrega el nuevo <li> como el último hijo de la <ul> seleccionada,
        // haciendo que el ingrediente aparezca en la lista en la página web.
        lista.appendChild(item);
    }
    
// El bucle continúa ejecutándose mientras la variable 'ingrediente' no sea null 
// (es decir, mientras el usuario no haya pulsado "Cancelar").
} while (ingrediente !== null);