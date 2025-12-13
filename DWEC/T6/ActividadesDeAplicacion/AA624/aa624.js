// Solicita las dimensiones y las convierte a números.
let filas = parseInt(prompt("Introduzca el numero de filas para la tabla"));
let columnas = parseInt(prompt("Introduca el numero de columnas para la tabla"));

// Crea el elemento <table>.
let tabla = document.createElement('table');

// Bucle principal para crear filas (<tr>).
for (let i = 0; i < filas; i++) {
    let r = document.createElement('tr'); 
    
    // Bucle anidado para crear celdas (<td>).
    for (let j = 0; j < columnas; j++) {
        let d = document.createElement('td'); 
        
        // Contenido aleatorio y estilo de borde.
        d.textContent = Math.floor(Math.random()*10); 
        d.style.border = "1px solid black"; 
        
        r.appendChild(d);
    }
    tabla.appendChild(r);
}

// Estilos finales e inyección de la tabla en el documento.
tabla.style.border = "1px solid black"; 
tabla.style.borderCollapse = "collapse"; 
document.body.appendChild(tabla);


// OPCIÓN 1: Conteo Rápido (Basado en la colección total de elementos)
// ----------------------------------------------------------------------

// Cuenta todas las <tr> en el documento.
const fil = document.getElementsByTagName('tr').length;
// Cuenta todas las <td> en el documento (Total de celdas).
const totalCeldas = document.getElementsByTagName('td').length;
// Calcula las columnas por fila.
const col = fil > 0 ? totalCeldas / fil : 0; 

console.log(`\n--- Opción 1: Conteo Rápido ---`);
console.log(`Filas de la tabla: ${fil}`);
console.log(`Columnas de la tabla: ${col}`);


// OPCIÓN 2: Conteo mediante Recorrido Explícito (Cumpliendo el requisito)
// ----------------------------------------------------------------------

// Obtiene las filas <tr> DENTRO de la tabla creada.
const filasTabla = tabla.getElementsByTagName('tr'); 

let filasDetectadas = 0;
let totalCeldasDetectadas = 0;

// Bucle para recorrer explícitamente cada fila y sumar sus celdas.
for (let k = 0; k < filasTabla.length; k++) {
    filasDetectadas++;
    
    const celdasFila = filasTabla[k].getElementsByTagName('td');
    totalCeldasDetectadas += celdasFila.length; 
}

// Cálculo final del número de columnas por fila.
const columnasDetectadas = filasDetectadas > 0 ? totalCeldasDetectadas/filasDetectadas : 0;

console.log(`\n--- Opción 2: Recorrido Explícito ---`);
console.log(`Filas detectadas: ${filasDetectadas}`);
console.log(`Columnas detectadas (por fila): ${columnasDetectadas}`);