// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     //__proto__:Object.prototype
// };
// const objB = {
//     chaveB: 'B'
//     //__proto__:objA
// };

// const objC = new Object();
// objC.chaveC = 'C';
// Object.setPrototypeOf(objB, objA);// O __proto__ do objB se torna o objA
// Object.setPrototypeOf(objC, objB); 
// console.log(objC.chaveB);


function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco*(percentual/100))
};
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco*(percentual/100))
};
const p1 = new Produto('Camiseta', 50);
// p1.desconto(100);
const p2 = {
    nome: 'Caneca',
    preco: 15
};
// Não da para usar o p2.aumenta então para funcionar temos que:
Object.setPrototypeOf(p2, Produto.prototype); //Por colocar ele nesse esquema ele se torna um objeto como feito pelo construtor.
p2.aumento(10);
console.log(p1);
console.log(p2);

const p3 =  Object.create(Produto.prototype, {
    preco: {
        writable:true,
        configurable:true,
        enumerable:true,
        value:99,
    },
    molde:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:42,
    }
});
p3.nome = 'Sapato';
p3.aumento(10);
console.log(p3);
