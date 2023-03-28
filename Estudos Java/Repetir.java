package JAVA;
public class Repetir {
    public static void main(String[] args) {
        int idade = 65;
        if (idade<10) {
            System.out.println("ainda é uma criança.");
        }
        else if (idade > 10 && idade <= 18) {
            System.out.println("é um adolescente");
        }
        else if (idade > 18 && idade < 60) {
            System.out.println("já é um adulto");
        }
        else {
            System.out.println("está na melhor idade");
        }
        }
    }
