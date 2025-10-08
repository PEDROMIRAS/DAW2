let inicial = prompt("Introduce un número inicial:");
//Inicial del dia de la semana (L,M,X,J,V,S,D)
function horario(inicial) {
    // Validar la entrada de datos
    if (inicial === null) {
        return "No se ha introducido ningún valor.";
    }else if (inicial.length !== 1) {
        return "Por favor, introduce solo un carácter.";
    }else if (!"LMXJVSD".includes(inicial.toUpperCase())) {
        return "Carácter no válido. Introduce L, M, X, J, V, S o D.";
    }else {
        switch (inicial.toUpperCase()) {
            case "L":
                return "El horario del Lunes es de 8 a 15h.";
            case "M":
                return "EL horario del Martes es de 8 a 15h.";
            case "X":
                return "El horario del Miércoles es de 8 a 15h.";
            case "J":
                return "El horario del Jueves es de 8 a 15h.";
            case "V":
                return "El horario del Viernes es de 8 a 14h.";
            case "S":
                return "El horario del Sábado es de 9 a 13h.";
            case "D":
                return "El domingo está cerrado.";
            default:
                return "Error inesperado.";
        }
    }
}
console.log(horario(inicial));