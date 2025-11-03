//Array con palabras variadas
const palabras = ["camión", "sol", "árbol", "programación", "libro", "ratón", "café", "nube", "luz", "música"];

//Array de vocales con tilde
const vocalesTilde = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];

//Funcion que recibe ambos arrays, palabras y vocales con tilde
function sinTildes(palabras, vocalesTilde){
    //Filtrar palabras sin tildes, uso de la funcion filter que evalua si tiene tilde o no
    let palabrasSinTilde = palabras.filter(palabra => {
        for (let i = 0; i < vocalesTilde.length; i++) {
            if (palabra.includes(vocalesTilde[i])) {
                //Si tiene tilde, no se mete en el array
                return false;
            }
        }
        return true;
    });
    return palabrasSinTilde; 
}
// Mostrar resultados
document.write("Sin tilde: ", sinTildes(palabras, vocalesTilde));

//
// Filtrar palabras con tildes
//const conTilde = palabras.filter(p => /[áéíóúÁÉÍÓÚ]/.test(p));//test() devuelve true si hay coincidencia

// Filtrar palabras sin tildes
//const sinTilde = palabras.filter(p => !/[áéíóúÁÉÍÓÚ]/.test(p));//test() devuelve true si hay coincidencia
//La expresión /[áéíóúÁÉÍÓÚ]/ busca si la palabra contiene alguna vocal con tilde
//La expresión !/[áéíóúÁÉÍÓÚ]/ busca si la palabra no contiene ninguna vocal con tilde

// Mostrar resultados
//document.write("Sin tilde: ", sinTilde, "<br>");
//document.write("Con tilde: ", conTilde);