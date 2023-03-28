// Valor por referência
//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana','João', 'Wallace', 'Rosana'];

// Strings, Objetos, Funções, Números
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes [2] = 'João';
const novo = [...nomes]; //com isso nomes não é alterado quando novo é modificado.
// delete nomes[2];
const removido = nomes.pop(); //o mesmo para shift
// nomes.unshift('João');
// nomes.unshift('Wallace');
novo.pop();
const novos = nomes.slice(0, -2); //remove especificamente.
console.log(nomes, removido);
console.log(novos);
console.log(novo);
// Pop e Push os mais usados.

const nome = 'Airton Senna Deodato Ribeiro';
//Converter strings em ARRAY
const nomess = nome.split(' '); // o que está dentro das ' ' é o que separa para ajustar os arrays.
console.log(nomess);
const nomeCompleto = [ 'Airton', 'Senna', 'Deodato', 'Ribeiro' ]
const nomePessoal = nomeCompleto.join(' ');
console.log(nomePessoal);
