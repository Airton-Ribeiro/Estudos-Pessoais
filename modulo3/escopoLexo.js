const nome = 'Airton'

function falaNome () {
    console.log(nome);
}
function usaFalaNome(){
    const nome = 'Ribeiro';
    falaNome();
}
usaFalaNome();