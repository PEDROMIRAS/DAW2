const matriz = new Object();
    matriz.nFilas = 4,
    matriz.nColumnas = 4,
    matriz.contenido = Array.from({length: matriz.nFilas}, () => Array(matriz.nColumnas)),

    matriz.inicializarMatriz = function(valor){
        for (let i = 0; i < this.nFilas; i++) {
            for (let j = 0; j < this.nColumnas; j++) {
                this.contenido[i][j] = valor;
            }
        }
    };

    matriz.aleatoriaMatriz = function(){
        for (let i = 0; i < this.nFilas; i++) {
            for (let j = 0; j < this.nColumnas; j++) {
                this.contenido[i][j] = Math.floor(Math.random() * 100) + 1;
            }
        }
    };

    matriz.verMatriz = function(){
        for (let i = 0; i < this.nFilas; i++) {
            console.log(this.contenido[i].join(' '));
        }
    };


matriz.inicializarMatriz(5);
matriz.verMatriz();
console.log('\n');
matriz.aleatoriaMatriz();
matriz.verMatriz();


//Objeto creado dentro de new Object
/* 
const matriz = new Object({
    nFilas: 4,
    nColumnas: 4,
    contenido: [],

    inicializarMatriz: function(valor) {
        this.contenido = Array.from({length: this.nFilas}, () => Array(this.nColumnas).fill(valor));
    },

    aleatoriaMatriz: function() {
        this.contenido = Array.from({length: this.nFilas}, () =>
            Array.from({length: this.nColumnas}, () => Math.floor(Math.random() * 100) + 1)
        );
    },

    verMatriz: function() {
        for (let i = 0; i < this.nFilas; i++) {
            console.log(this.contenido[i].join(' '));
        }
    },
});

matriz.inicializarMatriz(5);
matriz.verMatriz();
console.log('\n');
matriz.aleatoriaMatriz();
matriz.verMatriz();
*/