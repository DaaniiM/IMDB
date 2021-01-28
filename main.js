"use strict";
exports.__esModule = true;
var professional_1 = require("./professional");
var actor1 = new professional_1.Professional("Harrison Ford", 78, "Male", 81, 180, "Brown", "Brown", "Caucasic", false, "North American", 0, "Actor");
var director1 = new professional_1.Professional("Steven Spielberg", 74, "Male", 90, 172, "White", "Brown", "Caucasic", false, "North American", 4, "Director");
var producer1 = new professional_1.Professional("Harvey Weinstein", 68, "Male", 85, 183, "Brown", "Black", "Caucasic", true, "North American", 0, "Producer");
actor1.showDetails();
director1.showDetails();
producer1.showDetails();
