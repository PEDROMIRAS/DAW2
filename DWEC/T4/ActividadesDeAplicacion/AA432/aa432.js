function anagrama(str1, str2){
    // Eliminar espacios y convertir a minúsculas
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();

    // Verificar si las longitudes son iguales
    if(str1.length !== str2.length){
        return false;
    }

    //Pasar a arrays, ordenar y unir de nuevo
    let arr1 = str1.split('').sort().join('');
    let arr2 = str2.split('').sort().join('');
    
    for (const letra of arr1) {
        if(!arr2.includes(letra)){
            return false;
        }
        
    }
    return true;
}

anagrama("Fresa", "Frose") ? document.write("<p>Son anagramas</p>") : document.write("<p>No son anagramas</p>");