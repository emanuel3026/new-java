//executar no terminal: npm instal prompt-sync

//para interomper a execuçaõ do code runner: CONTROL + ALT + M
//para rodar node nome do arquivo.js -- node .\a17-entrada-do-usuario.js

const prompt = require('prompt-sync')();
const nome = prompt('Informe o seu nome: ');
console.log(`seja bem vindo ${nome}`);

/*//peça ao usuario para digitar trê valores e imprima a soma deles

const num1 = prompt("Informe o primeiro valor inteiro: ")
const num2 = prompt("Informe o segundo valor inteiro: ")
const num3 = prompt("Informe o terceiro valor inteiro: ")
*/
/*soma = parseInt(num1+num2+num3)
console.log(`O resultado da sola de ${num1} com ${num2} com ${num3} é ${soma}`);*/

//Arron Function
//const soma = (num1,num2,num3) => parseInt(num1)+parseInt(num2)+parseInt(num3);