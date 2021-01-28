
import {Professional} from "./professional";

let actor1 = new Professional("Harrison Ford",78,"Male",81,180,"Brown","Brown","Caucasic",false,"North American",0,"Actor");
let actor2 = new Professional("Vin Diesel",42,"Male",98,184,"NonColor","Brown","Caucasic",false,"North American",0,"Actor");
let actor3 = new Professional("Tom Holland",24,"Male",75,172,"Red hair","Black","Caucasic",false,"North American",0,"Actor");
let actor4 = new Professional("Brie Larson",31,"Female",170,58,"Blond","Brown","Caucasic",false,"North American",0,"Actress");
let actor5 = new Professional("Natalie Portman",39,"Female",160,52,"Brown","Brown","Caucasic",false,"Isreali",1,"Actress");


let director1 = new Professional("Steven Spielberg",74,"Male",90,172,"White","Brown","Caucasic",false,"North American",4,"Director");
let director2 = new Professional("Thomas Williams",54,"Male",182,80,"Black","Black","Caucasic",false,"British",1,"Director");
let director3 = new Professional("Andrea Gonzalez",42,"Female",174,60,"Brown","Brown","Caucasic",false,"Spanish",0,"Director");
let director4 = new Professional("Andrew Hoffman",51,"Male",184,80,"Black","Brown","Caucasic",false,"North American",3,"Director");
let director5 = new Professional("Anthony Loster",68,"Male",179,80,"White","Brown","Caucasic",true,"British",1,"Director");


let producer1 = new Professional("Harvey Weinstein",68,"Male",85,183,"Brown","Black","Caucasic",true,"North American",0,"Producer");
let producer2 = new Professional("Angelina Hopkins",52,"Female",171,60,"Black","Black","Caucasico",false,"North American",0,"Producer");
let producer3 = new Professional("Francisco Menendez",71,"Male",184,94,"White","Brown","Caucasic",false,"Spanish",1,"Producer");
let producer4 = new Professional("John McCallahan",41,"Male",190,98,"Blond","Black","Caucasic",true,"North American",0,"Producer");
let producer5 = new Professional("Nikita Volkov",49,"Female",172,65,"Black","Brown","Caucasic",true,"Russian",0,"Producer");

actor1.showDetails();
director1.showDetails();
producer1.showDetails();

