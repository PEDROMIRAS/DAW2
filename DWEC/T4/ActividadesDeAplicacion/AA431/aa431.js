function operaciones(...numeros){
    let suma = 0;
    let producto = 1;
    let division = 0;
    let media = 0;

    for(let numero of numeros){
        suma += numero;
    }

    media = suma / numeros.length;
    producto = numeros[0] * numeros[numeros.length - 1];
    division = numeros[1] / numeros[numeros.length - 2];

    document.write("<p>La suma es: " + suma + "</p>");
    document.write("<p>La media es: " + media + "</p>");
    document.write("<p>El producto del primer y último número es: " + producto + "</p>");
    document.write("<p>La división del segundo y penúltimo número es: " + division + "</p>");
}

operaciones(4, 74, 15, 16, 23, 42);