
import { Movie } from "./movies";

export class Imdb {

    public peliculas:Movie[];

    constructor(peliculas:Movie[]){

        this.peliculas = peliculas;


    }

    public escribirEnFicheroJSON(nombreFichero:string){

        let peliculasJson1 = JSON.stringify(this.peliculas);

        const fs = require('fs');

        fs.writeFileSync(nombreFichero,peliculasJson1);

    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb{

        const fs = require('fs');

        let allFilms1 = new Imdb(JSON.parse(fs.readFileSync(nombreFichero)));


        return allFilms1;
    }
};

