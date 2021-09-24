const express = require('express')
const ProductController = require('./controllers/products.controllers')
const routes = express.Router();

routes.get('/', (req, res) =>{
    return res.json({helloword: 'Olá, mundo'})
})
routes.post('/product', ProductController.store);
routes.get('/products', ProductController.index);
routes.delete('/products/:id', ProductController.delete)

module.exports = routes;