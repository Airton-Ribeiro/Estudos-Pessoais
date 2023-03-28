//Tipos de dados primitivos String, undefined, null, boolean, symbol
const nome = 'Luiz';//String
const nome1 = "Luiz";//String
const nome2 = `Luiz`;//String
//String é um tipo de dado primitivo
const num1 = 10;//Number
const num2 = 10.52;//Number

let nomeAluno; // undefined (automaticamente recebe o valor indefinido!) -> não aponta pra lugar nenhum na memoria "null"
let sobrenomeAluno = null; // Nulo -> Não aponta pra local nenhum na memória
const boolean = true; //Boolean tem apenas true ou false
const aprovado = false; //Aluno pode ser aprovado ou reprovado apenas um dos dois. (valor lógico)


const a = [1, 2];
const b = a; //nesse caso b recebe o valor de a

console.log(a, b);

b.push(3);
console.log(a, b); 


let A = 2;
let B = A;
console.log(A, B); // 2, 2

A = 3;
console.log (A, B); // 3, 2
