# Mini-Jogo de Adivinhação - JavaScript 🎮

[**Jogue Agora**](https://joguinho-adivinhacao-num.vercel.app/) 

Este é um projeto simples e divertido de adivinhação, onde o objetivo é acertar um número secreto gerado aleatoriamente entre 1 e 100. O jogador tem a chance de tentar várias vezes, e o jogo dá dicas sobre o valor inserido (se é maior ou menor do que o número secreto). Após acertar, o jogador pode reiniciar o jogo para jogar novamente.

## 📚 Sobre o Projeto

O desenvolvimento deste projeto foi inspirado nos cursos de JavaScript da **formação ONE da Oracle**, oferecido pela plataforma Alura. Nele, foram aplicados conceitos essenciais como:

- Manipulação do DOM;
- Controle de eventos;
- Uso de funções dinâmicas;
- Feedback sonoro com a API responsiveVoice.

## 🚀 Funcionalidades

- **Gerador de Número Aleatório**: O jogo gera um número secreto entre 1 e 100, sem repetições.
- **Dicas Inteligentes**: Informa se o número chutado é maior ou menor que o número secreto.
- **Limitação de Intervalo**: A cada erro, o intervalo de possíveis números é ajustado dinamicamente, tornando o jogo mais estratégico.
- **Número de Tentativas**: Mostra ao jogador a quantidade de vezes que ele tentou até acertar o número secreto.
- **Novo Jogo**: Após a vitória, o jogador pode clicar para reiniciar o jogo e tentar novamente.
- **Feedback de Voz**: Utiliza a API `responsiveVoice` para tornar a experiência mais interativa, lendo as mensagens em voz alta.

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura da página e criação dos elementos do jogo.
- **CSS3**: Estilo visual da interface, incluindo design responsivo e animações sutis.
- **JavaScript**: Lógica principal do jogo, geração de números aleatórios e controle das interações.
- **ResponsiveVoice API**: Feedback de voz para melhorar a experiência de jogo.

## 🖌️ Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **HTML (index.html)**: Define a estrutura da página, incluindo o campo para o número e os botões.
2. **CSS (style.css)**: Define o estilo e as cores da página, criando uma aparência moderna e responsiva.
3. **JavaScript (app.js)**: Contém a lógica do jogo, manipula o DOM e gera números aleatórios.
4. **Pasta img**: Contém as imagens utilizadas no jogo.

### 🎨 Explicação do CSS

O estilo da página foi projetado para ser simples, mas com um toque moderno. A principal característica do design é o **gradiente de fundo**, que transita de cores vibrantes para uma cor preta, criando uma sensação de imersão no jogo. Também usei uma **imagem de fundo com textura de código**, que é exibida com opacidade reduzida.

O layout é totalmente **responsivo**, adaptando-se bem a dispositivos móveis. O tamanho de elementos como botões e inputs é ajustado para garantir uma boa experiência, independentemente do dispositivo.

### 📜 Explicação do JavaScript

O código JavaScript contém a lógica principal do jogo:

- **Geração de Número Secreto**: O número secreto é gerado aleatoriamente e garantimos que não se repita utilizando um array para armazenar os números gerados.
- **Verificação do Chute**: Quando o jogador faz um chute, o código verifica se o número está dentro do intervalo e fornece feedback sobre se é maior ou menor.
- **Dicas Inteligentes**: O intervalo de números possíveis é reduzido dinamicamente para guiar melhor o jogador.
- **Atualização da Interface**: O código modifica os textos exibidos na tela, altera imagens e fornece feedback por voz ao longo do jogo.
- **Novo Jogo**: O jogo pode ser reiniciado a qualquer momento, gerando um novo número secreto e resetando as tentativas.

## ▶️ Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/cavalcantecpaulo/jogo-adivinhacao.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd jogo-adivinhacao
   ```
3. Abra o arquivo `index.html` no seu navegador.

**Desenvolvido por Paulo Cavalcante** como parte do meu aprendizado de desenvolvimento web. O código foi adaptado e modificado com base no conteúdo do curso de **JavaScript** da **formação One da Oracle**, oferecido pela **Alura**.

## 📫 Contato

Se você deseja entrar em contato ou acompanhar mais do meu trabalho, pode me encontrar nos seguintes links:

- [LinkedIn: Paulo Cavalcante](https://www.linkedin.com/in/paulocavalcantec/)
- [GitHub: cavalcantecpaulo](https://github.com/cavalcantecpaulo)

Fique à vontade para entrar em contato para colaborações ou conversar sobre desenvolvimento!
