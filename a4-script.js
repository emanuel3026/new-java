// const = um valor que após ser declarado, não pode mais ser alterado.

// var = declaração de variaveis o valor pode ser alterado a qualquer momento.
// var global = funciona em qualquer parte do codigo.

var idade = 15;
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);

var area; // o js vai ler o programa e vai declarar a variavel antes de executar o programa,
// por isso pode ser declacara depois de ser utilizada.
console.log(area);

// let = variavel local, funciona dentro do escopo definido, dentro de uma estrutura, por exemplo {}.

let idade = 15;