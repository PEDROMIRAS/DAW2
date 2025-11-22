class Coche {
    constructor(marca, modelo, año) {
        // "this" se refiere al objeto que se está construyendo
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarInfo() {
        // Aquí "this" apunta al objeto que llama al método
        console.log(`Coche: ${this.marca} ${this.modelo} (${this.año})`);
    }

    esAntiguo() {
        // Aquí también usamos "this" para acceder a sus propiedades
        return this.año < 2010;
    }
}

// Crear instancias de la clase
const coche1 = new Coche("Toyota", "Corolla", 2008);
const coche2 = new Coche("BMW", "M3", 2021);

// Llamar métodos para ver cómo actúa "this"
coche1.mostrarInfo(); // Coche: Toyota Corolla (2008)
console.log(coche1.esAntiguo()); // true

coche2.mostrarInfo(); // Coche: BMW M3 (2021)
console.log(coche2.esAntiguo()); // false
