// Pregunta al usuario si quiere ordenar.
const ordenar = prompt("¿Desea ordenar la lista?");

// Obtiene la lista (<ul>) y sus elementos (<li>), y los convierte a un Array.
let lista = document.querySelector('ul');
const elementosLista = lista.querySelectorAll('li');
const elementosArray = Array.from(elementosLista);

// Si el usuario escribe 'si' o 'Si', ordena alfabéticamente.
if(ordenar === 'si' || ordenar === 'Si'){
    // Ordenación alfabética.
    elementosArray.sort((a,b)=>{
        const textoA = a.textContent.toLocaleLowerCase();
        const textoB = b.textContent.toLocaleLowerCase();

        if(textoA < textoB){
            return -1;
        }
        if(textoA > textoB){
            return 1;
        }
        return 0;
    });
    
    // Reinserta los elementos ordenados en el DOM.
    elementosArray.forEach(elemento =>{
        lista.appendChild(elemento);
    })

    console.log("Lista ordenada alfabéticamente.");

}else{
    // Si la respuesta es otra (o cancela), ordena aleatoriamente.
    // Ordenación aleatoria (barajado).
    elementosArray.sort((a,b)=>{
        return Math.random() - 0.5;
    })

    // Reinserta los elementos barajados en el DOM.
    elementosArray.forEach(elemento => {
        lista.appendChild(elemento);
    });
    console.log("Lista ordenada aleatoriamente.");
}