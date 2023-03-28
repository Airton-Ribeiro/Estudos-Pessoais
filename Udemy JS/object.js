/*const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
console.log(array);
//array = 'Outra'; //isso não pode! a não ser que seja let.
*/
/*const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = '25';

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = '55';

const pessoa1 = {
    nome: 'Luiz', 
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/
/*function criaPessoa(nome, sobrenome, idade){//Parametro é o valor entre parenteses
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', '25');// Argumento entre parenteses é o valor passado ao parametro
console.log(pessoa1);
const pessoa2 = criaPessoa('João', 'Virgulino','33');
const pessoa3 = criaPessoa('Jean', 'Lucas', '29');
const pessoa4 = criaPessoa('Maria', 'Isabela', '20');
const pessoa5 = criaPessoa ('Leticia', 'Santos', '29');
*/
const pessoa = {
    nome:'Luiz',
    sobrenome:'Otávio',
    idade:'25',

    fala(){
        console.log(`A minha idade atual é: ${this.idade}`);
    },

    incrementaIdade(){
        ++this.idade;
    }
};
pessoa.fala();
pessoa.incrementaIdade();
console.log('Pórem proximo ano minha idade será: ' + pessoa.idade);