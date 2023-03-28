/* Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.8 de altura e seu IMC é de 25.925925925925924
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 80;
const alturaEmM = 1.80; //
let indiceMassaCorporal;
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;
console.log(`${nome} ${sobrenome} tem  ${idade} anos, pesa  ${peso} KG,`);
console.log( `tem ${alturaEmM} de altura e seu IMC e de ${indiceMassaCorporal} seu ano de nascimento e:  ${anoNascimento}`);
