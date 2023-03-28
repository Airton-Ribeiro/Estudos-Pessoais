/*
&& -> false && true -> false "Assim que vê um valor false ele retorna o valor mesmo."
|| -> true || false -> vai retornar "O valor verdadeiro"
FALSY
*false -> LITERAL
0
'' "" ``
null / undefined 
NaN
*/
// console.log('Luiz' && 'Maria'); //todos verdadeiros retorna o ultimo valor
// console.log(undefined && 'Caio' && 32); // retorna o valor falso encontrado

// function retornaOi(){
//     return 'Oi';
// }

// let vaiExecutar = true;

// console.log(vaiExecutar && retornaOi());

// console.log(0 || false || null || 'Airton Ribeiro' || true);   // Precisa de apenas uma verdadeira e a primeira que ele encontrou foi 'Airton Ribeiro'

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c ='false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // se todos forem avaliados em falso retorna o valor da ultima falsa
