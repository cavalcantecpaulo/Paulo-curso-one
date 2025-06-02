package Modelos;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ConsultarMoedas {
    public String verificandoMoedas(String moeda) throws IOException, InterruptedException {
        String urlExchange = "https://v6.exchangerate-api.com/v6/e0d361e236d89aec6a2168a1/latest/" + moeda;

        HttpClient cliente = HttpClient.newHttpClient();

        HttpRequest requisicao = HttpRequest.newBuilder()
                .uri(URI.create(urlExchange))
                .build();

        HttpResponse<String> resposta = cliente
                .send(requisicao, HttpResponse.BodyHandlers.ofString());
        return resposta.body();
    }
}


