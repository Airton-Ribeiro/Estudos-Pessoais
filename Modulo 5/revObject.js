// new Array (); []
const pessoa1 = new Object();
pessoa1.nome = 'Maria';
pessoa1.sobrenome = 'Isabela';
pessoa1.idade = 20;
const pessoa = {
    nome: 'Airton',
    sobrenome: 'Ribeiro',
};
pessoa1.falarNome = function (){
    return (`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
const chave = 'nome';
// console.log(pessoa[chave]);
// console.log(pessoa.sobrenome);
// console.log(pessoa1.nome);
// console.log(pessoa1['sobrenome']);
// pessoa1.falarNome();
// console.log(pessoa1.getDataNascimento());
// for (let key in pessoa1){
//     console.log(pessoa1[key]);         //for In é para objetos!
// }



// Factory function / constructor functions

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){                              //Factory Function
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const p1 = criaPessoa('Airton', 'Ribeiro');
console.log(p1.nomeCompleto);
// p1.idade = 30;

// console.log(p1.idade);
// {} <- this -> this
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Object.freeze(this); // Agora nenhum objeto dessa função pode ser alterado OBS CUIDADO: PERIGOSO.
//                                                        Constructor functions 
}

const p2 = new Pessoa('Airton', 'Ribeiro');
// Object.freeze(p2);
p2.nome = 'Outra coisa'
p2.fala = function () {console.log('Oi');}; // se o freeze estiver ativo não vai deixar fazer nenhum metodo novo.
p2.fala();
const p3 = new Pessoa('Maria', 'Oliveira');
// p2= (ENDEREÇOMEMORIA) -> 'Valor'
// p1.ENDEREÇOMEMORIA = {nome:'Outra coisa'}
// p2= (NOVOENDEREÇOMEMORIA) -> NÃO PODE COM CONST
// ou seja para dar erro pelo const seria -> p1 = 'Outra coisa'
console.log(p2);
console.log(p3);