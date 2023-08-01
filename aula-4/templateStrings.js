// concatenação de Strings

const nome = "Gabriel";
const idade = 2023-2001;
const cidadeNascimento = "São Paulo"
const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade
+ " e nasci na cidade de " + cidadeNascimento;

console.log(apresentacao);

//template Strings
// muda as Aspas Duplas "" para aspas invertidas ``
// utiliza ${} para poder colocar o nome das variáveis
const apresentacaoTemplate = `Meu nome é ${nome}, minha idade é ${idade} e
nasci na cidade de ${cidadeNascimento}`;