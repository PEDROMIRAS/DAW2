const op1 = prompt('Escribe el primer número');
const simbolo = prompt('Escribe el símbolo');
const op2 = prompt('Escribe el segundo número');

let resultado;

if(simbolo === '+'){
    resultado = Number(op1) + Number(op2);
}else if(simbolo === '-'){
    resultado = Number(op1) - Number(op2);
}else if(simbolo === '*'){
    resultado = Number(op1) * Number(op2);
}else if(simbolo === '/'){
    resultado = Number(op1) / Number(op2);
}else if(simbolo === '%'){
    resultado = Number(op1) % Number(op2);
}else if(simbolo === '**'){
    resultado = Number(op1) ** Number(op2);
}

console.log(`Resultado: ${resultado}`);