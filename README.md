# Loja-API
Projeto de Loja Virtual com simples demonstração de CRUD. Está API possui aplicação Frontend que demonstra sua utilização e consumo.

Aplicação Frontend disponívem em:

[https://github.com/luizvicenteps/loja-front](https://github.com/luizvicenteps/loja-front)


### Dependências do Projeto 'loja-api'
  * NodeJS.
  * Mysql (Banco de Dados).


* Instale todas às dependências do Projeto;
  * Instale o Banco de Dados MySql e execute o script [tbprodutos.sql](https://github.com/luizvicenteps/loja-api/blob/master/tbprodutos.sql):
  * Instale às dependências NPM:
  ```bash
    $ npm install
  ``` 
  * Instale o Gulp globalmente:
  ```bash
    $ npm install -g gulp
  ```
  * Instale às dependências BOWER:
  ```bash
    $ bower install
  ``` 

Para modificar às configurações do banco de dados, altere o arquivo:

./services/produtosService.js


### Execução
  
  Dentro do diretório do projeto, execute:
  ```bash
    $ gulp dev
  ``` 
A aplicação estará disponível em:
  
[http://localhost:3000/](http://localhost:3000/)
  