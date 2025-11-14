class Trigonometria {
    constructor() {}

    gradosARadianes(grados) {
        return (grados * Math.PI) / 180;
    }

    radianesAGrados(radianes) {
        return (radianes * 180) / Math.PI;
    }

    seno(grados) {
        const radianes = this.gradosARadianes(grados);
        return Math.sin(radianes);
    }

    coseno(grados) {
        const radianes = this.gradosARadianes(grados);
        return Math.cos(radianes);
    }

    tangente(grados) {
        const radianes = this.gradosARadianes(grados);
        return Math.tan(radianes);
    }
    arcoseno(grados) {
        const radianes = Math.asin(grados);
        return this.radianesAGrados(radianes);
    }
    arcocoseno(grados) {
        const radianes = Math.acos(grados);
        return this.radianesAGrados(radianes);
    }
    arcotangente(grados) {
        const radianes = Math.atan(grados);
        return this.radianesAGrados(radianes);
    }
}

let anguloGrados = 23;
let mates = new Trigonometria();
let anguloRadianes = mates.gradosARadianes(anguloGrados).toFixed(4);
let seno = mates.seno(anguloGrados).toFixed(4);
let coseno = mates.coseno(anguloGrados).toFixed(4);
let tangente = mates.tangente(anguloGrados).toFixed(4);
let arcoseno = mates.arcoseno(anguloGrados);
let arcocoseno = mates.arcocoseno(anguloGrados);
let arcotangente = mates.arcotangente(anguloGrados);



document.write(`Ángulo en grados: ${anguloGrados}<br>`);
document.write(`Ángulo en radianes: ${anguloRadianes}<br>`);
document.write(`Seno: ${seno}<br>`);
document.write(`Coseno: ${coseno}<br>`);
document.write(`Tangente: ${tangente}<br>`);
document.write(`Arcoseno: ${arcoseno}<br>`);
document.write(`Arcocoseno: ${arcocoseno}<br>`);
document.write(`Arcotangente: ${arcotangente}<br>`);
