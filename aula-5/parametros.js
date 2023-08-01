//parâmetros de função -> valores que são utilizados para a função funcionar

function soma(num1 , num2){
    return num1 + num2;
}

console.log(soma(5 , 10));
console.log(soma(3 , 9));
console.log(soma(2000 , 19));
console.log(soma(6 , 3));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(2, "Gabriel"));
console.log(nomeIdade("Gabriel", 22));

function multiplicacao(num3 = 1, num4 = 1){
    return num3 * num4;
}

console.log(multiplicacao(soma(2 , 3), soma(32 , 12)));
console.log(multiplicacao(soma(2 , 3)));

// boa prática -> sempre declare os valores de sua função