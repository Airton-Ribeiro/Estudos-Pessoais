package JAVA;
public class PessoaFisica extends PessoaAbstrata{
    private String cpf;
    public PessoaFisica (String nome, String telefone, String cpf){
        super(nome, telefone);
        this.cpf = cpf;
    }
    public String getCpf() { return cpf; }
    public void setCpf (String cpf) { this.cpf = cpf; }

    @Override
    public void socializar(){
        System.out.println("Nome: " + getNome());
        System.out.println("Telefone: " + getTelefone());
        System.out.println("CPF:" + cpf);
    }

}