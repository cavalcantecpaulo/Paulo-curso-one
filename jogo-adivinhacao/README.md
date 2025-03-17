# Mini-Jogo de Adivinhação - JavaScript 🎮

[**Jogo Adivinhação - Veja neste Link**](https://joguinho-adivinhacao-num.vercel.app/) 

Este é um projeto simples de jogo de adivinhação, onde o objetivo é acertar um número secreto gerado aleatoriamente entre 1 e 100. O jogador tem a chance de tentar várias vezes, e o jogo dá feedback sobre o valor inserido (se é maior ou menor do que o número secreto). Após acertar, o jogador pode reiniciar o jogo.

### 📚 Sobre o Curso
O desenvolvimento deste projeto foi inspirado pelos cursos de **JavaScript** da **formação ONE da Oracle**, oferecido pela plataforma **Alura**. Durante o curso, aprendi a criar interações dinâmicas em páginas web, utilizando conceitos importantes como manipulação de DOM, controle de eventos e muito mais.

## 🚀 Funcionalidades

- **Número Aleatório**: O jogo gera um número secreto entre 1 e 100, sem repetições.

- **Feedback Imediato**: Informa se o número chutado é maior ou menor que o número secreto.

- **Número de Tentativas**: Mostra quantas tentativas o jogador usou para acertar.

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

### 🎨 Explicação do CSS

O estilo da página foi projetado para ser simples, mas com um toque moderno. A principal característica do design é o **gradiente de fundo**, que transita de cores vibrantes para uma cor preta, criando uma sensação de imersão no jogo. Também usei uma **imagem de fundo com textura de código**, que é exibida com opacidade reduzida.

O layout é totalmente **responsivo**, adaptando-se bem a dispositivos móveis. O tamanho de elementos como botões e inputs é ajustado para garantir uma boa experiência, independentemente do dispositivo.

### 📜 Explicação do JavaScript

O código JavaScript contém a lógica principal do jogo:

- **Geração de Número Secreto**: O número secreto é gerado aleatoriamente e garantimos que não se repita utilizando um array para armazenar os números gerados.
- **Verificação do Chute**: Quando o jogador faz um chute, o código verifica se o número está correto e fornece feedback sobre se é maior ou menor.
- **Novo Jogo**: O jogo pode ser reiniciado a qualquer momento, gerando um novo número secreto e resetando as tentativas.

**Desenvolvido por Paulo Cavalcante**. O código foi adaptado e modificado com base no conteúdo do curso de **JavaScript** da **formação One da Oracle**, oferecido pela **Alura**.

## 📫 Contato

Se você deseja entrar em contato ou acompanhar mais do meu trabalho, pode me encontrar nos seguintes links:

- [LinkedIn: Paulo Cavalcante](https://www.linkedin.com/in/paulocavalcantec/)

- [GitHub: cavalcantecpaulo](https://github.com/cavalcantecpaulo)

Fique à vontade para entrar em contato para colaborações ou apenas para conversar sobre desenvolvimento!
