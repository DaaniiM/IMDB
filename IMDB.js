"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var peliculasJson1 = JSON.stringify(this.peliculas);
        var fs = require('fs');
        fs.writeFileSync(nombreFichero, peliculasJson1);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var fs = require('fs');
        var allFilms1 = new Imdb(JSON.parse(fs.readFileSync(nombreFichero)));
        return allFilms1;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
;
