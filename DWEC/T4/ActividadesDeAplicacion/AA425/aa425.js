//Función para devolver la letra en función del número del DNI
function letraDNI(numDNI){
    let resto = numDNI % 23;
    switch(resto){
        case 0:
            return "T";
            break;
        case 1:
            return "R";
            break;
        case 2:
            return "W";
            break;
        case 3:
            return "A";
            break;
        case 4:
            return "G";
            break;
        case 5:
            return "M";
            break;
        case 6:
            return "Y";
            break;
        case 7:
            return "F";
            break;
        case 8:
            return "P";
            break;
        case 9:
            return "D";
            break;
        case 10:
            return "X";
            break;
        case 11:
            return "B";
            break;
        case 12:
            return "N";
            break;
        case 13:
            return "J";
            break;
        case 14:
            return "Z";
            break;
        case 15:
            return "S";
            break;
        case 16:
            return "Q";
            break;
        case 17:
            return "V";
            break;
        case 18:
            return "H";
            break;
        case 19:
            return "L";
            break;
        case 20:
            return "C";
            break;
        case 21:
            return "K";
            break;
        case 22:
            return "E";
            break;
        default:
            return "Número de DNI inválido.";
            break;
    }
}

// Mostrar número + letra
let numero = 23840735;
document.write(numero + letraDNI(numero));