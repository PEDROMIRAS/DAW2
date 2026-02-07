function iniciarProceso() {
    const input = document.getElementById('inputNumero');
    const cajaResultado = document.getElementById('resultado');

    // Creamos la Promesa basada en el valor del input
    const promesaCalculo = new Promise((resolve, reject) => {
        const valor = Number(input.value);

        // Validación básica
        if (input.value === "") {
            reject("Error: El campo está vacío.");
        } else {
            // Si es válido, arrancamos la cadena con este número
            resolve(valor);
        }
    });

    // Encadenamos las 3 acciones (Chaining)
    promesaCalculo
        // ACCIÓN 1: Calcular el doble
        .then((numero) => {
            cajaResultado.innerHTML = `Paso 1: Recibido ${numero}. Calculando el doble...<br>`;
            return numero * 2; 
        })
        // ACCIÓN 2: Sumarle 100
        .then((numeroDoblado) => {
            // Usamos += para añadir texto sin borrar lo anterior
            cajaResultado.innerHTML += `Paso 2: Tenemos ${numeroDoblado}. Sumando 100...<br>`;
            return numeroDoblado + 100;
        })
        // ACCIÓN 3: Mostrar resultado final
        .then((resultadoFinal) => {
            cajaResultado.innerHTML += `<b>FIN: El resultado es ${resultadoFinal}</b>`;
        })
        // GESTIÓN DE ERRORES (Si reject se activa)
        .catch((mensajeError) => {
            cajaResultado.innerHTML = `<span style="color:red">${mensajeError}</span>`;
            console.error(mensajeError);
        });
}