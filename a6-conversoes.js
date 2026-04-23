// Conversões Tipos de dados
// Number - int ou float
// String - texto ou char
// Boolean = logico verdadeiro ou falso

//conversões Implicitas

const numero = 456;
const numString = "456";
console.log(numero == numString); // Converte o numero em string e compara os dois
// == e uma converção implicita.


//conversões Explicitas
//deve-se utilizar funções de conversão para cada tipo de dado.

console.log(numero + numString); //concatenação

console.log(numero + Number(numString));      
console.log(String(numero) + numString);      