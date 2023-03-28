const relogio = document.querySelector(".relogio");
const zerar = document.querySelector(".zerar");
const pausar = document.querySelector(".pausar");
const iniciar = document.querySelector(".iniciar");

const cronometro = (segundos) => {
  let data = new Date(segundos * 1000);
  data.setHours(00);
  return data.toLocaleTimeString("pt-BR");
};
let segundos = 0;
const iniciaRelogio = () => {
  const timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = cronometro(segundos);
    relogio.style.color = "black";
  }, 1000);
  pausar.addEventListener("click", function (event) {
    clearInterval(timer);
    relogio.style.color = "red";
  });
  zerar.addEventListener("click", function (event) {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = cronometro(segundos);
    relogio.style.color = "black";
  });
};
iniciar.addEventListener("click", function (event) {
  iniciaRelogio();
});
