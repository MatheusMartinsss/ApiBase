const { Model, DataTypes } = require('sequelize')

class Cupom extends Model {
    static init(sequelize) {
        super.init({
            tickets: DataTypes.JSON,
            cpf: DataTypes.STRING,
            status: DataTypes.ENUM({
                values: ['pending', 'confirmed'],
            }),
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }
  
}
module.exports = Cupom;