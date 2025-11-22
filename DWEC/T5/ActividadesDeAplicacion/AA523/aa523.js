class Club{
    anioFundacion;
    numSocios;
    nombreEstadio;
    ciudad;
    palmares;

    constructor(anioFundacion,numSocios,nombreEstadio,ciudad){
        this.anioFundacion = anioFundacion;
        this.numSocios = numSocios;
        this.nombreEstadio = nombreEstadio;
        this.ciudad = ciudad;
        this.palmares = new Map();
    };

    verClub() {
        document.write('Año de fundacion del club: ' + this.anioFundacion + '<br>');
        document.write('Numero de socios del club: ' + this.numSocios + '<br>');
        document.write('Nombre del estadio del club: ' + this.nombreEstadio + '<br>');
        document.write('Ciudad del club: ' + this.ciudad + '<br>');
        document.write('Palmares: <br>')
        for (const [nombre, fecha] of this.palmares) {
            document.write(`Nombre: ${nombre}, Año de consecución: ${fecha}.<br>`);
        }
    };
}

// ------- Instancia para el Real Madrid ----------

const madrid = new Club(1902,90000,"Santiago Bernabéu","Madrid");

// Añadir solo dos títulos al Map
madrid.palmares.set("Champions League", 2022);
madrid.palmares.set("Liga Española", 2020);

// Mostrar la info
madrid.verClub();
document.write('<br>');
// -------------------------------
// OBJETOS SEGÚN EL ENUNCIADO
// -------------------------------

// 1) Constructor sin parámetros
const club1 = new Club();

// 2) Constructor con 1 parámetro
const club2 = new Club(1902);

// 3) Constructor con 2 parámetros
const club3 = new Club(1902, 90000);

// 4) Constructor con 3 parámetros
const club4 = new Club(1902, 90000, "Santiago Bernabéu");

// 5) Constructor con 4 parámetros
const club5 = new Club(1902, 90000, "Santiago Bernabéu", "Madrid");

// 6) Club completo (Real Madrid) con palmarés
const club6 = new Club(1902, 90000, "Santiago Bernabéu", "Madrid");

// Añadimos dos títulos al palmarés del sexto
club6.palmares.set("Champions League", 2022);
club6.palmares.set("Liga Española", 2020);

// -------------------------------
// Mostrar todos los clubes
// -------------------------------
club1.verClub();
document.write('<br>');
club2.verClub();
document.write('<br>');
club3.verClub();
document.write('<br>');
club4.verClub();
document.write('<br>');
club5.verClub();
document.write('<br>');
club6.verClub();