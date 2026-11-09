/* Uma professora possui um array com as notas de um estudante. Durante a correção, ela precisa adicionar
uma nota registrada e calcular a média final das notas restantes. */

/*Desenvolva um programa em Java Script que:

1. Crie um array com as nortas[7,8.5,6,9]
2.Adicione a nota 10 do array
3.Remova a ultima nota do array
4. Calcule as media das notas restantes
5.Exiba as notas e a média com as duas casas decimais

*/

var notas = [7 , 8.5 , 6 , 9];

notas.push(10)
notas.pop()
console.log()


const sum = (arg) => arg.reduce((acc, curr) => acc + curr,0)    //const sonma = notas.reduce
const media = sum(notas) / notas.length;

console.log(`As notas do aluno são ${notas} e a media dele é ${media.toFixed(2)}`);

