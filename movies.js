"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationlity, genre) {
        this.title = title;
        this.relaseYear = releaseYear;
        this.nationality = nationlity;
        this.genre = genre;
    }
    Movie.prototype.filmsDetails = function () {
        console.log("\u00A4" + "Title: " + this.title + "\n" + "\n" + "\u00A4" + "Release year: " + this.relaseYear + "\n" + "\n" + "\u00A4" + "Actors: ");
        var i;
        for (i = 0; i < this.actors.length; i++) {
            console.log(this.actors[i].showDetails() + "\n");
        }
        console.log("\n" + "\u00A4" + "Nationality: " + this.nationality + "\n" + "\n" + "\u00A4" + "Director: " + "\n" + this.director.showDetails() +
            "\n" + "\n" + "\u00A4" + "Writer: " + this.writer + "\n" + "\n" + "\u00A4" + "Language: " + this.language + "\n" + "\n" + "\u00A4" + "Platform: " +
            this.platform + "\n" + "\n" + "\u00A4" + "Is MCU?: " + this.isMCU + "\n" + "\n" + "\u00A4" + "Main Character Name: " + this.mainCharacterName +
            "\n" + "\n" + "\u00A4" + "Producer: ");
        for (i = 0; i < this.producer.length; i++) {
            console.log(this.producer[i].showDetails() + "\n");
        }
        console.log("\n" + "\u00A4" + "Distributor: " + this.distributor + "\n" + "\n" + "\u00A4" + "Genre: " + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
