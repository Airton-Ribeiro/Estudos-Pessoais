//IEEE 754-2008
let num = 0.7; // Number

let num2 = 0.1;// Number

console.log(num + num2);// Resultado = 0.799999999 ----> existe inconsistência.

num += num2; //num1= num1 + num2;
num += num2; //0.9
//num += num2; //1.0
//num += num2; //1.1
//num += num2; //1.2
//num += num2; //1.3

num = ((num * 100) + (num2 * 100)) / 100;

//num = parseFloat(num.toFixed(2));//Para trazer o numero sem ser a dizima 0.999999

//console.log(num.toFixed(2)); //"Correto aos nossos olhos"

//console.log(Number.isInteger(num));//Verdadeiro teste.

console.log(num);
//console.log(num.toString() + num2); //Método temporario pra transformar em string.

console.log(typeof num);

num = String(num);

console.log(num + num2); //Como o método Number, transforma realmente a variável em String.

console.log(typeof num);

let num1 = 10;

//console.log(num.toString(2));

//console.log(num1.toFixed(2));//Arredondamento para casas decimais.

//console.log(Number.isInteger(num1)); //Verifica por Boolean se o numero é inteiro.

//let temp = num1 * '5';

//console.log(Number.isNaN(temp)); //Checagem se é a equação é solucionavel ou "não é um numero"!



