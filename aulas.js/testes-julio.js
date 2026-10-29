
/*
const prompt = require('prompt-sync')();
const num1 = Number(prompt("Informe o primeiro valor: ")) ,  num2 = Number(prompt("Informe o segundo valor inteiro: "));

const conta = (num1, num2) => num1 > 10? num1*num2 : (num1**2) + (num2**3);

console.log (conta(num1, num2));
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
const nota1 = Number(prompt("Informe a primeira nota (trabalho em laboratório): ")) ,  nota2 = Number(prompt("Informe a segunda nota (avaliação semestral): ")) , nota3 = Number(prompt("Informe a terceira nota (exame final): "));
if ((nota1 > 10 || nota1 < 0 || isNaN(nota1)) || (nota2 > 10 || nota2 < 0 || isNaN(nota2)) || (nota3 > 10 || nota3 < 0 || isNaN(nota3))){
 console.log ("notas acima do permitido")

}
else{
const media = (nota1, nota2, nota3) => (((nota1*2) + (nota2*3) + (nota*5)) /3) < 2.9? 'reprovado' : (((nota1*2) + (nota2*3) + (nota*5)) /3) < 4.9? 'recuperação' : 'aprovado'

console.log (media (nota1, nota2, nota3));
};


*/











/*
function








const pesoLab =2;
const pesoSemestral = 3; 
const pesoFinal = 5;

const somaPesos = pesoLab + pesoSemestral + pesoFinal;

const mediaPonderada = ((lab*pesoLab) + (semestral*pesoSemestral) + (exameFinal*pesoFinal)) / somaPesos;*/





/*
const notas = [10, 6, 7]

//cirar uma função para somar os valores de forma automática
const sum = (arg) => arg.reduce((acc, curr) => acc + curr, 0)
const media = sum(notas) / notas.lenght;
console.log (media);

/* ARRAY 
    um array pode ser definido como uma lista ordendada de valores enumerados
     em que cada valor é chamado de elementos ou item, 
     e cada elemento se localiza numa posição na lista, chamado de índice.
*/



/*
const notas = [10, 6.7, 9];

notas.push (valor na ultima posição);

notas.unshift (valor na primeira posição)

notas.splice (escolhe a posição da nova informação e o valor que será adicionado => notas.splice(4, 0, 8) => adiciona o valor 8 na posição 4)

notas[4] (escolhe a posição da nova informação)

notas.pop (remove o valor da ultima posição)

notas.shift (remove o valor da primeira posição)

notas.splice (também serve pra remover valores de uma posição especifica => notas.splice(1, 1) remove o valor da posição 1)
*/


/*
metodo é uma função que serve como uma propriedade do array ou de um objeto. Ele pode realizar tarefas pré-definidas usando os 
dados do array e dos parâmetros que passam para eles, como adicionar, removar ou até encontrar elementos.

- concat(); - concatenar => junta dois array, colocando o array que é passado como argumento, logo depois do primeiro

Exemplo:
const frutas = ["maçã", "banana"];
const outrasFrutas = ["uva"];
const todasAsFrutas = frutas.concat(outrasFrutas);
// Resultado: ["maçã", "banana", "uva"]


- filter(); - Retorna uma lista contendo os elementos que passaram em um teste. 
Não altera o array original, então salvamos o resultado em um novo array.

Exemplo:
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4]

- find(); - Retorna o primeiro elemento que passou em um teste.
Exemplo:
const numeros = [1, 2, 3, 4, 5];
const primeiroPar = numeros.find(numero => numero % 2 === 0);
console.log(primeiroPar); // 2

- forEach(); - Executa uma função para cada elemento do array. Não retorna um novo array.

Exemplo:
const frutas = ["maçã", "banana", "laranja"];
frutas.forEach(fruta => console.log(fruta));

- map(); - Retorna um novo array com os resultados da função aplicada a cada elemento do array original.

Exemplo:
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(numero => numero * numero);
console.log(quadrados); // [1, 4, 9, 16, 25]

- reduce(); - Reduz o array a um único valor aplicando uma função acumulada.

Exemplo:
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // 15

- 

- some(); - Retorna true se pelo menos um elemento do array passar no teste.

Exemplo:
const numeros = [1, 2, 3, 4, 5];
const temPar = numeros.some(numero => numero % 2 === 0);
console.log(temPar); // true
*/


/*

1° exercicio:
const notas = [10, 6.7, 9];

notas[3] = 10; // Adiciona 10 na quarta posição
console.log("Notas após adicionar 10:", notas);

notas.pop();
console.log("Notas após remover o último elemento:", notas);

const calcularMedia = (notas) => {
    if (notas.length === 0) return 0;
    return notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
};

console.log("Média:", calcularMedia(notas).toFixed(2));


*/


/*
2° exercicio:
    1-crie os arrays produtosA = [101, 202, 303, 404] e produtosB = [505, 606, 707, 808];
    2-una os dois arrays em um novo array usando concat();
    3-crie um novo array com apenas os produtos pares usando filter();
    4-use find() para obter o primeiro produto par;
    5-use findIndex() para obter o índice do produto 606;
*/
const produtosA = [101, 202, 303, 404];
const produtosB = [505, 606, 707, 808];

const todosOsProdutos = produtosA.concat(produtosB);
const produtosPares = todosOsProdutos.filter(produto => produto % 2 === 0);
const primeiroPar = todosOsProdutos.find(produto => produto % 2 === 0);
const encontraNumero = todosOsProdutos.findIndex(produto => produto === 606);
console.log("Produtos pares:", produtosPares);
console.log("Primeiro produto par:", primeiroPar);
console.log("Índice do produto 606:", encontraNumero);