let lista = document.querySelector('ul');
let ingrediente;
do {
    ingrediente = prompt("Ingrese un ingrediente");

    if (ingrediente !== null && ingrediente.trim() !== '') {
        let item = document.createElement('li');
        item.textContent = ingrediente;
        lista.appendChild(item);
    }
    
} while (ingrediente !== null);