var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdloja'
});

  module.exports = {
    //obterProdutos: function(){
    //     connection.query('SELECT * FROM tbprodutos', (err, rows) => {
    //         console.log(rows);
    //         return new Promise(
    //             function(resolve, reject){
    //                 if(err){
    //                     console.log(err);
    //                     reject();
    //                 }else{
    //                     resolve(rows);
    //                 }
    //             }
    //         )
        
    //         connection.end();
    //     })
    // 
    //},

    obterProdutos: function(){
        return new Promise(
            function(resolve, reject){
                connection.query('SELECT * FROM tbprodutos', (err, rows) => {
                    if(err){
                        console.log(err);
                        reject();
                    }else{
                        resolve(rows);
                    }  
                })
            })
},
    adicionarProduto: function(Produto){
        // connection.query("INSERT INTO tbprodutos ('Nome','Descricao', 'Valor', 'ImageUrl') VALUES ('"
        //     + Produto.Nome + "','"
        //     + Produto.Descricao + "','"
        //     + Produto.Valor + "','"
        //     + Produto.ImageUrl + "');"
        // , (err, res) => {
            return new Promise(
                function(resolve, reject){
                    connection.query("INSERT INTO tbprodutos ('Nome','Descricao', 'Valor', 'ImageUrl') VALUES ('"
                    + Produto.Nome + "','"
                    + Produto.Descricao + "','"
                    + Produto.Valor + "','"
                    + Produto.ImageUrl + "');"
                , (err, res) => {
                    if(err){
                        reject();
                    }else{
                        resolve(rows.insertId);
                    }
                }
            )
        
           
        })

    },
    editarProduto: function(Produto){
            return new Promise(
                function(resolve, reject){
                    connection.query("UPDATE tbprodutos SET Nome = '" + Produto.Nome + "', "
                    + "Descricao = '" + Produto.Descricao + "', "
                    + "Valor = '" + Produto.Valor + "', "
                    + "ImageUrl = '" + Produto.ImageUrl + "' "
                    + "WHERE Id = '" + Produto.Id + "';"
                , (err, res) => {
                    if(err){
                        reject();
                    }else{
                        resolve();
                    }
                }
            )
        
           
        })

    },
    excluirProduto: function(Id){
        
            return new Promise(
                function(resolve, reject){
                    connection.query("DELETE FROM tbprodutos "
                    + "WHERE Id = '" + Id + "';"
                , (err, res) => {
                    if(err){
                        reject();
                    }else{
                        resolve();
                    }
                }
            )
        
           
        })

    }
}