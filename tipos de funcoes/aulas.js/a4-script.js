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

let forma = "retangulo";
let alt = 6;
let comp = 8;
let areaForma; //let não permite utilizar a variavel antes dela ser declarada.

if (forma === "retangulo"){

    areaForma = alt * comp;

    //else = senão
} else {

   areaForm = (alt * comp)/2;

}
console.log(areaForma);

// ----------------------- TESTE --------------------

// 2 igual: == 

if ("5" == 5){

    console.log("true");

}else{

    console.log("false");

}

//3 igual: ===

if ("5" === 5){

    console.log("true");

}else{


    console.log("false");

}
