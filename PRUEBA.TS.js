var preguntas = [
    "Cual es el titulo de la película?",
    "En que año se estrenó la película?",
    "De que nacionalidad es?",
    "A que genero corresponde?",
    "Que actores salen?",
    "Quien dirige la pelicula?",
    "Quien es el guionista?",
    "En que idioma está?",
    "En que plataforma se emite?",
    "Es de la compañia Marvel?",
    "Como se llama el personaje principal?",
    "Quien son los productores?",
    "Quien es el distribuidor?"
];
var respuestas = [];
function preguntas1(i) {
    process.stdout.write(preguntas[i]);
}
process.stdin.on('data', function (data) {
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        preguntas1(respuestas.length);
    }
    else {
        process.exit();
    }
});
preguntas1(0);
/*
let nombre = "";

process.stdout.write("Cual es el titulo de la película?");

process.stdin.on('data', function(nombre1:string){

    nombre = nombre1;
    process.exit();

});


let anyo;


process.stdout.write("En que año se estrenó la película?");

process.stdin.on('data', function(numero:number){

    anyo = numero;
    process.exit();
});

*/
