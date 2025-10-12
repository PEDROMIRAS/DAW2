// Pedimos al usuario una cantidad de días, horas, minutos y segundos
const i_d = Number(prompt('Indica una cantidad de días: '));
const i_h = Number(prompt('Indica una cantidad de horas: '));
const i_m = Number(prompt('Indica una cantidad de minutos: '));
const i_s = Number(prompt('Indica una cantidad de segundos: '));

// Convertimos cada valor a segundos
const i_dS = i_d * 24 * 60 * 60; // días a segundos
const i_hS = i_h * 60 * 60;      // horas a segundos
const i_mS = i_m * 60;           // minutos a segundos

// Sumamos todos los segundos
const i_sTot = i_dS + i_hS + i_mS + i_s;

// Mostramos el resultado total
console.log(`El total de segundos es: ${i_sTot}`);