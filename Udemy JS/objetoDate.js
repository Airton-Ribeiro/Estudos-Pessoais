// const tresHoras = 60*60 *3 *1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia);  // 01-01-1970 timestamp unix ou época da unix
// const data = new Date(2019, 3, 20, 15, 14, 27, 500); //ano, mes, dia, hora, minuto, segundo, milisegundo
// const data = new Date(1673538188034);
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); //Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 -Domingo, 6- Sábado
// console.log(data.toString());
// console.log(Date.now());
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);