function minhaFuncao(param){
    //bloco de código
}

minhaFuncao("param")

// expressão de função

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1,1));

// diferença principal HOiSTING
// funções e var são "listadas" sempre no topo do arquivo

console.log(apresentar());

function apresentar(){
    return "Olá";
}