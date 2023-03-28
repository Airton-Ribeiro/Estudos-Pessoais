// Some todos os numeros (reduce)
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor){
    acumulador += valor;
    // if (valor % 2 ===0) acumulador.push(valor) ARRAY SÓ COM NUMEROS PARES.
    // acumulador.push(valor*2);
    return acumulador;
}, 0); // OBS SE NÃO COLOCAR O PRIMEIRO VALOR ELE COMEÇA SOMANDO COM O VALOR 5.
console.log(total);


//Retorne a pessoa mais velha

const pessoas = [
    {nome : 'Luiz', idade:62},
    {nome : 'Maria', idade:23},
    {nome : 'Eduardo', idade:55},
    {nome : 'Letícia', idade:10},
    {nome : 'Rosana', idade:64},
    {nome : 'Wallace', idade:63},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(pessoaMaisVelha);