"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, gener, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumbers, profession) {
        this.name = name;
        this.age = age;
        this.gener = gener;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumbers = oscarNumbers;
        this.profession = profession;
    }
    Professional.prototype.showDetails = function () {
        return "\t" + "\u00BB" + "Name: " + this.name + "\n" + "\t" + "\u00BB" + "Age: " + this.age + "\n" + "\t" + "\u00BB" + "Gener: " + this.gener + "\n" + "\t" + "\u00BB" + "Weight: " +
            this.weight + "\n" + "\t" + "\u00BB" + "Height: " + this.height + "\n" + "\t" + "\u00BB" + "Hair color: " + this.hairColor + "\n" + "\t" + "\u00BB" + "Eye color: " +
            this.eyeColor + "\n" + "\t" + "\u00BB" + "Race: " + this.race + "\n" + "\t" + "\u00BB" + "Is retired?: " + this.isRetired + "\n" + "\t" + "\u00BB" + "Nationality: " +
            this.nationality + "\n" + "\t" + "\u00BB" + "Oscar numbers: " + this.oscarsNumbers + "\n" + "\t" + "\u00BB" + "Profession: " + this.profession;
    };
    return Professional;
}());
exports.Professional = Professional;
;
