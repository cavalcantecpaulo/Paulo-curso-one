package ProjetoBuscador.Principal;

import ProjetoBuscador.Modelos.Endereco;
import ProjetoBuscador.Modelos.GravarArquivo;
import ProjetoBuscador.Modelos.ViaCep;
import ProjetoBuscador.View.Interacao;
import com.google.gson.JsonSyntaxException;

import java.io.IOException;

public class PrincipalExecutavel {
    public static void main(String[] args) throws IOException, InterruptedException {
        ViaCep viaCep = new ViaCep();
        Interacao usuario = new Interacao();
        Endereco end = new Endereco();
        GravarArquivo write = new GravarArquivo();
try {
    String entradaUser = usuario.entradaEnderecoUser();
    String jsonPronto = viaCep.consumirApi(entradaUser);

    System.out.println(jsonPronto);
    System.out.println(end.desserializarJson(entradaUser));

    write.gravarJsonArquivo(entradaUser);
    } catch (JsonSyntaxException e){
    System.out.println("CEP INVÁLIDO!!!");
}
    }
}
