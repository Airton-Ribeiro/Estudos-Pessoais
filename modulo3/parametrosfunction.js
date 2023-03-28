// function funcao() {
//   console.log(arguments[10]); // OBS ARGUMENTS SÓ FUNCIONA QUANDO UTILIZA O TERMO FUNCTION, ARROW FUNCTION E CONST FUNCTION NÃO FUNCIONA!
// }
// funcao("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Airton');

function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    //Arguments sustenta todos os argumentos (valores entre parenteses quando chamar a função) enviados
    total += argumento;
  }
  console.log(total);
}

funcao(1, 2, 3, 4, 5);

function mostrar(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
mostrar(1, 2, 3);

function soma(a, b = 2, c = 3) {//Novo método de assumir valor
  // b = b || 0; Método antigo de assumir um valor
  console.log(a + b + c);
}
soma(2, undefined, 18);

function desestruturacao([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

desestruturacao(['Airton', 'Ribeiro', 20]);

function desestruturacaoArray({ nome, sobrenome, idade }) {
  //Novo método de assumir valor
  // b = b || 0; Método antigo de assumir um valor
  console.log(nome, sobrenome, idade);
}

let obj = { nome: "Airton", sobrenome: "Ribeiro", idade: 20 };

desestruturacaoArray(obj);

function conta (operador, acumulador, ...numeros){// OBS: REST OPERATOR DEVE SEMPRE SER O ULTIMO!
    for (let numero of numeros){
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);



const argumentos  = (...args) => {// MESMA LOGICA DO ARGUMENTS

    console.log(args);
}

conta('+', 0, 20, 30, 40, 50);