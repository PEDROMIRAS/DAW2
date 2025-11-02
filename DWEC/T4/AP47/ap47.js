const palabras = ["camión", "sol", "árbol", "programación", "libro", "ratón", "café", "nube", "luz", "música"];

// Filtrar palabras con tildes
const conTilde = palabras.filter(p => /[áéíóúÁÉÍÓÚ]/.test(p));//test() devuelve true si hay coincidencia

// Filtrar palabras sin tildes
const sinTilde = palabras.filter(p => !/[áéíóúÁÉÍÓÚ]/.test(p));//test() devuelve true si hay coincidencia
//La expresión /[áéíóúÁÉÍÓÚ]/ busca si la palabra contiene alguna vocal con tilde
//La expresión !/[áéíóúÁÉÍÓÚ]/ busca si la palabra no contiene ninguna vocal con tilde

// Mostrar resultados
document.write("Sin tilde: ", sinTilde, "<br>");
document.write("Con tilde: ", conTilde);
