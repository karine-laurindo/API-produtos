const express = require('express')
const path = require('path')
const {randomUUID} = require('crypto');
const router = express.Router();

const basePath = path.join(__dirname, '../templates')
const produtos = []

router.use(express.json())

router.get('/', (req, res)=>{
    res.sendFile(`${basePath}/home.html`)
})

router.get('/cadastrarProdutos.html', (req,res)=>{
    res.sendFile(`${basePath}/cadastrarProdutos.html`)
})

router.post('/cadastrarProdutos', (req, res)=>{
    const {name, preco, descricao} = req.body
    const produto = {
        id: randomUUID(),
        name,
        preco,
        descricao
    }
    produtos.push(produto)
    return res.json(produto)
    //console.log(produtos)
    //res.sendFile(`${basePath}/cadastrarProdutos.html`)
})

router.get("/cadastrarProdutos", (req,res)=>{
    return res.json(produtos)
})

module.exports = router