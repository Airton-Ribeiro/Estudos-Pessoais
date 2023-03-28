// Retorne a soma do dobro de todos os pares
//-> Filtrar os pares
// -> dobrar os valores
// -> Reduzir (somar tudo)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter((valor) => {if (valor % 2 === 0) return valor});
// console.log(numerosFiltrados);
// const dobrarValores = numerosFiltrados.map(valor => valor*2);
// console.log(dobrarValores);
// const reduceAll = dobrarValores.reduce((acumulador, valor) => {
//     acumulador += valor;
//     return acumulador;
// },0);
// console.log(reduceAll);

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
  .filter((va) => va % 2 === 0)
  .map((va) => va * 2)
  .reduce((ac, va) => {
    ac += va;
    return ac;
  });
console.log(numerosPares);
