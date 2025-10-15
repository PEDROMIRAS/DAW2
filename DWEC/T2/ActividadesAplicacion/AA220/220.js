// Declaramos la variable donde se guardará la opción elegida por el usuario
let s_op;

do {
    // Mostramos el menú y pedimos al usuario que seleccione una opción
    s_op = prompt(`
        MENÚ DE ÁREAS
─────────────────────────────
a) Triángulo (b*h/2)
b) Rectángulo (b*h)
c) Círculo (π*r²)
d) Salir
─────────────────────────────
`);

    // Evaluamos la opción ingresada usando una estructura switch
    switch (s_op) {

        // Opción para calcular el área de un triángulo
        case 'a':
            const i_bT = Number(prompt('Indique la base del triángulo:'));   // Pedimos la base
            const i_hT = Number(prompt('Indique la altura del triángulo:')); // Pedimos la altura
            const i_resultadoT = (i_bT * i_hT / 2);                          // Fórmula del área
            console.log(`El área del triángulo es ${i_resultadoT}`);         // Mostramos el resultado
            break;

        // Opción para calcular el área de un rectángulo
        case 'b':
            const i_bR = Number(prompt('Indique la base del rectángulo:'));  // Pedimos la base
            const i_hR = Number(prompt('Indique la altura del rectángulo:'));// Pedimos la altura
            const i_resultadoR = (i_bR * i_hR);                              // Fórmula del área
            console.log(`El área del rectángulo es ${i_resultadoR}`);        // Mostramos el resultado
            break;

        // Opción para calcular el área de un círculo
        case 'c':
            const i_rC = Number(prompt('Indique el radio del círculo:'));    // Pedimos el radio
            const i_resultadoC = (Math.PI * Math.pow(i_rC, 2));              // Fórmula del área (π * r²)
            console.log(`El área del círculo es ${i_resultadoC}`);           // Mostramos el resultado
            break;

        // Opción para salir del programa
        case 'd':
            console.log('Saliendo del programa...');                         // Mensaje de salida
            break;

        // En caso de que la opción no sea válida
        default:
            alert('Opción no válida, intente de nuevo.');                    // Mensaje de error
            break;
    }

// El ciclo se repetirá mientras la opción elegida no sea 'd'
} while (s_op !== 'd');