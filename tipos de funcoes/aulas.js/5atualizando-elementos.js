/*Nossa sala de aula teve algumas modificações 

Alunos:
João
Ana
Caio
Lara
Marjorie
Leo

Porem, Ana e Caio mudaram de escola e o Fulano entro na sala. Nosso desafio é 
Atualizar a chamada da escola

*/

const alunos = ["João","Ana","Caio","Lara","Marjorie","Leo"]
console.log(`Lista de alunos original: ${alunos}`);

//alunos.splice(1,2)
const fulano = alunos.unshift("Pablo");
//console.log(`Lista de alunos formatada: ${alunos}`);

