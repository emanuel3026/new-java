let x;
console.log(x);
x = "oi";

//Declaração da função
function ImpremeTexto(texto){

    console.log(texto);

}

//Execução da função

ImpremeTexto(5);

function calcular(soma){

   // console.log(soma);
   ImpremeTexto(soma);
    
}

calcular(2+2);




var resultado = 0 ;

//Criar uma função calcular que receba 3 


function calcular( valor1, valor2, op ){

    if(op == "+"){

        resultado = valor1 + valor2;
        
    }
    if(op == "-"){

        resultado = valor1 - valor2;
           
    }
    if(op == "*"){

        resultado = valor1 * valor2;
        
    }
    if(op == "/"){

        resultado = valor1 / valor2;
        
    }

    ImpremeTexto(resultado);

}

calcular(3,4,'+');






function idade(dia, mes, ano){

    return 2026 - ano;

}
//ImpremeTexto(idade(27,10,2002));
resposta = idade(27,10,2002);

carteiraDeMotorista = resposta - 18;
console.log('Tem CNH há '+ carteiraDeMotorista + ' anos ');

/* outras funções

    Math.round(): arredondamento de um número de ponto flutuante para inteiro mais proximo

    --prova----------
    imprimeTexto(math.pow(3,2)) exponenciação de 4 de 3 elevado a 2





*/