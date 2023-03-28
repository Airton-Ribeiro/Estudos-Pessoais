// Revisão Operadores 
/*  
    Aritimétricos 
    + -> Adição / Concatenação  (- / *)
    ** -> potenciação
    % -> retorna o resto da divisão
*/ 
const num1 = 5; //caso seja String ele concatena e traz o valor 510
const num2 = 2;
const num3 = 10;

console.log((num1 + num2) * num3);

/* ORDEM DE PRECEDENCIA!
()
**
* / %
+ -
*/

console.log(num1 * num2 / num3); //Segue a sequencia de forma sequencial --->

let contador = 1;
contador ++;//2
console.log(contador);
contador++;//3
console.log(contador);
++contador;//pode ser feito dessa maneira também!
console.log(contador);

console.log(contador++); //obs ele primeiro mostra depois incrementa!
console.log(contador);
console.log(++contador);//adiciona depois apresenta o valor!
console.log(--contador);//decremento
//Operador de incremento ++
//Operador de decremento --
//OBS SEMPRE USAR LET CONST NÃO PODE SER INCREMENTADA!
const passo = 2;
contador = contador + passo; //caso queira incrementar um valor maior que 1

console.log(contador); //foi adicionado 2
contador = contador + passo;

console.log(contador); //novamente foi adicionado mais 2 maneira pra incrementar diferente.


//Atalho para incrementação ---> atribuir valor

contador += passo;  // contador = contador + 2;

console.log(contador);

contador += 2;

console.log(contador);


contador *= 2;
console.log(contador); // contador = contador * 2;

//Operadores de atribuição += -= *= /= **=



let cont = 2;
cont **= 2;
console.log(cont);




const numUm = 10;
let numDois = parseFloat('5.2');
console.log(numUm + numDois); //Observar os dados usados para contas.  
//nesse caso ele resolveu
console.log(typeof numDois)

numDois = Number ('Airton');
console.log(numUm * numDois);
//nesse caso ele não resolveu
//NaN - Not a number
console.log(typeof numDois);


//parseInt (converte em inteiro) parseFloat (converte em ponto flutuante "decimais") obs number faz os dois.



