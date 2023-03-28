l/*
Operadores Lógicos
&& -> AND -> E (Todas expressões precisam ser verdadeiras para retornar true.)
|| -> OR -> OU (Se uma retorna verdadeiro, ela retornará verdadeiro.)
! -> NOT -> NÃO
*/
const expressaoOr = true || false || false || false;
const expressaoAnd = true && true && true && true;
console.log(expressaoAnd);
console.log(expressaoOr);

const usuario = 'Luiz'; //Form que o usuario digitou
const senha = '12345';  //Form que o usuario digitou
//                      True                False          Caso fosse usado || o usuario conseguiria logar com apenas um dado
const vaiLogar = usuario === 'Luiz' && senha ==='123456';
console.log(vaiLogar);

console.log(!false); //inverte o valor
