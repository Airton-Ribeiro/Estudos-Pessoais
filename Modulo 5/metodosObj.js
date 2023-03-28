/*
Object.values //mostra apenas os valores
Object.entries // mostra valor e chave
Object.assign(des, any) // Clonar um objeto != diferente de apontamento
Object.getOwnPropertyDescriptor(o, 'prop) ... (spread) // apresenta o defineProp

// JÁ VIMOS

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)

*/


const produto = {nome:'Produto', preco: 1.8};
// const caneca = {...produto, material: 'Porcelana'}; //Apontamento do valor para memoria
const caneca = Object.assign({}, produto, {material: 'Porcelana'}) // Spred é mais intuitivo

// console.log(caneca);
// console.log(produto);
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // apresenta o defineProp

// for(let entry of Object.entries(produto)){
//     console.log(entry);
// }
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}