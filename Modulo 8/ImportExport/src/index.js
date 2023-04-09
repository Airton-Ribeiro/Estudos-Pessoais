// import { nome , sobrenome as sobrenome2, idade, soma, Pessoa } from './modulo1';
// import * as MeuModulo from './modulo1';
import Pessoa, { nome, sobrenome as sobrenome2, idade } from "./modulo1"; //para a função com default
// console.log(MeuModulo);
// console.log(multiplica);

console.log(nome, sobrenome2, idade);
// console.log(soma(5,5))

const p1 = new Pessoa('Isabela', 'Oliveira'); //Também poderia ser importado com outro nome

// console.log(p1);
