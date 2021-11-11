const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Products = require('../models/products.model');
const Roles = require('../models/roles.model');
const Users = require('../models/users.model')
const Permissions = require('../models/permissions.model')
const Orders = require('../models/orders.model')
const OrdersProducts = require('../models/orders_products.model')

const connection = new Sequelize(dbConfig)

Products.init(connection);
Users.init(connection);
Roles.init(connection);
Permissions.init(connection);
Orders.init(connection);
OrdersProducts.init(connection);

Roles.associate(connection.models);
Permissions.associate(connection.models);
Users.associate(connection.models);
Orders.associate(connection.models);
Products.associate(connection.models)


module.exports = connection;