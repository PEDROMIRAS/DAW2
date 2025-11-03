//Función para calcular si un año es bisisesto o no 
function anyoBis(anyo){
    //Condiciones para evaluar si el año es bisiesto o no 
    if(anyo % 4 == 0 && (anyo % 100 != 0 || anyo % 400 == 0)){
        return `El año ${anyo} es bisiesto.`;
    }else{
        return `El año ${anyo} NO es bisiesto.`;
    }
}

//Uso por pantalla de la función
document.write(anyoBis(2020));