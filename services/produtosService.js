var pg = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'dbProdutos',
    password: '1234',
    port: 5432,
  });

  client.connect();

  module.exports = {
    obterProdutos: function(){
        client.query('SELECT * FROM tbProdutos', (err, res) => {
            return new Promise(
                function(resolve, reject){
                    if(err){
                        reject();
                    }else{
                        resolve(res.rows);
                    }
                }
            )
        
            client.end();
        })
    },
    adicionarProduto: function(Produto){
        client.query("INSERT INTO tbProdutos ('Nome','Descricao', 'Valor', 'ImageUrl') VALUES ('"
            + Produto.Nome + "','"
            + Produto.Descricao + "','"
            + Produto.Valor + "','"
            + Produto.ImageUrl + "');"
        , (err, res) => {
            return new Promise(
                function(resolve, reject){
                    if(err){
                        reject();
                    }else{
                        resolve(res.rows.insertId);
                    }
                }
            )
        
            client.end();
        })

    },
    editarProduto: function(Produto){
        client.query("UPDATE tbProdutos SET ('Nome') = '" + Produto.Nome + "',"
            + "('Descricao') = '" + Produto.Descricao + "',"
            + "('Valor') = '" + Produto.Valor + "',"
            + "('ImageUrl') = '" + Produto.ImageUrl + "'"
            + "WHERE Id = '" + Produto.Id + "';"
        , (err, res) => {
            return new Promise(
                function(resolve, reject){
                    if(err){
                        reject();
                    }else{
                        resolve();
                    }
                }
            )
        
            client.end();
        })

    },
    excluirProduto: function(Produto){
        client.query("DELETE FROM tbProdutos "
            + "WHERE Id = '" + Produto.Id + "';"
        , (err, res) => {
            return new Promise(
                function(resolve, reject){
                    if(err){
                        reject();
                    }else{
                        resolve();
                    }
                }
            )
        
            client.end();
        })

    }
}