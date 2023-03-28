// Construtora -> molde (classe);

/* JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo
de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade
prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto,
primeiro o motor do JS vai tentar encontrar este membro no próprioo objeto e depois a cadeia de protótipos
é usada até o topo (null) até encontrar (ou não) tal mebro.
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.estouAqui = 'Hahahaha';  // Isso fica dentro do prototype e pode ser usada pelo objeto! sem sobrecarregar o objeto
Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
};
// instância
const pessoa1 = new Pessoa ('Luiz', 'O'); // <- Pessoa = Função construtora
// const pessoa2 = new Pessoa ('Airton', 'R'); // <- Pessoa = Função construtora
const data = new Date() //<- também função construtora
console.dir(pessoa1);
console.dir(data);