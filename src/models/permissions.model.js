const { Model, DataTypes } = require('sequelize')

class Permissions extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING
        },{
            sequelize,
        })
    }
    static associate(models){
        this.belongsToMany(models.Roles, {
            as: 'role_permission', 
            foreignKey: 'permission_id', 
            through: 'roles_permissions'
        })
    }
}
module.exports = Permissions;