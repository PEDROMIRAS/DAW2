window.onload = function() {
    
    // 1. INICIAR EL TEMPORIZADOR
    // setTimeout ejecuta la función interna una única vez después de 10000 milisegundos (10 segundos).
    setTimeout(function() {
        
        // 2. CÁLCULO DE ALTURA
        // document.documentElement.scrollHeight obtiene la altura total, incluyendo el contenido fuera de la vista.
        const alturaTotal = document.documentElement.scrollHeight;
        
        // 3. EJECUTAR SCROLL
        // window.scrollTo(X, Y) desplaza el scroll. Y = alturaTotal lleva la vista al final.
        window.scrollTo(0, alturaTotal);
        
        console.log(`Página cargada. Scroll ejecutado a los 10 segundos hasta la altura: ${alturaTotal}px`);
        
    }, 10000); // <-- 10000 milisegundos = 10 segundos

};