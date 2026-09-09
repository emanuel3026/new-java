const prompt = require('prompt-sync')();
/*const v1 = prompt("Informe o primeiro valor inteiro: ")
const v2 = prompt("Informe o segundo valor inteiro: ")

const operacao = (v1,v2) => {

   if(v1 < 10 ){

        return Math.pow(v1, 2) + Math.pow(v2, 3);

   } else {

    return v1 * v2;

   }

}

console.log(operacao);*/


//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

const nota1 = Number(prompt("Informe a primeira nota (trabalho em laboratório): ")) ,  nota2 = Number(prompt("Informe a segunda nota (avaliação semestral): ")) , nota3 = Number(prompt("Informe a terceira nota (exame final): "));

const media = (nota1, nota2, nota3) => (((nota1*2) + (nota2*3) + (nota*5)) /3) < 2.9? 'reprovado' : ((nota1 + nota2 + nota3) /3) < 4.9? 'recuperação' : 'aprovado'

console.log (media (nota1, nota2, nota3));