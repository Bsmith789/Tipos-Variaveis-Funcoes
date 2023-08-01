const idadeMinima = 18;
const idadeCliente = 16;

if(idadeCliente >= idadeMinima){
    console.log("cerveja");
} else {
    console.log("suco");
}

//Operador ternario

                    //condição           //true      //false
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");

//dica de boa prática -> É recomendável utilizar o operador ternário apenas em casos que sejam mais simples