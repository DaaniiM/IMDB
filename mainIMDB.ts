
import { Imdb } from "./IMDB";
import { pelicula1, pelicula2, pelicula3 } from "./mainMovies";


export let peliculasAll = new Imdb([pelicula1,pelicula2,pelicula3]);


let peliculasJson = JSON.stringify(peliculasAll);


// const fs = require('fs');


// fs.writeFileSync('imdbBBDD.json', peliculasJson);

// let allFilms = new Imdb(JSON.parse(fs.readFileSync('./imdbBBDD.json')));

// console.log(allFilms.obtenerInstanciaIMDB("./imdbBBDD.json"));



// peliculasAll.escribirEnFicheroJSON("imdbBBDD.json");


console.log(peliculasAll.obtenerInstanciaIMDB("imdbBBDD.json"));