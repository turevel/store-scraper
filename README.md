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

Para fazer uso da aplicação é recomendado ter instalado em sua máquina o `Docker` na versão **mais recente** ou o `NodeJS` na versão **18 ou superior**.

### Uso com NodeJS

Para usar a aplicação com o NodeJS, certifique-se se adicionar o arquivo `.env` com as variáveis preenchidas tendo como exemplo o arquivo `.env.example` em ambas as pastas (backend e frontend).

Na raiz do projeto execute o comando `npm run requirements` para instalar todas as dependências do projeto.

Em uma aba do terminal digite o comando `npm run backend:start` para iniciar o serviço de backend. Para iniciar o frontend, digite o comando (em uma nova aba) `npm run frontend:start`.

Quando ambos os serviços estivem em execução, abra seu navegador na porta `http://localhost:3000` para ver a aplicação rodando.

### Uso com o Docker

Para usar a aplicação com o Docker, adicione o arquivo `.env` na raiz do projeto com as variáveis preenchidas tendo como exemplo o arquivo `.env.example` na raiz do projeto (opcional).

Inicie a aplicação usando o `docker compose` com o comando: `docker compose up -d`.

Para verificar o status dos serviços você pode dar os comandos:

- backend: `docker logs backend -f`;
- frontend: `docker logs frontend -f`.

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
      <td><code>/smartphones?company=both</code></td>
      <td>Retorna os smartphones de ambos os sites.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/smartphones?company=meli</code></td>
      <td>Retorna os smartphones do Mercado Livre.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/smartphones?company=buscape</code></td>
      <td>Retorna os smartphones do Buscapé.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/refrigerators?company=both</code></td>
      <td>Retorna as geladeiras de ambos os sites.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/refrigerators?company=meli</code></td>
      <td>Retorna as geladeiras do Mercado Livre.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/refrigerators?company=buscape</code></td>
      <td>Retorna as geladeiras do Buscapé.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/tvs?company=both</code></td>
      <td>Retorna as tvs de ambos os sites.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/tvs?company=meli</code></td>
      <td>Retorna as tvs do Mercado Livre.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/tvs?company=buscape</code></td>
      <td>Retorna as tvs do Buscapé.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/search/?q={SEARCH_QUERY}&company=both</code></td>
      <td>Retorna a pesquisa de ambos os sites.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/search/?q={SEARCH_QUERY}&company=meli</td>
      <td>Retorna a pesquisa do Mercado Livre.</td>
    </tr>
    <tr>
      <td><b>GET</b></td>
      <td><code>/search/?q={SEARCH_QUERY}&company=buscape</code></td>
      <td>Retorna a pesquisa do Buscapé.</td>
    </tr>
  </tbody>
</table>
