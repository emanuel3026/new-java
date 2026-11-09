/*Uma loja possui duas listas de codigo de produtos. O responsavel precisa unir as listas,
 identificar os codigos pares e localizar um produto especifico. */

 /*Desenvolva um programa em Java Scropt que:
 1.Crie os arrays ProdutosA = [101, 202, 303, 404] e ProdutosB [505, 606, 707, 808];
 2.Una os 2 arrays em um novo array utilizando o concat().
 3.Crie um novo array contendo apenas os codigos pares utilizando filter().
 4.Encontre o 1 codigo par utilizando o find()
 5.Encontre a posição do codigo 606 no array utilizando findIndex()
 6.Exiba os resultados no console
 */


//1.Crie os arrays ProdutosA = [101, 202, 303, 404] e ProdutosB [505, 606, 707, 808];
 const produtosA = [101, 202, 303, 404];
 const produtosB = [505, 606, 707, 808];

//2.Una os 2 arrays em um novo array utilizando o concat().

const un = produtosA.concat(produtosB);
console.log(`1. ${un}`)

//3.Crie um novo array contendo apenas os codigos pares utilizando filter().

const pares = un.filter(item => item % 2 === 0);
console.log(`2. ${pares}`)

//4.Encontre o 1 codigo par utilizando o find()

const primeiro = un.find(item => item % 2 === 0);
console.log(`3. ${primeiro}`)

//5.Encontre a posição do codigo 606 no array utilizando findIndex()

const posicao = un.findIndex(item => item === 606)
console.log(`4. ${posicao}`);




console.log("-----------------------------------------------------------")
console.log("-----------------------------------------------------------")


/*Uma instituição deseja analisar as notas de uma turma para identificar os estudantes com notas suficientes para aprovação,
  localizar a ultima posição de uma nota que atenda uma determinado criterio e gerar um relatorio com o quadrado de cada nota.
  
    considere o array:
        const = [5, 8, 6, 9, 7, 8];


    Desenvolva um programa que: 

    1. Crie um novo array contendo somente as notas maiores ou iguais a 7 utilizando o filter();
    2. utilize o findLastIndex(); para encontra a ultima posição de uma nota maior ou igual a 8 no array original.
    3. Utilize forEach() para exibir o quadro de cada nota.
    4. Exiba o array originais, as notas selecionadas e a posição encontrada.
    5. Ao final exiba o resultadoretornado por forEach();
  */

const notas = [5, 8, 6, 9, 7, 8];
const maior = notas.filter(item => item >= 7)
console.log(`Notas Originais: ${notas}`)
console.log(`Notas maiores ou iguais a 7: ${maior}`);

const maior8 = notas.findLastIndex(item => item >= 8)
console.log(`Ultima nota que é maior ou igual a 8: ${maior8}`)

const quadriNotas = notas.forEach(notas =>{
     console.log(Math.pow(notas,2));
})
