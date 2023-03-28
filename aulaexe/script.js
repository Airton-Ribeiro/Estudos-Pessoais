// // IIFE
function meuEscopo (){
    const form = document.querySelector('.formulario');
    const mostrar = document.querySelector('.mostrar');
    let pessoas = [];

  function  recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');  
    const sobrenome = form.querySelector('.sobrenome');  
    const peso = form.querySelector('.peso');  
    const altura = form.querySelector('.altura');  
    const objectPessoa = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,

        apresentar() {
            pessoas = [this.nome, this.sobrenome, this.peso, this.altura];
        }
    }
    objectPessoa.apresentar();
    console.log(objectPessoa);
    mostrar.innerHTML += `<p><b>${pessoas[0]} ${pessoas[1]} ${pessoas[2]} ${pessoas[3]}</b></p>`;
    }
    form.addEventListener('submit', recebeEventoForm);

//     form.onsubmit = function (evento) {
//         evento.preventDefault();
//         alert(1);
//         console.log('foi enviado');
//     };
}
meuEscopo();