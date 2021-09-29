const express = require('express')
const ProductController = require('./controllers/products.controllers')
const UsersController = require('./controllers/users.controller')
const Auth = require('./middlewares/auth')
const routes = express.Router();

// product router
routes.post('/products/create', Auth.verifytoken, ProductController.store);
routes.get('/products', ProductController.index);
routes.delete('/products/delete/:id', ProductController.delete)

//user routers
routes.post('/user/register', UsersController.store);
routes.post('/user/login', UsersController.auth);

module.exports = routes;