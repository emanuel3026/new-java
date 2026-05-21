//operador ternario uma forma simplificada de criação de estruturas condicionais. if...else

const idadeMin = 18;
const idadeDoCliente = 19;

// estrutura de decisao condicional
if (idadeDoCliente >= idadeMin){

        console.log("O seu cliente tem a idade igual ou maior do que 18 anos");
        console.log("Você pode fazer a carteira de motorista")

}else{

        console.log("você não tem mais doque 18 anos");

}

if(idadeMin >= idadeDoCliente){

        console.log("Você pode fazer a carteira de habilitação");

}else{
        console.log("Você não tem 18 anos, você não pode fazer a cartira de habilitação")
}