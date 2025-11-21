// Clase Moto que representa una motocicleta genérica
class Moto{
    marca;     // Propiedad pública: marca de la moto
    modelo;    // Propiedad pública: modelo de la moto
    cc;        // Propiedad pública: cilindrada en centímetros cúbicos
    cv;        // Propiedad pública: caballos de vapor (potencia)
    #encendido; // Propiedad privada: indica si la moto está encendida (true/false)

    // Constructor: inicializa todas las propiedades de la moto
    constructor(marca,modelo,cc,cv){
        this.marca = marca;
        this.modelo = modelo;
        this.cc = cc;
        this.cv = cv;

        // La moto siempre empieza apagada, por eso se pone false aquí
        this.#encendido = false;
    }

    // Getter: permite leer el estado del encendido desde fuera de la clase
    // sin permitir modificarlo directamente
    get encendido(){
        return this.#encendido;
    }
    
    // Método: enciende la moto cambiando el valor privado a true
    arrancar(){
        this.#encendido = true;
    }

    // Método: apaga la moto cambiando el valor privado a false
    apagar(){
        this.#encendido = false;
    }

    // Método que muestra las características de la moto en consola
    mostrarCaracteristicas(){
        console.log('Marca: ' + this.marca);
        console.log('Modelo: ' + this.modelo);
        console.log('CC: ' + this.cc);
        console.log('CV: ' + this.cv);
        console.log('Encendido: ' + this.#encendido);
    }

}

// --------------------- INSTANCIACIÓN DEL OBJETO ---------------------

// Se crea una nueva moto llamada "harley" usando el constructor de la clase Moto
const harley = new Moto('Harley Davidson', 'Sportster', 883, 52);

// Se arranca la moto (encendido = true)
harley.arrancar();

// Se muestran las características, incluyendo que está encendida
harley.mostrarCaracteristicas();

// Se apaga la moto (encendido = false)
harley.apagar();

// Se muestran nuevamente las características, ahora apagada
harley.mostrarCaracteristicas();