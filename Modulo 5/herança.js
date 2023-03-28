// Produto -> aumento, desconto
// Camiseta = Cor, Caneca = material
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia){
    this.preco -= quantia;
};

function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};
const produto = new Produto('Gen', 111);
// Antes de ligar tinhamos Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype = Object.create(Produto.prototype); //Mesma ideia do Set prototype.
Camiseta.prototype.constructor = Camiseta;
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
// Object.setPrototypeOf(camiseta, Produto.prototype);

Camiseta.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco* (percentual/ 100));
};

function Caneca(nome,preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable:false,
        get: function(){
            return estoque;
        },
        set: function (){
            if(typeof valor != 'number') return;
            estoque = valor;
        }
    })

};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 13, 'Ceramica', 5);
produto.aumento(20);
console.log(produto);
camiseta.aumento(10);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);
