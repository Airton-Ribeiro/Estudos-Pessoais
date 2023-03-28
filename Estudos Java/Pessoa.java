public class Pessoa implements Pessoa,
Comparable<Pessoa> {
private String nome;
private int idade;
private final int ordem;
private static int length = 0;
public Pessoa(String nome, int idade) (
setNome(nome);
setidade(idade);
ordem = ++length;
}
@Override
public String getNome( ) {
return nome;

@Override
public void setNome(String nome) (
this.nome = nome;
@Override
public int getidade( ){
return idade
@Override
public void setIdade(int idade) (
this.idade = idade;
@Override
public int getOrdem/ ) (
return ordem:

public static int getLength() (
return length;

@Override
public int compare To(Pessoa p) (
if (idade >= 60 && p.getidade() < 60) /
return-1;
) else if (idade < 60 88 p.getidade() >= 60) {
return 1;
return Integer.compare(ordem, p.getOrdem( )):
)
@Override
public String toString( ) (
return String. format(-Nome: %s - Idade: %d -
Ordem: %d, nome, idade, ordem);
}

}