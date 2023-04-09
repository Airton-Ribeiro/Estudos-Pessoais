export const nome = "Airton";
export const sobrenome = "Ribeiro";
export const idade = 30;

export function soma(x, y){
    return x + y;
}
// export default (a, b) => a * b;
const cpf = "aosdokpasdokp"; // o que não tiver export fica como variavel privada e não toca o escolpo global!

// export {nome as nome2, sobrenome, idade, soma};

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
//default é o principal!
// export { nome, sobrenome, idade };
