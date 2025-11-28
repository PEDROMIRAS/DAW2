/*Una expresion regular que valide una URL de sitios web, cuyos requisitos son que
empiece por https://, termine en .es y en medio no haya ninguna ñ*/

const regExp = /^https:\/\/[^ñÑ\s]+\.es$/;

// Ejemplos válidos
console.log(regExp.test("https://google.es"));        // true
console.log(regExp.test("https://mi-web.es"));        // true
console.log(regExp.test("https://sub.dominio.es"));   // true

// Ejemplos inválidos
console.log(regExp.test("https://español.es"));       // false (contiene ñ)
console.log(regExp.test("http://google.es"));         // false (no empieza por https)
console.log(regExp.test("https://google.com"));       // false (no termina en .es)
