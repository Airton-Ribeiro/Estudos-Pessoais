//Regra do array geralmente usa push e pop. e em raros casos unshift
//            0123456789... indexação dos strings
const nome = 'Airton Senna Deodato Ribeiro'
console.log(nome[10])
//               0       1        2      indexação dos arrays.
const alunos = ['Luiz', 'Maria', 'João'];//OBS: podemos colocar qualquer dado dentro do array, porém boas praticas utilizam apenas um tipo de dado.
//console.log(alunos);
//console.log(alunos[0]);//Metodo de acessar o indice do array. Indice parece ser bem mais importante em arrays.
alunos [0] = 'Eduardo';// altera o valor
console.log(alunos);
alunos[3] = 'Matheus';// adiciona o ultimo usando o tamanho da string
console.log(alunos);
console.log(alunos.length); //verificar tamanho do array

alunos[alunos.length] = 'Luan' //Método que não precisa saber o numero do array.
console.log(alunos.length);
alunos.push('Léticia'); // Método correto de fazer ---> sempre usar este método

alunos.push('Vinicius');
console.log(alunos);
//.push adciona no fim.
alunos.unshift('Marcos'); //Adiciona no primeiro indice. ou seja adiciona antes do primeiro do array mas não muda.
alunos.unshift('Caio'); // Sempre o ultimo se torna o primeiro.
console.log(alunos);
console.log(alunos.length);
alunos.pop();// Remove o ultimo elemento do array;
console.log(alunos);
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

const removeUm = alunos.shift();//Remove o primeiro elemento.
console.log(removeUm);
console.log(alunos);
console.log(alunos.length);
//delete alunos[1];
console.log(alunos);
console.log(alunos[1]);// Apaga apenas o nome mas mantem o indice.
//console.log(alunos[40]);// Sempre que não há dados ele apresenta o undefined
console.log(alunos.length);
alunos.push('Luiza', 'Carlos');
console.log(alunos.length);
console.log(alunos);
console.log(alunos.slice(2, 7));

console.log(alunos.length);

console.log(alunos.slice(2, -3));
console.log(alunos);
console.log(typeof alunos);
console.log(alunos instanceof Array);




