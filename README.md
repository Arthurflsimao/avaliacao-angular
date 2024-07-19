# Avaliação Angular

![Angular](https://img.shields.io/badge/angular-16.2.14-red)


Este repositório contém uma avaliação prática de Angular.

## Descrição

Este projeto é uma aplicação Angular desenvolvida para avaliação de habilidades em desenvolvimento front-end. Inclui componentes básicos, serviços e integrações com uma API simulada usando JSON Server.

## Estrutura do Projeto

- **src/**: Contém o código-fonte da aplicação.
- **db.json**: Arquivo JSON utilizado para simular uma API com JSON Server.
- **angular.json**: Configurações específicas do Angular.
- **package.json**: Dependências e scripts do projeto.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Arthurflsimao/avaliacao-angular.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd avaliacao-angular
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando o Projeto

1. Inicie o JSON Server:
   ```bash
   npx json-server --watch db.json
   ```
2. Inicie a aplicação Angular:
   ```bash
   ng serve
   ```
3. Abra o navegador e acesse:
   ```
   http://localhost:4200
   ```

## Tecnologias Utilizadas

- Angular
- TypeScript
- HTML
- CSS
- JSON Server

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
