function pruebaRetornos() {
    try {
        console.log("Entrando en el bloque TRY...");
        // Lanzamos un error para forzar la entrada al CATCH
        throw new Error("Error provocado");
        
        return "Resultado de TRY"; // Este código nunca se ejecuta
    } 
    catch (error) {
        console.log("Entrando en el bloque CATCH: " + error.message);
        return "Resultado de CATCH";
    } 
    finally {
        console.log("Entrando en el bloque FINALLY...");
        return "Resultado de FINALLY";
    }
}

// Ejecución y captura del resultado final
const resultadoFinal = pruebaRetornos();
console.log("---");
console.log("El valor devuelto por la función es: " + resultadoFinal);