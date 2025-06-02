package Modelos;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import java.util.Map;

public class MoedasManage {
    public String base_code;
    @SerializedName("conversion_rates")
    public Map<String, Double> valorConversao;
    public String moedaConversao;
    ConsultarMoedas consultarMoedas = new ConsultarMoedas();

    public MoedasManage dsJson(String moeda, String moedaConversao) throws IOException, InterruptedException {
        Gson gson = new GsonBuilder()
                .setPrettyPrinting()
                .create();

        this.moedaConversao = moedaConversao;
        String jsonPuro = consultarMoedas.verificandoMoedas(moeda);
        MoedasManage desserializado = gson.fromJson(jsonPuro, MoedasManage.class);

        this.base_code = desserializado.base_code;
        this.valorConversao = desserializado.valorConversao;

        return this;
    }
}