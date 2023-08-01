// três formas de escrever funções

let x = "oi";
let y = "tudo bem?";

// DECLARAÇÃO DE FUNÇÃO
function imprimeTexto(texto) {
    console.log(texto);
}

// Executa a função(1 ou + vezes)

imprimeTexto(x);
imprimeTexto(y);

// SEM DECLARAR UMA FUNÇÃO

function soma(){
    //outros códigos
    //a linha do retorno obrigatoriamente deve ser a última linha do código, pois o que vier depois não será utilizado.
    return 2 + 2;
}

soma();

//FUNÇÃO DENTRO DE UMA FUNÇÃO

imprimeTexto(soma());