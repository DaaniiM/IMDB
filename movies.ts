import { Professional } from "./professional";


export class Movie {
    public title: string;
    public relaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: string;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: Professional[];
    public distributor: string;
    public genre: string;


        constructor(title:string,releaseYear:number,nationlity:string,genre:string) {
            this.title = title;
            this.relaseYear = releaseYear;
            this.nationality = nationlity;
            this.genre = genre;

        }



        public filmsDetails() {
            console.log("\u00A4" + "Title: " + this.title + "\n" + "\n" + "\u00A4" + "Release year: " + this.relaseYear + "\n" + "\n" + "\u00A4" + "Actors: ");
            let i;
            for (i = 0; i < this.actors.length;i++) {
                console.log(this.actors[i].showDetails() + "\n");
            } 

            console.log("\n" + "\u00A4" + "Nationality: " +  this.nationality + "\n" + "\n" + "\u00A4" + "Director: " + "\n" + this.director.showDetails() +
            "\n" + "\n" + "\u00A4" + "Writer: " + this.writer + "\n" + "\n" + "\u00A4" + "Language: " + this.language + "\n" + "\n" + "\u00A4" + "Platform: " +
            this.platform + "\n" + "\n" + "\u00A4" + "Is MCU?: " + this.isMCU + "\n" + "\n" + "\u00A4" + "Main Character Name: " + this.mainCharacterName +
            "\n" + "\n" + "\u00A4" + "Producer: ");

            for (i = 0; i < this.producer.length;i++) {
                console.log(this.producer[i].showDetails() + "\n");
            }

            console.log("\n" + "\u00A4" + "Distributor: " + this.distributor + "\n" + "\n" + "\u00A4" + "Genre: " + this.genre);
          

        }

    

}


