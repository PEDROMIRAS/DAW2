// Solicita y almacena el nombre del usuario.
const nombre = prompt("Por favor, introduce tu nombre:");
// Solicita y almacena la edad del usuario.
const edad = prompt("Por favor, introduce tu edad:");

// Define el tiempo de expiración: 60 segundos/minuto * 30 minutos = 1800 segundos.
const expira = 60 * 30;


// Utilizamos document.cookie para establecer la cookie.
// El formato clave=valor se usa para cada dato.
// La directiva 'max-age' garantiza que la cookie dure 30 minutos (1800 segundos),
// incluso si el usuario cierra el navegador.
document.cookie = `nombre=${nombre}; max-age=${expira}`;
document.cookie = `edad=${edad}; max-age=${expira}`;
