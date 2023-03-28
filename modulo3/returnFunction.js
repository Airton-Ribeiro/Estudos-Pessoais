//RETURN
//Retorna um valor
//Termina a função

// function soma (a, b){
//     return a + b;
// }
// // A função está retornando um valor

// let s1 = soma(2,5);
// console.log(s1); // ---> o valor retornado da função foi armazenado (recebido) na variavel s1.


// console.log(soma(5,1)); // OBS: NÃO CONFUNDIR CONSOLE.LOG COM RETURN! CONSOLE.LOG APENAS ESTÁ EXIBINDO, JÁ O RETURN ARMAZENA O RETORNO EM ALGO!


// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red'; // Não retorna nada, porém é muito útil porque executa algo!
// })


// function criaPessoa (nome, sobrenome){
//     return{
//         nome, sobrenome
//     }
// }

// const p1 = criaPessoa('Airton', 'Ribeiro');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Oliveira'
// };
// console.log(p1);
// console.log(p2);

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// // const olaMundo = falaFrase('Olá'); //olaMundo está recebendo falaresto

// // console.log(olaMundo('Mundo!'));
// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
// console.log(resto);


// function duplica (n) {
//     return n*2;
// }
// function triplica (n) {
//     return n*3;
// }                            //Repetição!
// function quadriplica (n) {
//     return n*4;
// }

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));

// function criaMultiplicador(multiplicador){
//     function valorNumerico(numero){
//         return numero*multiplicador;
//     }
//     return valorNumerico;
// }

// const multiplicador = criaMultiplicador(2);
// const numerico = multiplicador(2);
// console.log(numerico);


function criaMultiplicador(multiplicador){
    return function (numero){
        return numero*multiplicador;
    };
};
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));


