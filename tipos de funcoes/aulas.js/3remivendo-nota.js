const notas = [10, 6 ,8, 5.5, 10];

console.log(notas);

//Remover elementos = pop
notas.pop();

console.log(notas);

const sum = (arg) => arg.reduce((acc, curr) => acc + curr,0);
const media = sum(notas) / notas.length;
console.log(`A media é ${media.toFixed(2)}`);

/*Métodos ARRAY

Um método é uma função que serve como uma propriedade do array ou de um objeto. 
Ele pode realizar tarefas pré-definidas usando os dados do array e dos parametros
que passamos para eles, como adicionar remover ou até encontra elementos.

.concat() - concatenar
    Junta 2 arrays , colocando o array passado como argumento, logo depois do primeiro.
*/

const a = [1,2,3];
const b = [4,5,6];
const c = a.concat(b);

console.log(c);
/* Filter()

    Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função feita pelo o usuario.
    Não altera o array que foi chamado, então precisamos salvar esse resultado em um novo array.

*/
const d = c.filter(item => item % 2 === 0); //somente pares

console.log(`Filter ${d}`);

/* .find()

    Funciona de forma parecida com o filter, porem retorna apenas o primeiro valor que satisfazer o teste,podendo ser uma string ou um numero. 

*/ 

/*.finfIndex

    Funciona igual o .find , mas retorna o índice em vec do elemento, possibilitando usá-lo em outras partes do codigo;

*/ 

const f = d.findIndex(item => item % 2 === 0);
console.log(`Find Index ${f}`);

/*.lastIndexOf

    é igual finfIndex() porem começa do ultimo elemnto, não do primeiro
*/

const g = d.lastIndexOf(item => item % 2 === 0);
console.log(`lasIndexOf ${g}`);

/*.forEach

    Executa uma função em cada elemento do array de forma individual. Não altera altera o array original e nem retorna um valor, deixando esse trabalho
    cargo da função escolhida 
    */

console.log(`ForEach`)

const h = d.forEach(item => {
    console.log(item * item);
})
console.log(h)

/* .pop - retira o ultimo elemento do array */

/*.shift()

    Retira o primeiro elemento do array.
    Altera o array original removendo o elemento e alterando o indice
    de todos os elementos para um a menos do que eram
*/

const y = [1,2,3];
const j = y.shift();
console.log(`SHIFT: removeu ${j} e ficou assim ${y}`)

/* .push() adiciona elemento ao final do array */

/* .Unshift()

    Funciona parecido com o push() , porem adiciona na primeira posição.
    trocara o indice de todos os elementos.

    Altera o array original.
*/

const x = [1,2,3];
const l = x.unshift(4);
console.log(`UNSHIFT: adicionou ${l} e ficou assim ${x}`)

/* .Reduce()

    Utiliza uma função definida pelo usuario em cada um dos elementos,
    guardando o resultado em uma variavel que pode ser acessada 
    dentro da função que foi definida 
    Retorna um unico valor no final

*/

const numeros = [10, 20, 30, 40];
const multiplica = numeros.reduce(
    (total, atual) => total * atual, 1
);

console.log(`multiplica: ${multiplica}`)