// For In -> Lê os indices ou chaves do objeto.
const pessoa = {
    nome: 'Airton',
    sobrenome: 'Ribeiro',
    idade: 26,
    endereço: {
        rua: 'Rua vital de negreiros',
        numero: 185,
    }
}
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// const {nome: nome, sobrenome, idade} = pessoa
// const chave = 'nome';
// console.log(pessoa[chave]);
for (let key  in pessoa) {
    console.log(key, pessoa[key]);
}

// for (let i =0; i< frutas.length; i++) {
//     console.log(frutas[i]);
// }