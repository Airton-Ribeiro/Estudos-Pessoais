const pessoa = {
    nome: 'Airton',
    sobrenome: 'Ribeiro',
    idade: '26',
    endereço: {
        rua: 'Rua Vital de Negreiros',
        numero: 185
    }
}
const { nome: teste, sobrenome, idade, poder = 'Poder maior que 9000', ...resto} = pessoa; // funciona também no array! nova atribuição dentro da desestruturação

const {endereço: {rua, numero}, endereço} = pessoa
console.log(teste, sobrenome, resto, rua );