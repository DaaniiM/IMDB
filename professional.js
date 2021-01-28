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
        console.log("Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Gener: " + this.gener + "\n" + "Weight: " + this.weight + "\n" + "Height: " + this.height + "\n" + "Hair color: " +
            this.hairColor + "\n" + "Eye color: " + this.eyeColor + "\n" + "Race: " + this.race + "\n" + "Is retired?: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" +
            "Oscar numbers: " + this.oscarsNumbers + "\n" + "Profession: " + this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
;
