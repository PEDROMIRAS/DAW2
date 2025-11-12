import { motos } from "./motos.js";
console.log(motos);

let lista = JSON.stringify(motos);
console.log(lista);

lista = JSON.parse(lista);
console.log(lista);