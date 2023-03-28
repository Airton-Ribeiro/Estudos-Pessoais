// Declaração de função  (Function hoisting)   ----- eleva a função pro topo do código.
falaOi();
function falaOi() {
  console.log("Oi");
}
falaOi();
// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado");
};
function executaFuncao(funcao) {
  console.log("vou executar sua função abaixo:");
  funcao(); //recebe uma função e executa função dentro dela
}
executaFuncao(souUmDado);
//Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

const obj = {
    falar(){
        console.log('Estou falando...')
    }
}
obj.falar();