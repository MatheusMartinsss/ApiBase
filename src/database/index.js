const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Product = require('../models/products.model')
const Users = require('../models/users.model')

const connection = new Sequelize(dbConfig)

Product.init(connection);
Users.init(connection);


module.exports = connection;