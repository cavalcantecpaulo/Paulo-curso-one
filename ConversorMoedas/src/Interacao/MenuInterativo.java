package Interacao;

import Modelos.Moedas;

import java.util.Scanner;

public class MenuInterativo {
    String moedaBase;
    String moedaConvertida;

    public Moedas menuInicial() {
        int opc = 0;
        Scanner sc = new Scanner(System.in);
        while(opc>13 || opc<1) {
            opcoesMenu();
            opc = sc.nextInt();
            sc.nextLine();

            switch (opc) {
                case 1:
                    System.out.println("1.   Real para Dólar");
                    moedaBase = "BRL";
                    moedaConvertida = "USD";
                    break;
                case 2:
                    System.out.println("2.   Real para Euro");
                    moedaBase = "BRL";
                    moedaConvertida = "EUR";
                    break;
                case 3:
                    System.out.println("3.   Real para Libra");
                    moedaBase = "BRL";
                    moedaConvertida = "GBP";
                    break;
                case 4:
                    System.out.println("4.   Dólar para Real");
                    moedaBase = "USD";
                    moedaConvertida = "BRL";
                    break;
                case 5:
                    System.out.println("5.   Dólar para Euro");
                    moedaBase = "USD";
                    moedaConvertida = "EUR";
                    break;
                case 6:
                    System.out.println("6.   Dólar para Libra");
                    moedaBase = "USD";
                    moedaConvertida = "GBP";
                    break;
                case 7:
                    System.out.println("7.   Euro para Real");
                    moedaBase = "EUR";
                    moedaConvertida = "BRL";
                    break;
                case 8:
                    System.out.println("8.   Euro para Dólar");
                    moedaBase = "EUR";
                    moedaConvertida = "USD";
                    break;
                case 9:
                    System.out.println("9.   Euro para Libra");
                    moedaBase = "EUR";
                    moedaConvertida = "GBP";
                    break;
                case 10:
                    System.out.println("10.   Libra para Real");
                    moedaBase = "GBP";
                    moedaConvertida = "BRL";
                    break;
                case 11:
                    System.out.println("11.   Libra para Dólar");
                    moedaBase = "GBP";
                    moedaConvertida = "USD";
                    break;
                case 12:
                    System.out.println("12.   Libra para Euro");
                    moedaBase = "GBP";
                    moedaConvertida = "EUR";
                    break;
                case 13:
                    System.out.println("ENCERRANDO PROGRAMA...");
                    System.exit(0);
                default:
                    System.out.println("Opção Inválida!!!");
                    break;
            }
        }
        System.out.println("Digite o valor que deseja converter: ");
        Double valor = sc.nextDouble();
        sc.nextLine();
        return new Moedas(moedaBase, moedaConvertida,valor);
    }
    public void opcoesMenu(){
        System.out.println("Escolha uma opção:");
        System.out.println("1.   Real para Dólar");
        System.out.println("2.   Real para Euro");
        System.out.println("3.   Real para Libra");
        System.out.println("4.   Dólar para Real");
        System.out.println("5.   Dólar para Euro");
        System.out.println("6.   Dólar para Libra");
        System.out.println("7.   Euro para Real");
        System.out.println("8.   Euro para Dólar");
        System.out.println("9.   Euro para Libra");
        System.out.println("10.   Libra para Real");
        System.out.println("11.   Libra para Dólar");
        System.out.println("12.   Libra para Euro");
        System.out.println("13.   Encerrar programa");
    }
}
