class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;      
    }
    ligar(){
        if (this.ligado){
            console.log(`${this.nome} já está ligado`)
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`)
        }
        this.ligado = false;
    }
}

class Smartphone extends Dispositivo{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends Dispositivo{
    constructor(nome, marca, temWifi){
        super(nome);
        this.marca = marca;
        this.temwifi = temWifi;
    }
    ligar(){
        console.log('Olha, você alterou o método ligar')  //OBS: ISSO LEMBRA POLIMORFISMO. -- MÉTODO SÓ DO TABLET.
    }
    mostraMarca(){ //OBS: MÉTODO SÓ DO TABLET.
        console.log(`Marca:${this.marca}`);
    }
}

const s1 = new Smartphone('Samsung', 'Azul', 'Galaxy S22');


const t1 = new Tablet('Ipad', 'Apple', true);
t1.ligar();
t1.mostraMarca();
console.log(t1.ligado);
console.log(t1);