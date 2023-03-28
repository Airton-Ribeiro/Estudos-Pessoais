// Atribuição via desestruturação

//               0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);

// ... rest, ...spread
// const [um, dois, tres, ...resto] = numeros;
// const [um , , tres, , cinco, , sete] = numeros;
// console.log(um,  tres, cinco, sete);

const array = [ [1,2,3], [4,5,6], [7,8,9] ]; //tem MUITO USO!

//const [, [,,seis]] = array; // Isso prejudica mais do que ajuda.

const[lista1, lista2, lista3] = array; //mais facil.

console.log(lista2[2]);