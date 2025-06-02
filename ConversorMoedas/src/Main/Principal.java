package Main;

import Interacao.MenuInterativo;
import Modelos.Moedas;
import Modelos.MoedasManage;

import java.io.IOException;

public class Principal {
    public static void main(String[] args) throws IOException, InterruptedException {
        MenuInterativo menu = new MenuInterativo();
        MoedasManage moedasManage = new MoedasManage();
        Moedas moeda = menu.menuInicial();

        moedasManage.dsJson(moeda.moedaBase, moeda.moedaConvertida);

        Double valorCambio = moedasManage.valorConversao.get(moeda.moedaConvertida);
        Double valorFinal = moeda.getValorDigitado() * valorCambio;

        System.out.printf( "%.2f [%s] = %.2f [%s]", moeda.getValorDigitado(), moeda.moedaBase, valorFinal, moeda.moedaConvertida );
    }
}
