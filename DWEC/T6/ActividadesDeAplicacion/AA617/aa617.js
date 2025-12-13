// Obtiene una colección (HTMLCollection) de todos los elementos <ul> en el documento.
// [0] selecciona el primer elemento <ul> de esa colección.
const lista = document.getElementsByTagName("ul")[0];

// Accede al primer elemento hijo de la lista (el primer <li>).
// Luego, extrae y muestra el contenido de texto de ese elemento en la consola del navegador.
console.log(lista.firstElementChild.textContent);

// Accede al último elemento hijo de la lista (el último <li>).
// Luego, extrae y muestra el contenido de texto de ese elemento en la consola del navegador.
console.log(lista.lastElementChild.textContent);