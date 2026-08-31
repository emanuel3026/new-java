const prompt = require('prompt-sync')();
const num1 = prompt("Informe o primeiro valor inteiro: ")
const num2 = prompt("Informe o segundo valor inteiro: ")

if(num1 > 10 & num2 > 10){

    console.log(`A multiplicação de ${num1} com ${num2} é: ${num1*num2} `)

}else if(num1 < 10){

    console.log(Math.pow(num1, 2) + Math.pow(num2, 3))

}
