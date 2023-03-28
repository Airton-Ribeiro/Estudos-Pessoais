function calcularImc(){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    let imc = 0;
    form.onsubmit = function (evento){
        evento.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        const calcular = {
            peso: peso.value,
            altura: altura.value,
            executar(){
                imc = Number((this.peso)/(this.altura * this.altura));
            }

        }
        calcular.executar();
        if (imc > 0 && imc <= 18.5 ){
            resultado.innerHTML = ''
            resultado.innerHTML += `<p> IMC = ${imc} e você se enquadra abaixo do peso.`
        }
        else if (imc > 18.5 && imc <= 24.9){
            resultado.innerHTML = ''
            resultado.innerHTML += `<p> IMC = ${imc} e você se enquadra no intervalo normal.`
        }
        else if (imc > 25 && imc <= 29.9){
            resultado.innerHTML = ''
            resultado.innerHTML += `<p> IMC = ${imc} e você se enquadra no sobrepeso.`
        }
        else if (imc > 30 && imc <= 34.9){
            resultado.innerHTML = ''
            resultado.innerHTML += `<p> IMC = ${imc} e você se enquadra no obesidade classe I.`
        }
        else if (imc > 35 && imc <= 39.9){
            resultado.innerHTML = ''
            resultado.innerHTML += `<p> IMC = ${imc} e você se enquadra no obesidade classe II.`
        }
        else if (imc > 40){
            resultado.innerHTML = ''
            resultado.innerHTML += `<p> IMC = ${imc} e você se enquadra no obesidade classe III.`
        }
        else{
            resultado.innerHTML = ''
            resultado.innerHTML += `<p>O valor fornecido é invalido!`
        }
    }


}
calcularImc();