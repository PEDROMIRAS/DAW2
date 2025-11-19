class Moto{
    marca;
    modelo;
    cc;
    cv;
    #encendido;

    constructor(marca,modelo,cc,cv){
        this.marca=marca;
        this.modelo=modelo;
        this.cc=cc;
        this.cv=cv;
        this.#encendido=false;
    }

    get encendido(){
        return this.#encendido;
    }
    
    arrancar(){
        this.#encendido=true;
    }

    apagar(){
        this.#encendido=false;
    }

    mostrarCaracteristicas(){
        console.log('Marca: ' + this.marca);
        console.log('Modelo: ' + this.modelo);
        console.log('CC: ' + this.cc);
        console.log('CV: ' + this.cv);
        console.log('Encendido: ' + this.#encendido);
    }

}

const harley = new Moto('Harley Davidson','Sportster', 883 , 52);

harley.arrancar();
harley.mostrarCaracteristicas();

harley.apagar();
harley.mostrarCaracteristicas();