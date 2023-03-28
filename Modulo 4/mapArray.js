//Dobre os números
//              0   1  2   3  4 ......
// const numeros =[5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const dobreOsValores = numeros.map(valor =>  valor *2);
// console.log(dobreOsValores);



const pessoas = [
    {nome : 'Luiz', idade:62},
    {nome : 'Maria', idade:23},
    {nome : 'Eduardo', idade:55},
    {nome : 'Letícia', idade:19},
    {nome : 'Rosana', idade:32},
    {nome : 'Wallace', idade:47},
];
// const mostrarSoNome = pessoas.map(obj =>  obj.nome);
// const mostrarSemNome = pessoas.map((obj) => {delete obj.nome; return obj });
// const mostrarSemNome = pessoas.map((obj) => {return {idade: obj.idade}});
// const mostrarSemNome = pessoas.map(obj => ({idade: obj.idade})); // Maneira mais clean.

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// const criarID = pessoas.map((obj) => {
    
//     obj.id = getRandomInt(10); ----------------> nesse metodo mexe com o array original

    
//     return obj;
// })
const criarID = pessoas.map((obj) => {
    
    const newObj = {...obj}
    newObj.id = getRandomInt(10); // JÁ NESTE METODO CRIA UM NOVO ARRAY PARA MODIFICAR.
    
    return newObj;
})



// console.log(mostrarSoNome);
// console.log(mostrarSemNome);
// console.log(criarID);
console.log(pessoas); 
console.log(criarID)