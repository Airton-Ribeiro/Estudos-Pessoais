function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Erro no código, só pode ser aceito palavras");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

//OBS: MDN TEM MUITOS METODOS COM PROMISES, EM QUALQUER CASO PROCURAR LÁ!

//Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),

    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then((valor)=>{
        console.log(valor);
    })                                   //NESSE CASO SÓ QUER QUE RESOLVA AS PROMISES E TRAGA OS VALORES DE VOLTA.
    .catch((error)=>{
        console.log(erro);
    })

const promises2 = [
  esperaAi("Promise 1", rand(1, 5)),
  esperaAi("Promise 2", rand(1, 5)),
  esperaAi("Promise 3", rand(1, 5)),
  esperaAi(1000, rand(1, 5)),
];

Promise.race(promises2)
  .then((valor) => {
    console.log(valor);
  }) //NESSE CASO SÓ QUER QUE O PRIMEIRO QUE FOI RESOLVIDO!
  .catch((error) => {
    console.log(error);
  });


function baixaPagina(){
    const emCache = true;
//AQUI ENTREGA LOGO O QUE É PRECISO
    if(emCache){
        return Promise.resolve('Página em cache'); //CASO FOSSE O REJECT COLOCARIA UM ERRO E ELE IRIA DIRETO PARA O CATCH
    }else{
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));