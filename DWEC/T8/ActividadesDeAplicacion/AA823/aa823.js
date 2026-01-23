const lista = document.getElementById('lista-btn');

lista.addEventListener('click', (event) => {
    const errorType = event.target.innerText;

    // AVISO: Se informa antes de ejecutar la acción
    console.warn("Aviso: Se va a intentar lanzar un error de tipo: " + errorType);

    try {
        // EXCEPCIÓN: Se lanza el objeto de error correspondiente
        switch (errorType) {
            case 'EvalError':
                throw new EvalError("Error en eval()");
            case 'InternalError':
                throw new Error("InternalError: Error interno del motor");
            case 'RangeError':
                throw new RangeError("Número fuera de rango");
            case 'ReferenceError':
                throw new ReferenceError("Variable no definida");
            case 'SyntaxError':
                throw new SyntaxError("Error de sintaxis");
            case 'TypeError':
                throw new TypeError("Tipo de dato inválido");
            case 'UriError':
                throw new URIError("Error en codificación de URI");
        }
    } catch (error) {
        // ERROR: Gestión de las 7 opciones en el catch
        if (error instanceof EvalError) {
            console.log("Manejando: EvalError detectado.");
        } else if (error instanceof RangeError) {
            console.log("Manejando: RangeError detectado.");
        } else if (error instanceof ReferenceError) {
            console.log("Manejando: ReferenceError detectado.");
        } else if (error instanceof SyntaxError) {
            console.log("Manejando: SyntaxError detectado.");
        } else if (error instanceof TypeError) {
            console.log("Manejando: TypeError detectado.");
        } else if (error instanceof URIError) {
            console.log("Manejando: UriError detectado.");
        } else {
            // Se usa para InternalError o errores genéricos
            console.log("Manejando: Error interno o genérico detectado.");
        }
        
        // Registro final del mensaje de la excepción
        console.error("Detalle técnico: " + error.message);
    }
});