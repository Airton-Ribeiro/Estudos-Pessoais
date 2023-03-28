function dataAgora (){
    const apresentar = document.querySelector('.menu');
    const zeroEsquerda = num =>  num >= 10 ? num : `0${num}`;
    let mostrar = 0;
    const data = new Date();
    const hora = zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());
    const dia = zeroEsquerda(data.getDate());
    let mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const relogio = {
        hora: this.hora,
        minuto: this.minuto,
        segundos: this.segundos,
        dia: this.dia,
        mes: this.mes,
        ano: this.ano,
        apresentarHora(){
            if (mes = 01){
                mes = 'Janeiro'
            } else if (mes = 02){
                mes = 'Fevereiro'
            }else if (mes = 02){
                mes = 'Março'
            }else if (mes = 02){
                mes = 'Abril'
            }else if (mes = 02){
                mes = 'Maio'
            }else if (mes = 02){
                mes = 'Junho'
            }else if (mes = 02){
                mes = 'Julho'
            }else if (mes = 02){
                mes = 'Agosto'
            }else if (mes = 02){
                mes = 'Setembro'
            }else if (mes = 02){
                mes = 'Outubro'
            }else if (mes = 02){
                mes = 'Novembro'
            }else if (mes = 02){
                mes = 'Dezembro'
            }else{
                mes = 'Mês inexistente.'
            }
            mostrar = `${dia} de ${mes} de ${ano} ${hora}:${minuto}:${segundos}`
        }
    }
    function getDayWeekText(diaSemana) {
        let diaSemanaTexto;
        switch (diaSemana) {
          case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
          case 1:
            diaSemanaTexto = "Segunda-feira";
            return diaSemanaTexto;
          case 2:
            diaSemanaTexto = "Terça-feira";
            return diaSemanaTexto;
          case 3:
            diaSemanaTexto = "Quarta-feira";
            return diaSemanaTexto;
          case 4:
            diaSemanaTexto = "Quinta-feira";
            return diaSemanaTexto;
          case 5:
            diaSemanaTexto = "Sexta-feira";
            return diaSemanaTexto;
          case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;
          default:
            diaSemanaTexto = " ";
            return diaSemanaTexto;
        }
      }
    const diaSemana = data.getDay();
    const diaSemanaTexto = getDayWeekText(diaSemana);
    relogio.apresentarHora();
    console.log(apresentar, diaSemanaTexto);
    apresentar.innerHTML = `${diaSemanaTexto}, ${mostrar}`
}
dataAgora();
// const apresentar = document.querySelector('.menu');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short',
// };
// apresentar.innerHTML = data.toLocaleString('pt-BR', opcoes);
// const apresentar = document.querySelector('.menu');
// const data = new Date();
// apresentar.innerHTML = data.toLocaleString('pt-BR', {dateStyle:'full', timeStyle:'medium'})
