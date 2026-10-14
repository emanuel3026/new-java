const notas = [10, 6 ,8, 5.5, 10]

console.log(notas)

//Remover elementos = pop
notas.pop()

console.log(notas)

const sum = (arg) => arg.reduce((acc, curr) => acc + curr,0)
const media = sum(notas) / notas.length;
console.log(`A media é ${media.toFixed(2)}`)

/*Métodos ARRAY

Um método é uma função que serve como uma propriedade do array ou de um objeto. 
Ele pode realizar tarefas pré-definidas usando os dados do array e dos parametros
que passamos para eles, como adicionar remover ou até encontra elementos.

.concat()


*/