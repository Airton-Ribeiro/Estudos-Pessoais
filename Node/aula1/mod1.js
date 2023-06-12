class Pessoa {
    constructor(nome){
        this.nome = nome;
    };
};

const nome = 'Airton';
const sobrenome = 'Ribeiro';


module.exports = {
    nome, sobrenome, Pessoa   //para exportar tudo tem q usar o module.exports
};

exports.outraCoisa = 'Outra Coisa'; //isso não funciona mais pq trocou o obj e foi sobreescrito. para funcionar teria que ser feito um por um.