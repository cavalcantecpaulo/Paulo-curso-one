package ProjetoBuscador.Modelos;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ViaCep {
    public String consumirApi(String cep) throws IOException, InterruptedException {
        String EnderecoApiCep;
        EnderecoApiCep = "https://viacep.com.br/ws/" + cep + "/json/";

        HttpClient cliente = HttpClient.newHttpClient();
        HttpRequest resposta = HttpRequest.newBuilder()
                .uri(URI.create(EnderecoApiCep))
                .build();
        HttpResponse<String> response = cliente
                .send(resposta, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}
