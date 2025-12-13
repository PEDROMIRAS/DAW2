// Inicia un temporizador que ejecutará la función cada 10 segundos (10000 milisegundos).
const thereAreCookies = setInterval(function(){
    // Obtiene el elemento del DOM para mostrar mensajes de estado.
    let p = document.getElementById('info');
    // Obtiene la cadena que contiene todas las cookies accesibles.
    const cookiesString = document.cookie;

    // Comprueba si la cadena de cookies NO está vacía (es decir, si existen cookies).
    if(cookiesString){
        p.innerHTML = "Se detectaron cookies. Procediendo a borrar TODAS...";

        // Separa la cadena de cookies en un array, usando el ';' como delimitador.
        const cookiesArray = cookiesString.split(';');

        // Itera sobre cada cookie en el array.
        cookiesArray.forEach(cookie =>{
            // Limpia espacios en blanco.
            const cookieTrimmed = cookie.trim();

            // Extrae el nombre de la cookie (la parte anterior al signo '=')
            const cookieName = cookieTrimmed.split('=')[0];

            // Borra la cookie estableciendo su tiempo de vida a cero (max-age=0).
            document.cookie = `${cookieName}=; max-age=0; path=/`;
            // Muestra la cookie borrada en la consola.
            console.log(`Cookie borrada: ${cookieName}`);
        })
    }else{
        // Si no hay cookies, muestra el mensaje de estado.
        p.innerHTML = "No hay cookies guardadas."
    }
},10000);



// --- FUNCIÓN PARA CREAR COOKIES DE PRUEBA ---
function crearCookiesPrueba() {
    // Estas cookies se crean con una duración de 5 minutos (300 segundos).
    // Esto asegura que duren lo suficiente para que el monitor las detecte y las borre.
    document.cookie = "nombreUsuario=Pedro; max-age=300; path=/";
    document.cookie = "ultimaVisita=Hoy; max-age=300; path=/";
    console.log("Cookies de prueba creadas. El monitor empezará a detectarlas.");
}

// Vincula la función de creación de cookies al botón
document.getElementById('crearCookies').addEventListener('click', crearCookiesPrueba);