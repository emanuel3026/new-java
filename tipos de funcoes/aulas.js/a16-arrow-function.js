/* arrow function - flecha (=>)

    1° forma - declaração 
    2° forma - expressão da função - anônima
    3° forma - arrow

arrow veio junto com a ES6 (ECMAScript 2015) - não pode ser nomeada 
*/

const apresentarArrow = nome => `Meu nome é ${nome}`;

//console.log(apresentarArrow('Júlio'));

const soma = calcular => `A soma é: ${calcular}`;
/*console.log(soma(2+3));*/


const soma2 = (num1, num2) => num1 + num2;
/*console.log(soma2(2, 3));*/

const vereficar = (num1, num2) => num1 >= 10 & num2 >= 10;

console.log (vereficar (1,100));

const verefica = num1 => {
    if (num1 >= 10) {
        return 'valor informado é maior do que 10.'

    }else {
        return 'valor informado é menor do que 10'
    }

}

console.log (verefica (10))

const multNum = (num1 , num2) => {
    if((num1 > 0 & num1 < 10) & (num2 > 0 & num2 < 10)) {
        return num1 * num2;

    }else{
        return "numeros entre 1 e 9"
    }
}
console.log (multNum (9, 2));

/*const login = (user, senha){

    if((user == "admin" || user == "118.305.379-70") & senha == "123"){



    }

}*/