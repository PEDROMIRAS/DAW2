//Creamos un mapa vacío que vamos a rellenar con su metodo .set
const personas = new Map();

//Añadimos uno a uno las clave-valor
personas.set('23840735Q', 'Pedro');
personas.set('48759234L', 'María');
personas.set('75928340K', 'Carlos');
personas.set('12837465M', 'Lucía');
personas.set('83920147P', 'Javier');
personas.set('94827365T', 'Sofía').set('56473829R', 'Andrés').set('20394857N', 'Laura');
personas.set('67584920S', 'Miguel');
personas.set('39485726V', 'Paula');

//Mostramos el Map
for ([DNI, nombre] of personas) {
    console.log(`DNI: ${DNI}, Nombre: ${nombre}`);
}

console.log('\n');//Salto de linea 

//Modificamos un valor por su clave añadiendo un elemento que tenga la misma clave que otro valor
personas.set('75928340K', 'Alberto');

//Mostramos el Map
for ([DNI, nombre] of personas) {
    console.log(`DNI: ${DNI}, Nombre: ${nombre}`);
}