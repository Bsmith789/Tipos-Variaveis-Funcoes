//var -> n tem muitas regras

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

//let -> fazer mais atribuições e muito utilizada

let area;
let altura = 3;
let comprimento = 9;
let forma = "retangulo";

if(forma === "retangulo"){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

//const -> uma vez que coloca ela no programa, não da para ser alterada

const altura = 2;
const comprimento = 4;
const formaGeometrica = "quadrado";
let area;

if(forma === "quadrado"){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);