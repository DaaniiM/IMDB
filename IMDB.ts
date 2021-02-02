
import { Movie } from "./movies";

const fs = require('fs');

export class Imdb {

    public peliculas:Movie[];

    constructor(peliculas:Movie[]){

        this.peliculas = peliculas;


    }

    public escribirEnFicheroJSON(nombreFichero:string){

        let peliculasJson1 = JSON.stringify(this.peliculas);

        fs.writeFileSync(nombreFichero,peliculasJson1);

    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb{

        
        let allFilms1 = new Imdb(JSON.parse(fs.readFileSync(nombreFichero)));


        return allFilms1;
    }
};

