
function desestruturacao ([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
};
desestruturacao()
function soma({nome, sobrenome, idade}) {//Novo método de assumir valor
    // b = b || 0; Método antigo de assumir um valor
    console.log(nome, sobrenome, idade);
  }
  let obj = {nome:'Airton', sobrenome:'Ribeiro', idade:20}
  soma(obj);