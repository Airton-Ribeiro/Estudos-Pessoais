const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// Concatenar os arrays

// const a3= a1.concat(a2, [7, 8 ,9], 'Luiz');
// console.log(a3); COM O A3 ELE CONCATENA 34.
// console.log(typeof a3); String.
const a3 = [...a1, 'Airton', ...a2, ...[7, 8, 9]]; //A MESMA FUNÇÃO DO CONCAT. Para adicionar 7,8,9 usamos ... rest.

console.log(a3); // AGORA SIM ESTÁ CONCATENADO.

console.log(typeof a3);

// Também poderiamos usar o rest operatos ... rest ---> ... spread


// OU SEJA PARA CONCATENAR ARRAY NÃO USAR O SINAL " + "