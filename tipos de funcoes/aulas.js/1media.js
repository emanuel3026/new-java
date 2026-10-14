const arrayVazia = [];

console.log(arrayVazia);

/*const nota1 = 10;
const nota2 = 6.5;
const nota3 = 7;
const nota4 = 8;

const media = (nota1+nota2+nota3+nota4)/4;*/

const notas = [10, 9];

/*const media = (notas[0]+notas[1]+notas[2]+notas[3]) / notas.length //length = tamanho*/
// Criar uma função para somar os valores de forma automatica
const sum = (arg) => arg.reduce((acc, curr) => acc + curr,0)

const media = sum(notas) / notas.length;
console.log(media)

/*ARRAY

Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento ou item,
e cada elemento se localiza numa posição na lista, chamado de índice

*/