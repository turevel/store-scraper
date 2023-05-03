# Bem-vindo(a) ao Store Scraper App!

O **Store Scraper App** é uma aplicação que realiza raspagem de dados de sites de vendas e armazena as informações coletadas através da área de pesquisa em um banco de dados.

O objetivo do **Store Scraper App** é automatizar o processo de coleta de dados de sites de vendas, facilitando a pesquisa e análise de informações sobre produtos e preços.

## Tecnologias usadas

<div>
  <img src="https://img.shields.io/badge/-REACT-5ccfee?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/-STYLED COMPONENTS-cb6ba6?style=for-the-badge&logo=styledcomponents&logoColor=f2c85a" />
  <img src="https://img.shields.io/badge/-CSS-166fb1?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/-AXIOS-671ddf?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/-TYPESCRIPT-0074c2?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/-EXPRESS-2f2f2f?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/-MONGODB-4aa73c?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/-DOCKER-228ee1?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/-NODEJS-79b33e?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/-NODEMON-73ca48?style=for-the-badge&logo=nodemon&logoColor=white" />
</div>

## Instalação

Para fazer uso da aplicação é recomendado ter instalado em sua máquina o `Docker` na versão **23 ou superior** ou o `NodeJS` na versão **18 ou superior**.

**Você necessita estar conectado à internet!**

### Uso com NodeJS

Para usar a aplicação com o `NodeJS`, certifique-se de adicionar o arquivo `.env` com as variáveis preenchidas tendo como exemplo o arquivo `.env.example` em ambas as pastas (backend e frontend).

Na raiz do projeto execute o comando `npm run requirements` para instalar todas as dependências do projeto.

Em uma aba do terminal digite o comando `npm run backend:start` para iniciar o serviço de backend. Para iniciar o frontend, digite o comando (em uma nova aba) `npm run frontend:start`.

Quando ambos os serviços estivem em execução, abra seu navegador na porta `http://localhost:3000` para ver a aplicação rodando.

### Uso com o Docker

Para usar a aplicação com o `Docker`, certifique-se de adicionar o arquivo `.env` com as variáveis preenchidas tendo como exemplo o arquivo `.env.example` na pasta raiz do projeto.

Na pasta raiz do projeto, inicie a aplicação usando o `docker compose` com o comando: `docker compose up -d`.

Para verificar o status dos serviços você pode dar os comandos:

- **backend**: `docker logs store-scraper-api -f`;
- **frontend**: `docker logs store-scraper -f`.

Quando ambos os serviços estivem em execução, abra seu navegador na porta `http://localhost:3000` para ver a aplicação rodando.

## Rotas da API

Para acessar a API em sua máquina tenha como base a url: `http://localhost:{API_PORT}`.

<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Rota</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>GET</b></td>
      <td><code>/</code></td>
      <td>Retorna o índice de rotas da api.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/phones</code></td>
      <td>Retorna celulares de ambos os sites.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/phones?marketplace=meli</code></td>
      <td>Retorna celulares do Mercado Livre.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/phones?marketplace=buscape</code></td>
      <td>Retorna celulares do Buscapé.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/refrigerators</code></td>
      <td>Retorna geladeiras de ambos os sites.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/refrigerators?marketplace=meli</code></td>
      <td>Retorna geladeiras do Mercado Livre.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/refrigerators?marketplace=buscape</code></td>
      <td>Retorna geladeiras do Buscapé.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/tvs</code></td>
      <td>Retorna tvs de ambos os sites.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/tvs?marketplace=meli</code></td>
      <td>Retorna tvs do Mercado Livre.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/tvs?marketplace=buscape</code></td>
      <td>Retorna tvs do Buscapé.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/search?q={SEARCH_QUERY}</code></td>
      <td>Retorna a pesquisa de ambos os sites.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/search?q={SEARCH_QUERY}&marketplace=meli</td>
      <td>Retorna a pesquisa do Mercado Livre.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/search?q={SEARCH_QUERY}&marketplace=buscape</code></td>
      <td>Retorna a pesquisa do Buscapé.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/status</code></td>
      <td>Retorna o status de execução da api.</td>
    </tr>
  </tbody>
</table>
