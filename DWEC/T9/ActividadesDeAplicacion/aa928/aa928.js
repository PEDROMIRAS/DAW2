// Definimos una función genérica que acepta un 'callback'
// Esta función simula cualquier tarea que tarde un tiempo 'x'
function hacerTarea(tarea, tiempo, callback) {
    console.log(`Empezando a: ${tarea}...`);
    
    setTimeout(() => {
        console.log(`${tarea} completada.`);
        // Cuando termina el tiempo, llamamos a la siguiente función (el callback)
        callback(); 
    }, tiempo);
}

// EJECUCIÓN (El problema visual)
console.log("--- INICIO DE LA RUTINA ---");

// Primer paso: Ducharse
hacerTarea("Ducharse", 2000, () => {
    
    // Segundo paso: Vestirse (SOLO empieza cuando termina ducharse)
    hacerTarea("Vestirse", 1000, () => {
        
        // Tercer paso: Desayunar (SOLO empieza cuando termina vestirse)
        hacerTarea("Desayunar", 1500, () => {
            
            // Fin de la cadena
            console.log("--- RUTINA TERMINADA, ME VOY A CLASE ---");
            
        }); 
    }); 
});