//Operadores 

// == comparação implicita, so o valor.

const numero = 5;
const texto = "5";

console.log(numero == texto);

console.log(numero === texto); //não faz o converção dos tipos compara os valores.

//sabendo o tipo do dados

console.log(typeof numero); // ---------- prova ----------- 
console.log(typeof texto); // ---------- prova ----------- 

/*operadores relacionais

 == ou ===      igual
 !=             diferente
 >              maior
 <              menor
 >=             maior ou igual
 <=             menor ou igual


*/

//converção exeplicita

//number()
console.log(Number(texto));
//string()
let conv = String(numero)
console.log(typeof conv);

/*operador logico 

    &&: operador "e" - retorna a true somente se todas as condições forem verdade;
    ||: opeerador "ou" - retorna a true se pelo menos uma condição for verdadeiro;
    != e !==: operadores "não igual" "estritamente não igual", utilizados da mesma forma que == e ===. Retornam true or false

*/

const a = 7 ;
const b = "7"

console.log(a != b) //tenta fazer a conveção 
console.log(a !== b) //separa o valor e tipo