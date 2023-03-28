
//If pode ser usado sozinho!
// Sempre que utilizo o Else preciso de um If antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, usando apenas if e else.
const hora = 27;

if (hora>= 0 && hora < 12) {
    console.log('Bom dia');
}
else if ( hora >= 12 && hora < 18) {
    console.log('Boa tarde');
}
else if (hora >= 18 && hora <23) {
    console.log('Boa noite');
}
else {
    console.log('Tenha um ótimo dia!')
}

const tenhoGrana = false;
if (tenhoGrana){
    console.log('Vou sair de casa!')
}
else{
    console.log('Não tenho dinheiro então não vou sair de casa.')
}