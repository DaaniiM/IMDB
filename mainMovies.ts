import { actor1, actor2, actor3, actor5, actor8, actor9, director1, director2, director5, producer1, producer2, producer4, producer6, producer8, producer9 } from "./main";
import { Movie } from "./movies";


 



let pelicula1 = new Movie("El castigador",2001,"North American","Action");


pelicula1.actors = [actor1,actor2];
pelicula1.director = director1;
pelicula1.writer = "John Ashley";
pelicula1.language = "English";
pelicula1.platform = "Netflix";
pelicula1.isMCU = false;
pelicula1.mainCharacterName = "Joshua Perkins";
pelicula1.producer = [producer1,producer2];
pelicula1.distributor = "Sony";

pelicula1.filmsDetails();

console.log("---------------------------------------------------------------------------------");

let pelicula2 = new Movie("Spiderman - Far from Codenotch",2021, "Spanish", "Action");

pelicula2.actors = [actor3, actor5];
pelicula2.director = director2;
pelicula2.writer = "Michael Tobbs";
pelicula2.language = "Spanish";
pelicula2.platform = "Disney";
pelicula2.isMCU = true;
pelicula2.mainCharacterName = "Peter Parker";
pelicula2.producer = [producer4,producer9];
pelicula2.distributor = "Marvel";

pelicula2.filmsDetails();

console.log("---------------------------------------------------------------------------------");

let pelicula3 = new Movie("Escape Total", 1990,"British", "Comedy-action");

pelicula3.actors = [actor8, actor9];
pelicula3.director = director5;
pelicula3.writer = "Daniel Oswall";
pelicula3.language = "English";
pelicula3.platform = "Amazon video";
pelicula3.isMCU = false;
pelicula3.mainCharacterName = "Francis Johnson";
pelicula3.producer = [producer6,producer8];
pelicula3.distributor = "Amazon";

pelicula3.filmsDetails();