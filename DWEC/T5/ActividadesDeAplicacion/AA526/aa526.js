/*Valida solo las letras del castellano: debe incluir mayúsculas. 
minusculas y caracteres con tilde, pero no espacios en blanco*/
const regExp = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/;

regExp.test("José");     // true
regExp.test("PINGÜINO"); // true
regExp.test("niño");     // true
regExp.test("hola mundo"); // false (tiene espacio)
regExp.test("árbol3");     // false (tiene número)