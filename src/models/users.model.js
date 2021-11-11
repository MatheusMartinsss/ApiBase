const { Model, DataTypes } = require('sequelize')

class Users extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            cpf: DataTypes.STRING,
            phonenumber: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {

        this.belongsToMany(models.Roles, { foreignKey: 'user_id', through: 'users_roles', as: 'roles' })
    }
}
module.exports = Users;