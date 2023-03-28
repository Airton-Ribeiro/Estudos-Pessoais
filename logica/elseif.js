

const numero = 10;


// Se (numero  >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não, faça isso {o Código}
if ( numero >=0 && numero <= 5 ){
    console.log('Sim, o numero está entre 0 e 5.');
}
else if (numero >= 6 && numero <= 8){
    console.log('O número está entre 6 e 8');
}
// else if (1 === 1){
//     console.log('Sempre vai acessar essa condição.') //Verdadeiro. caso tenha  um verdadeiro ele não acessa mais as outras condições.
// }
else if (numero >= 9 && numero <= 11){
    console.log('O número está entre 9 e 11');
}
else{
    console.log('Seu numero NÃO se enquadra nos intervalos.');
}
 