class Telefono {
    marca;
    modelo;

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
}

class Movil extends Telefono {
    camaras;      // número de cámaras
    capacidadBateria; // mAh

    constructor(marca, modelo, camaras, capacidadBateria) {
        super(marca, modelo);
        this.camaras = camaras;
        this.capacidadBateria = capacidadBateria;
    }

    mostrarMovil() {
        this.mostrarInfo();
        console.log(`Cámaras: ${this.camaras}`);
        console.log(`Batería: ${this.capacidadBateria} mAh`);
    }
}

class Fijo extends Telefono {
    tieneContestador; // boolean
    tipoConexion;     // "cable", "inalámbrico"

    constructor(marca, modelo, tieneContestador, tipoConexion) {
        super(marca, modelo);
        this.tieneContestador = tieneContestador;
        this.tipoConexion = tipoConexion;
    }

    mostrarFijo() {
        this.mostrarInfo();
        console.log(`Contestador automático: ${this.tieneContestador ? "Sí" : "No"}`);
        console.log(`Tipo de conexión: ${this.tipoConexion}`);
    }
}