export default class gerarSenha{
    constructor(number){
        this.number = number;
    }
    gerarSenha() {
        const tipos = {
          'todos': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+',
          'sem-simbolos': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          'sem-numeros': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-+',
          'apenas-maiusculas': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          'apenas-minusculas': 'abcdefghijklmnopqrstuvwxyz',
          'apenas-simbolos': '!@#$%^&*()-+'
        };
        let senha = '';
        const caracteres = tipos[this.tipo];
        const caracteresUsados = new Set();
        while (senha.length < this.number) {
          const randomIndex = Math.floor(Math.random() * caracteres.length);
          const caractere = caracteres[randomIndex];
          if (!caracteresUsados.has(caractere)) {
            caracteresUsados.add(caractere);
            senha += caractere;
          }
        }
        return senha;
      }
    

    rand(min = 0, max = 9){
        return (Math.floor(Math.random() * (max - min) + min));
    }
    letrasMaiusculas(){
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = Math.floor(Math.random() * alphabet.length);
        return alphabet[index];
    }
    letrasMinusculas(){
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const index = Math.floor(Math.random() * alphabet.length);
        return alphabet[index];
    }
    simbolosAleatorios(){
        const simbols = '!@#$%^&*-_=+'
        const index = Math.floor(Math.random() * simbols.length);
        return simbols[index];
    }
}
