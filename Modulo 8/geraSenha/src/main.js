import gerarSenha from './modules/gerarSenha';

import './assets/css/style.css';

const senhaGerada = document.querySelector('.senha-gerada');
let input = document.createElement('input');
input.type = 'number';
let label = document.createElement('label');
label.innerHTML = 'Quantidade de caracteres ';
senhaGerada.appendChild(label);
senhaGerada.appendChild(input);
let number = new gerarSenha(input.value);

let button = document.createElement('button');
button.innerHTML = 'enviar';
senhaGerada.appendChild(button);

input.addEventListener('change', function() {
  number = new gerarSenha(input.value);
});

button.addEventListener('click', function() {
  const arrayDeNumeros = number.gerarSenha();
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = arrayDeNumeros;
});
  




