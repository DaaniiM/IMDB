"use strict";
exports.__esModule = true;
var IMDB_1 = require("./IMDB");
var mainMovies_1 = require("./mainMovies");
var peliculasAll = new IMDB_1.Imdb([mainMovies_1.pelicula1, mainMovies_1.pelicula2, mainMovies_1.pelicula3]);
console.log(peliculasAll);
