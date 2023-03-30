class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    // Método de instância
    diminuirVolume(){
        this.volume -=2;
    }
    // Método de estático
    static trocaPilha(){
        console.log('Ok, a pilha de todos os controles foram trocadas') // Método estático quando chamado muda TODAS AS INSTANCIAS nesse caso mudou a pilha de todos controles.
    }
}

const controle = new ControleRemoto('LG');

controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);
ControleRemoto.trocaPilha(); // Quando chamamos o metodo estático aqui, ele ativa o metodo para qualquer new ControleRemoto.   