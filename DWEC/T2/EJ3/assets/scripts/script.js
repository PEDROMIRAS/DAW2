/*Mensajes en el navegador
Combina todos lo mensajes dek navegador vistos hasta ahora. 
Para ello crea un fichero JavaScript que tras ejecutarlo en 
el navegador: 
-Pida el nombre del usuario. El usuario deberá introducir su nombre
-Le pregunte al usuario si quiere abandonar el programa. El usuario debera pulsar aceptar o cancelar.
-Lance una alerta con la decision del usuario.
-Muestre en la ocnsola <<FIN DEL PROGRAMA>>. El mensaje debe aparecer en negrita, subrayado y en color azul.
*/
let nombre = prompt("Por favor, introduce tu nombre:");
let decision = confirm("¿Quieres abandonar el programa?");
alert("Has decidido: " + (decision ? "Abandonar el programa" : "Continuar en el programa"));
console.log("%cFIN DEL PROGRAMA", "font-weight: bold; text-decoration: underline; color: blue;");
//FIN
