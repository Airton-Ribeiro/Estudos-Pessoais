// OBS, PODE SER USADO CLASS, CONSTRUCTOR FUNCTION OU FACTORY FUNCTION ESCOLHER 1
// NO MEU CASO PROVAVELMENTE ESCOLHEREI CLASS.
const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    },
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    },
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    },
};

const pessoaPrototype = {...falar, ...comer, ...beber};

// const pessoaPrototype = Object.assign({}, falar, comer, beber); //-> mesmo metodo que o de cima

function criaPessoa(nome, sobrenome){

    return Object.create(pessoaPrototype, {
        nome:{value: nome}, //pode colocar get, set, enumerable e etc
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Airton', 'Ribeiro');

p1.beber();