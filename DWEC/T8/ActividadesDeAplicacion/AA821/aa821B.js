// ERROR DE EJECUCIÓN (TypeError / ReferenceError)
let usuario = {
    nombre: "Alex",
    edad: 25
};

console.log("Iniciando programa...");

// Intentamos acceder a una propiedad de algo que no existe
console.log(usuario.direccion.calle); 

console.log("Este mensaje nunca se mostrará.");