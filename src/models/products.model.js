const { Model, DataTypes } = require('sequelize')
const OrdersProducts = require('../models/orders_products.model')
class Products extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.FLOAT,
            description: DataTypes.STRING
        },{
            sequelize
        })
        
    }
    static associate(models){
        this.belongsToMany(models.Orders, {as: 'orders', foreignKey: 'product_id', through: OrdersProducts})
    }

}
module.exports = Products;