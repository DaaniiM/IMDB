"use strict";
exports.__esModule = true;
var movies_1 = require("./movies");
var mainIMDB_1 = require("./mainIMDB");
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
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Cual es el titulo de la película?: ', function (answer1) {
    rl.question('En que año se estrenó la película?: ', function (answer2) {
        rl.question('De que nacionalidad es? : ', function (answer3) {
            rl.question('A que genero corresponde? : ', function (answer4) {
                var peliculaNueva = new movies_1.Movie(answer1, answer2, answer3, answer4);
                mainIMDB_1.peliculasAll.peliculas.push(peliculaNueva);
                mainIMDB_1.peliculasAll.escribirEnFicheroJSON('./imdbBBDD.json');
                mainIMDB_1.peliculasAll.obtenerInstanciaIMDB('./imdbBBDD.json');
                rl.close();
            });
        });
    });
});
