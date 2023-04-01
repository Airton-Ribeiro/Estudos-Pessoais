function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min) + min);
}


function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject('Bad Value.') // new Error('ERRO!'), false. poderia ser varias coisas.
        setTimeout(() =>{
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com bd', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('buscando dados da base', rand(1, 3));
    }).then(resposta =>{
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(()=>{
        console.log('exibe dados na tela')
    })
        .catch(e =>{
            console.log('ERRO', e)
        });

// esperaAi('Frase 1', rand(1, 3), function(){
//     esperaAi('Frase 2', rand(1, 3), function(){   // antigo método. Function callback --- gambiarra.
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });

console.log('isso vai ser exibido antes de qualquer promises')