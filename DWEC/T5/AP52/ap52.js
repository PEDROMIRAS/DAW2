//Declaracion de una clase
class Miembro{
    nombre = "nombre apellido1 apellido2";
    alta = "01/01/2022";
    estado = "vigente";
    constructor(nombre, alta, estado){
        this.nombre = nombre;
        this.alta = alta;
        this.estado = estado;
    }
    cobrar(){console.log(`El miembro ${this.nombre}, ha cobrado.`);}; 
}
//Declaracion de una clase hija con 'extends'
class Profesor extends Miembro{
    nAlumnos = 0;
    constructor(nombre, alta, estado, nAlumnos){
        super(nombre, alta, estado);
        this.nAlumnos = nAlumnos;
    }
    cobrar(){console.log(`El profesor ${this.nombre}, ha cobrado.`);}; 
}

class Alumno extends Miembro{
    nAsignaturas = 0;
    constructor(nombre, alta, estado, nAsignaturas){
        super(nombre, alta, estado);
        this.nAsignaturas = nAsignaturas;
    }
    cobrar(){console.log(`El alumno ${this.nombre}, ha cobrado.`);}; 
}

//Creacion de objetos
let unMiembro = new Miembro("Pepe Ruiz", "01/01/2022", "vigente");
unMiembro.cobrar();
let unProfesor = new Profesor("Samuel Orta", "01/12/2021", "finalizado", 30);
unProfesor.cobrar();
let unAlumno = new Alumno("Elena Sanchez", "23/05/2023", "finalizado", 10);
unAlumno.cobrar();

//Mostrar datos de los objetos
console.log(unMiembro);
console.log(unProfesor);
console.log(unAlumno);

//Mostrar datos de unMiembro
for (const element of Object.getOwnPropertyNames(unMiembro)) {
    document.write(element + "<br>");
}

document.write("<br>");

//Mostrar datos de unProfesor
for (const element of Object.getOwnPropertyNames(unProfesor)) {
    document.write(element + "<br>");
}

document.write("<br>");

//Mostrar datos de unAlumno
for (const element of Object.getOwnPropertyNames(unAlumno)) {
    document.write(element + "<br>");
}