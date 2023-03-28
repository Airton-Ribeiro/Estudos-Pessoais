//  ? :
// (condição) ? 'Valor para verdadeiro'  : 'Valor para falso'
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal'

const corUsuario = null;
const corPadra  = corUsuario || 'Preta';

console.log(nivelUsuario, corPadra);
// if (pontuacaoUsuario >= 1000){
//     console.log('Usuario VIP');
// }else{
//     console.log('Usuario normal');
// }