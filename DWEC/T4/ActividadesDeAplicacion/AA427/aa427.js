(function(){
    // Escribe "Comenzando..." en el documento inmediatamente
    document.write(`Comenzando...`);

    // setTimeout retrasa la ejecución del código dentro de la función
    // aquí espera 3000 ms (3 segundos) antes de ejecutar
    setTimeout(()=>{
        document.write(`Finalizado`) // Después de 3 segundos escribe "Finalizado"
    }, 3000);
})(); // Los paréntesis finales ejecutan la función inmediatamente