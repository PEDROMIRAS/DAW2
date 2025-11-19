//  /^(\d){4}-(az-AZ){5}/(\d){2}_(\d)/

class Etiqueta {
    nombre = '';
    etiqueta = '';
    constructor(nombre,etiqueta){
        this.nombre = nombre;
        this.etiqueta = etiqueta;
    };
    mostrarArticulo() {
        console.log(`Nombre: ${this.nombre}, etiqueta: ${this.etiqueta}`);
    };
    validarEtiqueta(){
        let regExp = /^[\d]{4}-[a-zA-Z]{5}\/[\d]{2}_[\d]$/;

        if(regExp.test(this.etiqueta)){
            return true;
        }else{
            return false;
        }
    }
};

let prenda = new Etiqueta('Prenda','2022-xrFds/25_9');
prenda.mostrarArticulo();
console.log(prenda.validarEtiqueta());


