const express = require('express')

const ProductController = require('./controllers/products.controllers')
const UsersController = require('./controllers/users.controller')
const RolesController = require('./controllers/roles.controllers')
const PermissionsController = require('./controllers/permissions.controllers')
const OrdersController = require('./controllers/orders.controller')
const CupomsController = require ('./controllers/cupom.controller')
const Auth = require('./middlewares/auth')

const routes = express.Router();

// product router
routes.post('/products/create',  ProductController.store);
routes.get('/products', ProductController.index);
routes.delete('/products/delete/:id', ProductController.delete)

// cupom router
routes.post('/cupom/create',  CupomsController.store);
routes.get('/cupom/all',  CupomsController.index);

//user routers
routes.post('/user/register', UsersController.store);
routes.post('/user/login', UsersController.auth);

//roles routers
routes.post('/roles/create', RolesController.store)
routes.get('/roles/all', RolesController.index)
routes.post('/roles/:id', RolesController.update)

//permissions routers
routes.post('/permissions/create', PermissionsController.store)

//Orders router
routes.post('/orders/create', OrdersController.store)
routes.post('/orders/', OrdersController.index)
routes.post('/orders/update/:id', OrdersController.update)
routes.get('/orders/:id', OrdersController.getOrder);

module.exports = routes;