function retornaFuncao(){
    const nome = 'Airton';
    return function (){
        return nome;
    };
}
const funcao = retornaFuncao();
console.log(funcao);