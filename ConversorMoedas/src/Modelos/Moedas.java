package Modelos;

public class Moedas {
    public String moedaBase;
    public String moedaConvertida;
    private Double valorDigitado;

    public Double getValorDigitado() {
        return valorDigitado;
    }
    public void setValorDigitado(Double valor) {
        this.valorDigitado = valor;
    }
    public Moedas(String moedaBase, String moedaConvertida, Double valorDigitado) {
        this.moedaBase = moedaBase;
        this.moedaConvertida = moedaConvertida;
        this.valorDigitado = valorDigitado;
    }
}
