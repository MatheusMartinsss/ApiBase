const { Model, DataTypes } = require('sequelize')

class Produtos extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.FLOAT,
            description: DataTypes.STRING
        },{
            sequelize
        })
    }
}
module.exports = Produtos;