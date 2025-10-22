//Array 3D
let array3D = [['a','b','c'],['d','e','f'],['g','h','i']];
//Array traspuesto
let traspuesto3D = [[0,0,0],[0,0,0],[0,0,0]];
//Calcular la traspuesta
for (let i = 0; i < array3D.length; i++){
    for (let j = 0; j < array3D.length; j++){
        traspuesto3D[i][j] = array3D[j][i];
    }
}

console.log("Matriz original:");
console.table(array3D);

console.log("Matriz traspuesta:");
console.table(traspuesto3D);