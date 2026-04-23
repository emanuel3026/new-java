//tipo number
//inteiros ou com pontos flutuantes (float = real)
const meuNumero = 3; //constante não altera
console.log (meuNumero); //apresentação

const primeiroNumero = 10;
const segundoNumero = 2;
const operacaoMatematica = primeiroNumero + segundoNumero;
console.log("Resultado: ", operacaoMatematica);


//ponto flutuante
const numeroFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroFlutuante;
console.log(novaOperacao.toFixed(2)); // .toFixed permite formatar o número de casa decimais da saida do sistema.

//NaN = Not a Number
const nome = "celv";
console.log(nome * primeiroNumero);