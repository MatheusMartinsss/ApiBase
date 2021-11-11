const { Model, DataTypes } = require('sequelize')

class Roles extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsToMany(models.Permissions, {foreignKey: 'role_id', through: 'roles_permissions', as: 'permissions'})
        this.belongsToMany(models.Users, {foreignKey: 'role_id', through: 'users_roles', as: 'users'})
    }
}
module.exports = Roles;