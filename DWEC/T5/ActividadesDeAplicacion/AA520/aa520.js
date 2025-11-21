// Clase base que representa un aula genérica
class Aula {
    numAula;   // Número del aula
    aforo;     // Capacidad de alumnos
    profesor;  // Nombre del profesor

    // Constructor: inicializa las propiedades del aula
    constructor(numAula, aforo, profesor) {
        this.numAula = numAula;
        this.aforo = aforo;
        this.profesor = profesor;
    }

    // Métodos para acceder a las propiedades
    numeroAula() {
        return this.numAula;
    }

    aforoAula() {
        return this.aforo;
    }

    profesorAula() {
        return this.profesor;
    }

    // Método que muestra la información del aula
    // Este método puede ser sobrescrito por clases hijas (polimorfismo)
    toString() {
        console.log("Aula numero: " + this.numAula + " Aforo: " + this.aforo + " Profesor: " + this.profesor);
    }
}

// Clase hija que representa un aula de música
// Hereda de Aula
class Musica extends Aula {
    tipoMusica;  // Propiedad adicional: tipo de música que se imparte

    constructor(numAula, aforo, profesor, tipoMusica) {
        super(numAula, aforo, profesor); // Inicializa propiedades de Aula
        this.tipoMusica = tipoMusica;
    }

    tipoMusicaAula() {
        return this.tipoMusica;
    }

    // Sobrescribe el método toString() (polimorfismo)
    toString() {
        super.toString(); // Llama al toString() de Aula
        console.log("Tipo de musica: " + this.tipoMusica);
    }
}

// Clase hija que representa un aula de tecnología
// Hereda de Aula
class Tecnologia extends Aula {
    tipoTecnologia;  // Propiedad adicional: tipo de tecnología que se imparte

    constructor(numAula, aforo, profesor, tipoTecnologia) {
        super(numAula, aforo, profesor); // Inicializa propiedades de Aula
        this.tipoTecnologia = tipoTecnologia;
    }

    tipoTecnologiaAula() {
        return this.tipoTecnologia;
    }

    // Sobrescribe el método toString() (polimorfismo)
    toString() {
        super.toString(); // Llama al toString() de Aula
        console.log("Tipo de tecnologia: " + this.tipoTecnologia);
    }
}

// ------------------ INSTANCIACIÓN DE OBJETOS ------------------

// Objeto de la clase base Aula
const aula = new Aula(2, 20, "Juan");

// Objeto de la clase hija Musica
const aulaMusica = new Musica(3, 18, "Jose", "Rock");

// Objeto de la clase hija Tecnologia
const aulaTecnologia = new Tecnologia(4, 15, "Maria", "Internet");

// Acceso a los métodos de cada objeto
console.log("Aula numero: " + aula.numeroAula() + " Aforo: " + aula.aforoAula() + " Profesor: " + aula.profesorAula());
console.log("Aula numero: " + aulaMusica.numeroAula() + " Aforo: " + aulaMusica.aforoAula() + " Profesor: " + aulaMusica.profesorAula() + " Tipo de musica: " + aulaMusica.tipoMusicaAula());
console.log("Aula numero: " + aulaTecnologia.numeroAula() + " Aforo: " + aulaTecnologia.aforoAula() + " Profesor: " + aulaTecnologia.profesorAula() + " Tipo de tecnologia: " + aulaTecnologia.tipoTecnologiaAula());

// Uso del método polimórfico toString()
// Dependiendo del objeto, muestra información distinta
aula.toString();         // Muestra solo info básica
aulaMusica.toString();   // Muestra info básica + tipo de música
aulaTecnologia.toString();// Muestra info básica + tipo de tecnología