/*
Primitivos (Imutáveis)- String, number, booblean, undefined, null (bigint, symbol) -Valor
Referência (mutável) - Array, object, function - Passados por referência
*/
//          0123
/*let nome = 'Luiz';
nome = 'Airton';
nome[0] = 'L'
console.log(nome[0]); //Prova que a String é imutável. ----> a variavel é só uma caixa que contém o valor.
*/
/*let a = 'A';
let b = a; //Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a,b);
*/
/*let a = [1, 2, 3];
let b = a; //Cria uma referencia na memoria onde está armazenado o valor de a.
let c = [...a]; //Cópia do valor salvo dentro da memoria de A literalmente, não mais aponta!
console.log(a, b);
a.push(4, 5, 6)
console.log(a, b);
b.pop();
console.log(a, b);

a.push('Luiz');

console.log(c);
*/
const b = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const a = {...b};
a.nome = 'João';
console.log(b);
console.log(a);




