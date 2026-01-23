/**
 * Simulador de gestión de errores en JS
 */
function procesarPerfilUsuario(jsonString) {
    console.log("--- Inicio del proceso ---");

    // EL AVISO (Warning)
    // No detiene la ejecución, solo informa de algo que podría ser un problema.
    const datosBase = { nombre: "Invitado", edad: null };
    if (!jsonString.includes("edad")) {
        console.warn("AVISO: El JSON no contiene el campo 'edad'. Se asignará valor nulo.");
    }

    try {
        // LA EXCEPCIÓN (Exception)
        // Es un error previsto que podemos "atrapar" para que la app no muera.
        console.log("Intentando parsear JSON...");
        let usuario = JSON.parse(jsonString); // Si el JSON está mal formado, lanza una excepción.
        console.log("Usuario parseado con éxito:", usuario.nombre);

    } catch (error) {
        console.error("EXCEPCIÓN CAPTURADA: Hubo un problema con el formato de los datos.");
        console.log("Detalle técnico:", error.message);
        // La ejecución continúa gracias al bloque try-catch.
    }

    // EL ERROR (Runtime Error)
    // Un fallo crítico (ej. referencia a algo que no existe) que, si no se controla,
    // detiene por completo el hilo de ejecución.
    console.log("Intentando renderizar interfaz...");
    
    // Forzamos un ReferenceError llamando a una función que NO existe.
    renderizarModuloInexistente(); 

    console.log("Este mensaje nunca se verá porque el error de arriba detuvo el script.");
}

// Ejecución con un JSON mal formado para ver la excepción y el aviso
procesarPerfilUsuario('{"nombre": "Alex"');