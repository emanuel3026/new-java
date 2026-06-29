/*let x;
console.log(x);
x = "oi";*/

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

//Criar uma função calcular que receba 3 


function calcular(op, valor1, valor2 ){

    if(op == "+"){

        resultado = valor1 + valor2;
        console.log(resultado)
        
    }
    if(op == "-"){

        resultado = valor1 - valor2;
        console.log(resultado)
        
    }
    if(op == "*"){

        resultado = valor1 * valor2;
        console.log(resultado)
        
    }
    if(op == "/"){

        resultado = valor1 / valor2;
        console.log(resultado)
        
    }


}

calcular(3,4,"+");

