

export class Professional{

    public name:string;
    public age:number;
    public gener:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumbers:number;
    public profession:string;

    constructor(name:string,age:number,gener:string,weight:number,height:number,hairColor:string,eyeColor:string,race:string,isRetired:boolean,nationality:string,oscarNumbers:number,profession:string){

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

    public showDetails(){

        return "\t" + "\u00BB" + "Name: " + this.name + "\n" + "\t" + "\u00BB" + "Age: " + this.age + "\n" + "\t" + "\u00BB" + "Gener: " + this.gener + "\n" + "\t" + "\u00BB" + "Weight: " +
        this.weight + "\n" + "\t" + "\u00BB" + "Height: " + this.height + "\n" + "\t" + "\u00BB" + "Hair color: " + this.hairColor + "\n" + "\t" + "\u00BB" +  "Eye color: " +
        this.eyeColor + "\n" + "\t" + "\u00BB" + "Race: " + this.race + "\n" + "\t" + "\u00BB" + "Is retired?: " + this.isRetired + "\n" + "\t" + "\u00BB" + "Nationality: " + 
        this.nationality + "\n" + "\t" + "\u00BB" + "Oscar numbers: " + this.oscarsNumbers + "\n" + "\t" + "\u00BB" + "Profession: " + this.profession;


    }

    
    
        
    
};