class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
    set nomeCompleto(valor){
        // if(valor !== 'String') return;
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
        
    }
}
const p1 = new Pessoa('Airton', 'Ribeiro');
p1.nomeCompleto = 'Airton Senna Deodato'
console.log(p1.nome);
console.log(p1.sobrenome);
