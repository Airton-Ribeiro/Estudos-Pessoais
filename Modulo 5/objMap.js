const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Airton'},
    {id: 1, nome: 'Isabela'}
];

// const novasPessoas = {}; // vira ordem crescente.
// for (const pessoa of pessoas){
//     const { id } = pessoa; //Essa linha utiliza a sintaxe de desestruturação do ES6 para extrair a propriedade id do objeto pessoa e atribuí-la a uma nova variável id.
//     novasPessoas[id] = {...pessoa}; //Linha aplicando a indexação  cria uma nova propriedade no objeto novasPessoas com a chave id e o valor sendo um objeto clonado com as mesmas propriedades do objeto pessoa (usando o operador spread ...).
// }; // Essa indexação permite que o novo objeto novasPessoas seja acessado diretamente pelo id de cada objeto de pessoa do array pessoas. Por exemplo, se o objeto de pessoa tiver um id igual a 3, a linha novasPessoas[id] irá criar uma nova propriedade no objeto novasPessoas com a chave 3.

const novasPessoas = new Map(); // mantem a ordem que foi inserio (3, 2, 1) e coloca em Number.
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}

// console.log(novasPessoas.get(2));

// for (const [identifier, {id, nome}] of novasPessoas){ // maneiras de fazer algumas coisas!
//     console.log(identifier, id, nome);
// }
novasPessoas.delete(2);
console.log(novasPessoas)