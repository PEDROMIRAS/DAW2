class Pelicula{
    nombrePelicula;
    anioEstreno;
    duracion;
    genero;
    actores;
    url;
    director;

    constructor(jsonString){
        const datos = JSON.parse(jsonString);

        this.nombrePelicula = datos.nombrePelicula;
        this.anioEstreno = datos.anioEstreno;
        this.duracion = datos.duracion;
        this.genero = datos.genero;
        this.actores = datos.actores;
        this.url = datos.url;
        this.director = datos.director;
    }

    verPelicula() {
        console.log("Nombre:", this.nombrePelicula);
        console.log("Año:", this.anioEstreno);
        console.log("Duración:", this.duracion);
        console.log("Género:", this.genero);
        console.log("Actores:", this.actores);
        console.log("URL:", this.url);
        console.log("Director:", this.director);
    }
}

const datosPelicula = new String(`{
    "nombrePelicula": "Transformers",
    "anioEstreno": 2007,
    "duracion": 144,
    "genero": "Acción / Ciencia ficción",
    "actores": ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "Tyrese Gibson"],
    "url": "https://www.imdb.com/title/tt0418279/",
    "director": "Michael Bay"
}`);

const peli = new Pelicula(datosPelicula);
peli.verPelicula();
