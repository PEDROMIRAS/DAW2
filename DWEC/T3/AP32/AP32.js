//Un array de colores rellenado con objetos que son cada color nombre+valor
const colores = [
    { nombre: 'Naranja', valor: '#F39C12' },
    { nombre: 'Lima', valor: '#C0F312' },
    { nombre: 'Turquesa', valor: '#12F3E5' },
    { nombre: 'Rosa', valor: '#F312AF' },
    { nombre: 'Rojo', valor: '#F31212' }
];

// Mostrar los colores en pantalla
for(let i = 0; i < colores.length; i++){
    console.log(`${colores[i].nombre}: ${colores[i].valor}`);
}