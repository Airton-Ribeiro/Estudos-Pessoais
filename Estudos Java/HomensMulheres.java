package JAVA;
import java.util.Scanner;
public class HomensMulheres {
    public static void main(String[] args) {
        
    int sexo, qtHomens=0, qtMulheres=0;
    float altura, somaH=0, mediaHomens=0, maior=0, menor=10;
    
    Scanner entrada = new Scanner(System.in);
    for(int i = 0; i<10; i++) {
        System.out.println("Escolha o sexo da pessoa(1 -Mulher e 2 -Homem:");
        sexo = entrada.nextInt();
        System.out.println("Digite a altura:");
        altura = entrada.nextFloat();
        if (sexo == 1 ){
            qtMulheres++;
        }
        else if (sexo == 2){
            qtHomens++;
            somaH= somaH + altura;
        }
        else{
            System.out.println("Opção de sexo invalida");
        }
        if (altura > maior){
            maior = altura;
        }
        else if (altura < menor){
            menor = altura;
        }
    }
    mediaHomens=somaH/qtHomens;
    System.out.println("a maior altura do grupo é:" + maior + "e a menor altura é:" + menor);
    System.out.println("a media da altura dos homens é:" + mediaHomens);
    System.out.println("a quantidade de mulheres é:" +qtMulheres);
    entrada.close();
    }
}
