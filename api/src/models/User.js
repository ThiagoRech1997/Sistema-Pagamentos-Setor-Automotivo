const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            access: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = User