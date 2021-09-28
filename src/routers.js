const express = require('express')
const ProductController = require('./controllers/products.controllers')
const UsersController = require('./controllers/users.controller')
const routes = express.Router();

routes.get('/', (req, res) =>{
    return res.json({helloword: 'Olá, mundo'})
})

// product router
routes.post('/product', ProductController.store);
routes.get('/products', ProductController.index);
routes.delete('/products/:id', ProductController.delete)

//user routers
routes.post('/user/create', UsersController.store);
routes.post('/users/login', UsersController.auth);

module.exports = routes;