
//OBS: SEMPRE CRIAR VARIAS FUNÇÕES PEQUENAS QUE SE JUNTAM PRA RESOLVER UMA GRANDE.

function saudacao(nome){
    //console.log(`Bom dia ${nome}!`);
    return `Bom dia ${nome}!`// retorna um valor para armazenar!
    //return 123456;// O que fica armazenado no dado da constante é esse valor!

}

const variavel = saudacao('Luiz'); // ----> salva o valor na constante.
console.log(variavel);

function soma (x, y){
    const resultado = x + y;
    return resultado;
}
//Caso queira colocar valores padrão ao x e y para caso não haja declaração podemos colocar = na função.
// OBS: Sempre que o leitor executar o return não é mais executado.

console.log(soma(2, 3));
console.log(soma(4,6));
console.log(2* soma(2,2)); //funciona em equações.

const resultado = soma (2, 2);// O OBJETO DENTRO DA FUNÇÃO ESTÁ PROTEJIDO, COMO SE FOSSE UM ENCAPSULAMENTO!

console.log(resultado);// prova que o resultado dentro da function não foi alterado.


 const raiz = function (x) {
    return x ** 0.5;
}
console.log(raiz(25));

const raizDois =  x =>  x ** 0.5; //arrow function
console.log(raizDois(25));



