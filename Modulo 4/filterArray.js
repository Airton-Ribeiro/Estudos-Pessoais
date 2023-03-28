//Filtrar os valores de um array
//Filter, Map, Reduce -----> FUNÇOES CORE PARA ARRAY DENTRO DE JAVASCRIPT
// FILTER E MAP ---- SEMPRE RETORNA UM ARRAY COM A MESMA QUANTIDADE DE ELEMENTOS OU MENOS.
// Retorne os números maiores que 10
//              0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros =[5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// for (const valores of numeros ){
//     if(valores >10){
//         console.log(valores);
//     }
// }
// const callbackFilter = (valor, indice, array ) => { //Caso não vá usar indice e array não precisa declarar.
//     // if (valor > 10){
//     //     return true; //Não é bom returnar boolean
//     // } else{
//     //     return false; //Não é bom returnar boolean
//     // }
//     return valor > 10; //Exatamente a mesma coisa e mais "clean code"
// }
// const numerosFiltrados = numeros.filter(callbackFilter);
const numerosFiltrados = numeros.filter(valor => valor > 10);
    // console.log(valor, indice, array); retorna indice e o array total em cada linha de retorno.
console.log(numerosFiltrados);


const pessoas = [
    {nome : 'Luiz', idade:62},
    {nome : 'Maria', idade:23},
    {nome : 'Eduardo', idade:55},
    {nome : 'Letícia', idade:19},
    {nome : 'Rosana', idade:32},
    {nome : 'Wallace', idade:47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMaisVelhas = pessoas.filter(valor => valor.idade >50 );
const pessoasTerminadasEmA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasComNomeGrande);
console.log(pessoasMaisVelhas);
console.log(pessoasTerminadasEmA);