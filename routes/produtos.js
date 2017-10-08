var express = require('express');
var router = express.Router();
var service = require('../services/produtosService')

router.get('/', function(req, res, next) {
    service.obterProdutos()
    .then(function(response){
        res.send(response).status(200)
    })
    .catch(function(){
        res.send().status(500)
    })
});

router.post('/', function(req,res, next) {
    service.adicionarProduto(req.body)
    .then(function(response){
        res.send({Id:response}).status(201)
    })
    .catch(function(){
        res.send().status(500)
    })
});

router.put('/:Id', function(req,res, next) {
    service.editarProduto(req.body)
    .then(function(response){
        res.send(response).status(200)
    })
    .catch(function(){
        res.send().status(500)
    })
});

router.delete('/:Id', function(req,res, next) {
    service.excluirProduto(req.params.Id)
    .then(function(){
        res.send().status(200)
    })
    .catch(function(){
        res.send().status(500)
    })
});

module.exports = router;
