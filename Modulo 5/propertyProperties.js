// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    // se eu colocasse this.estoque vai entrar em loop infinito! muito cuidado
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // exibido como os selecionados com this (Mostra a chave)
        // value: estoque,    // armazena valor no objeto definido   (valor)
        // writable: true,  // como o Object.freeze ele bloqueia de alterações caso esteja setado false (alterações)
        configurable: true,  //Poder apagar a chave ou reconfigurar a chave. (editavel) no caso de criar outra
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Valor diferente de numero')
            }
            estoquePrivado = valor;
        }
    });
 
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true,   
    //     value: estoque,   // por ter deixado o configurable true em cima deu para refazer e o valor virou 5000.
    //     writable: true,   // caso em cima o configurable esteja false vai criar uma exception
    //     configurable: false  
    // });
    // Object.defineProperties(this,{
    //     nome:{
    //         enumerable: true,   
    //         value: nome,    
    //         writable: true, 
    //         configurable: true
    //     },
    //     preco:{
    //         enumerable: true,   
    //         value: preco,    
    //         writable: true, 
    //         configurable: true
    //     }
    // });
    
}
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('Coisa', '')
            nome = valor;
        }
    }
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 50000;
// delete p1.estoque; //configurable como false não permite apagar a chave
// console.log(p1);
//console.log(p1); // caso enumerable esteja false ele não vai apresentar a chave.
p1.estoque = 500;
// for (let key in p1){
//     console.log(key);
// }
// console.log(p1.estoque);
// console.log(p1.estoque); // caso o gett esteja setado da para ver o valor assim

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer Coisa';
console.log(p2.nome)