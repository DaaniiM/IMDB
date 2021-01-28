

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

        console.log("Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Gener: " + this.gener + "\n" + "Weight: " + this.weight + "\n" + "Height: " + this.height + "\n" + "Hair color: " +
        this.hairColor + "\n" + "Eye color: " + this.eyeColor + "\n" + "Race: " + this.race + "\n" + "Is retired?: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" + 
        "Oscar numbers: " + this.oscarsNumbers + "\n" + "Profession: " + this.profession);


    }

    
    
        
    
};