
import { Movie } from "./movies";
import { Imdb } from "./IMDB";
import { pelicula1, pelicula2, pelicula3 } from "./mainMovies";
/*

const preguntas = [
    "Cual es el titulo de la película?",
    "En que año se estrenó la película?",
    "De que nacionalidad es?",
    "A que genero corresponde?",
];

let respuestas = [];

function preguntas1(i){

    process.stdout.write(preguntas[i]);

    
}


process.stdin.on('data', function(data){

    respuestas.push(data.toString().trim());

    if(respuestas.length<preguntas.length){

        preguntas1(respuestas.length);

    }else{

        process.exit();
    }

});

preguntas1(0);

*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cual es el titulo de la película?: ', (answer1) => {
    rl.question('En que año se estrenó la película?: ', (answer2) => {
        rl.question('De que nacionalidad es? : ', (answer3) => {
            rl.question('A que genero corresponde? : ', (answer4) => {
                
                
            let peliculaNueva = new Movie (answer1,answer2,answer3,answer4);


            let peliculasAll = new Imdb([pelicula1,pelicula2,pelicula3,peliculaNueva]);



            peliculasAll.escribirEnFicheroJSON('./imdbBBDD.json');

            console.log(peliculasAll.obtenerInstanciaIMDB('./imdbBBDD.json'));

        rl.close();
            });
        });
    });
});







