# SwiftHub Dashboard 🥩🏆
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![Linguagens](https://img.shields.io/badge/linguagens-HTML%2C%20CSS%2C%20JS-blue)
![Frameworks](https://img.shields.io/badge/framework-Bootstrap%205-purple)

Este repositório contém o front-end do projeto **SwiftHub**, um dashboard gamificado desenvolvido como trabalho acadêmico. A plataforma foi projetada para engajar e motivar os colaboradores da Swift, permitindo que acompanhem seu desempenho, participem de desafios semanais e resgatem recompensas.

## ✨ Funcionalidades Principais
O projeto é construído como uma **Single Page Application (SPA)**, onde todo o conteúdo é carregado em um único `index.html` e a navegação entre as seções é gerenciada por JavaScript.

* **Dashboard Principal:** Visão geral com resumo de metas diárias, desafios ativos e conquistas recentes.
* **Página de Desafios:** Catálogo de desafios semanais com barras de progresso visuais.
* **Página de Recompensas:** Loja para troca de "Swift Coins" por produtos e benefícios.
* **Ranking:** Tabelas de classificação com pódio para o ranking da loja e nacional.
* **Histórico de Desempenho:** Visualização do progresso do colaborador ao longo do tempo, com um gráfico de pontuação.
* **Trilha de Carreira:** Um guia visual dos níveis de carreira dentro da empresa, mostrando requisitos e benefícios de cada etapa.
* **Feedback de Clientes:** Área para visualizar as avaliações e comentários recebidos pelos clientes.
* **Meu Perfil:** Página pessoal com estatísticas, informações do colaborador e configurações da conta.

---

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização, layout flexbox/grid e design responsivo.
* **JavaScript (Vanilla):** Manipulação do DOM para a navegação SPA.
* **Bootstrap 5:** Framework principal para o sistema de grid, componentes e responsividade.
* **Font Awesome:** Biblioteca de ícones.
* **Google Fonts:** Para a tipografia personalizada do projeto (`Inter` e `Kantumruy Pro`).
* **Chart.js:** Biblioteca para a criação do gráfico de histórico.

---

## 🚀 Como Executar o Projeto
Como este é um projeto front-end puro, não há necessidade de instalação de dependências.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Abra o `index.html`:**
    Basta abrir o arquivo `index.html` diretamente no seu navegador de preferência.

    > **Dica:** Para uma melhor experiência de desenvolvimento, recomendamos usar a extensão **Live Server** no Visual Studio Code, que atualiza a página automaticamente a cada alteração.

---

## 📁 Estrutura de Arquivos
O projeto está organizado da seguinte forma para facilitar a manutenção:

```
/
|-- index.html       # Arquivo principal com toda a estrutura e seções
|-- README.md        # Este arquivo
|-- css/             # Pasta com os arquivos de estilo
|   |-- style.css    # Estilos globais, variáveis e helpers
|   |-- sidebar.css  # Estilo da barra de navegação lateral
|   |-- dashboard.css
|   |-- desafios.css
|   |-- ... (um arquivo .css para cada página)
|-- js/              # Pasta com os scripts
|   |-- script.js    # Lógica de navegação entre as seções
|-- assets/          # Pasta para todas as imagens e ícones do projeto
```

---

## 👥 Autores
Este projeto foi desenvolvido pelo seguinte grupo:
* **Leticia** - _Desenvolvimento da página Dashboard_
* **Lucas** - _Desenvolvimento das páginas Desafios, Recompensas e Meu Perfil_
* **Nathalia** - _Desenvolvimento das páginas Ranking e Histórico_
* **Sarah** - _Desenvolvimento das páginas Carreira e Feedback_
