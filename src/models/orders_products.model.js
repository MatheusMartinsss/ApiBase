const { Model, DataTypes } = require('sequelize')

class OrdersProducts extends Model {
    static init(sequelize) {
        super.init({
            quantity: DataTypes.STRING,
            price: DataTypes.STRING,
        }, {
            tableName: 'orders_products',
            sequelize,
        })
    }

}
module.exports = OrdersProducts;