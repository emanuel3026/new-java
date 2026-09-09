const prompt = require('prompt-sync')();
const v1 = prompt("Informe o primeiro valor inteiro: ")
const v2 = prompt("Informe o segundo valor inteiro: ")

const operacao = (v1,v2) => {

   if(v1 < 10 ){

        return Math.pow(v1, 2) + Math.pow(v2, 3);

   } else {

    return v1 * v2;

   }

}

console.log(operacao);


//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

