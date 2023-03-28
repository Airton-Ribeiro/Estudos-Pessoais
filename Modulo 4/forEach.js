const a1 = [10, 20, 30];
let total = 0
a1.forEach(valor => {
    total += valor;          //SIMULAÇÃO DE REDUCE.
});
console.log(total);
// for (let valor of a1){
//     console.log(valor);
// }