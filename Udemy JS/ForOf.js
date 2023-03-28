// const pessoas = {
//     nome: 'Airton',
//     sobrenome: 'Ribeiro',
// };

// for (let key of pessoas){
//     console.log(key, pessoas[key]);
// }

// For classico - Geralmente com iteráveis (Array ou Strings)
// For In - Retorna o índice ou chave (String, Array ou Objetos)
// For Of - Retorna o valor em si (iteráveis, Arrays ou Strings)


const nomes = ['Airton', 'Senna', 'Deodato', 'Ribeiro'];


// for (let i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);
// }

// console.log('###')

// for (let i in nomes){
//     console.log(nomes[i]);
// }

// console.log('###')

for (let valor of nomes){
    console.log(valor);
}

// console.log('####');

// nomes.forEach ( function(valor, indice) {
//     console.log(valor, indice);
// })