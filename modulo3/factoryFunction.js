//Factory function (Função fabrica)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    },
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join (' ');
        console.log(valor);
    },
    fala(assunto = 'Falando sobre NADA') {
      return `${this.nome} está ${assunto}`;
    },
    altura,
    peso,
    //Getter
    get imc() {
      //get faz o metodo fingir ser um atributo!
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Airton", "Ribeiro", 1.8, 80);
p1.nomeCompleto = 'Maria Isabela Oliveira';
console.log(p1.nomeCompleto);
console.log(p1.fala());
// const p2 = criaPessoa("Maria", "Isabela", 1.59, 65);
// console.log(p1.imc);
// console.log(p2.fala("Falando sobre JS."));
// console.log(p2.imc);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.nome);//This tem a mesma função que isso!
