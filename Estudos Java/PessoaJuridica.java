package JAVA;
public class PessoaJuridica extends PessoaAbstrata{
    private String cnpj;
    public PessoaJuridica (String nome, String telefone, String cnpj){
        super(nome, telefone);
        this.cnpj = cnpj;
    }
    public String getCnpj () { return cnpj; }
    public void setCnpj (String cnpj) { this.cnpj = cnpj;}

    @Override
    public void socializar(){
        System.out.println("Nome: " + getNome());
        System.out.println("Telefone: " + getTelefone());
        System.out.println("CPF:" + cnpj);
    }


}
