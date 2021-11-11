const { Model, DataTypes } = require('sequelize')
const OrdersProducts = require('../models/orders_products.model')

class Orders extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            street: DataTypes.STRING,
            phonenumber: DataTypes.STRING,
            number: DataTypes.STRING,
            reference: DataTypes.TEXT,
            note: DataTypes.TEXT,
            value_subtotal: DataTypes.DECIMAL(10, 3),
            value_delivery: DataTypes.DECIMAL(10, 3),
            value_total: DataTypes.DECIMAL(10, 3),
            status: DataTypes.ENUM({
                values: ['pending', 'canceled', 'production', 'delivered', 'confirmed', 'outfordelivery'],
            })

        }, {
            sequelize,
        })
    }
    static associate(models){
        this.belongsToMany(models.Products, {as: 'products', foreignKey: 'order_id', through: OrdersProducts})
    }
  

}
module.exports = Orders;