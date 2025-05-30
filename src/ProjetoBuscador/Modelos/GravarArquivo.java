package ProjetoBuscador.Modelos;

import java.io.FileWriter;
import java.io.IOException;

public class GravarArquivo {
    public void gravarJsonArquivo(String cep) throws IOException, InterruptedException {
    ViaCep vc = new ViaCep();
    FileWriter arquivo = new FileWriter(cep + ".json");

    arquivo.write(vc.consumirApi(cep));
    arquivo.close();
    }
}
