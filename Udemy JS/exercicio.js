const numero = Number(prompt( 'Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>A raiz quadrada do seu numero é: <b>${numero ** (1/2)}</b></p>`;
texto.innerHTML += `<p><b>${numero}</b> é um inteiro:<b> ${Number.isInteger(numero)}</b></p>`;
texto.innerHTML += `<p>É NaN: <b>${Number.isNaN(numero)}</b></p>`;
texto.innerHTML += `<p>Seu numero arredondado para cima é: <b>${Math.ceil(numero)}</b></p>`;
texto.innerHTML += `<p>Seu numero arredondado para baixo é: <b>${Math.floor(numero)}</b></p>`;
texto.innerHTML += `<p>Seu numero com duas casas decimais é: ${numero.toFixed(2)}`