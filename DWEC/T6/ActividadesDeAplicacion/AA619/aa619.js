// Obtiene una colección de todos los elementos <p> (párrafos) en el documento.
// La propiedad .length devuelve el número de elementos en esa colección.
let p = document.getElementsByTagName('p').length;

// Obtiene una colección de todos los elementos <span> en el documento.
// La propiedad .length devuelve el número de elementos <span> encontrados.
let span = document.getElementsByTagName('span').length;

// Obtiene una colección de todos los elementos <a> (enlaces) en el documento.
// La propiedad .length devuelve el número de elementos <a> encontrados.
let a = document.getElementsByTagName('a').length;

// Muestra el número total de párrafos encontrados en el documento.
console.log("Parrafos: "+p);

// Muestra el número total de elementos span encontrados en el documento.
console.log("Span: "+span);

// Muestra el número total de enlaces (etiquetas <a>) encontrados en el documento.
console.log("A: "+a);