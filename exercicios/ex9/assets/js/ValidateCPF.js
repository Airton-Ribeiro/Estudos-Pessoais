class Cpf {
  constructor(cpf) {
    this.cpf = cpf;
    this.cpfLimpo;
    this.cpfParcial = this.cpf.replace(/\D+/g, "");
  }
  valid() {
    if (typeof this.cpfParcial !== "string") return false;
    if (this.cpfParcial.length !== 11) return false;
    if (this.checkSequencia()) return false; 
    this.cpfLimpo = this.cpfParcial;
    this.cpfLimpo = this.cpfLimpo.slice(0, -2);
    const digito1 = this.gerarDigito(this.cpfLimpo);
    const digito2 = this.gerarDigito(this.cpfLimpo + digito1);
    this.novoCPF = this.cpfLimpo + digito1 + digito2;
    this.novoCPF = String(this.novoCPF);
    return this.novoCPF === this.cpfParcial;
  }
  gerarDigito(cpfLimpo) {
    const cpfArray = Array.from(cpfLimpo);
    let regressivo = cpfArray.length + 1;
    const digito = cpfArray.reduce((ac, valor) => {
      ac += Number(valor) * regressivo;
      regressivo--;
      return ac;
    }, 0);
    return 11 - (digito % 11) > 9 ? 0 : 11 - (digito % 11);
  }
  checkSequencia() {
    return this.cpfParcial.charAt(0).repeat(11) === this.cpfParcial;
  }
}
// const cpf = new Cpf("070.987.720-03");
// if (cpf.valid()) {
//   return console.log(`O CPF é válido!`);
// }
// return console.log(`O CPF é inválido!`);
