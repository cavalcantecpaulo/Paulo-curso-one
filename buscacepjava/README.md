# 📦 Projeto Buscador de CEP (ViaCEP)

Este é um projeto Java simples que permite buscar informações de um endereço a partir de um CEP utilizando a [API ViaCEP](https://viacep.com.br/). Desenvolvido como parte da formação **Oracle Next Education - Alura**, o programa consome a API, imprime os dados formatados e grava o JSON de resposta em um arquivo.

## 🚀 Funcionalidades

- Entrada de CEP via terminal
- Requisição HTTP para a API ViaCEP
- Desserialização da resposta JSON com Gson
- Exibição dos dados formatados no terminal
- Gravação da resposta JSON em um arquivo `.json`

## 🛠️ Tecnologias Utilizadas

- Java
- `java.net.http.HttpClient`
- [Gson](https://github.com/google/gson) – para converter JSON em objetos Java
- API pública [ViaCEP](https://viacep.com.br/)

## 📁 Estrutura do Projeto

```
ProjetoBuscador/
├── Modelos/
│   ├── ViaCep.java         # Realiza requisição HTTP
│   ├── Endereco.java       # Representa e desserializa o endereço
│   └── GravarArquivo.java  # Salva o JSON em arquivo
├── View/
│   └── Interacao.java      # Entrada de dados do usuário
└── Principal/
    └── PrincipalExecutavel.java  # Main
```

## 💡 Exemplo de Saída

```
Digite um CEP:
01001-000

{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  ...
}
(cep:'01001-000', logradouro:'Praça da Sé', cidade:'São Paulo')
```

---

## ⚠️ Validações

- Em caso de CEP inválido, a aplicação captura exceções de sintaxe JSON e informa o erro ao usuário.

## 👤 Autor

**Paulo Cavalcante**
