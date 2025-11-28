/*Una expresion regular que valide una hora en formato HH:MM de 24 horas, donde
HH represenya las horas  y MM los minutos*/

const regExp = /^([01]\d|2[0-3]):[0-5]\d$/;

console.log(regExp.test("12:50"));  // true
console.log(regExp.test("09:09"));  // true
console.log(regExp.test("24:10"));  // false (24 no es válido)
console.log(regExp.test("12:60"));  // false (60 no es válido)