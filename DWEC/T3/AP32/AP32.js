//--------------------------Doble array 1D---------------------------------
// Array con los nombres de los colores
let nombres = ["Naranja", "Lima", "Turquesa", "Rosa", "Rojo"];

// Array con los códigos hexadecimales correspondientes
let codigos = ["#F39C12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"];

// Mostramos la información en pantalla
document.write("<h3>Lista de Colores (Doble Array 1D)</h3>");
for (let i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + " : " + codigos[i] + "<br>");
}

//-----------------------------Array 2D------------------------------------
// Creamos un array multidimensional con nombre y código hexadecimal
let colores = [
    ["Naranja", "#F39C12"],
    ["Lima", "#C0F312"],
    ["Turquesa", "#12F3E5"],
    ["Rosa", "#F312AF"],
    ["Rojo", "#F31212"]
];

// Mostramos la lista de colores en pantalla
document.write("<h3>Lista de Colores (Array 2D)</h3>");

for (let i = 0; i < colores.length; i++) {
    document.write(colores[i][0] + " : " + colores[i][1] + "<br>");
}

//----------------------------Array de objetos------------------------------
// Un array de colores rellenado con objetos que son cada color nombre+valor
const o_colores = [
    { nombre: 'Naranja', valor: '#F39C12' },
    { nombre: 'Lima', valor: '#C0F312' },
    { nombre: 'Turquesa', valor: '#12F3E5' },
    { nombre: 'Rosa', valor: '#F312AF' },
    { nombre: 'Rojo', valor: '#F31212' }
];

// Mostramos la información en pantalla
document.write("<h3>Lista de Colores (Array de Objetos)</h3>");
for (let i = 0; i < o_colores.length; i++) {
    document.write(`${o_colores[i].nombre}: ${o_colores[i].valor}<br>`);
}