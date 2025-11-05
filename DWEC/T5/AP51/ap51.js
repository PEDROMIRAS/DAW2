class Dispositivo {
    constructor(cpu, ram, almacenamiento, ancho, alto, numCamaras) {
        this.cpu = cpu ?? "Desconocido";
        this.ram = ram ?? "Desconocido";
        this.almacenamiento = almacenamiento ?? "Desconocido";
        this.ancho = ancho ?? "Desconocido";
        this.alto = alto ?? "Desconocido";
        this.numCamaras = numCamaras ?? "Desconocido";
    }

    toString() {
        return `
        <br>
        <strong>CPU:</strong> ${this.cpu}<br>
        <strong>RAM:</strong> ${this.ram} GB<br>
        <strong>Almacenamiento:</strong> ${this.almacenamiento} GB<br>
        <strong>Ancho:</strong> ${this.ancho} cm<br>
        <strong>Alto:</strong> ${this.alto} cm<br>
        <strong>Número de cámaras:</strong> ${this.numCamaras}<br>
        `;
    }
}

//Móviles con distinta cantidad de parámetros
let movil1 = new Dispositivo('Snapdragon', 12, 512, 7.5, 15.8, 3);
movil1.nombre = 'OnePlus 12';

let movil2 = new Dispositivo('Apple A17', 8, 256, 7.1, 14.6);
movil2.nombre = 'iPhone 15';

let movil3 = new Dispositivo('Dimensity 9300', 16);
movil3.nombre = 'Vivo X100';

let movil4 = new Dispositivo();
movil4.nombre = 'Desconocido';

//Mostrar resultados
document.write(`<h3>${movil1.nombre}</h3>`);
document.write(movil1.toString());

document.write(`<h3>${movil2.nombre}</h3>`);
document.write(movil2.toString());

document.write(`<h3>${movil3.nombre}</h3>`);
document.write(movil3.toString());

document.write(`<h3>${movil4.nombre}</h3>`);
document.write(movil4.toString());