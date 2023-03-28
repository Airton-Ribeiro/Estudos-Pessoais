// IIFE -> Immediately invoked function expression
(function(idade, peso, altura){
    const sobrenome = 'Ribeiro';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
// a ideia é usar todo o código aqui dentro e proteger o escolpo global.
    function falaNome(){
        console.log(criaNome('Airton'))
    }
    falaNome();
    console.log(idade, peso, altura)
})(26, 90, 1.80);
//Código protegido! o escolpo global fica protegido visto que a função está protegendo o escolpo.
const nome = "qualquer coisa"