
import { Imdb } from "./IMDB";
import { pelicula1, pelicula2, pelicula3 } from "./mainMovies";


let peliculasAll = new Imdb([pelicula1,pelicula2,pelicula3]);

/*

console.log(peliculasAll);

*/

let peliculasJson = JSON.stringify(peliculasAll);


const fs = require('fs')


fs.writeFileSync('imdbBBDD.json', peliculasJson);