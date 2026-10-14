//boolean
const  usuarioLogado = true;
const contaPaga = false;

// 0 = false 
// 1 = true

console.log(0 == false);  //true
console.log("" == false); //true
console.log(1 == true);   //true

// null - tipo de dado que representa o vazio
// indefined - var declarada sem valor

var teste;
let varNull = null;

console.log(teste);
console.log(varNull);

console.log(typeof teste);
console.log(typeof varNull); //aparece como objeto por ser um bug do js, deveria, na verdade, ser null.

console.log(typeof contaPaga);

