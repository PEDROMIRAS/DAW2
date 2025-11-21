// Clase padre que representa un teléfono genérico
class Telefono {
    marca;   // Propiedad: marca del teléfono
    modelo;  // Propiedad: modelo del teléfono

    // Constructor: inicializa marca y modelo
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método que muestra la información básica del teléfono
    mostrarInfo() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
}

// Clase hija que representa un teléfono móvil
// Hereda las propiedades y métodos de Telefono
class Movil extends Telefono {
    camaras;            // Propiedad: número de cámaras
    capacidadBateria;   // Propiedad: capacidad de la batería en mAh

    // Constructor: recibe todos los datos del móvil
    constructor(marca, modelo, camaras, capacidadBateria) {
        super(marca, modelo);  // Llama al constructor de Telefono
        this.camaras = camaras;
        this.capacidadBateria = capacidadBateria;
    }

    // Método que muestra la información del móvil (incluye la info del padre)
    mostrarMovil() {
        this.mostrarInfo();  // Llama al método heredado
        console.log(`Cámaras: ${this.camaras}`);
        console.log(`Batería: ${this.capacidadBateria} mAh`);
    }
}

// Clase hija que representa un teléfono fijo
// Hereda de Telefono igual que Movil
class Fijo extends Telefono {
    tieneContestador;  // Propiedad: si tiene contestador automático
    tipoConexion;      // Propiedad: tipo de conexión (cable o inalámbrico)

    // Constructor: inicializa las propiedades del fijo
    constructor(marca, modelo, tieneContestador, tipoConexion) {
        super(marca, modelo);  // Inicializa marca y modelo usando Telefono
        this.tieneContestador = tieneContestador;
        this.tipoConexion = tipoConexion;
    }

    // Método que muestra la información del teléfono fijo
    mostrarFijo() {
        this.mostrarInfo();  // Usa el método heredado
        console.log(`Contestador automático: ${this.tieneContestador ? "Sí" : "No"}`);
        console.log(`Tipo de conexión: ${this.tipoConexion}`);
    }
}

// ----------------- INSTANCIACIÓN DE OBJETOS -----------------

// Se crea un objeto de tipo Telefono
const tel = new Telefono("Samsung", "Galaxy S21");
tel.mostrarInfo();  // Muestra info del teléfono base

// Se crea un objeto de tipo Movil (clase hija)
const movil = new Movil("Xiaomi", "Redmi Note 10", 2, 5000);
movil.mostrarMovil();  // Muestra info del móvil incluyendo lo heredado

// Se crea un objeto de tipo Fijo (clase hija)
const fijo = new Fijo("Huawei", "P30 Pro", true, "cable");
fijo.mostrarFijo();  // Muestra info del teléfono fijo