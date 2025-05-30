package ProjetoBuscador.Modelos;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.IOException;

public class Endereco {
    String cep;
    String logradouro;
    String localidade;

    ViaCep vc = new ViaCep();

    public Endereco desserializarJson(String cep) throws IOException, InterruptedException {
        Gson gson = new GsonBuilder()
                .setPrettyPrinting()
                .create();
        String objetoResposta = vc.consumirApi(cep);

        return gson.fromJson(objetoResposta, Endereco.class);
    }

    @Override
    public String toString() {
        return "(" +
                "cep:'" + cep + '\'' +
                ", logradouro:'" + logradouro + '\'' +
                ", cidade:'" + localidade + '\'' +
                ')';
    }
}
