package ProjetoBuscador.View;

import java.util.Scanner;

public class Interacao {
        public String entradaEnderecoUser(){
            String cepDigitado;
            Scanner sc = new Scanner(System.in);
            System.out.println("Digite um CEP: ");
            cepDigitado = sc.nextLine();
            return cepDigitado;
        }
    }
