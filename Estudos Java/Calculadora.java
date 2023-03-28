package JAVA;
public class Calculadora {
    public int somar (int x, int y){
        return x + y;
    }
    public int somar (int x, int y, int z) {
        return x + y + z;
    }
    public int somar(int[] numeros) {
        int resultado = 0;
        for (int numero : numeros){
            resultado += numero;
        }
        return resultado;
    }
public static void main(String[] args) {
    Calculadora c = new Calculadora();
    System.out.println("1 + 2 = " +  c.somar (1, 2));
    System.out.println("1 + 2 + 3 = " + c.somar(1, 2, 3));
    int [] numeros = new int[] {1, 2, 3, 4};
    System.out.println("1 + 2 + 3 + 4 =" + c.somar(numeros));
}
}
