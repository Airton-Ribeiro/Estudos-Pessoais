//Função construtora -> objetos
//Funçao fabrica -> objetos
//Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    //Atributos ou metodos privados!
    const ID = 123456;

    const metodoInterno = function(){

    };
    //Atributos ou metodos publicos!
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': Sou um método.')
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Airton', 'Ribeiro');
p2.metodo();

