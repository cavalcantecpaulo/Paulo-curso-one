# 💱 Conversor de Moedas em Java

Um projeto simples de **conversor de moedas** desenvolvido em **Java**, que permite ao usuário selecionar moedas de origem e destino, inserir um valor e visualizar o valor convertido com base nas **taxas de câmbio atualizadas via API**.

## 🔧 Funcionalidades

- ✅ Menu interativo no terminal para seleção de moedas.
- 🔁 Conversão de valores em tempo real entre diferentes moedas.
- 🌐 Integração com API externa para atualização das taxas.
- 💵 Suporte a múltiplas moedas:
  - Real (BRL)
  - Dólar Americano (USD)
  - Euro (EUR)
  - Libra Esterlina (GBP)

## 🗂️ Estrutura do Projeto

```
src/
├── Interacao/
│   └── MenuInterativo.java        # Interface de interação com o usuário
├── Main/
│   └── Principal.java             # Ponto de entrada do programa
└── Modelos/
    ├── Moedas.java                # Classe que representa a estrutura de uma conversão
    ├── MoedasManage.java          # Integração com a API e lógica de conversão
    └── ConsultarMoedas.java       # Requisição HTTP para a API, retorna o JSON bruto.
```

## 🚀 Como Executar o Projeto

### Pré-requisitos:
- Java **11 ou superior**
- Biblioteca **Gson** (para manipulação de JSON)

### Passos:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/cavalcantecpaulo/conversor-moedas.git
   cd conversor-moedas
   ```

2. **Compile o projeto**:
   ```bash
   javac -d bin src/**/*.java
   ```

3. **Execute o programa**:
   ```bash
   java -cp bin Main.Principal
   ```

## 📦 Dependências

- **Gson (Google)**  
  Biblioteca para serialização e desserialização de JSON.  
  [Repositório no GitHub](https://github.com/google/gson)

- **API de Câmbio**  
  Utilizada para obter as taxas de câmbio em tempo real.  
  Exemplo de API: [https://www.exchangerate-api.com](https://www.exchangerate-api.com)  
  > ⚠️ Configure a chave de API no código, se necessário.

## 💡 Exemplo de Uso

```
Escolha uma opção:
1. Real para Dólar
...
Digite o valor que deseja converter:
100
100.00 [BRL] = 19.23 [USD]
```

## ⚠️ Tratamento de Erros

- Entradas inválidas no menu são tratadas com mensagens amigáveis.
- Problemas na conexão com a API (ou erro de resposta) resultam em mensagens de erro ou exceções claras para o desenvolvedor.

## 👨‍💻 Autor

Desenvolvido por **Paulo Cavalcante**  
Estudante de Análise e Desenvolvimento de Sistemas
