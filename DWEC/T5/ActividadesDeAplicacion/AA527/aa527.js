/*Una exprion regular que valide un precio en € con dos decimales. Debe permitir utilizar como
caracter separador tanto el punto como la coma, y debe haber un espacio en blanco entre el 
precio y el caracter €*/

const regExp = /^\d+[.,]\d{2}\s€$/;

console.log(regExp.test("12.50 €"));   // true
console.log(regExp.test("9,99 €"));    // true
console.log(regExp.test("12.5 €"));    // false (solo un decimal)
console.log(regExp.test("15,300 €"));  // false (tres decimales)