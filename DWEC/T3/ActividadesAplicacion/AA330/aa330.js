//Cramos un nuevo Conjunto
let Followers = new Set();

//El metodo .add() de los conjuntos nos permite añadir elementos al conjunto
Followers.add('Pedro');
Followers.add('Juan');
Followers.add('Maria');
Followers.add('Adrian');
Followers.add('Carlos');

//El metodo .delete() nos permite eliminar elementos del conjunto
Followers.delete('Maria');
Followers.delete('Carlos');

//Añadimos más gente al conjunto
Followers.add('Pepe');
Followers.add('Ana');
Followers.add('Luis');
Followers.add('Laura');
Followers.add('Antonio');
Followers.add('Marta');
Followers.add('Cristina');

//Variable donde con .size del conjunto guardamos su tamaño
let numFollowers = Followers.size;
//Creación de un array para convertir el conjunto a array y poder imprimirlo
let arrayFollowers = [...Followers];

for (const nombre of arrayFollowers) {
    document.write(nombre + "<br>");
}
document.write("Numero de seguidores: " + numFollowers);
