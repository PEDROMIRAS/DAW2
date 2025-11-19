//Examen de Funciuones JavaScript
//DWEC - T4
//Alumno: [Pedro Miras Pérez-Castejón]

//Ejercicio 1 — Función con parámetros y retorno

function calcularIVA(precio, tipoIVA){
    return (precio+((precio*tipoIVA)/100));
}

console.log('Ejercicio 1 - Funcion con parametros y retorno')
console.log(calcularIVA(120,21));

//Ejercicio 2 - Funciones anonimas y arrow functions

const par = function(numero){
    if(numero % 2 === 0){
        return true;
    }
    return false;
};

const impar = numero => {
    if(numero % 2 !== 0){
        return true;
    }
    return false;
};

console.log('Ejercicio 2 - Funciones anonimas y arrow functions')
console.log(par(2));
console.log(impar(3));

//Ejercicio 3 — Funciones que reciben otras funciones (callbacks)
const arr = [1,2,3,4,5];

function procesarArray(arr,operacion){
    const resultado = [];
    for (const n of arr) {
        resultado.push(operacion(n));
    }
    return resultado;
}

function doble(n){
    return n * 2;
};

function cuadrado(n){
    return n * n;
};

console.log('Ejercicio 3 — Funciones que reciben otras funciones (callbacks)');
console.log(procesarArray(arr,doble));
console.log(procesarArray(arr,cuadrado));

//Ejercicio 4 — Funciones con valores por defecto
function saludar(nombre, idioma = 'es'){
    if(idioma === 'en'){
        console.log(`Hello, ${nombre}`);
    }else if(idioma === 'fr'){
        console.log(`Bonjour, ${nombre}`);
    }else{
        console.log(`Hola, ${nombre}`);
    }
}
console.log('Ejercicio 4 — Funciones con valores por defecto');
saludar('Pedro');
saludar('Pedro', 'en');
saludar('Pedro', 'fr');

//Ejercicio 5 — Función recursiva
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}
console.log('Ejercicio 5 — Función recursiva');
console.log(factorial(5));

//Ejercicio 6 — Filtrar usuarios mayores de edad
const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Marta", edad: 19 },
    { nombre: "Pedro", edad: 16 }
];

let mayoresEdad = usuarios.filter( u => u.edad >= 18);

console.log('Ejercicio 6 — Filtrar usuarios mayores de edad');
console.log(mayoresEdad);

//Ejercicio 7 — Ordenar productos por precio
const productos = [
    { nombre: "Teclado", precio: 25 },
    { nombre: "Monitor", precio: 159 },
    { nombre: "Ratón", precio: 15 },
    { nombre: "Altavoces", precio: 45 }
];

let descendente = Array.from(productos).sort((a, b) => b.precio - a.precio);
let ascendente = Array.from(productos).sort((a, b) => a.precio - b.precio);

console.log('Ejercicio 7 — Ordenar productos por precio');
console.log(descendente);
console.log(ascendente);

//Ejercicio 8 — Convertir temperaturas

const celsius = [0, 10, 20, 30, 40];

const fahrenheit = celsius.map(temp => temp * 1.8 + 32);

console.log('Ejercicio 8 — Convertir temperaturas')
console.log(fahrenheit);

//Ejercicio 9 — Filtrar y transformar libros
const libros = [
    { titulo: "El Quijote", paginas: 1200 },
    { titulo: "1984", paginas: 350 },
    { titulo: "JavaScript Avanzado", paginas: 250 },
    { titulo: "Caperucita Roja", paginas: 50 }
];

const titulos = libros.filter(l => l.paginas > 200).map(l => l.titulo);

console.log('Ejercicio 9 — Filtrar y transformar libros');
console.log(titulos);

//Ejercicio 10 — Ordenar nombres alfabéticamente y eliminar duplicados
const nombres = ["Ana", "Luis", "Marta", "Luis", "Ana", "Carlos"];

const personas = new Set(nombres);

const gente = Array.from(personas);
gente.sort((a,b) => a.localeCompare(b));

console.log('Ejercicio 10 — Ordenar nombres alfabéticamente y eliminar duplicados');
console.log(gente);